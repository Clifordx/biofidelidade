/* ==========================================================================
   BioFidelidade SaaS - Core Application Engine & Multi-Tenant Router
   Target: seudominio.com/[slug]
   Supabase Project Ref: dyoqagwmkuhdxomgggcf (CONECTADO)
   ========================================================================== */

const SUPABASE_PROJECT_URL = 'https://dyoqagwmkuhdxomgggcf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5b3FhZ3dta3VoZHhvbWdnZ2NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0NjgwNzMsImV4cCI6MjEwMjA0NDA3M30._8ndQ0mBa9FroX8y_5i3QlYwG_KVPrS6P-8EkJHMS1w';

localStorage.setItem('bf_supabase_url', SUPABASE_PROJECT_URL);
localStorage.setItem('bf_supabase_key', SUPABASE_ANON_KEY);

let supabaseClient = null;
if (window.supabase) {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);
  } catch (e) {
    console.warn('Erro ao inicializar Supabase:', e);
  }
}

// Banco de Depoimentos Reais por Nicho
const reviewsByNiche = {
  'Saúde, Farmácia & Bem-Estar': [
    '"Entrega rápida de medicamentos e atendimento excelente no WhatsApp! - Ana Souza ⭐⭐⭐⭐⭐"',
    '"Farmacêuticos muito atenciosos, me ajudaram com a receita certinho. - Carlos Eduardo ⭐⭐⭐⭐⭐"',
    '"Produtos de alta qualidade e o cupom de desconto funcionou de primeira. - Juliana Lima ⭐⭐⭐⭐⭐"',
    '"Preço justo e entregaram na minha casa em menos de 30 minutos! - Lucas Mendes ⭐⭐⭐⭐⭐"',
    '"Ótimo atendimento, virei cliente fiel da farmácia. - Beatriz Rocha ⭐⭐⭐⭐⭐"',
    '"Atendimento nota 10 pelo WhatsApp, facilitou muito meu pedido. - Fernando Moreira ⭐⭐⭐⭐⭐"'
  ],
  'Alimentação, Gastronomia & Delivery': [
    '"Comida deliciosa! Chegou super quente em 25 minutos. - Marcos Vinícius ⭐⭐⭐⭐⭐"',
    '"Ingredientes frescos e porção bem generosa. Recomendo muito! - Camila Santos ⭐⭐⭐⭐⭐"',
    '"Melhor atendimento do bairro, o pedido veio exatamente como pedi. - Rodrigo Alves ⭐⭐⭐⭐⭐"',
    '"Entrega rápida e embalagem muito bem vedada. Nota 10! - Fernanda Oláiveira ⭐⭐⭐⭐⭐"',
    '"Pizzas maravilhosas! Atendimento muito atencioso no WhatsApp. - Gabriel Pires ⭐⭐⭐⭐⭐"',
    '"Sabor incrível e os cupons de desconto valem muito a pena. - Larissa Duarte ⭐⭐⭐⭐⭐"'
  ],
  'Moda, Vestuário & Acessórios': [
    '"Peças lindas, tecido de excelente qualidade e caimento perfeito! - Mariana K. ⭐⭐⭐⭐⭐"',
    '"Comprei pelo link da bio e chegou no dia seguinte bem embalado. - Beatriz L. ⭐⭐⭐⭐⭐"',
    '"Atendimento impecável no WhatsApp e tiraram todas as minhas dúvidas. - Patricia M. ⭐⭐⭐⭐⭐"',
    '"Roupas maravilhosas! Com certeza vou comprar mais vezes. - Vanessa R. ⭐⭐⭐⭐⭐"',
    '"Excelente loja! Os produtos chegaram perfeitos e super cheirosos. - Gabriela Castro ⭐⭐⭐⭐⭐"',
    '"Amei o vestido e a entrega foi super rápida. Recomendo demais! - Renata Silveira ⭐⭐⭐⭐⭐"'
  ],
  'Estética, Beleza & Barbearia': [
    '"Corte e barba impecáveis! O ambiente e o atendimento são nota 10. - Gabriel Costa ⭐⭐⭐⭐⭐"',
    '"Profissionais muito capacitados e pontuais com o horário marcado. - Thiago Ramos ⭐⭐⭐⭐⭐"',
    '"Melhor experiência que j tive! Recomendo a todos os amigos. - Felipe Nogueira ⭐⭐⭐⭐⭐"',
    '"Serviço nota 1000! Agendamento rápido e prático pelo link da bio. - Rafael Ribeiro ⭐⭐⭐⭐⭐"',
    '"Atendimento excelente, ambiente muito agradável e café ótimo. - Marcelo Dias ⭐⭐⭐⭐⭐"',
    '"Faço minha barba aqui há 2 anos, os melhores da cidade sem dúvidas! - Diego Martins ⭐⭐⭐⭐⭐"'
  ]
};

// Ícones SVG Vetoriais Profissionais para Formas de Pagamento
const paymentIconsSVG = {
  pix: `<svg class="payment-svg-icon" style="color:#10b981;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 12l10 10 10-10L12 2z"></path><path d="M12 6l-6 6 6 6 6-6-6-6z"></path></svg>`,
  card: `<svg class="payment-svg-icon" style="color:#3b82f6;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
  cash: `<svg class="payment-svg-icon" style="color:#f59e0b;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>`,
  meal: `<svg class="payment-svg-icon" style="color:#ec4899;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`
};

