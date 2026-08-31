/* ==========================================================================
   BioFidelidade SaaS - Core Application Engine & Multi-Tenant Router
   Target: seudominio.com/[slug]
   Supabase Project Ref: dyoqagwmkuhdxomgggcf (CONECTADO)
   ========================================================================== */

const SUPABASE_PROJECT_URL = 'https://dyoqagwmkuhdxomgggcf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5b3FhZ3dta3VoZHhvbWdnZ2NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0NjgwNzMsImV4cCI6MjEwMjA0NDA3M30._8ndQ0mBa9FroX8y_5i3QlYwG_KVPrS6P-8EkJHMS1w';

// Save to LocalStorage
localStorage.setItem('bf_supabase_url', SUPABASE_PROJECT_URL);
localStorage.setItem('bf_supabase_key', SUPABASE_ANON_KEY);

// Global Supabase Client
let supabaseClient = null;

// Initialize Supabase Client if library loaded
if (window.supabase) {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);
    console.log('⚡ Supabase Conectado com sucesso:', SUPABASE_PROJECT_URL);
  } catch (e) {
    console.warn('Erro ao inicializar Supabase:', e);
  }
}

// Default Tenants Data (Fallback / Demo Mock DB com Múltiplas Avaliações Rotativas)
const mockTenants = {
  pizzariacentral: {
    id: 'comp-1',
    name: 'Pizzaria Central',
    slug: 'pizzariacentral',
    logo: '🍕',
    banner: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800',
    primaryColor: '#ef4444',
    whatsapp: '5511999991111',
    vipGroupUrl: 'https://chat.whatsapp.com/demoPizzariaCentralVIP',
    instagram: '@pizzariacentral',
    bio: 'Pizza artesanal feita para você ❤️ • Massa de fermentação natural',
    address: 'Rua das Flores, 123 - Centro',
    hours: '18:00 às 23:30',
    isOpen: true,
    campaignTitle: '🎁 10% OFF no 1º Pedido',
    couponCode: 'PIZZA10',
    rating: '4.9 ★★★★★ (320 avaliações no Google)',
    testimonials: [
      '"A melhor pizza da cidade! Chegou super quente em 25 minutos. ⭐⭐⭐⭐⭐ - Ana S."',
      '"Massa leve de fermentação natural e ingredientes de primeira! ⭐⭐⭐⭐⭐ - Marcos V."',
      '"Atendimento nota 10 no WhatsApp e a pizza 4 queijos é surreal! ⭐⭐⭐⭐⭐ - Camila R."'
    ],
    payments: ['⚡ Pix', '💳 Cartão de Crédito/Débito', '🍔 Vale Refeição (VR/Alelo)', '💵 Dinheiro'],
    highlights: [
      { name: '🍕 Pizza Suprema Especial', price: 'R$ 54,90', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400' },
      { name: '🍕 Quatro Queijos Cremosa', price: 'R$ 49,90', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400' },
      { name: '🥤 Combo Família + Guaraná', price: 'R$ 79,90', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' }
    ]
  },
  lojamarina: {
    id: 'comp-2',
    name: 'Loja Marina Moda',
    slug: 'lojamarina',
    logo: '👗',
    banner: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    primaryColor: '#ec4899',
    whatsapp: '5511999992222',
    vipGroupUrl: 'https://chat.whatsapp.com/demoLojaMarinaVIP',
    instagram: '@lojamarinamoda',
    bio: 'Moda feminina contemporânea • Entrega para todo o Brasil 🛍️',
    address: 'Av. Paulista, 1500 - Bela Vista',
    hours: '09:00 às 19:00',
    isOpen: true,
    campaignTitle: '💖 15% OFF na Nova Coleção',
    couponCode: 'MARINA15',
    rating: '4.8 ★★★★★ (190 avaliações)',
    testimonials: [
      '"Peças lindas e o tecido é maravilhoso! Atendimento nota 10. ⭐⭐⭐⭐⭐ - Mariana K."',
      '"Comprei e chegou no dia seguinte bem embalado e com brinde! ⭐⭐⭐⭐⭐ - Beatriz L."',
      '"Caimento perfeito nas roupas. Recomendo muito a loja! ⭐⭐⭐⭐⭐ - Fernanda P."'
    ],
    payments: ['⚡ Pix com 5% OFF', '💳 Cartão até 6x sem juros', '💵 Dinheiro'],
    highlights: [
      { name: '👗 Vestido Linho Floral', price: 'R$ 189,90', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400' },
      { name: '👚 Blusa Seda Elegance', price: 'R$ 119,90', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400' },
      { name: '👜 Bolsa Couro Eco VIP', price: 'R$ 149,90', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400' }
    ]
  },
  barbeariax: {
    id: 'comp-3',
    name: 'Barbearia Alfa',
    slug: 'barbeariax',
    logo: '💈',
    banner: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800',
    primaryColor: '#3b82f6',
    whatsapp: '5511999993333',
    vipGroupUrl: 'https://chat.whatsapp.com/demoBarbeariaAlfaVIP',
    instagram: '@barbeariaalfa',
    bio: 'Corte tradicional & barba com toalha quente ✂️🍺',
    address: 'Rua Augusta, 450 - Consolação',
    hours: '10:00 às 20:00',
    isOpen: false,
    campaignTitle: '💈 Corte + Barba com R$ 15 OFF',
    couponCode: 'ALFA15',
    rating: '5.0 ★★★★★ (410 avaliações)',
    testimonials: [
      '"Melhor barbearia de SP. Cerveja trincando e corte impecável! ⭐⭐⭐⭐⭐ - Carlos H."',
      '"Toalha quente na barba é um diferencial sensacional. ⭐⭐⭐⭐⭐ - Felipe T."',
      '"Profissionais excelentes, ambiente massa e atendimento pontual. ⭐⭐⭐⭐⭐ - Rodrigo M."'
    ],
    payments: ['⚡ Pix', '💳 Cartão de Crédito/Débito', '💵 Dinheiro'],
    highlights: [
      { name: '✂️ Corte Alfa + Barba', price: 'R$ 75,00', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400' },
      { name: '💈 Barba Toalha Quente', price: 'R$ 45,00', img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400' },
      { name: '🧴 Pomada Modeladora Alfa', price: 'R$ 39,90', img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400' }
    ]
  }
};

// State Variables
let currentTenant = mockTenants['pizzariacentral'];
let currentCustomer = null;
let currentTestimonialIndex = 0;
let testimonialTimer = null;

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  detectSlugAndLoadTenant();
  loadCustomerSession();
  renderTenantUI();
  startTestimonialRotation();

  // Check if opened via QR Code
  const urlParams = new URLSearchParams(window.location.search);
  const src = urlParams.get('src');
  if (src === 'qrcode' || src === 'qrcode_balcao') {
    handleQrCodeScan();
  }
});

// Detect Tenant Slug from URL path or default to pizzariacentral
function detectSlugAndLoadTenant() {
  const path = window.location.pathname.replace('/', '').trim();
  if (path && mockTenants[path]) {
    currentTenant = mockTenants[path];
  } else {
    currentTenant = mockTenants['pizzariacentral'];
  }
}

// Switch Tenant manually from toolbar
function switchTenant(slug) {
  if (mockTenants[slug]) {
    currentTenant = mockTenants[slug];
    currentTestimonialIndex = 0;
    loadCustomerSession();
    renderTenantUI();
    startTestimonialRotation();
  }
}

// Render Public Tenant Page UI
function renderTenantUI() {
  document.documentElement.style.setProperty('--tenant-primary', currentTenant.primaryColor);
  document.documentElement.style.setProperty('--tenant-glow', `${currentTenant.primaryColor}33`);

  document.title = `${currentTenant.name} | Central de Ofertas & Bio`;
  setElementText('tenant-logo', currentTenant.logo);
  setElementText('tenant-name', currentTenant.name);
  setElementText('tenant-bio', currentTenant.bio);
  setElementText('tenant-address', currentTenant.address);
  setElementText('tenant-hours', currentTenant.hours);
  setElementText('campaign-title', currentTenant.campaignTitle);
  setElementText('coupon-code-display', currentTenant.couponCode);
  setElementText('tenant-rating', currentTenant.rating);
  
  if (currentTenant.testimonials && currentTenant.testimonials.length > 0) {
    setElementText('tenant-testimonial', currentTenant.testimonials[currentTestimonialIndex]);
  }

  const bannerImg = document.getElementById('tenant-banner-img');
  if (bannerImg) bannerImg.src = currentTenant.banner;

  const statusPill = document.getElementById('tenant-status-pill');
  const btnWhatsapp = document.getElementById('btn-main-whatsapp');

  if (currentTenant.isOpen) {
    if (statusPill) {
      statusPill.className = 'status-pill open';
      statusPill.innerHTML = '<span class="status-dot"></span> 🟢 Estamos Abertos Agora!';
    }
    if (btnWhatsapp) {
      btnWhatsapp.innerHTML = '💬 FAZER PEDIDO NO WHATSAPP';
    }
  } else {
    if (statusPill) {
      statusPill.className = 'status-pill closed';
      statusPill.innerHTML = '<span class="status-dot"></span> 🔴 Fechado no Momento';
    }
    if (btnWhatsapp) {
      btnWhatsapp.innerHTML = '💬 DEIXAR MENSAGEM NO WHATSAPP';
    }
  }

  renderPaymentPills();
  renderHighlights();
  checkCustomerWalletDisplay();
}

/* --------------------------------------------------------------------------
   Rotator de Avaliações / Depoimentos
   -------------------------------------------------------------------------- */
function startTestimonialRotation() {
  if (testimonialTimer) clearInterval(testimonialTimer);

  testimonialTimer = setInterval(() => {
    if (currentTenant.testimonials && currentTenant.testimonials.length > 1) {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % currentTenant.testimonials.length;
      const el = document.getElementById('tenant-testimonial');
      if (el) {
        el.style.opacity = '0';
        setTimeout(() => {
          el.textContent = currentTenant.testimonials[currentTestimonialIndex];
          el.style.opacity = '1';
        }, 200);
      }
    }
  }, 4500);
}

function renderPaymentPills() {
  const container = document.getElementById('payments-container');
  if (!container) return;

  container.innerHTML = currentTenant.payments.map(p => `
    <span class="payment-pill">${escapeHtml(p)}</span>
  `).join('');
}

function renderHighlights() {
  const container = document.getElementById('highlights-container');
  if (!container) return;

  container.innerHTML = currentTenant.highlights.map(item => `
    <div class="highlight-card" onclick="handleHighlightClick('${escapeHtml(item.name)}')">
      <img src="${item.img}" class="highlight-img" alt="${escapeHtml(item.name)}">
      <div class="highlight-body">
        <div class="highlight-title">${escapeHtml(item.name)}</div>
        <div class="highlight-price">${escapeHtml(item.price)}</div>
      </div>
    </div>
  `).join('');
}

function handleHighlightClick(itemName) {
  let textMsg = `Olá ${currentTenant.name}! Vi no link da bio e quero pedir o item: *${itemName}*!`;
  if (currentCustomer && currentCustomer.name) {
    textMsg = `Olá ${currentTenant.name}! Sou o(a) cliente ${currentCustomer.name} (${currentCustomer.bairro}) e quero pedir o item: *${itemName}*!`;
  }
  const whatsappUrl = `https://wa.me/${currentTenant.whatsapp}?text=${encodeURIComponent(textMsg)}`;
  window.open(whatsappUrl, '_blank');
}

function openMapsNavigation(type) {
  const addressQuery = encodeURIComponent(currentTenant.address);
  let url = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
  if (type === 'waze') url = `https://waze.com/ul?q=${addressQuery}&navigate=yes`;
  window.open(url, '_blank');
}

function loadCustomerSession() {
  const sessionKey = `bf_customer_${currentTenant.slug}`;
  const savedData = localStorage.getItem(sessionKey);
  if (savedData) currentCustomer = JSON.parse(savedData);
  else currentCustomer = null;
}

function checkCustomerWalletDisplay() {
  const walletBadge = document.getElementById('customer-wallet-badge');
  if (!walletBadge) return;

  if (currentCustomer && currentCustomer.name) {
    walletBadge.style.display = 'block';
    walletBadge.innerHTML = `
      <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid var(--tenant-primary); padding: 0.75rem 1rem; border-radius: var(--radius-sm); margin-bottom: 1rem; text-align: center;">
        <span style="font-size: 0.85rem; color: var(--text-muted);">Bem-vindo(a) de volta,</span>
        <h4 style="font-size: 1.1rem; color: var(--tenant-primary); font-weight: 800;">${escapeHtml(currentCustomer.name)} 👋</h4>
        <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.2rem;">📍 ${escapeHtml(currentCustomer.bairro || 'Endereço Cadastrado')}</p>
      </div>
    `;
  } else {
    walletBadge.style.display = 'none';
  }
}

async function handleLeadSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('lead-name').value.trim();
  const whatsapp = document.getElementById('lead-whatsapp').value.trim();
  const endereco = document.getElementById('lead-endereco').value.trim();
  const bairro = document.getElementById('lead-bairro').value.trim();
  const joinVipGroup = document.getElementById('lead-vip-check').checked;

  if (!name || !whatsapp || !bairro) return;

  currentCustomer = {
    name,
    whatsapp,
    endereco,
    bairro,
    joinVipGroup,
    claimedCoupon: currentTenant.couponCode,
    registeredAt: new Date().toISOString()
  };

  const sessionKey = `bf_customer_${currentTenant.slug}`;
  localStorage.setItem(sessionKey, JSON.stringify(currentCustomer));

  // Save to Supabase Cloud Database if client connected
  if (supabaseClient) {
    try {
      await supabaseClient.from('customers').insert([{
        company_id: currentTenant.id,
        name,
        whatsapp,
        address: endereco,
        bairro,
        joined_vip_group: joinVipGroup
      }]);
      console.log('⚡ Lead gravado com sucesso no Supabase!');
    } catch (e) {
      console.warn('Gravação local realizada, Supabase aguardando tabela.');
    }
  }

  checkCustomerWalletDisplay();
  showPostRegistrationSuccess();
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
    if (couponSpan) couponSpan.textContent = currentTenant.couponCode;

    const btnVip = document.getElementById('btn-action-vip-group');
    if (btnVip) {
      btnVip.onclick = () => {
        window.open(currentTenant.vipGroupUrl, '_blank');
      };
    }
  }
}

function resetLeadModalView() {
  const formContainer = document.getElementById('modal-lead-form-step');
  const successContainer = document.getElementById('modal-lead-success-step');
  if (formContainer) formContainer.style.display = 'block';
  if (successContainer) successContainer.style.display = 'none';
  closeModal('modal-cadastrar');
}

function handleSendCouponWhatsapp() {
  const textMsg = `Olá ${currentTenant.name}! Meu nome é ${currentCustomer.name} (${currentCustomer.bairro}). Fiz meu cadastro no site e quero usar meu cupom *${currentTenant.couponCode}*!`;
  const whatsappUrl = `https://wa.me/${currentTenant.whatsapp}?text=${encodeURIComponent(textMsg)}`;
  window.open(whatsappUrl, '_blank');
}

function handleMainWhatsappClick() {
  let textMsg = `Olá ${currentTenant.name}! Vim pelo link do Instagram e gostaria de atendimento.`;
  if (currentCustomer && currentCustomer.name) {
    textMsg = `Olá ${currentTenant.name}! Sou o(a) cliente ${currentCustomer.name} (${currentCustomer.bairro}) e vim pelo link do Instagram.`;
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

/* ==========================================================================
   QR Code Registration Flow
   ========================================================================== */

function handleQrCodeScan() {
  if (currentCustomer && currentCustomer.qrValidated) {
    document.getElementById('qr-val-name').textContent = currentCustomer.name || 'Cliente';
    const qrValDate = document.getElementById('qr-val-date');
    if (qrValDate) qrValDate.textContent = new Date().toLocaleDateString('pt-BR');
    
    openModal('modal-qr-already-validated');
  } else {
    // Reset steps
    document.getElementById('modal-qr-form-step').style.display = 'block';
    document.getElementById('modal-qr-success-step').style.display = 'none';
    openModal('modal-qr-cadastrar');
  }
}

async function handleQrSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('qr-name').value.trim();
  const whatsapp = document.getElementById('qr-whatsapp').value.trim();
  const cep = document.getElementById('qr-cep').value.trim();

  if (!name || !whatsapp || !cep) return;

  currentCustomer = {
    name,
    whatsapp,
    cep,
    source: 'qrcode_sorteio',
    qrValidated: true,
    registeredAt: new Date().toISOString()
  };

  const sessionKey = `bf_customer_${currentTenant.slug}`;
  localStorage.setItem(sessionKey, JSON.stringify(currentCustomer));

  // Save to Supabase Cloud Database if client connected
  if (window.supabaseClient) {
    try {
      await window.supabaseClient.from('customers').insert([{
        company_id: currentTenant.id,
        name,
        whatsapp,
        bairro: cep,
        source: 'qrcode_sorteio'
      }]);
    } catch (e) {
      console.error('Supabase QR Insert Error', e);
    }
  }

  // Hide form, show success
  document.getElementById('modal-qr-form-step').style.display = 'none';
  document.getElementById('modal-qr-success-step').style.display = 'block';
}

function handleQrInstagramFollow() {
  const igHandle = currentTenant.instagram || 'instagram';
  const igUrl = `https://instagram.com/${igHandle.replace('@', '')}`;
  window.open(igUrl, '_blank');
  
  setTimeout(() => {
    closeModal('modal-qr-cadastrar');
  }, 1000);
}
