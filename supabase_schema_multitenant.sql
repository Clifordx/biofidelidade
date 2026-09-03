-- ==========================================================================
-- BioFidelidade SaaS - Schema SQL Multi-Tenant para Supabase (Atualizado)
-- Suporta: Nome Completo, Endereço, Bairro e Grupo VIP WhatsApp
-- ==========================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. TABELA DE EMPRESAS (TENANTS)
CREATE TABLE IF NOT EXISTS public.companies (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    logo_url TEXT,
    banner_url TEXT,
    primary_color TEXT DEFAULT '#10b981',
    whatsapp_number TEXT NOT NULL,
    vip_group_url TEXT, -- Link do Grupo VIP do WhatsApp
    instagram_handle TEXT,
    address TEXT,
    opening_hours JSONB DEFAULT '{"mon_fri": "09:00 - 19:00", "sat": "09:00 - 14:00", "sun": "fechado"}'::jsonb,
    is_open_override BOOLEAN DEFAULT NULL,
    is_active BOOLEAN DEFAULT true,
    subscription_status TEXT DEFAULT 'active' CHECK (subscription_status IN ('active', 'past_due', 'canceled')),
    subscription_expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_companies_slug ON public.companies(slug);

-- 2. TABELA DE USUÁRIOS E PERMISSÕES (RBAC)
CREATE TABLE IF NOT EXISTS public.company_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
    user_id UUID NOT NULL,
    email TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('MASTER_ADMIN', 'EMPRESA_ADMIN', 'EMPRESA_USER')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. TABELA DE CLIENTES FINAIS (CADASTRO COMPLETO DE LEAD / CRM)
CREATE TABLE IF NOT EXISTS public.customers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    address TEXT, -- Endereço completo (Rua e número)
    bairro TEXT, -- Bairro para inteligência de entrega e zonas
    joined_vip_group BOOLEAN DEFAULT false, -- Se clicou para entrar no Grupo VIP WhatsApp
    email TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    CONSTRAINT unique_customer_per_company UNIQUE (company_id, whatsapp)
);

CREATE INDEX IF NOT EXISTS idx_customers_company ON public.customers(company_id);
CREATE INDEX IF NOT EXISTS idx_customers_bairro ON public.customers(bairro);

-- 4. TABELA DE CARTÕES DE FIDELIDADE (SISTEMA DE SELOS)
CREATE TABLE IF NOT EXISTS public.loyalty_cards (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE NOT NULL,
    customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE NOT NULL,
    current_stamps INTEGER DEFAULT 0,
    max_stamps INTEGER DEFAULT 5,
    total_rewards_claimed INTEGER DEFAULT 0,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    CONSTRAINT unique_card_per_customer UNIQUE (company_id, customer_id)
);

-- 5. TABELA DE REGISTRO DE SELOS CONCEDIDOS
CREATE TABLE IF NOT EXISTS public.loyalty_stamps (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE NOT NULL,
    customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE NOT NULL,
    validation_method TEXT DEFAULT 'PIN' CHECK (validation_method IN ('PIN', 'QR', 'MANUAL', 'WHATSAPP')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. TABELA DE CAMPANHAS DE CUPOM
CREATE TABLE IF NOT EXISTS public.campaigns (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    code TEXT NOT NULL,
    discount_text TEXT NOT NULL,
    valid_until TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. TABELA DE RESGATES DE CUPOM
CREATE TABLE IF NOT EXISTS public.coupon_redemptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE NOT NULL,
    campaign_id UUID REFERENCES public.campaigns(id) ON DELETE CASCADE NOT NULL,
    customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE NOT NULL,
    status TEXT DEFAULT 'claimed' CHECK (status IN ('claimed', 'used', 'expired')),
    claimed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    used_at TIMESTAMP WITH TIME ZONE
);

-- 8. TABELA DE ANALYTICS DE ACESSOS E CONVERSÕES
CREATE TABLE IF NOT EXISTS public.analytics_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE NOT NULL,
    event_type TEXT NOT NULL CHECK (event_type IN ('page_view', 'whatsapp_click', 'lead_capture', 'coupon_claim', 'stamp_added', 'joined_vip_group')),
    source TEXT DEFAULT 'instagram' CHECK (source IN ('instagram', 'qrcode', 'facebook', 'direct')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ROW LEVEL SECURITY (RLS)
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loyalty_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loyalty_stamps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupon_redemptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir leitura publica de empresas ativas" ON public.companies FOR SELECT USING (is_active = true);
CREATE POLICY "Permitir cadastro publico de clientes" ON public.customers FOR INSERT WITH CHECK (true);
CREATE POLICY "Permitir registro publico de analytics" ON public.analytics_events FOR INSERT WITH CHECK (true);