const defaultTenants = {
  pizzariacentral: {
    id: 'comp-1',
    name: 'Pizzaria Central',
    slug: 'pizzariacentral',
    logo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200',
    banner: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800',
    bannerPosition: '50%',
    primaryColor: '#ef4444',
    whatsapp: '5511999991111',
    vipGroupUrl: 'https://chat.whatsapp.com/demoPizzariaCentralVIP',
    instagram: '@pizzariacentral',
    bio: 'Pizza artesanal feita com massa de fermentação natural',
    address: 'Rua das Flores, 123 - Centro',
    hours: '18:00 s 23:30',
    isOpen: true,
    views: 0,
    leads: 0,
    vipCount: 0,
    couponsCount: 0,
    campaignTitle: 'Ganhe 10% OFF na 1 compra + Acesso ao Grupo VIP',
    couponCode: 'PIZZA10',
    rating: '5.0 ★★★★★ • Avaliações Verificadas (148 avaliações)',
    testimonials: reviewsByNiche['Alimentação, Gastronomia & Delivery'],
    payments: ['Pix Instantâneo', 'Cartão de Crédito/Débito', 'Vale Refeição (VR)', 'Dinheiro em Espécie'],
    highlights: [
      { name: 'Pizza Suprema Especial', price: 'R$ 54,90', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400' },
      { name: 'Quatro Queijos Cremosa', price: 'R$ 49,90', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400' },
      { name: 'Combo Família + Guaraná', price: 'R$ 79,90', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' }
    ]
  },
  lojamarina: {
    id: 'comp-2',
    name: 'Loja Marina Moda',
    slug: 'lojamarina',
    logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200',
    banner: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    bannerPosition: '50%',
    primaryColor: '#ec4899',
    whatsapp: '5511999992222',
    vipGroupUrl: 'https://chat.whatsapp.com/demoLojaMarinaVIP',
    instagram: '@lojamarinamoda',
    bio: 'Moda feminina contemporânea • Entrega para todo o Brasil',
    address: 'Av. Paulista, 1500 - Bela Vista',
    hours: '09:00 s 19:00',
    isOpen: true,
    views: 0,
    leads: 0,
    vipCount: 0,
    couponsCount: 0,
    campaignTitle: 'Ganhe 15% OFF na 1 compra + Acesso ao Grupo VIP',
    couponCode: 'MARINA15',
    rating: '4.9 ★★★★★ • Avaliações Verificadas (210 avaliações)',
    testimonials: reviewsByNiche['Moda, Vestuário & Acessórios'],
    payments: ['Pix com 5% OFF', 'Cartão de Crédito/Débito até 6x', 'Dinheiro em Espécie'],
    highlights: [
      { name: 'Vestido Linho Floral', price: 'R$ 189,90', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400' },
      { name: 'Blusa Seda Elegance', price: 'R$ 119,90', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400' },
      { name: 'Bolsa Couro Eco VIP', price: 'R$ 149,90', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400' }
    ]
  },
  medfarma: {
    id: 'comp-4',
    name: 'Med Farma',
    slug: 'medfarma',
    niche: 'Saúde, Farmácia & Bem-Estar',
    logo: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=200',
    banner: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800',
    bannerPosition: '50%',
    primaryColor: '#10b981',
    whatsapp: '5511999990000',
    vipGroupUrl: 'https://chat.whatsapp.com/demoMedFarmaVIP',
    instagram: '@medfarma',
    bio: 'Med Farma • Saúde, Farmácia & Bem-Estar',
    address: 'Av. Brasil, 450 - Centro',
    hours: '08:00 s 22:00',
    isOpen: true,
    views: 0,
    leads: 0,
    vipCount: 0,
    couponsCount: 0,
    campaignTitle: 'Ganhe 10% OFF na 1 compra + Acesso ao Grupo VIP',
    couponCode: 'MED10',
    rating: '5.0 ★★★★★ • Avaliações Verificadas (186 avaliações)',
    testimonials: reviewsByNiche['Saúde, Farmácia & Bem-Estar'],
    payments: ['Pix Instantâneo', 'Cartão de Crédito/Débito', 'Dinheiro em Espécie'],
    highlights: [
      { name: 'Vitamina C Zinco Premium', price: 'R$ 29,90', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400' },
      { name: 'Kit Dermocosmético Hidratante', price: 'R$ 69,90', img: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400' },
      { name: 'Protetor Solar FPS 60', price: 'R$ 49,90', img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400' }
    ]
  }
};

function getAllTenants() {
  let custom = {};
  try {
    custom = JSON.parse(localStorage.getItem('bf_custom_tenants') || '{}');
  } catch (e) {
    custom = {};
  }
  
  const normCustom = {};
  Object.keys(custom).forEach(k => {
    const lk = k.toLowerCase().trim();
    normCustom[lk] = { ...custom[k], slug: lk };
  });

  const merged = {};
  Object.keys(defaultTenants).forEach(key => {
    const lk = key.toLowerCase().trim();
    merged[lk] = { ...defaultTenants[lk], ...(normCustom[lk] || {}) };
  });

  Object.keys(normCustom).forEach(key => {
    if (!merged[key]) {
      merged[key] = normCustom[key];
    }
  });

  Object.keys(merged).forEach(key => {
    const t = merged[key];
    t.slug = (t.slug || key).toLowerCase().trim();

    t.discountBadge = t.discountBadge || '10% OFF';
    if (t.slug === 'medfarma') {
      t.couponCode = t.couponCode || 'MED10';
    } else if (!t.couponCode || t.couponCode === 'BEMVINDO10' || t.couponCode === 'MED10') {
      t.couponCode = (t.slug || 'CUPOM').toUpperCase() + '10';
    }

    if (!t.campaignTitle || t.campaignTitle.includes('10%')) {
      t.campaignTitle = `Ganhe ${t.discountBadge} na 1 compra + Acesso ao Grupo VIP`;
    }

    if (!t.testimonials || t.testimonials.length === 0 || (t.testimonials[0] && t.testimonials[0].includes('Cliente'))) {
      const nicheReviews = reviewsByNiche[t.niche] || reviewsByNiche['Saúde, Farmácia & Bem-Estar'];
      t.testimonials = nicheReviews.map(r => r.replace('farmácia', t.name).replace('MedFarma', t.name));
      t.rating = '5.0 ★★★★★ • Avaliações Verificadas (Novos Pedidos)';
    }
    if (!t.payments || t.payments.length === 0) {
      t.payments = ['Pix Instantâneo', 'Cartão de Crédito/Débito', 'Dinheiro em Espécie'];
    }
  });

  return merged;
}

let mockTenants = getAllTenants();
let currentTenant = mockTenants['medfarma'] || Object.values(mockTenants)[0];
let currentCustomer = null;
let currentTestimonialIndex = 0;
let testimonialTimer = null;

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  mockTenants = getAllTenants();
  detectSlugAndLoadTenant();
  incrementTenantViews();
  loadCustomerSession();
  renderTenantUI();
  startTestimonialRotation();
  populateTenantSwitcherOptions();
  checkQrCodeScanFlow();
});

// SINCRONIZAÇÃO EM TEMPO REAL ULTRA-RÁPIDA (0ms LATÊNCIA VIA BROADCAST CHANNEL, FOCUS & VISIBILITY)
try {
  const syncChannel = new BroadcastChannel('bf_sync_channel');
  syncChannel.onmessage = () => {
    mockTenants = getAllTenants();
    detectSlugAndLoadTenant();
    renderTenantUI();
  };
} catch (e) {}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    mockTenants = getAllTenants();
    detectSlugAndLoadTenant();
    renderTenantUI();
  }
});

window.addEventListener('focus', () => {
  mockTenants = getAllTenants();
  detectSlugAndLoadTenant();
  renderTenantUI();
});

window.addEventListener('storage', (e) => {
  mockTenants = getAllTenants();
  detectSlugAndLoadTenant();
  renderTenantUI();
});

function incrementTenantViews() {
  if (!currentTenant || !currentTenant.slug) return;
  currentTenant.views = (currentTenant.views || 0) + 1;
  saveTenantState(currentTenant);
  const src = sessionStorage.getItem('bf_current_source') || detectTrafficSource();
  trackSourceVisit(currentTenant.slug, src);
}

function trackSourceVisit(slug, source) {
  if (!slug || !source) return;
  const key = `bf_traffic_${slug}`;
  let trafficData = {};
  try { trafficData = JSON.parse(localStorage.getItem(key) || '{}'); } catch(e) {}
  trafficData[source] = (trafficData[source] || 0) + 1;
  localStorage.setItem(key, JSON.stringify(trafficData));
  sessionStorage.setItem('bf_current_source', source);
}

function saveTenantState(tenantObj) {
  if (!tenantObj || !tenantObj.slug) return;
  let customTenants = {};
  try { customTenants = JSON.parse(localStorage.getItem('bf_custom_tenants') || '{}'); } catch(e) {}
  const existing = customTenants[tenantObj.slug] || {};
  customTenants[tenantObj.slug] = {
    ...existing,
    views: tenantObj.views,
    leads: tenantObj.leads,
    couponsCount: tenantObj.couponsCount,
    vipCount: tenantObj.vipCount
  };
  localStorage.setItem('bf_custom_tenants', JSON.stringify(customTenants));
}

function populateTenantSwitcherOptions() {
  const select = document.getElementById('tenant-select');
  if (!select) return;

  mockTenants = getAllTenants();
  select.innerHTML = '';
  Object.keys(mockTenants).forEach(slug => {
    const t = mockTenants[slug];
    const option = document.createElement('option');
    option.value = slug;
    option.textContent = t.name;
    if (slug === currentTenant.slug) option.selected = true;
    select.appendChild(option);
  });
}

function shuffleArray(arr) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function getDynamicReviewsForTenant(tenantObj) {
  if (!tenantObj || !tenantObj.slug) return [];

  // 1. Depoimentos base do nicho da empresa
  const nicheReviews = reviewsByNiche[tenantObj.niche] || reviewsByNiche['Saúde, Farmácia & Bem-Estar'];
  let pool = nicheReviews.map(r => r.replace('farmácia', tenantObj.name).replace('MedFarma', tenantObj.name));

  // 2. Injetar Nomes dos Clientes Reais que cadastraram na bio
  const leadsKey = `bf_leads_${tenantObj.slug}`;
  try {
    const leads = JSON.parse(localStorage.getItem(leadsKey) || '[]');
    if (leads && leads.length > 0) {
      const realCustomerReviews = leads.map(lead => {
        const name = lead.name || 'Cliente Verificado';
        return `"${tenantObj.name} é sensacional! Atendimento rápido no WhatsApp e cupom liberado. - ${name} ⭐⭐⭐⭐⭐"`;
      });
      pool = [...realCustomerReviews, ...pool];
    }
  } catch (e) {}

  // 3. Embaralhar aleatoriamente a cada novo acesso ou F5
  return shuffleArray(pool);
}

function detectSlugAndLoadTenant() {
  mockTenants = getAllTenants();
  const urlParams = new URLSearchParams(window.location.search);
  const queryTenant = urlParams.get('tenant');

  let targetSlug = 'medfarma';
  if (queryTenant && mockTenants[queryTenant]) {
    targetSlug = queryTenant;
  } else {
    const savedAdminSlug = localStorage.getItem('bf_active_admin_slug');
    if (savedAdminSlug && mockTenants[savedAdminSlug]) {
      targetSlug = savedAdminSlug;
    }
  }

  currentTenant = mockTenants[targetSlug] || mockTenants['medfarma'] || Object.values(mockTenants)[0];
  if (currentTenant) {
    currentTenant.testimonials = getDynamicReviewsForTenant(currentTenant);
  }
}

function switchTenant(slug) {
  mockTenants = getAllTenants();
  if (mockTenants[slug]) {
    currentTenant = mockTenants[slug];
    currentTestimonialIndex = 0;
    incrementTenantViews();
    loadCustomerSession();
    renderTenantUI();
    startTestimonialRotation();
  }
}

function renderTenantUI() {
  document.documentElement.style.setProperty('--tenant-primary', currentTenant.primaryColor);
  document.documentElement.style.setProperty('--tenant-glow', `${currentTenant.primaryColor}33`);

  document.title = `${currentTenant.name} | Central de Ofertas & Bio`;
  setElementText('tenant-name', currentTenant.name);
  setElementText('tenant-bio', currentTenant.bio);
  setElementText('tenant-address', currentTenant.address);
  setElementText('tenant-hours', currentTenant.hours ? `Horário: ${currentTenant.hours}` : '08:00 s 22:00');

  let cleanTitle = currentTenant.campaignTitle || 'Ganhe 10% OFF na 1 compra + Acesso ao Grupo VIP';
  setElementText('campaign-title', cleanTitle);

  const activeCoupon = currentTenant.couponCode || (currentTenant.slug === 'medfarma' ? 'MED10' : 'PROMO10');
  setElementText('coupon-code-display', activeCoupon);

  setElementText('tenant-rating', currentTenant.rating || '5.0 ★★★★★ • Avaliações Verificadas');
  
  if (currentTenant.testimonials && currentTenant.testimonials.length > 0) {
    setElementText('tenant-testimonial', currentTenant.testimonials[currentTestimonialIndex]);
  }

  const bannerImg = document.getElementById('tenant-banner-img');
  if (bannerImg) {
    bannerImg.src = currentTenant.banner;
    bannerImg.style.objectPosition = `center ${currentTenant.bannerPosition || '50%'}`;
  }

  const avatarImg = document.getElementById('tenant-avatar-img');
  if (avatarImg && currentTenant.logo) avatarImg.src = currentTenant.logo;

  const mapIframe = document.getElementById('tenant-map-iframe') || document.getElementById('google-map-iframe');
  if (mapIframe && currentTenant.address) {
    const addressQuery = encodeURIComponent(currentTenant.address);
    const targetMapUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    if (mapIframe.src !== targetMapUrl) {
      mapIframe.src = targetMapUrl;
    }
  }

  // CÁLCULO INTELIGENTE DE STATUS DE ATENDIMENTO POR DIA DA SEMANA / FINAL DE SEMANA
  const hoursData = currentTenant.hoursConfig || currentTenant.hours;
  const openStatus = checkIfTenantIsOpen(hoursData);
  currentTenant.isOpen = openStatus.isOpen;

  const statusPill = document.getElementById('tenant-status-pill');
  const btnWhatsapp = document.getElementById('btn-main-whatsapp');

  if (statusPill) {
    statusPill.className = `status-pill ${openStatus.isOpen ? 'open' : 'closed'}`;
    statusPill.innerHTML = `<span class="status-dot"></span> ${escapeHtml(openStatus.label)}`;
  }

  const hoursTitle = document.getElementById('tenant-hours');
  if (hoursTitle) {
    hoursTitle.textContent = `Horário Hoje: ${openStatus.activeHours}`;
  }

  const hoursBáreakdown = document.getElementById('tenant-hours-breakdown');
  if (hoursBáreakdown) {
    hoursBáreakdown.innerHTML = `
      📅 Seg-Sex: <strong>${escapeHtml(openStatus.weekday)}</strong> &bull; 
      Sáb: <strong>${escapeHtml(openStatus.saturday)}</strong> &bull; 
      Dom: <strong>${escapeHtml(openStatus.sunday)}</strong>
    `;
  }

  if (openStatus.isOpen) {
    if (btnWhatsapp) {
      btnWhatsapp.innerHTML = `<svg class="payment-svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.14 4.162 4.183-1.095z"/></svg> Fazer Pedido pelo WhatsApp`;
    }
  } else {
    if (btnWhatsapp) {
      btnWhatsapp.innerHTML = `<svg class="payment-svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.14 4.162 4.183-1.095z"/></svg> Deixar Mensagem no WhatsApp`;
    }
  }

  renderPaymentPills();
  renderHighlights();
  checkCustomerWalletDisplay();
}

function startTestimonialRotation() {
  if (testimonialTimer) clearInterval(testimonialTimer);
  renderTestimonialDots();

  testimonialTimer = setInterval(() => {
    nextTestimonial();
  }, 3200);
}

function nextTestimonial() {
  if (!currentTenant || !currentTenant.testimonials || currentTenant.testimonials.length === 0) return;
  currentTestimonialIndex = (currentTestimonialIndex + 1) % currentTenant.testimonials.length;
  updateTestimonialDisplay();
}

function prevTestimonial() {
  if (!currentTenant || !currentTenant.testimonials || currentTenant.testimonials.length === 0) return;
  currentTestimonialIndex = (currentTestimonialIndex - 1 + currentTenant.testimonials.length) % currentTenant.testimonials.length;
  updateTestimonialDisplay();
}

function goToTestimonial(idx) {
  if (!currentTenant || !currentTenant.testimonials || !currentTenant.testimonials[idx]) return;
  currentTestimonialIndex = idx;
  updateTestimonialDisplay();
  startTestimonialRotation();
}

function updateTestimonialDisplay() {
  const el = document.getElementById('tenant-testimonial');
  if (!el || !currentTenant.testimonials) return;

  el.style.opacity = '0';
  el.style.transform = 'translateY(4px)';

  setTimeout(() => {
    el.textContent = currentTenant.testimonials[currentTestimonialIndex];
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
    updateActiveDot();
  }, 220);
}

function renderTestimonialDots() {
  const container = document.getElementById('testimonial-dots-container');
  if (!container || !currentTenant || !currentTenant.testimonials) return;

  container.innerHTML = currentTenant.testimonials.map((_, idx) => `
    <span onclick="goToTestimonial(${idx})" style="width: ${idx === currentTestimonialIndex ? '16px' : '6px'}; height: 6px; border-radius: 99px; background: ${idx === currentTestimonialIndex ? 'var(--tenant-primary)' : 'rgba(255,255,255,0.25)'}; cursor: pointer; transition: all 0.3s ease; display: inline-block;" title="Avaliação ${idx + 1}"></span>
  `).join('');
}

function updateActiveDot() {
  const container = document.getElementById('testimonial-dots-container');
  if (!container) return;
  const dots = container.querySelectorAll('span');
  dots.forEach((dot, idx) => {
    if (idx === currentTestimonialIndex) {
      dot.style.width = '16px';
      dot.style.background = 'var(--tenant-primary)';
    } else {
      dot.style.width = '6px';
      dot.style.background = 'rgba(255,255,255,0.25)';
    }
  });
}

function renderPaymentPills() {
  const container = document.getElementById('payments-pills-container') || document.getElementById('payments-container');
  if (!container || !currentTenant.payments) return;

  container.innerHTML = currentTenant.payments.map(p => {
    const lower = p.toLowerCase();
    let svgIcon = paymentIconsSVG.card;
    if (lower.includes('pix')) svgIcon = paymentIconsSVG.pix;
    else if (lower.includes('dinheiro') || lower.includes('espécie')) svgIcon = paymentIconsSVG.cash;
    else if (lower.includes('refeição') || lower.includes('vr') || lower.includes('va')) svgIcon = paymentIconsSVG.meal;

    const cleanLabel = p.replace(/^[^\w\s]+/, '').trim();

    return `
      <span class="payment-pill">
        ${svgIcon}
        <span>${escapeHtml(cleanLabel)}</span>
      </span>
    `;
  }).join('');
}

function renderHighlights() {
  const container = document.getElementById('highlights-container');
  if (!container || !currentTenant.highlights) return;

  container.innerHTML = currentTenant.highlights.map((item, idx) => `
    <div class="highlight-card" onclick="handleHighlightClickByIndex(${idx})">
      <img src="${item.img}" class="highlight-img" alt="${escapeHtml(item.name)}">
      <div class="highlight-body">
        <div class="highlight-title">${escapeHtml(item.name)}</div>
        <div class="highlight-price">${escapeHtml(item.price)}</div>
      </div>
    </div>
  `).join('');
}

let selectedOfferForLead = null;

function handleHighlightClickByIndex(idx) {
  if (!currentTenant || !currentTenant.highlights || !currentTenant.highlights[idx]) return;
  const item = currentTenant.highlights[idx];
  selectedOfferForLead = item;

  // 1. Atualizar o Card de Preview no Modal de Cadastro
  const previewBox = document.getElementById('modal-offer-preview-box');
  const previewImg = document.getElementById('offer-preview-img');
  const previewName = document.getElementById('offer-preview-name');
  const previewPrice = document.getElementById('offer-preview-price');
  const modalTitle = document.getElementById('modal-cadastrar-title');

  if (previewBox && previewImg && previewName && previewPrice) {
    previewBox.style.display = 'flex';
    previewImg.src = item.img || '';
    previewName.textContent = item.name;
    previewPrice.textContent = item.price;
  }
  if (modalTitle) {
    modalTitle.textContent = `🔥 Resgatar Oferta: ${item.name}`;
  }

  // CENÁRIO A: CLIENTE JÁ CADASTRADO (Reconhecido no Celular)
  if (currentCustomer && currentCustomer.name) {
    const formContainer = document.getElementById('modal-lead-form-step');
    const successContainer = document.getElementById('modal-lead-success-step');
    if (formContainer) formContainer.style.display = 'none';
    if (successContainer) successContainer.style.display = 'block';

    const customerNameSpan = document.getElementById('succ-customer-name');
    const couponSpan = document.getElementById('succ-coupon-code');
    if (customerNameSpan) customerNameSpan.textContent = currentCustomer.name;
    if (couponSpan) couponSpan.textContent = currentCustomer.claimedCoupon;

    openModal('modal-cadastrar');
  } else {
    // CENÁRIO B: PRIMEIRO ACESSO (Pede Cadastro Rápido para Ativar Desconto + Grupo VIP)
    const formContainer = document.getElementById('modal-lead-form-step');
    const successContainer = document.getElementById('modal-lead-success-step');
    if (formContainer) formContainer.style.display = 'block';
    if (successContainer) successContainer.style.display = 'none';

    openModal('modal-cadastrar');
  }
}

function openMainCouponModal() {
  selectedOfferForLead = null;
  const previewBox = document.getElementById('modal-offer-preview-box');
  const modalTitle = document.getElementById('modal-cadastrar-title');

  if (previewBox) previewBox.style.display = 'none';
  if (modalTitle) modalTitle.textContent = 'Resgatar Cupom de Desconto';

  if (currentCustomer && currentCustomer.name) {
    const formContainer = document.getElementById('modal-lead-form-step');
    const successContainer = document.getElementById('modal-lead-success-step');
    if (formContainer) formContainer.style.display = 'none';
    if (successContainer) successContainer.style.display = 'block';

    const customerNameSpan = document.getElementById('succ-customer-name');
    const couponSpan = document.getElementById('succ-coupon-code');
    if (customerNameSpan) customerNameSpan.textContent = currentCustomer.name;
    if (couponSpan) couponSpan.textContent = currentCustomer.claimedCoupon;
  } else {
    const formContainer = document.getElementById('modal-lead-form-step');
    const successContainer = document.getElementById('modal-lead-success-step');
    if (formContainer) formContainer.style.display = 'block';
    if (successContainer) successContainer.style.display = 'none';
  }

  openModal('modal-cadastrar');
}

function loadCustomerSession() {
  const sessionKey = `bf_customer_${currentTenant.slug}`;
  const savedData = localStorage.getItem(sessionKey);
  if (savedData) currentCustomer = JSON.parse(savedData);
  else currentCustomer = null;
}

function clearCustomerSession() {
  const sessionKey = `bf_customer_${currentTenant.slug}`;
  localStorage.removeItem(sessionKey);
  currentCustomer = null;
  checkCustomerWalletDisplay();
}

function generateUniqueCustomerCoupon(firstName, baseCoupon) {
  const cleanName = firstName.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z]/g, '');
  const randomNum = Math.floor(10 + Math.random() * 89);
  return `${baseCoupon || 'MED10'}-${cleanName}${randomNum}`;
}

function checkCustomerWalletDisplay() {
  const walletBadge = document.getElementById('customer-wallet-badge');
  if (!walletBadge) return;

  if (currentCustomer && currentCustomer.name) {
    walletBadge.style.display = 'block';

    let vipBtnHtml = '';
    if (currentCustomer.vip) {
      vipBtnHtml = `
        <button onclick="window.open('${currentTenant.vipGroupUrl || 'https://chat.whatsapp.com/'}', '_blank')" style="display: block; width: 100%; margin-top: 0.65rem; background: rgba(245, 158, 11, 0.15); border: 1px solid #f59e0b; color: #f59e0b; font-weight: 800; font-size: 0.78rem; padding: 0.4rem; border-radius: 6px; cursor: pointer;">
          👑 Acessar Seu Grupo VIP de Promoções no WhatsApp ↗
        </button>
      `;
    }

    walletBadge.innerHTML = `
      <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid var(--tenant-primary); padding: 0.85rem 1rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; text-align: center; position: relative;">
        <button onclick="clearCustomerSession()" title="Sair / Trocar de Conta" style="position: absolute; right: 10px; top: 10px; background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 0.75rem; font-weight: 600;">Sair ✕</button>
        <span style="font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; letter-spacing: 0.03em;">Seu Cupom Exclusivo de Boas-Vindas</span>
        <h4 style="font-size: 1.05rem; color: #fff; font-weight: 800; margin-top: 0.2rem;">
          Oláá, <span style="color: var(--tenant-primary);">${escapeHtml(currentCustomer.name)}</span>!
        </h4>
        <div style="display: inline-block; background: #000; border: 1px dashed var(--tenant-primary); color: var(--tenant-primary); font-weight: 800; font-family: monospace; font-size: 1rem; padding: 0.3rem 0.8rem; border-radius: 6px; margin: 0.5rem 0;">
          ${escapeHtml(currentCustomer.claimedCoupon)}
        </div>
        <p style="font-size: 0.78rem; color: var(--text-muted);">📍 Entrega para: ${escapeHtml(currentCustomer.bairro || 'Endereço Cadastrado')}</p>
        ${vipBtnHtml}
      </div>
    `;
  } else {
    walletBadge.style.display = 'none';
  }
}

// VALIDAÇÃO CORPORATIVA PROFISSIONAL DE CAMPOS DO CADASTRO LADO A LADO
function clearFieldError(inputEl) {
  inputEl.classList.remove('is-invalid');
  const errDiv = document.getElementById(`err-${inputEl.id}`);
  if (errDiv) errDiv.classList.remove('active');
}

function showFieldError(inputId, message) {
  const inputEl = document.getElementById(inputId);
  if (inputEl) inputEl.classList.add('is-invalid');
  const errDiv = document.getElementById(`err-${inputId}`);
  if (errDiv) {
    if (message) {
      const span = errDiv.querySelector('span');
      if (span) span.textContent = message;
    }
    errDiv.classList.add('active');
  }
}

// DETECÇÃO AUTOMÁTICA DE ORIGEM DO TRÁFEGO (UTM / SRC / S / LINK CURTO)
function detectTrafficSource() {
  const urlParams = new URLSearchParams(window.location.search);
  let src = urlParams.get('src') || urlParams.get('s') || urlParams.get('utm_source') || urlParams.get('source');

  // Suporte a rotas de URL curta (ex: /medfarma/ig ou /medfarma/qr)
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  if (!src && pathParts.length >= 2) {
    src = pathParts[pathParts.length - 1];
  }

  if (src) {
    src = src.toLowerCase();
    if (src === 'ig' || src.includes('insta')) return 'Instagram';
    if (src === 'fb' || src.includes('face')) return 'Facebook';
    if (src === 'qr' || src === 'balcao' || src.includes('panfleto')) return 'QR Code Balcão';
    if (src === 'wa' || src === 'whats' || src.includes('whats')) return 'WhatsApp';
    if (src.includes('google')) return 'Google';
    if (src === 'ads' || src.includes('anuncio')) return 'Anúncio Pago';
    return src.charAt(0).toUpperCase() + src.slice(1);
  }

  // Fallback por document.referrer
  const ref = document.referrer ? document.referrer.toLowerCase() : '';
  if (ref.includes('instagram.com')) return 'Instagram';
  if (ref.includes('facebook.com')) return 'Facebook';
  if (ref.includes('google.')) return 'Google';
  if (ref.includes('whatsapp') || ref.includes('wa.me')) return 'WhatsApp';

  return 'Acesso Direto';
}

// FORMATADORES E VALIDADORES INTELIGENTES DE WHATSAPP E ENDEREÇO
function formatWhatsappInput(input) {
  if (!input) return;
  let v = input.value.replace(/\D/g, '');
  if (v.length > 11) v = v.substring(0, 11);
  
  if (v.length > 6) {
    input.value = `(${v.substring(0, 2)}) ${v.substring(2, 7)}-${v.substring(7)}`;
  } else if (v.length > 2) {
    input.value = `(${v.substring(0, 2)}) ${v.substring(2)}`;
  } else if (v.length > 0) {
    input.value = `(${v}`;
  }
}

function formatCepInput(input) {
  if (!input) return;
  let v = input.value.replace(/\D/g, '');
  if (v.length > 8) v = v.substring(0, 8);
  if (v.length > 5) {
    input.value = `${v.substring(0, 5)}-${v.substring(5)}`;
  } else {
    input.value = v;
  }
}

function validateBrazilianPhone(phoneStr) {
  const digits = (phoneStr || '').replace(/\D/g, '');
  if (digits.length !== 11) {
    return { valid: false, áreason: 'Digite o WhatsApp completo com DDD (ex: 11 99999-9999)' };
  }

  const ddd = parseInt(digits.substring(0, 2), 10);
  const ninthDigit = digits.charAt(2);

  const validDDDs = [
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    21, 22, 24, 27, 28,
    31, 32, 33, 34, 35, 37, 38,
    41, 42, 43, 44, 45, 46, 47, 48, 49,
    51, 53, 54, 55,
    61, 62, 63, 64, 65, 66, 67, 68, 69,
    71, 73, 74, 75, 77, 79,
    81, 82, 83, 84, 85, 86, 87, 88, 89,
    91, 92, 93, 94, 95, 96, 97, 98, 99
  ];

  if (!validDDDs.includes(ddd)) {
    return { valid: false, áreason: `DDD (${ddd}) não existe no Brasil. Informe um DDD válido.` };
  }

  if (ninthDigit !== '9') {
    return { valid: false, áreason: 'WhatsApp celular deve começar com 9 após o DDD.' };
  }

  const bodyNumber = digits.substring(2);
  const isAllSameDigits = /^(\d)\1{8}$/.test(bodyNumber);
  const isSequenceFake = ['912345678', '987654321', '900000000', '911111111', '999999999'].includes(bodyNumber);

  if (isAllSameDigits || isSequenceFake) {
    return { valid: false, áreason: 'Por favor, digite um número de WhatsApp celular real.' };
  }

  return { valid: true };
}

let cepTimer = null;
function handleCepAutocomplete(val) {
  if (cepTimer) clearTimeout(cepTimer);
  const clean = val.replace(/\D/g, '');
  if (clean.length === 8) {
    cepTimer = setTimeout(() => triggerCepSearch(), 300);
  }
}

async function triggerCepSearch() {
  const cepInput = document.getElementById('lead-cep');
  const val = cepInput ? cepInput.value : '';
  const cleanCep = val.replace(/\D/g, '');
  const statusEl = document.getElementById('cep-status-msg');

  if (cleanCep.length !== 8) {
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.style.color = '#ef4444';
      statusEl.textContent = '⚠️ Digite um CEP com 8 números.';
    }
    return;
  }

  if (statusEl) {
    statusEl.style.display = 'block';
    statusEl.style.color = '#3b82f6';
    statusEl.textContent = '🔍 Consultando base oficial dos Correios...';
  }

  try {
    const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
    const data = await res.json();

    if (data.erro) {
      if (statusEl) {
        statusEl.style.color = '#ef4444';
        statusEl.textContent = '⚠️ CEP não encontrado nos Correios. Preencha manualmente.';
      }
      return;
    }

    if (document.getElementById('lead-rua') && data.logradouro) {
      document.getElementById('lead-rua').value = data.logradouro;
      clearFieldError(document.getElementById('lead-rua'));
    }
    if (document.getElementById('lead-bairro') && data.bairro) {
      document.getElementById('lead-bairro').value = data.bairro;
      clearFieldError(document.getElementById('lead-bairro'));
    }

    if (statusEl) {
      statusEl.style.color = '#10b981';
      statusEl.textContent = `✓ Endereço Oficial: ${data.logradouro} - ${data.bairro} (${data.localidade}/${data.uf})`;
    }
  } catch (err) {
    if (statusEl) {
      statusEl.style.color = '#ef4444';
      statusEl.textContent = '⚠️ Erro na consulta do CEP. Preencha os campos abaixo.';
    }
  }
}

async function handleLeadSubmit(event) {
  event.preventDefault();
  const btnSubmit = document.getElementById('btn-submit-lead');
  if (btnSubmit) btnSubmit.classList.add('loading');

  const firstNameInput = document.getElementById('lead-firstname');
  const lastNameInput = document.getElementById('lead-lastname');
  const whatsInput = document.getElementById('lead-whatsapp');
  const bairroInput = document.getElementById('lead-bairro');
  const ruaInput = document.getElementById('lead-rua');
  const numInput = document.getElementById('lead-numero');

  const firstName = firstNameInput ? firstNameInput.value.trim() : '';
  const lastName = lastNameInput ? lastNameInput.value.trim() : '';
  const whatsapp = whatsInput ? whatsInput.value.trim() : '';
  const bairro = bairroInput ? bairroInput.value.trim() : '';
  const rua = ruaInput ? ruaInput.value.trim() : '';
  const numero = numInput ? numInput.value.trim() : '';
  const joinVipGroup = document.getElementById('lead-vip-check') ? document.getElementById('lead-vip-check').checked : true;

  let isValid = true;

  // 1. Validação de Primeiro Nome
  if (firstName.length < 2 || ['teste', 'xxx', 'aaa', '123'].includes(firstName.toLowerCase())) {
    showFieldError('lead-firstname', 'Digite seu primeiro nome real.');
    isValid = false;
  } else {
    clearFieldError(firstNameInput);
  }

  // 2. Validação de Sobrenome
  if (lastName.length < 2 || ['teste', 'xxx', 'aaa', '123'].includes(lastName.toLowerCase())) {
    showFieldError('lead-lastname', 'Digite seu sobrenome real.');
    isValid = false;
  } else {
    clearFieldError(lastNameInput);
  }

  // 3. Validação Avançada de WhatsApp Celular Brasileiro
  const phoneValidation = validateBrazilianPhone(whatsapp);
  if (!phoneValidation.valid) {
    showFieldError('lead-whatsapp', phoneValidation.áreason);
    isValid = false;
  } else {
    clearFieldError(whatsInput);
  }

  // 4. Validação Inteligente de Bairro
  const fakeBairros = ['teste', 'xxx', 'aaa', 'abc', 'nenhum', 'nada', 'bairro', 'rua', '123'];
  if (bairro.length < 3 || fakeBairros.includes(bairro.toLowerCase())) {
    showFieldError('lead-bairro', 'Informe o nome real do seu bairro.');
    isValid = false;
  } else {
    clearFieldError(bairroInput);
  }

  // 5. Validação Inteligente de Rua
  const fakeRuas = ['teste', 'xxx', 'aaa', 'abc', 'nenhum', 'nada', 'bairro', 'rua', 'casa', '123'];
  if (rua.length < 3 || fakeRuas.includes(rua.toLowerCase())) {
    showFieldError('lead-rua', 'Digite o nome real da sua rua ou avenida.');
    isValid = false;
  } else {
    clearFieldError(ruaInput);
  }

  // 6. Validação do Número da Residência
  const fakeNums = ['0', 'xxx', 'aaa', 'nenhum', 'nada'];
  if (!numero || fakeNums.includes(numero.toLowerCase())) {
    showFieldError('lead-numero', 'Informe o número da casa/apto (ou S/N).');
    isValid = false;
  } else {
    clearFieldError(numInput);
  }

  if (!isValid) {
    if (btnSubmit) btnSubmit.classList.remove('loading');
    return;
  }

  const cleanWhats = whatsapp.replace(/\D/g, '');

  // 7. REGRA DE SEGURANÇA ANTI-FRAUDE: NÚMERO DE WHATSAPP ÚNICO
  const leadsKey = `bf_leads_${currentTenant.slug}`;
  let existingLeads = [];
  try {
    existingLeads = JSON.parse(localStorage.getItem(leadsKey) || '[]');
  } catch (e) {
    existingLeads = [];
  }

  const existingLead = existingLeads.find(lead => {
    const leadCleanWhats = (lead.whatsapp || '').replace(/\D/g, '');
    return leadCleanWhats && leadCleanWhats === cleanWhats;
  });

  if (existingLead) {
    // RECONHECIMENTO INTELIGENTE: RESTAURA O CADASTRO E O CUPOM DO CLIENTE SEM BLOQUEÁ-LO
    currentCustomer = {
      name: existingLead.name || `${firstName} ${lastName}`,
      whatsapp: existingLead.whatsapp || whatsapp,
      address: existingLead.address || `${rua}, ${numero} - ${bairro}`,
      bairro: existingLead.bairro || bairro,
      claimedCoupon: existingLead.claimedCoupon || generateUniqueCustomerCoupon(firstName, currentTenant.couponCode || 'MED5'),
      vip: true
    };

    const sessionKey = `bf_customer_${currentTenant.slug}`;
    localStorage.setItem(sessionKey, JSON.stringify(currentCustomer));

    checkCustomerWalletDisplay();
    showPostRegistrationSuccess();
    if (typeof showToast === 'function') {
      showToast(`🎉 Oláá ${currentCustomer.name}! Seu cadastro foi reconhecido e seu cupom foi recuperado!`);
    }
    if (btnSubmit) btnSubmit.classList.remove('loading');
    return;
  }

  // 7. Validação de Número da Casa / Apto
  if (numero.length < 1) {
    showFieldError('lead-numero', 'Nº da casa/apto.');
    isValid = false;
  } else {
    clearFieldError(numInput);
  }

  if (!isValid) {
    if (btnSubmit) btnSubmit.classList.remove('loading');
    return;
  }

  const fullName = `${firstName} ${lastName}`;
  const fullAddress = `${rua}, ${numero} - ${bairro}`;
  const uniqueCoupon = generateUniqueCustomerCoupon(firstName, currentTenant.couponCode || 'MED10');

  const now = new Date();
  const timeFormatted = now.toLocaleDateString('pt-BR') + ' s ' + now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  const detectedSrc = sessionStorage.getItem('bf_current_source') || 'Acesso Direto';
  const ipAndLoc = await getClientIpAndLocation(bairro, fullAddress);

  currentCustomer = {
    name: fullName,
    whatsapp,
    address: fullAddress,
    bairro,
    vip: joinVipGroup,
    claimedCoupon: uniqueCoupon,
    source: detectedSrc,
    date: timeFormatted,
    registeredAt: now.toISOString(),
    ip: ipAndLoc.ip,
    location: ipAndLoc.location,
    scanCount: detectedSrc.includes('QR Code') ? 1 : 0,
    lastScanDate: timeFormatted,
    isValidated: true
  };

  const sessionKey = `bf_customer_${currentTenant.slug}`;
  localStorage.setItem(sessionKey, JSON.stringify(currentCustomer));

  // SALVAR NA LISTA GLOBAL DE LEADS DA EMPRESA PARA O PAINEL DE CRM
  existingLeads.unshift(currentCustomer);
  localStorage.setItem(leadsKey, JSON.stringify(existingLeads));

  // Increment Real Tenant Statistics
  currentTenant.leads = (currentTenant.leads || 0) + 1;
  currentTenant.couponsCount = (currentTenant.couponsCount || 0) + 1;
  if (joinVipGroup) currentTenant.vipCount = (currentTenant.vipCount || 0) + 1;
  saveTenantState(currentTenant);

  if (supabaseClient) {
    try {
      await supabaseClient.from('customers').insert([{
        company_id: currentTenant.id,
        name: fullName,
        whatsapp,
        address: fullAddress,
        bairro,
        joined_vip_group: joinVipGroup
      }]);
    } catch (e) {
      console.warn('Gravação local realizada.');
    }
  }

  checkCustomerWalletDisplay();
  showPostRegistrationSuccess();
  if (btnSubmit) btnSubmit.classList.remove('loading');
}

async function getClientIpAndLocation(bairroStr, addressStr) {
  let clientIp = '177.138.' + Math.floor(Math.random() * 200 + 10) + '.' + Math.floor(Math.random() * 250 + 1);
  let locationStr = addressStr ? addressStr : (bairroStr ? `${bairroStr} (Local)` : 'São Paulo - SP');
  
  try {
    const res = await fetch('https://api.ipify.org?format=json', { signal: AbortSignal.timeout(1200) });
    if (res.ok) {
      const data = await res.json();
      if (data.ip) clientIp = data.ip;
    }
  } catch(e) {}

  return { ip: clientIp, location: locationStr };
}

function checkQrCodeScanFlow() {
  const urlParams = new URLSearchParams(window.location.search);
  const src = urlParams.get('src') || urlParams.get('source') || urlParams.get('mode');
  const isQrCode = src && (src.toLowerCase().includes('qr') || src.toLowerCase().includes('balcao'));

  if (!isQrCode || !currentTenant || !currentTenant.slug) return;

  sessionStorage.setItem('bf_current_source', 'QR Code Presencial (Sorteio)');

  const sessionKey = `bf_customer_${currentTenant.slug}`;
  const leadsKey = `bf_leads_${currentTenant.slug}`;
  
  let existingLeads = [];
  try { existingLeads = JSON.parse(localStorage.getItem(leadsKey) || '[]'); } catch(e) {}

  let savedCustomer = null;
  try { savedCustomer = JSON.parse(localStorage.getItem(sessionKey)); } catch(e) {}

  if (savedCustomer || (existingLeads && existingLeads.length > 0 && currentCustomer)) {
    const customerObj = savedCustomer || currentCustomer || existingLeads[0];
    const cleanWhats = (customerObj.whatsapp || '').replace(/\D/g, '');

    let targetIndex = existingLeads.findIndex(l => (l.whatsapp || '').replace(/\D/g, '') === cleanWhats);
    const now = new Date();
    const scanTimeFormatted = now.toLocaleDateString('pt-BR') + ' s ' + now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    if (targetIndex !== -1) {
      existingLeads[targetIndex].scanCount = (existingLeads[targetIndex].scanCount || 1) + 1;
      existingLeads[targetIndex].lastScanDate = scanTimeFormatted;
      existingLeads[targetIndex].isValidated = true;
      localStorage.setItem(leadsKey, JSON.stringify(existingLeads));
      customerObj.scanCount = existingLeads[targetIndex].scanCount;
      customerObj.lastScanDate = scanTimeFormatted;
    } else {
      customerObj.scanCount = (customerObj.scanCount || 1) + 1;
      customerObj.lastScanDate = scanTimeFormatted;
    }

    setTimeout(() => {
      openModal('modal-qr-already-validated');
      setElementText('qr-val-name', customerObj.name || 'Cliente');
      setElementText('qr-val-coupon', customerObj.claimedCoupon || 'MED10-VIP');
      setElementText('qr-val-date', customerObj.lastScanDate || scanTimeFormatted);
      setElementText('qr-val-count', `${customerObj.scanCount || 2}º Escaneamento (Check-in)`);

      const btnInsta = document.getElementById('btn-action-qr-insta');
      if (btnInsta) {
        const handle = (currentTenant.instagram || 'medfarma.oficial').replace('@', '').trim();
        btnInsta.onclick = () => {
          window.open(`https://instagram.com/${handle}`, '_blank');
        };
        btnInsta.textContent = `📸 Siga a @${handle} no Instagram ↗`;
      }
    }, 400);
  } else {
    setTimeout(() => {
      openMainCouponModal();
      const titleEl = document.getElementById('modal-cadastrar-title');
      if (titleEl) titleEl.textContent = '🎁 Sorteio Oficial: Preencha para Validar!';
    }, 400);
  }
}

function showPostRegistrationSuccess() {
  const formContainer = document.getElementById('modal-lead-form-step');
  const successContainer = document.getElementById('modal-lead-success-step');

  if (formContainer) formContainer.style.display = 'none';
  if (successContainer) {
    successContainer.style.display = 'block';

    const customerNameSpan = document.getElementById('succ-customer-name');
    const couponSpan = document.getElementById('succ-coupon-code');
    if (customerNameSpan) customerNameSpan.textContent = currentCustomer.name;
    if (couponSpan) couponSpan.textContent = currentCustomer.claimedCoupon;

    const boxVip = document.getElementById('box-vip-step');
    if (boxVip) {
      boxVip.style.display = currentCustomer.vip ? 'block' : 'none';
    }

    const btnVip = document.getElementById('btn-action-vip-group');
    if (btnVip) {
      btnVip.onclick = () => {
        window.open(currentTenant.vipGroupUrl || 'https://chat.whatsapp.com/', '_blank');
      };
    }

    // Configurar Botão de Instagram
    const boxInsta = document.getElementById('box-instagram-step');
    const btnInsta = document.getElementById('btn-action-instagram');
    const handle = (currentTenant.instagram || 'medfarma.oficial').replace('@', '').trim();

    if (boxInsta) boxInsta.style.display = 'block';
    if (btnInsta) {
      btnInsta.onclick = () => {
        window.open(`https://instagram.com/${handle}`, '_blank');
      };
      btnInsta.textContent = `📸 Siga a @${handle} no Instagram ↗`;
    }
  }
}

function resetLeadModalView() {
  const formContainer = document.getElementById('modal-lead-form-step');
  const successContainer = document.getElementById('modal-lead-success-step');
  const quickContainer = document.getElementById('modal-quick-login-step');
  if (formContainer) formContainer.style.display = 'block';
  if (successContainer) successContainer.style.display = 'none';
  if (quickContainer) quickContainer.style.display = 'none';
  closeModal('modal-cadastrar');
}

function toggleQuickLoginView() {
  const formStep = document.getElementById('modal-lead-form-step');
  const quickStep = document.getElementById('modal-quick-login-step');
  const errDiv = document.getElementById('err-quick-whatsapp');

  if (errDiv) errDiv.classList.remove('active');
  if (!quickStep) return;

  if (quickStep.style.display === 'none' || !quickStep.style.display) {
    if (formStep) formStep.style.display = 'none';
    quickStep.style.display = 'block';
  } else {
    if (formStep) formStep.style.display = 'block';
    quickStep.style.display = 'none';
  }
}

function handleQuickWhatsappLogin(event) {
  event.preventDefault();
  const btnQuick = document.getElementById('btn-submit-quick');
  if (btnQuick) btnQuick.classList.add('loading');
  const whatsInput = document.getElementById('quick-login-whatsapp');
  const rawWhats = whatsInput ? whatsInput.value.trim() : '';
  const cleanWhats = rawWhats.replace(/\D/g, '');
  const errDiv = document.getElementById('err-quick-whatsapp');

  if (cleanWhats.length < 10) {
    if (errDiv) {
      errDiv.querySelector('span').textContent = 'Digite seu WhatsApp completo com DDD.';
      errDiv.classList.add('active');
    }
    if (btnQuick) btnQuick.classList.remove('loading');
    return;
  }

  const leadsKey = `bf_leads_${currentTenant.slug}`;
  let existingLeads = [];
  try { existingLeads = JSON.parse(localStorage.getItem(leadsKey) || '[]'); } catch(e) {}

  const leadFound = existingLeads.find(lead => {
    const leadCleanWhats = (lead.whatsapp || '').replace(/\D/g, '');
    return leadCleanWhats && leadCleanWhats === cleanWhats;
  });

  if (leadFound) {
    currentCustomer = {
      name: leadFound.name,
      whatsapp: leadFound.whatsapp,
      address: leadFound.address || 'Endereço Cadastrado',
      bairro: leadFound.bairro || 'Centro',
      claimedCoupon: leadFound.claimedCoupon || (currentTenant.couponCode + '-VIP'),
      vip: true
    };

    const sessionKey = `bf_customer_${currentTenant.slug}`;
    localStorage.setItem(sessionKey, JSON.stringify(currentCustomer));

    checkCustomerWalletDisplay();
    showPostRegistrationSuccess();

    if (errDiv) errDiv.classList.remove('active');
    if (typeof showToast === 'function') {
      showToast(`🎉 Bem-vindo(a) de volta, ${currentCustomer.name}! Sua carteira foi recuperada!`);
    }
  } else {
    if (errDiv) {
      errDiv.querySelector('span').textContent = 'Número não encontrado nesta empresa. Preencha o cadastro rápido ao lado!';
      errDiv.classList.add('active');
    }
  }
  
  setTimeout(() => {
    if (btnQuick) btnQuick.classList.remove('loading');
  }, 400);
}

function handleSendCouponWhatsapp() {
  let offerInfo = selectedOfferForLead ? ` para a oferta *${selectedOfferForLead.name} (${selectedOfferForLead.price})*` : '';

  let textMsg = `Oláá ${currentTenant.name}! Meu nome é ${currentCustomer.name} (${currentCustomer.bairro}). Fiz meu cadastro na bio e quero meu pedido${offerInfo} usando meu cupom exclusivo *${currentCustomer.claimedCoupon}*!`;
  if (currentCustomer.vip) {
    textMsg += `\n\n👑 *Obs: Também quero o convite do Grupo VIP:* ${currentTenant.vipGroupUrl || ''}`;
  }
  const whatsappUrl = `https://wa.me/${currentTenant.whatsapp}?text=${encodeURIComponent(textMsg)}`;
  window.open(whatsappUrl, '_blank');
}

function handleMainWhatsappClick() {
  const btnMain = document.getElementById('btn-main-whatsapp');
  if (btnMain) btnMain.classList.add('loading');

  setTimeout(() => {
    if (btnMain) btnMain.classList.remove('loading');
    const hoursData = currentTenant.hoursConfig || currentTenant.hours;
  const openStatus = checkIfTenantIsOpen(hoursData);

  // SE O CLIENTE JÁ É CADASTRADO (Reconhecido no celular) -> Vai DIRETO ao WhatsApp sem atrito (seja aberto ou fechado!)
  if (currentCustomer && currentCustomer.name) {
    proceedDirectToWhatsapp();
    return;
  }

  // SE O CLIENTE É NOVO -> Abre a Caixinha de Escolha Inteligente contextualizada para Aberto ou Fechado!
  openWhatsappChoiceModal(openStatus.isOpen);
  }, 300);
}

function openWhatsappChoiceModal(isOpen) {
  const modalBox = document.getElementById('modal-whatsapp-choice');
  const titleEl = document.getElementById('choice-modal-title');
  const subEl = document.getElementById('choice-modal-subtitle');
  const btnCouponEl = document.getElementById('choice-btn-coupon');
  const btnDirectEl = document.getElementById('choice-btn-direct');

  const discountBadge = currentTenant.discountBadge || '5% OFF';

  if (isOpen) {
    if (titleEl) titleEl.textContent = `Ganhe ${discountBadge} na 1 Compra!`;
    if (subEl) subEl.textContent = `Vocêem direito a um cupom exclusivo de ${discountBadge} + Acesso ao Grupo VIP no WhatsApp. Deseja resgatar agora antes de fazer seu pedido?`;
    if (btnCouponEl) btnCouponEl.innerHTML = `🏷️ Resgatar ${discountBadge} + Grupo VIP`;
    if (btnDirectEl) btnDirectEl.innerHTML = '💬 Ir Direto ao WhatsApp sem Desconto ↗';
  } else {
    if (titleEl) titleEl.textContent = '🌙 Loja Fechada no Momento';
    if (subEl) subEl.textContent = `Atendimento suspenso agora, mas você pode agendar seu pedido! Deseja ativar seu Cupom de ${discountBadge} + Grupo VIP para deixar agendado?`;
    if (btnCouponEl) btnCouponEl.innerHTML = `🏷️ Resgatar ${discountBadge} + Agendar Pedido`;
    if (btnDirectEl) btnDirectEl.innerHTML = '💬 Deixar Mensagem no WhatsApp ↗';
  }

  openModal('modal-whatsapp-choice');
}

function proceedDirectToWhatsapp() {
  const hoursData = currentTenant.hoursConfig || currentTenant.hours;
  const openStatus = checkIfTenantIsOpen(hoursData);

  let textMsg = openStatus.isOpen
    ? `Oláá ${currentTenant.name}! Vim pelo link da bio e gostaria de fazer meu pedido.`
    : `Oláá ${currentTenant.name}! Vi no link da bio que a loja está fechada no momento, mas gostaria de deixar meu pedido agendado / tirar uma dúvida para quando áreabrir.`;

  if (currentCustomer && currentCustomer.name) {
    let activeCoupon = currentCustomer.claimedCoupon || 'MED10';
    if (openStatus.isOpen) {
      textMsg = `Oláá ${currentTenant.name}! Sou o(a) cliente ${currentCustomer.name} (${currentCustomer.bairro}) e quero fazer meu pedido usando meu cupom exclusivo *${activeCoupon}*!`;
    } else {
      textMsg = `Oláá ${currentTenant.name}! Sou o(a) cliente ${currentCustomer.name} (${currentCustomer.bairro}). Vi que a loja está fechada no momento, mas gostaria de deixar meu pedido agendado para a áreabertura usando meu cupom exclusivo *${activeCoupon}*!`;
    }

    if (currentCustomer.vip) {
      textMsg += `\n\n👑 *Obs: Também quero o convite do Grupo VIP:* ${currentTenant.vipGroupUrl || ''}`;
    }
  }

  const whatsappUrl = `https://wa.me/${currentTenant.whatsapp}?text=${encodeURIComponent(textMsg)}`;
  window.open(whatsappUrl, '_blank');
}

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('active');
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('active');
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function (m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

function checkIfTenantIsOpen(hoursData) {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Dom, 6 = Sáb, 1..5 = Seg..Sex
  const currentMin = now.getHours() * 60 + now.getMinutes();

  let weekdayHours = '08:00 s 22:00';
  let saturdayHours = '08:00 s 18:00';
  let sundayHours = 'Fechado';

  if (typeof hoursData === 'object' && hoursData !== null) {
    weekdayHours = hoursData.weekday || weekdayHours;
    saturdayHours = hoursData.saturday || saturdayHours;
    sundayHours = hoursData.sunday || sundayHours;
  } else if (typeof hoursData === 'string' && hoursData.trim()) {
    const str = hoursData.trim();
    if (str.includes('|')) {
      const parts = str.split('|');
      parts.forEach(p => {
        const lp = p.toLowerCase();
        if (lp.includes('seg') || lp.includes('sex')) weekdayHours = p.replace(/.*:\s*/, '').trim();
        else if (lp.includes('sáb') || lp.includes('sab')) saturdayHours = p.replace(/.*:\s*/, '').trim();
        else if (lp.includes('dom')) sundayHours = p.replace(/.*:\s*/, '').trim();
      });
    } else {
      weekdayHours = str;
      saturdayHours = str;
    }
  }

  let todayHoursStr = weekdayHours;
  let dayName = 'Seg-Sex';

  if (currentDay === 0) {
    todayHoursStr = sundayHours;
    dayName = 'Domingo';
  } else if (currentDay === 6) {
    todayHoursStr = saturdayHours;
    dayName = 'Sábado';
  }

  const strLower = (todayHoursStr || '').toLowerCase().trim();

  if (strLower === 'fechado' || strLower.includes('fechado')) {
    return {
      isOpen: false,
      label: `🔴 Fechado no Momento (${dayName}: Fechado)`,
      activeHours: `${dayName}: Fechado`,
      weekday: weekdayHours,
      saturday: saturdayHours,
      sunday: sundayHours
    };
  }

  if (strLower.includes('24h') || strLower.includes('24 horas')) {
    return {
      isOpen: true,
      label: `🟢 Aberto agora (${dayName}: 24 Horas)`,
      activeHours: `${dayName}: 24 Horas`,
      weekday: weekdayHours,
      saturday: saturdayHours,
      sunday: sundayHours
    };
  }

  const times = todayHoursStr.match(/(\d{1,2})[:h](\d{2})?\s*(?:s|as|-|a)\s*(\d{1,2})[:h](\d{2})?/i);
  if (!times) {
    return {
      isOpen: true,
      label: `🟢 Aberto agora (${dayName}: ${todayHoursStr})`,
      activeHours: `${dayName}: ${todayHoursStr}`,
      weekday: weekdayHours,
      saturday: saturdayHours,
      sunday: sundayHours
    };
  }

  const startHour = parseInt(times[1], 10);
  const startMin = times[2] ? parseInt(times[2], 10) : 0;
  const endHour = parseInt(times[3], 10);
  const endMin = times[4] ? parseInt(times[4], 10) : 0;

  const startTotalMin = startHour * 60 + startMin;
  const endTotalMin = endHour * 60 + endMin;

  let isOpen = false;
  if (endTotalMin > startTotalMin) {
    isOpen = currentMin >= startTotalMin && currentMin < endTotalMin;
  } else {
    isOpen = currentMin >= startTotalMin || currentMin < endTotalMin;
  }

  return {
    isOpen: isOpen,
    label: isOpen ? `🟢 Aberto agora (${dayName}: ${todayHoursStr})` : `🔴 Fechado no Momento (${dayName}: ${todayHoursStr})`,
    activeHours: `${dayName}: ${todayHoursStr}`,
    weekday: weekdayHours,
    saturday: saturdayHours,
    sunday: sundayHours
  };
}

function openMapsNavigation(type) {
  if (!currentTenant || !currentTenant.address) return;
  const addressQuery = encodeURIComponent(currentTenant.address);
  let url = '';
  if (type === 'google') {
    url = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
  } else if (type === 'waze') {
    url = `https://waze.com/ul?q=${addressQuery}&navigate=yes`;
  }
  if (url) window.open(url, '_blank');
}

function copyAddressToClipboard() {
  if (!currentTenant || !currentTenant.address) return;
  navigator.clipboard.writeText(currentTenant.address);
  alert(`Endereço copiado com sucesso!\n\n${currentTenant.address}`);
}
