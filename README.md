# 👑 BioFidelidade SaaS (`biofidelidade.com.br`)

SaaS de **Conversão, Relacionamento e Link da Bio** para empresas.

- **GitHub Repository**: `https://github.com/Clifordx/biofidelidade`
- **Supabase Project**: `https://dyoqagwmkuhdxomgggcf.supabase.co`

---

## 📂 Arquivos do Sistema

| Arquivo | Descrição |
| :--- | :--- |
| [`index.html`](./index.html) | **Página Pública no Link da Bio** (`seudominio.com/[slug]`) com Status Aberto/Fechado, Oferta com Cadastro Completo, Destaques em Foto, GPS (Maps/Waze) e Avaliações Rotativas. |
| [`admin/empresa.html`](./admin/empresa.html) | **Painel do Lojista (EMPRESA_ADMIN)** com CRM de Leads, Endereços, Grupo VIP WhatsApp e Carimbador de Caixa. |
| [`admin/master.html`](./admin/master.html) | **Painel Master Admin (Clifordx)** com acesso a todas as empresas, métricas globais de MRR e atalho de impersonação. |
| [`css/style.css`](./css/style.css) | Design System responsivo dark/glassmorphism com cores personalizadas por marca. |
| [`js/app.js`](./js/app.js) | Engine multi-tenant pré-configurado e conectado com a chave Anon do Supabase. |
| [`supabase_schema_multitenant.sql`](./supabase_schema_multitenant.sql) | Script SQL para rodar no Supabase. |

---

## 🚀 Publicação Rápida no GitHub e Vercel

1. **Subir Arquivos para o GitHub**:
   - Acesse: `https://github.com/new` e crie o repositório `biofidelidade`.
   - Clique em **"uploading an existing file"** e arraste os arquivos desta pasta.

2. **Deploy na Vercel**:
   - Acesse: `https://vercel.com/new`
   - Importe o repositório `Clifordx/biofidelidade` e clique em **Deploy**.
