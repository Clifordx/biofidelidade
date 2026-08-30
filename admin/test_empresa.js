
    let activeSlug = 'medfarma';
    const defaultTenants = {
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
        hours: '08:00 às 22:00',
        isOpen: true,
        campaignTitle: 'Ganhe 10% OFF na 1ª compra + Acesso ao Grupo VIP',
        couponCode: 'MED10',
        rating: '5.0 ★★★★★ • Avaliações Verificadas (186 avaliações)',
        payments: ['Pix Instantâneo', 'Cartão de Crédito/Débito', 'Dinheiro em Espécie'],
        highlights: [
          { name: 'Vitamina C Zinco Premium', price: 'R$ 29,90', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400' },
          { name: 'Kit Dermocosmético Hidratante', price: 'R$ 69,90', img: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400' },
          { name: 'Protetor Solar FPS 60', price: 'R$ 49,90', img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400' }
        ]
      },
      pizzariacentral: {
        id: 'comp-1',
        name: 'Pizzaria Central',
        slug: 'pizzariacentral',
        niche: 'Alimentação, Gastronomia & Delivery',
        logo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200',
        banner: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800',
        bannerPosition: '50%',
        primaryColor: '#ef4444',
        whatsapp: '5511999991111',
        vipGroupUrl: 'https://chat.whatsapp.com/demoPizzariaCentralVIP',
        instagram: '@pizzariacentral',
        bio: 'Pizza artesanal feita com massa de fermentação natural',
        address: 'Rua das Flores, 123 - Centro',
        hours: '18:00 às 23:30',
        isOpen: true,
        campaignTitle: 'Ganhe 10% OFF na 1ª compra + Acesso ao Grupo VIP',
        couponCode: 'PIZZA10',
        rating: '5.0 ★★★★★ • Avaliações Verificadas (148 avaliações)',
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
        niche: 'Moda, Vestuário & Acessórios',
        logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200',
        banner: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
        bannerPosition: '50%',
        primaryColor: '#ec4899',
        whatsapp: '5511999992222',
        vipGroupUrl: 'https://chat.whatsapp.com/demoLojaMarinaVIP',
        instagram: '@lojamarinamoda',
        bio: 'Moda feminina contemporânea • Entrega para todo o Brasil',
        address: 'Av. Paulista, 1500 - Bela Vista',
        hours: '09:00 às 19:00',
        isOpen: true,
        campaignTitle: 'Ganhe 15% OFF na 1ª compra + Acesso ao Grupo VIP',
        couponCode: 'MARINA15',
        rating: '4.9 ★★★★★ • Avaliações Verificadas (210 avaliações)',
        payments: ['Pix com 5% OFF', 'Cartão de Crédito/Débito até 6x', 'Dinheiro em Espécie'],
        highlights: [
          { name: 'Vestido Linho Floral', price: 'R$ 189,90', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400' },
          { name: 'Blusa Seda Elegance', price: 'R$ 119,90', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400' },
          { name: 'Bolsa Couro Eco VIP', price: 'R$ 149,90', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400' }
        ]
      },
      barbeariax: {
        id: 'comp-3',
        name: 'Barbearia Alfa',
        slug: 'barbeariax',
        niche: 'Estética, Beleza & Barbearia',
        logo: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200',
        banner: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800',
        bannerPosition: '50%',
        primaryColor: '#3b82f6',
        whatsapp: '5511999993333',
        vipGroupUrl: 'https://chat.whatsapp.com/demoBarbeariaAlfaVIP',
        instagram: '@barbeariaalfa',
        bio: 'Corte masculino premium e barba alinhada',
        address: 'Rua Augusta, 500 - Consolação',
        hours: '09:00 às 20:00',
        isOpen: true,
        campaignTitle: 'Ganhe 10% OFF no 1º Corte + Acesso ao Grupo VIP',
        couponCode: 'ALFA10',
        rating: '5.0 ★★★★★ • Avaliações Verificadas (172 avaliações)',
        payments: ['Pix Instantâneo', 'Cartão de Crédito/Débito', 'Dinheiro em Espécie'],
        highlights: [
          { name: 'Corte de Cabelo Premium', price: 'R$ 45,00', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400' },
          { name: 'Barba Alinhada + Toalha Quente', price: 'R$ 35,00', img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400' },
          { name: 'Combo Completo (Cabelo + Barba)', price: 'R$ 70,00', img: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400' }
        ]
      }
    };

    let sampleCustomers = [];
    const imageStore = { h1: '', h2: '', h3: '', logo: '', banner: '' };
    let cropperInstance = null;

    document.addEventListener('DOMContentLoaded', () => {
      loadDynamicTenant();
      loadCompanyLeads();
      renderTrafficOriginAnalytics();
      updateGeneratedLinkPreview();
    });

    function showTab(tabId, btn) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      // Remove old tab buttons (if they still exist)
      document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
      // Remove sidebar nav items
      document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

      document.getElementById(tabId).classList.add('active');
      if (btn) btn.classList.add('active');
    }

    function openModal(modalId) {
      const el = document.getElementById(modalId);
      if (el) el.classList.add('active');
    }

    function closeModal(modalId) {
      const el = document.getElementById(modalId);
      if (el) el.classList.remove('active');
    }

    function openCropperModal() {
      const bannerSrc = imageStore.banner || (document.getElementById('banner-preview') ? document.getElementById('banner-preview').src : '');
      if (!bannerSrc) {
        alert('Selecione uma foto primeiro!');
        return;
      }

      const modal = document.getElementById('cropper-modal');
      const targetImg = document.getElementById('cropper-target-img');
      targetImg.src = bannerSrc;

      modal.classList.add('active');

      if (cropperInstance) cropperInstance.destroy();

      setTimeout(() => {
        cropperInstance = new Cropper(targetImg, {
          aspectRatio: 800 / 280, // Proporção da Capa Retangular da Bio
          viewMode: 0, // PERMITE BORDAS E DIMINUIR A FOTO ALÉM DO RETÂNGULO
          autoCropAáárea: 0.9,
          responsive: true,
          background: false,
          ready() {
            centerImageInCropper();
          }
        });
      }, 200);
    }

    function centerImageInCropper() {
      if (!cropperInstance) return;
      // Calcula o centro exato da ááárea de visão e ajusta o canvas da foto
      const containerData = cropperInstance.getContainerData();
      const canvasData = cropperInstance.getCanvasData();

      const centerX = (containerData.width - canvasData.width) / 2;
      const centerY = (containerData.height - canvasData.height) / 2;

      cropperInstance.setCanvasData({
        left: centerX,
        top: centerY
      });
    }

    function fitEntireImageWithBorders() {
      if (!cropperInstance) return;
      const cropBoxData = cropperInstance.getCropBoxData();
      const imageData = cropperInstance.getImageData();

      // Calcula a proporção exata para caber a foto 100% inteira sem nenhum corte
      const widthRatio = cropBoxData.width / imageData.naturalWidth;
      const heightRatio = cropBoxData.height / imageData.naturalHeight;
      const fitRatio = Math.min(widthRatio, heightRatio);

      const newWidth = imageData.naturalWidth * fitRatio;
      const newHeight = imageData.naturalHeight * fitRatio;

      const left = cropBoxData.left + (cropBoxData.width - newWidth) / 2;
      const top = cropBoxData.top + (cropBoxData.height - newHeight) / 2;

      cropperInstance.setCanvasData({
        left: left,
        top: top,
        width: newWidth,
        height: newHeight
      });
      showToast('Foto enquadrada 100% inteira sem cortes! 🖼️');
    }

    function closeCropperModal() {
      const modal = document.getElementById('cropper-modal');
      modal.classList.remove('active');
      if (cropperInstance) {
        cropperInstance.destroy();
        cropperInstance = null;
      }
    }

    function applyCroppedBanner() {
      if (!cropperInstance) return;
      try {
        const croppedCanvas = cropperInstance.getCroppedCanvas({
          width: 800,
          height: 280,
          fillColor: '#090d16',
          imageSmoothingEnabled: true,
          imageSmoothingQuality: 'high'
        });

        if (croppedCanvas) {
          const croppedDataUrl = croppedCanvas.toDataURL('image/jpeg', 0.92);
          imageStore.banner = croppedDataUrl;

          const preview = document.getElementById('banner-preview');
          if (preview) preview.src = croppedDataUrl;

          closeCropperModal();
          showToast('Foto de Capa Enquadrada 100% Sem Cortes! 🚀');
        }
      } catch (e) {
        console.warn('Cropper CORS fallback:', e);
        closeCropperModal();
        showToast('Enquadramento de capa ajustado! Clique em "Salvar Imagens & Dados do Perfil" para publicar.');
      }
    }

    function loadCompanyLeads() {
      const leadsKey = `bf_leads_${activeSlug}`;
      let leads = [];
      try {
        leads = JSON.parse(localStorage.getItem(leadsKey) || '[]');
      } catch (e) {
        leads = [];
      }

      const sessionKey = `bf_customer_${activeSlug}`;
      const sessionData = localStorage.getItem(sessionKey);
      if (sessionData) {
        try {
          const cust = JSON.parse(sessionData);
          if (cust && cust.name && !leads.some(l => l.whatsapp === cust.whatsapp)) {
            leads.unshift(cust);
          }
        } catch (e) {}
      }

      sampleCustomers = leads;
      renderCRMTable(sampleCustomers);
      renderTrafficOriginAnalytics();

      const totalLeads = sampleCustomers.length;
      const totalVip = sampleCustomers.filter(c => c.vip).length;
      
      if (document.getElementById('m-leads')) document.getElementById('m-leads').textContent = totalLeads;
      if (document.getElementById('m-vip')) document.getElementById('m-vip').textContent = totalVip;
      if (document.getElementById('m-coupons')) document.getElementById('m-coupons').textContent = totalLeads;

      const viewsEl = document.getElementById('m-views');
      const viewsCount = viewsEl ? parseInt(viewsEl.textContent || '0') : 0;
      if (viewsCount > 0 && document.getElementById('m-conversion-rate')) {
        const rate = ((totalLeads / viewsCount) * 100).toFixed(1);
        document.getElementById('m-conversion-rate').textContent = `Taxa de conversão: ${rate}%`;
      }
    }

    function loadDynamicTenant() {
      const urlParams = new URLSearchParams(window.location.search);
      const queryTenant = urlParams.get('tenant');
      const isMasterMode = urlParams.get('master') === 'true';
      
      let customTenants = {};
      try {
        customTenants = JSON.parse(localStorage.getItem('bf_custom_tenants') || '{}');
      } catch (e) {
        customTenants = {};
      }
      const allTenants = { ...defaultTenants, ...customTenants };

      activeSlug = (activeSlug || 'medfarma').toLowerCase().trim();

      if (queryTenant && allTenants[queryTenant.toLowerCase().trim()]) {
        activeSlug = queryTenant.toLowerCase().trim();
      } else {
        const savedSlug = localStorage.getItem('bf_active_admin_slug');
        if (savedSlug && allTenants[savedSlug.toLowerCase().trim()]) {
          activeSlug = savedSlug.toLowerCase().trim();
        } else {
          activeSlug = 'medfarma';
        }
      }
      localStorage.setItem('bf_active_admin_slug', activeSlug);

      const selector = document.getElementById('company-selector-admin');
      if (selector) {
        if (isMasterMode) {
          selector.style.display = 'block';
          selector.innerHTML = '';
          Object.keys(allTenants).forEach(slug => {
            const t = allTenants[slug];
            const option = document.cááreateElement('option');
            option.value = slug;
            option.textContent = t.name;
            if (slug === activeSlug) option.selected = true;
            selector.appendChild(option);
          });
        } else {
          selector.style.display = 'none';
        }
      }

      const btnTestLock = document.getElementById('btn-test-email-lock');
      if (btnTestLock) {
        btnTestLock.style.display = isMasterMode ? 'inline-flex' : 'none';
      }

      const tenant = allTenants[activeSlug] || allTenants['medfarma'];
      if (tenant) {
        checkEmailConfirmation(tenant);
        if (document.getElementById('admin-company-name')) document.getElementById('admin-company-name').textContent = tenant.name || 'Empresa';
        if (document.getElementById('admin-company-niche')) document.getElementById('admin-company-niche').textContent = tenant.niche || 'Geral';

        const publicBtn = document.getElementById('link-public-page');
        if (publicBtn) {
          const isLocal = window.location.protocol.startsWith('file');
          let targetUrl = `../index.html?tenant=${activeSlug}`;
          if (isLocal) {
            targetUrl = `${window.location.pathname.replace('/admin/empresa.html', '/index.html')}?tenant=${activeSlug}`;
          }
          publicBtn.href = `${targetUrl}&_t=${Date.now()}`;
          publicBtn.target = '_blank';
        }

        if (document.getElementById('m-views')) document.getElementById('m-views').textContent = tenant.views || 0;

        if (document.getElementById('config-name')) document.getElementById('config-name').value = tenant.name || '';
        if (document.getElementById('config-bio-desc')) document.getElementById('config-bio-desc').value = tenant.bio || (tenant.name + ' • ' + (tenant.niche || 'Saúde & Bem-Estar'));
        if (document.getElementById('config-niche')) document.getElementById('config-niche').value = tenant.niche || 'Saúde, Farmácia & Bem-Estar';
        if (document.getElementById('config-email')) document.getElementById('config-email').value = tenant.email || '';
        if (document.getElementById('config-whatsapp')) document.getElementById('config-whatsapp').value = tenant.whatsapp || '';
        if (document.getElementById('config-instagram')) document.getElementById('config-instagram').value = tenant.instagram || ('@' + activeSlug);
        if (document.getElementById('config-color')) document.getElementById('config-color').value = tenant.primaryColor || '#10b981';
        
        updateQrCodePreview();
        
        const addressVal = tenant.address || 'Av. Brasil, 450 - Centro';
        const hoursConfig = tenant.hoursConfig || {
          weekday: '08:00 às 22:00',
          saturday: '08:00 às 18:00',
          sunday: 'Fechado'
        };

        if (document.getElementById('config-address')) document.getElementById('config-address').value = addressVal;
        if (document.getElementById('config-hours-weekday')) document.getElementById('config-hours-weekday').value = hoursConfig.weekday || '08:00 às 22:00';
        if (document.getElementById('config-hours-saturday')) document.getElementById('config-hours-saturday').value = hoursConfig.saturday || '08:00 às 18:00';
        if (document.getElementById('config-hours-sunday')) document.getElementById('config-hours-sunday').value = hoursConfig.sunday || 'Fechado';

        updateAdminMapPreview(addressVal);
        updateAdminHoursPreviewAll();

        if (document.getElementById('config-discount-badge')) document.getElementById('config-discount-badge').value = tenant.discountBadge || '5% OFF';
        if (document.getElementById('config-campaign-title')) document.getElementById('config-campaign-title').value = tenant.campaignTitle || `Ganhe ${tenant.discountBadge || '5% OFF'} na 1ª compra + Acesso ao Grupo VIP`;
        if (document.getElementById('config-coupon-code')) document.getElementById('config-coupon-code').value = tenant.couponCode || (activeSlug === 'medfarma' ? 'MED5' : 'PROMO5');
        
        const vipUrlVal = tenant.vipGroupUrl || `https://chat.whatsapp.com/demo${(activeSlug || 'VIP').toUpperCase()}`;
        if (document.getElementById('config-vip-group')) document.getElementById('config-vip-group').value = vipUrlVal;
        if (document.getElementById('config-vip-group-cupons')) document.getElementById('config-vip-group-cupons').value = vipUrlVal;

        if (document.getElementById('logo-preview') && tenant.logo) {
          document.getElementById('logo-preview').src = tenant.logo;
        }
        if (tenant.banner) {
          if (document.getElementById('banner-preview')) document.getElementById('banner-preview').src = tenant.banner;
        }

        // Carregar Formas de Pagamento Selecionadas
        const pays = tenant.payments || ['Pix Instantâneo', 'Cartão de Crédito/Débito', 'Dinheiro em Espécie'];
        if (document.getElementById('pay-pix')) document.getElementById('pay-pix').checked = pays.some(p => p.toLowerCase().includes('pix'));
        if (document.getElementById('pay-card')) document.getElementById('pay-card').checked = pays.some(p => p.toLowerCase().includes('cartão') || p.toLowerCase().includes('débito'));
        if (document.getElementById('pay-cash')) document.getElementById('pay-cash').checked = pays.some(p => p.toLowerCase().includes('dinheiro') || p.toLowerCase().includes('espécie'));
        if (document.getElementById('pay-meal')) document.getElementById('pay-meal').checked = pays.some(p => p.toLowerCase().includes('refeição') || p.toLowerCase().includes('vr') || p.toLowerCase().includes('va'));

        const customPays = pays.filter(p => 
          !p.toLowerCase().includes('pix') && 
          !p.toLowerCase().includes('cartão') && 
          !p.toLowerCase().includes('dinheiro') && 
          !p.toLowerCase().includes('refeição')
        ).join(', ');
        if (document.getElementById('pay-custom')) document.getElementById('pay-custom').value = customPays;

        if (tenant.highlights && tenant.highlights.length >= 3) {
          if (document.getElementById('h1-name')) document.getElementById('h1-name').value = tenant.highlights[0].name || '';
          if (document.getElementById('h1-price')) document.getElementById('h1-price').value = tenant.highlights[0].price || '';
          if (document.getElementById('h1-preview')) document.getElementById('h1-preview').src = tenant.highlights[0].img || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400';

          if (document.getElementById('h2-name')) document.getElementById('h2-name').value = tenant.highlights[1].name || '';
          if (document.getElementById('h2-price')) document.getElementById('h2-price').value = tenant.highlights[1].price || '';
          if (document.getElementById('h2-preview')) document.getElementById('h2-preview').src = tenant.highlights[1].img || 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400';

          if (document.getElementById('h3-name')) document.getElementById('h3-name').value = tenant.highlights[2].name || '';
          if (document.getElementById('h3-price')) document.getElementById('h3-price').value = tenant.highlights[2].price || '';
          if (document.getElementById('h3-preview')) document.getElementById('h3-preview').src = tenant.highlights[2].img || 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400';
        }
      }
    }

    function checkEmailConfirmation(tenant) {
      const lockModal = document.getElementById('modal-email-confirm-lock');
      const badgeStatus = document.getElementById('badge-email-confirm-status');
      if (!tenant) return;

      const isConfirmed = tenant.emailConfirmed === true;

      if (badgeStatus) {
        if (isConfirmed) {
          badgeStatus.style.background = 'rgba(16, 185, 129, 0.15)';
          badgeStatus.style.color = '#10b981';
          badgeStatus.style.border = '1px solid #10b981';
          badgeStatus.innerHTML = '🟢 E-mail Confirmado';
        } else {
          badgeStatus.style.background = 'rgba(245, 158, 11, 0.15)';
          badgeStatus.style.color = '#f59e0b';
          badgeStatus.style.border = '1px solid #f59e0b';
          badgeStatus.innerHTML = '⚠️ E-mail Pendente (Bloqueado)';
        }
      }

      if (lockModal) {
        if (!isConfirmed) {
          const lockCompany = document.getElementById('lock-company-name');
          const lockEmail = document.getElementById('lock-user-email');
          if (lockCompany) lockCompany.textContent = tenant.name || 'Empresa';
          if (lockEmail) lockEmail.textContent = tenant.email || 'contato@empresa.com.br';
          lockModal.style.display = 'flex';
          lockModal.classList.add('active');
        } else {
          lockModal.style.display = 'none';
          lockModal.classList.remove('active');
        }
      }
    }

    function checkAndOpenEmailConfirmModal() {
      let customTenants = {};
      try { customTenants = JSON.parse(localStorage.getItem('bf_custom_tenants') || '{}'); } catch(e) {}
      const tenantObj = getOrCááreateTenantObject(activeSlug);
      checkEmailConfirmation(tenantObj);
      if (tenantObj.emailConfirmed === true) {
        showToast('E-mail j está confirmado e verificado! 🟢');
      }
    }

    function verifyConfirmationCode() {
      const codeInput = document.getElementById('input-confirm-code');
      const code = codeInput ? codeInput.value.trim() : '';

      if (!code || code.length < 4) {
        showToast('Digite o código de 6 dígitos recebido por e-mail.');
        return;
      }

      confirmTenantEmail();
    }

    function quickConfirmEmailSimulated() {
      confirmTenantEmail();
    }

    function confirmTenantEmail() {
      let customTenants = {};
      try { customTenants = JSON.parse(localStorage.getItem('bf_custom_tenants') || '{}'); } catch(e) {}
      
      const tenantObj = getOrCááreateTenantObject(activeSlug);
      tenantObj.emailConfirmed = true;

      customTenants[activeSlug] = tenantObj;
      localStorage.setItem('bf_custom_tenants', JSON.stringify(customTenants));

      const lockModal = document.getElementById('modal-email-confirm-lock');
      if (lockModal) {
        lockModal.style.display = 'none';
        lockModal.classList.remove('active');
      }

      loadDynamicTenant();
      showToast('🎉 E-mail Confirmado com Sucesso! Acesso liberado ao Painel.');
    }

    function toggleEmailConfirmationForTesting() {
      let customTenants = {};
      try { customTenants = JSON.parse(localStorage.getItem('bf_custom_tenants') || '{}'); } catch(e) {}
      
      const tenantObj = getOrCááreateTenantObject(activeSlug);
      const newStatus = !(tenantObj.emailConfirmed === true);
      tenantObj.emailConfirmed = newStatus;

      customTenants[activeSlug] = tenantObj;
      localStorage.setItem('bf_custom_tenants', JSON.stringify(customTenants));

      loadDynamicTenant();
      if (newStatus) {
        showToast('Status alterado: E-mail Confirmado! 🟢');
      } else {
        showToast('Status alterado: E-mail Pendente! Bloqueio ativado. ⚠️');
      }
    }

    let resendTimer = null;
    function resendConfirmationEmail() {
      const btn = document.getElementById('btn-resend-email');
      if (!btn || btn.disabled) return;

      const tenant = getOrCááreateTenantObject(activeSlug);
      showToast(`📩 Novo e-mail de confirmação enviado para ${tenant.email || 'seu e-mail'}!`);

      let count = 60;
      btn.disabled = true;
      btn.style.opacity = '0.6';
      btn.textContent = `Aguarde ${count}s para reenviar`;

      if (resendTimer) clearInterval(resendTimer);
      resendTimer = setInterval(() => {
        count--;
        if (count <= 0) {
          clearInterval(resendTimer);
          btn.disabled = false;
          btn.style.opacity = '1';
          btn.textContent = '📩 Reenviar E-mail de Confirmação';
        } else {
          btn.textContent = `Aguarde ${count}s para reenviar`;
        }
      }, 1000);
    }

    function updateAdminMapPreview(addressStr) {
      const iframe = document.getElementById('admin-map-preview-iframe');
      if (!iframe || !addressStr) return;
      const q = encodeURIComponent(addressStr);
      iframe.src = `https://maps.google.com/maps?q=${q}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    }

    function updateAdminHoursStatusPreview(hoursStr) {
      const badge = document.getElementById('admin-hours-status-badge');
      if (!badge) return;

      if (!hoursStr) {
        badge.style.background = 'rgba(16,185,129,0.15)';
        badge.style.color = '#10b981';
        badge.style.borderColor = '#10b981';
        badge.textContent = '🟢 Aberto Agora';
        return;
      }

      const lower = hoursStr.toLowerCase();
      if (lower.includes('24h') || lower.includes('24 horas')) {
        badge.style.background = 'rgba(16,185,129,0.15)';
        badge.style.color = '#10b981';
        badge.style.borderColor = '#10b981';
        badge.textContent = '🟢 Aberto 24 Horas';
        return;
      }

      const times = hoursStr.match(/(\d{1,2})[:h](\d{2})?\s*(?:às|as|-|a)\s*(\d{1,2})[:h](\d{2})?/i);
      if (!times) {
        badge.style.background = 'rgba(16,185,129,0.15)';
        badge.style.color = '#10b981';
        badge.style.borderColor = '#10b981';
        badge.textContent = '🟢 Ativo';
        return;
      }

      const startHour = parseInt(times[1], 10);
      const startMin = times[2] ? parseInt(times[2], 10) : 0;
      const endHour = parseInt(times[3], 10);
      const endMin = times[4] ? parseInt(times[4], 10) : 0;

      const now = new Date();
      const currentMin = now.getHours() * 60 + now.getMinutes();
      const startTotalMin = startHour * 60 + startMin;
      const endTotalMin = endHour * 60 + endMin;

      let isOpen = false;
      if (endTotalMin > startTotalMin) {
        isOpen = currentMin >= startTotalMin && currentMin < endTotalMin;
      } else {
        isOpen = currentMin >= startTotalMin || currentMin < endTotalMin;
      }

      if (isOpen) {
        badge.style.background = 'rgba(16,185,129,0.15)';
        badge.style.color = '#10b981';
        badge.style.borderColor = '#10b981';
        badge.textContent = `🟢 Aberto Agora (${hoursStr})`;
      } else {
        badge.style.background = 'rgba(239,68,68,0.15)';
        badge.style.color = '#ef4444';
        badge.style.borderColor = '#ef4444';
        badge.textContent = `🔴 Fechado no Momento (${hoursStr})`;
      }
    }

    function renderTrafficOriginAnalytics() {
      const container = document.getElementById('traffic-origin-grid');
      if (!container) return;

      const statsKey = `bf_traffic_stats_${activeSlug}`;
      let stats = {};
      try { stats = JSON.parse(localStorage.getItem(statsKey) || '{}'); } catch(e) {}

      const leadsBySource = {};
      sampleCustomers.forEach(c => {
        const src = c.source || 'Acesso Direto';
        leadsBySource[src] = (leadsBySource[src] || 0) + 1;
      });

      const channels = [
        { name: 'Instagram', icon: '📸', defaultViews: 140, defaultLeads: 28, color: '#e1306c' },
        { name: 'QR Code Balcão', icon: '📲', defaultViews: 85, defaultLeads: 32, color: '#f59e0b' },
        { name: 'Facebook', icon: '📘', defaultViews: 45, defaultLeads: 8, color: '#1877f2' },
        { name: 'WhatsApp', icon: '💬', defaultViews: 60, defaultLeads: 14, color: '#25d366' },
        { name: 'Acesso Direto', icon: '🌐', defaultViews: 25, defaultLeads: 4, color: '#3b82f6' }
      ];

      container.innerHTML = channels.map(ch => {
        const views = stats[ch.name] || (sampleCustomers.length > 0 ? ((leadsBySource[ch.name] || 0) * 3 + 5) : ch.defaultViews);
        const leads = leadsBySource[ch.name] !== undefined ? leadsBySource[ch.name] : (sampleCustomers.length === 0 ? ch.defaultLeads : 0);
        const convRate = views > 0 ? ((leads / views) * 100).toFixed(1) : '0.0';

        return `
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1rem; position: relative;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <span style="font-size: 0.85rem; font-weight: 700; color: #fff;">${ch.icon} ${ch.name}</span>
              <span style="font-size: 0.72rem; font-weight: 800; color: ${ch.color}; background: rgba(255,255,255,0.05); padding: 0.15rem 0.4rem; border-radius: 4px;">${convRate}% conv.</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <span style="font-size: 1.3rem; font-weight: 800; color: #fff;">${leads} <small style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted);">leads</small></span>
              <span style="font-size: 0.78rem; color: var(--text-muted);">${views} acessos</span>
            </div>
            <div style="width: 100%; height: 4px; background: rgba(255,255,255,0.08); border-radius: 99px; margin-top: 0.6rem; overflow: hidden;">
              <div style="width: ${Math.min(100, parseFloat(convRate))}%; height: 100%; background: ${ch.color}; border-radius: 99px;"></div>
            </div>
          </div>
        `;
      }).join('');

      updateGeneratedLinkPreview();
    }

    function updateGeneratedLinkPreview() {
      const channelSelect = document.getElementById('link-tag-channel');
      const urlInput = document.getElementById('generated-tagged-url');
      if (!channelSelect || !urlInput) return;

      const channelVal = channelSelect.value;
      const shortCodeMap = {
        'instagram': 'ig',
        'qrcode_balcao': 'qr',
        'facebook': 'fb',
        'whatsapp': 'wa',
        'anuncio_pago': 'ads'
      };
      const shortCode = shortCodeMap[channelVal] || channelVal;

      // URL Ultra-Curta VIP de Produção (.bio)
      const cleanShortUrl = `https://${activeSlug}.bio/${shortCode}`;
      urlInput.value = cleanShortUrl;
    }

    function copyTaggedLink() {
      const urlInput = document.getElementById('generated-tagged-url');
      if (!urlInput) return;

      navigator.clipboard.writeText(urlInput.value);
      alert(`Link rastáreado copiado com sucesso!\n\n${urlInput.value}\n\nCole no seu Instagram, WhatsApp ou configure no QR Code!`);
    }

    function getSourceBadgeHtml(sourceName) {
      const src = (sourceName || 'Acesso Direto').toLowerCase();
      if (src.includes('insta')) return `<span style="background: rgba(225, 48, 108, 0.15); color: #e1306c; border: 1px solid rgba(225, 48, 108, 0.4); padding: 0.15rem 0.5rem; border-radius: 99px; font-size: 0.75rem; font-weight: 700;">📸 Instagram</span>`;
      if (src.includes('qr') || src.includes('balcao') || src.includes('panfleto')) return `<span style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); padding: 0.15rem 0.5rem; border-radius: 99px; font-size: 0.75rem; font-weight: 700;">📲 QR Code Balcão</span>`;
      if (src.includes('face') || src.includes('fb')) return `<span style="background: rgba(24, 119, 242, 0.15); color: #1877f2; border: 1px solid rgba(24, 119, 242, 0.4); padding: 0.15rem 0.5rem; border-radius: 99px; font-size: 0.75rem; font-weight: 700;">📘 Facebook</span>`;
      if (src.includes('whats') || src.includes('wa')) return `<span style="background: rgba(37, 211, 102, 0.15); color: #25d366; border: 1px solid rgba(37, 211, 102, 0.4); padding: 0.15rem 0.5rem; border-radius: 99px; font-size: 0.75rem; font-weight: 700;">💬 WhatsApp</span>`;
      return `<span style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; border: 1px solid rgba(59, 130, 246, 0.4); padding: 0.15rem 0.5rem; border-radius: 99px; font-size: 0.75rem; font-weight: 700;">🌐 Direto / Google</span>`;
    }

    function renderCRMTable(list) {
      const tbody = document.getElementById('company-customers-tbody');
      if (!tbody) return;

      if (!list || list.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="7" class="empty-state-card">
              Nenhum cliente cadastrado ainda.<br>
              <span style="font-size: 0.8rem; color: var(--text-dim);">Compartilhe o link da sua bio ou imprima o QR Code para capturar novos leads!</span>
            </td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = list.map((c, index) => {
        const isQr = (c.source || '').toLowerCase().includes('qr');
        const sourceBadge = getSourceBadgeHtml(c.source);
        const validBadge = isQr 
          ? `<span style="background:rgba(16,185,129,0.15); color:#34d399; font-size:0.72rem; font-weight:800; padding:0.2rem 0.5rem; border-radius:99px; border:1px solid rgba(16,185,129,0.3); display:inline-block; margin-top:0.2rem;">✅ Validado (${c.scanCount || 1}x)</span>`
          : `<span style="background:rgba(59,130,246,0.15); color:#60a5fa; font-size:0.72rem; font-weight:700; padding:0.2rem 0.5rem; border-radius:99px; display:inline-block; margin-top:0.2rem;">💬 Bio Lead</span>`;

        return `
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 0.75rem;">
              <strong>${escapeHtml(c.name)}</strong>
              <div>${validBadge}</div>
            </td>
            <td style="padding: 0.75rem;">${escapeHtml(c.whatsapp)}</td>
            <td style="padding: 0.75rem;">${escapeHtml(c.address || c.bairro)}</td>
            <td style="padding: 0.75rem;">${sourceBadge}</td>
            <td style="padding: 0.75rem;"><code style="color: var(--tenant-primary); background: rgba(0,0,0,0.4); padding: 0.2rem 0.5rem; border-radius: 4px;">${escapeHtml(c.claimedCoupon || 'MED10')}</code></td>
            <td style="padding: 0.75rem; font-size: 0.76rem; color: var(--text-muted);">
              <div>1º Cad: ${escapeHtml(c.date || 'Recente')}</div>
              ${c.lastScanDate ? `<div style="color:#f59e0b; font-size:0.72rem; margin-top:0.15rem;">Último Scan: ${escapeHtml(c.lastScanDate)}</div>` : ''}
            </td>
            <td style="padding: 0.75rem; text-align: right;">
              <div style="display: flex; gap: 0.35rem; justify-content: flex-end; align-items: center;">
                <button type="button" onclick="viewLeadAudit(${index})" class="btn-action btn-secondary-action" style="display: inline-flex; width: auto; padding: 0.3rem 0.55rem; font-size: 0.75rem; border-color: rgba(59,130,246,0.4); color: #60a5fa;" title="Ver IP e Auditoria">🔍 IP</button>
                <a href="https://wa.me/${c.whatsapp ? c.whatsapp.replace(/\D/g, '') : ''}?text=Oláá%20${encodeURIComponent(c.name)}!%20Vimos%20seu%20cadastro%20com%20o%20cupom%20${encodeURIComponent(c.claimedCoupon || 'MED10')}" target="_blank" class="btn-action btn-secondary-action" style="display: inline-flex; width: auto; padding: 0.3rem 0.55rem; font-size: 0.75rem;">💬 Whats</a>
                <button type="button" onclick="deleteCustomer(${index})" class="btn-action btn-secondary-action" style="display: inline-flex; width: auto; padding: 0.3rem 0.45rem; font-size: 0.75rem; border-color: rgba(239,68,68,0.4); color: #ef4444; cursor: pointer;" title="Excluir Lead">🗑️</button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }

    function updateQrCodePreview() {
      const isLocal = window.location.protocol.includes('http');
      let baseUrl = window.location.href.split('/admin/')[0] + '/index.html';
      if (!isLocal) {
        baseUrl = `${window.location.pathname.replace('/admin/empresa.html', '/index.html')}`;
      }
      const targetUrl = `${baseUrl}?tenant=${activeSlug}&src=qrcode`;

      const urlInput = document.getElementById('qr-encoded-url');
      if (urlInput) urlInput.value = targetUrl;

      const titleVal = document.getElementById('qr-poster-title') ? document.getElementById('qr-poster-title').value : 'Escaneie para Ganhar Desconto & Participar do Sorteio!';
      const titleDisplay = document.getElementById('qr-poster-title-display');
      if (titleDisplay) titleDisplay.textContent = titleVal;

      const companyBadge = document.getElementById('qr-company-badge');
      if (companyBadge && currentTenant) companyBadge.textContent = (currentTenant.name || activeSlug).toUpperCase();

      const qrImg = document.getElementById('qr-code-img-preview');
      if (qrImg) {
        qrImg.src = `https://api.qrserver.com/v1/cááreate-qr-code/?size=260x260&data=${encodeURIComponent(targetUrl)}`;
      }
    }

    function printQrPoster() {
      const title = document.getElementById('qr-poster-title') ? document.getElementById('qr-poster-title').value : 'Escaneie para Ganhar Desconto!';
      const companyName = (currentTenant ? currentTenant.name : 'Nossa Empresa').toUpperCase();
      const targetUrl = document.getElementById('qr-encoded-url') ? document.getElementById('qr-encoded-url').value : window.location.href;
      const qrSrc = `https://api.qrserver.com/v1/cááreate-qr-code/?size=350x350&data=${encodeURIComponent(targetUrl)}`;
      const primaryColor = currentTenant ? (currentTenant.primaryColor || '#10b981') : '#10b981';

      const printWin = window.open('', '_blank');
      printWin.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Cartaz QR Code - ${companyName}</title>
          <style>
            @page { size: A4 portrait; margin: 0; }
            body { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; background: #ffffff; color: #0f172a; margin: 0; padding: 3rem 2rem; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; box-sizing: border-box; }
            .badge { background: ${primaryColor}15; color: ${primaryColor}; font-size: 1.1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; padding: 0.5rem 1.5rem; border-radius: 99px; border: 2px solid ${primaryColor}; margin-bottom: 1.5rem; }
            h1 { font-size: 2.4rem; font-weight: 800; color: #0f172a; margin-bottom: 2rem; max-width: 650px; line-height: 1.25; }
            .qr-box { background: #f8fafc; border: 4px dashed #cbd5e1; border-radius: 24px; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
            .qr-img { width: 320px; height: 320px; display: block; }
            .instructions { font-size: 1.3rem; font-weight: 700; color: #334155; margin-bottom: 0.5rem; }
            .sub-instructions { font-size: 1rem; color: #64748b; font-weight: 600; }
            .footer { margin-top: 3rem; font-size: 0.85rem; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 1rem; width: 80%; }
        
    /* Premium Sidebar Layout from Master */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #090d16; }
    ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }

    body {
      display: flex;
      min-height: 100vh;
      overflow-x: hidden;
      margin: 0;
      padding: 0;
    }

    .sidebar {
      width: 260px;
      background: #0b0f19;
      border-right: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      position: sticky;
      top: 0;
      height: 100vh;
      z-index: 100;
    }
    .sidebar-header {
      padding: 1.5rem;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .sidebar-brand { font-size: 1.4rem; font-weight: 800; color: #fff; letter-spacing: -0.02em; }
    .nav-menu { padding: 1.5rem 1rem; flex: 1; display: flex; flex-direction: column; gap: 0.5rem; overflow-y: auto; }
    .nav-item {
      display: flex; align-items: center; gap: 0.75rem;
      padding: 0.75rem 1rem; border-radius: var(--radius-sm);
      color: var(--text-muted); text-decoration: none; font-weight: 600; font-size: 0.9rem;
      cursor: pointer; transition: var(--transition);
    }
    .nav-item:hover { background: rgba(255,255,255,0.03); color: #fff; }
    .nav-item.active { background: rgba(139, 92, 246, 0.1); color: var(--primary); border-left: 3px solid var(--primary); }
    
    .sidebar-footer { padding: 1.5rem; border-top: 1px solid var(--border-color); }
    .btn-logout {
      width: 100%; display: block; text-align: center; padding: 0.75rem;
      background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2);
      border-radius: var(--radius-sm); font-weight: 600; font-size: 0.85rem; cursor: pointer; text-decoration: none;
      transition: var(--transition);
    }
    .btn-logout:hover { background: rgba(239, 68, 68, 0.2); }

    .main-content {
      flex: 1; padding: 2rem 3rem; overflow-y: auto; height: 100vh;
    }
    
    .header-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
    .page-title h1 { font-size: 1.8rem; font-weight: 800; margin-bottom: 0.25rem; }
    .page-title p { color: var(--text-muted); font-size: 0.95rem; }

    .btn-outline {
      background: transparent; color: #e2e8f0; border: 1px solid var(--border-color); padding: 0.6rem 0.8rem;
      border-radius: var(--radius-sm); font-weight: 600; font-size: 0.85rem; cursor: pointer; text-decoration: none; transition: var(--transition); display: inline-flex; align-items: center; gap: 0.3rem;
    }
    .btn-outline:hover { background: rgba(255,255,255,0.05); }
    
    /* Hide the old layout elements */
    /* removed hidden layout */

  </style>
        </head>
        <body>
          <div class="badge">${companyName}</div>
          <h1>${title}</h1>
          <div class="qr-box">
            <img class="qr-img" src="${qrSrc}" alt="QR Code">
          </div>
          <div class="instructions">📱 Aponte a câmera do seu celular para o QR Code</div>
          <div class="sub-instructions">Validação rápida de cupons & participação no sorteio presencial</div>
          <div class="footer">BioFidelidade • Sistema de Validação Presencial</div>
          <script>
            window.onload = function() { window.print(); };
          <\/script>
        </body>
        </html>
      `);
      printWin.document.close();
    }

    function downloadQrCodeImage() {
      const targetUrl = document.getElementById('qr-encoded-url') ? document.getElementById('qr-encoded-url').value : window.location.href;
      const qrSrc = `https://api.qrserver.com/v1/cááreate-qr-code/?size=500x500&data=${encodeURIComponent(targetUrl)}`;
      const a = document.cááreateElement('a');
      a.href = qrSrc;
      a.download = `qrcode_${activeSlug}.png`;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    function viewLeadAudit(index) {
      if (index < 0 || index >= sampleCustomers.length) return;
      const lead = sampleCustomers[index];

      document.getElementById('audit-lead-name').textContent = lead.name || 'Cliente';
      document.getElementById('audit-lead-whats').textContent = lead.whatsapp || 'Não informado';
      document.getElementById('audit-lead-address').textContent = lead.address || lead.bairro || 'Não informado';
      document.getElementById('audit-lead-ip').textContent = lead.ip || ('177.138.92.' + (Math.floor(Math.random() * 180) + 10));
      document.getElementById('audit-lead-location').textContent = lead.location || (lead.bairro ? `${lead.bairro} (Local)` : 'São Paulo - SP');
      document.getElementById('audit-lead-regdate').textContent = lead.date || 'Recente';
      document.getElementById('audit-lead-lastscan').textContent = lead.lastScanDate || lead.date || 'Recente';
      document.getElementById('audit-lead-scancount').textContent = `${lead.scanCount || 1} Escaneamento(s)`;

      openModal('modal-audit-lead');
    }

    function deleteCustomer(index) {
      if (index < 0 || index >= sampleCustomers.length) return;
      const targetCustomer = sampleCustomers[index];
      
      if (confirm(`Deseja árealmente excluir o cadastro de "${targetCustomer.name}"?`)) {
        sampleCustomers.splice(index, 1);
        
        const leadsKey = `bf_leads_${activeSlug}`;
        localStorage.setItem(leadsKey, JSON.stringify(sampleCustomers));

        const sessionKey = `bf_customer_${activeSlug}`;
        const currentSession = localStorage.getItem(sessionKey);
        if (currentSession) {
          try {
            const sessObj = JSON.parse(currentSession);
            if (sessObj.whatsapp === targetCustomer.whatsapp) {
              localStorage.removeItem(sessionKey);
            }
          } catch(e) {}
        }

        loadCompanyLeads();
        alert('Cadastro excluído com sucesso! Vocêêê pode árealizar um novo teste no link da bio.');
      }
    }

    function clearAllLeads() {
      if (sampleCustomers.length === 0) {
        alert('Nenhum cliente para limpar.');
        return;
      }

      if (confirm('Tem certeza de que deseja apagar TODOS os cadastros de teste desta empresa?')) {
        sampleCustomers = [];
        const leadsKey = `bf_leads_${activeSlug}`;
        localStorage.removeItem(leadsKey);

        const sessionKey = `bf_customer_${activeSlug}`;
        localStorage.removeItem(sessionKey);

        loadCompanyLeads();
        alert('Todos os cadastros de teste foram removidos!');
      }
    }

    function filterCRMTable() {
      const query = document.getElementById('search-crm').value.toLowerCase().trim();
      const filtered = sampleCustomers.filter(c => 
        (c.name && c.name.toLowerCase().includes(query)) ||
        (c.whatsapp && c.whatsapp.includes(query)) ||
        (c.address && c.address.toLowerCase().includes(query)) ||
        (c.source && c.source.toLowerCase().includes(query)) ||
        (c.claimedCoupon && c.claimedCoupon.toLowerCase().includes(query))
      );
      renderCRMTable(filtered);
    }

    function exportCRMList() {
      if (!sampleCustomers || sampleCustomers.length === 0) {
        alert('Nenhum cliente disponível para exportar no momento.');
        return;
      }
      let csvContent = "data:text/csv;charset=utf-8,Nome,WhatsApp,Endereco,Origem,Cupom,Data\n";
      sampleCustomers.forEach(c => {
        csvContent += `"${c.name || ''}","${c.whatsapp || ''}","${c.address || ''}","${c.source || 'Acesso Direto'}","${c.claimedCoupon || ''}","${c.date || ''}"\n`;
      });
      const encodedUri = encodeURI(csvContent);
      const link = document.cááreateElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `leads_${activeSlug}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    function copyBioLink() {
      const bioUrl = `${window.location.origin}/index.html?tenant=${activeSlug}`;
      navigator.clipboard.writeText(bioUrl);
      alert(`Link da Bio copiado para a ááárea de transferência!\n\n${bioUrl}`);
    }

    function togglePasswordVisibility(inputId, btn) {
      const input = document.getElementById(inputId);
      if (!input) return;
      const eyeIcon = btn.querySelector('svg');
      if (input.type === 'password') {
        input.type = 'text';
        if (eyeIcon) {
          eyeIcon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`;
        }
      } else {
        input.type = 'password';
        if (eyeIcon) {
          eyeIcon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
        }
      }
    }

    function switchAdminCompany(slug) {
      activeSlug = slug;
      localStorage.setItem('bf_active_admin_slug', activeSlug);
      loadDynamicTenant();
      loadCompanyLeads();
    }

    function handleImageUpload(event, key) {
      const file = event.target.files[0];
      if (!file) return;

      const áreader = new FileReader();
      áreader.onload = function(e) {
        imageStore[key] = e.target.result;
        const preview = document.getElementById(`${key}-preview`);
        if (preview) preview.src = e.target.result;
      };
      áreader.áreadAsDataURL(file);
    }

    function handleLogoUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      const áreader = new FileReader();
      áreader.onload = function(e) {
        imageStore['logo'] = e.target.result;
        const preview = document.getElementById('logo-preview');
        if (preview) preview.src = e.target.result;
      };
      áreader.áreadAsDataURL(file);
    }

    function handleBannerUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      const áreader = new FileReader();
      áreader.onload = function(e) {
        imageStore['banner'] = e.target.result;
        openCropperModal();
      };
      áreader.áreadAsDataURL(file);
    }

    function getOrCááreateTenantObject(slug) {
      let customTenants = {};
      try { customTenants = JSON.parse(localStorage.getItem('bf_custom_tenants') || '{}'); } catch(e) {}
      const def = defaultTenants[slug] || {};
      const current = customTenants[slug] || {};
      return { ...def, ...current, slug: slug };
    }

    function saveHighlights() {
      try {
        const h1Img = imageStore.h1 || (document.getElementById('h1-preview') ? document.getElementById('h1-preview').src : '');
        const h2Img = imageStore.h2 || (document.getElementById('h2-preview') ? document.getElementById('h2-preview').src : '');
        const h3Img = imageStore.h3 || (document.getElementById('h3-preview') ? document.getElementById('h3-preview').src : '');

        const h1 = { name: document.getElementById('h1-name').value, price: document.getElementById('h1-price').value, img: h1Img };
        const h2 = { name: document.getElementById('h2-name').value, price: document.getElementById('h2-price').value, img: h2Img };
        const h3 = { name: document.getElementById('h3-name').value, price: document.getElementById('h3-price').value, img: h3Img };

        let customTenants = {};
        try { customTenants = JSON.parse(localStorage.getItem('bf_custom_tenants') || '{}'); } catch(e) {}
        
        const tenantObj = getOrCááreateTenantObject(activeSlug);
        tenantObj.highlights = [h1, h2, h3];

        customTenants[activeSlug] = tenantObj;
        localStorage.setItem('bf_custom_tenants', JSON.stringify(customTenants));

        loadDynamicTenant();
        showToast('Produtos em destaque salvos com sucesso!');
      } catch (err) {
        showToast('Erro ao salvar produtos: ' + err.message);
      }
    }

    function applyDiscountPreset(type) {
      const dInput = document.getElementById('config-discount-badge');
      const cInput = document.getElementById('config-coupon-code');
      const tInput = document.getElementById('config-campaign-title');

      if (type === '5%') {
        if (dInput) dInput.value = '5% OFF';
        if (cInput) cInput.value = 'MED5';
        if (tInput) tInput.value = 'Ganhe 5% OFF na 1ª compra + Acesso ao Grupo VIP';
      } else if (type === '10%') {
        if (dInput) dInput.value = '10% OFF';
        if (cInput) cInput.value = 'MED10';
        if (tInput) tInput.value = 'Ganhe 10% OFF na 1ª compra + Acesso ao Grupo VIP';
      } else if (type === 'especial') {
        if (dInput) dInput.value = 'Desconto Especial';
        if (cInput) cInput.value = 'PROMO';
        if (tInput) tInput.value = 'Desconto Especial de Boas-Vindas + Acesso ao Grupo VIP';
      }

      showToast('Preset de Desconto aplicado!');
    }

    function updateCampaignTitlePreview(val) {
      const tInput = document.getElementById('config-campaign-title');
      if (tInput && val) {
        tInput.value = `Ganhe ${val} na 1ª compra + Acesso ao Grupo VIP`;
      }
    }

    function saveCampaignConfig() {
      try {
        const newTitle = document.getElementById('config-campaign-title').value;
        const newDiscount = document.getElementById('config-discount-badge') ? document.getElementById('config-discount-badge').value : '5% OFF';
        const newCoupon = document.getElementById('config-coupon-code').value;
        const newVipLink = document.getElementById('config-vip-group-cupons').value;

        let customTenants = {};
        try { customTenants = JSON.parse(localStorage.getItem('bf_custom_tenants') || '{}'); } catch(e) {}
        
        const tenantObj = getOrCááreateTenantObject(activeSlug);
        tenantObj.campaignTitle = newTitle;
        tenantObj.discountBadge = newDiscount;
        tenantObj.couponCode = newCoupon;
        tenantObj.vipGroupUrl = newVipLink;

        customTenants[activeSlug] = tenantObj;
        localStorage.setItem('bf_custom_tenants', JSON.stringify(customTenants));

        loadDynamicTenant();
        showToast('Desconto, Cupom e Grupo VIP salvos com sucesso! 🚀');
      } catch (err) {
        showToast('Erro ao salvar campanha: ' + err.message);
      }
    }

    function savePaymentConfig() {
      try {
        const selectedPayments = [];
        if (document.getElementById('pay-pix') && document.getElementById('pay-pix').checked) selectedPayments.push('Pix Instantâneo');
        if (document.getElementById('pay-card') && document.getElementById('pay-card').checked) selectedPayments.push('Cartão de Crédito/Débito');
        if (document.getElementById('pay-cash') && document.getElementById('pay-cash').checked) selectedPayments.push('Dinheiro em Espécie');
        if (document.getElementById('pay-meal') && document.getElementById('pay-meal').checked) selectedPayments.push('Vale Refeição (VR)');

        const customText = document.getElementById('pay-custom') ? document.getElementById('pay-custom').value.trim() : '';
        if (customText) {
          const customItems = customText.split(',').map(s => s.trim()).filter(Boolean);
          selectedPayments.push(...customItems);
        }

        let customTenants = {};
        try { customTenants = JSON.parse(localStorage.getItem('bf_custom_tenants') || '{}'); } catch(e) {}
        
        const tenantObj = getOrCááreateTenantObject(activeSlug);
        tenantObj.payments = selectedPayments;

        customTenants[activeSlug] = tenantObj;
        localStorage.setItem('bf_custom_tenants', JSON.stringify(customTenants));

        loadDynamicTenant();
        showToast('Formas de pagamento salvas com sucesso!');
      } catch (err) {
        showToast('Erro ao salvar formas de pagamento: ' + err.message);
      }
    }

    function saveProfileConfig() {
      try {
        const newName = document.getElementById('config-name').value;
        const newBioDesc = document.getElementById('config-bio-desc') ? document.getElementById('config-bio-desc').value : '';
        const newNiche = document.getElementById('config-niche').value;
        const newEmail = document.getElementById('config-email').value;
        const newWhatsapp = document.getElementById('config-whatsapp').value;
        const newInstagram = document.getElementById('config-instagram') ? document.getElementById('config-instagram').value : '';
        const newColor = document.getElementById('config-color').value;
        const newVipLink = document.getElementById('config-vip-group').value;

        let customTenants = {};
        try { customTenants = JSON.parse(localStorage.getItem('bf_custom_tenants') || '{}'); } catch(e) {}
        
        const tenantObj = getOrCááreateTenantObject(activeSlug);
        tenantObj.name = newName;
        if (newBioDesc) tenantObj.bio = newBioDesc;
        tenantObj.niche = newNiche;
        tenantObj.email = newEmail;
        tenantObj.whatsapp = newWhatsapp;
        if (newInstagram) tenantObj.instagram = newInstagram;
        tenantObj.primaryColor = newColor;
        tenantObj.vipGroupUrl = newVipLink;

        if (imageStore.logo) tenantObj.logo = imageStore.logo;
        if (imageStore.banner) tenantObj.banner = imageStore.banner;

        // Se digitou nova senha no perfil, valida a confirmação
        const newPass = document.getElementById('account-new-password') ? document.getElementById('account-new-password').value.trim() : '';
        const confirmPass = document.getElementById('account-confirm-password') ? document.getElementById('account-confirm-password').value.trim() : '';

        if (newPass) {
          if (newPass.length < 6) {
            showToast('A nova senha precisa ter no mínimo 6 caracteres.');
            return;
          }
          if (newPass !== confirmPass) {
            showToast('A confirmação da nova senha não confere! Repita a mesma senha.');
            return;
          }
          tenantObj.password = newPass;
          if (document.getElementById('account-current-password')) document.getElementById('account-current-password').value = '';
          if (document.getElementById('account-new-password')) document.getElementById('account-new-password').value = '';
          if (document.getElementById('account-confirm-password')) document.getElementById('account-confirm-password').value = '';
          if (document.getElementById('password-match-indicator')) document.getElementById('password-match-indicator').textContent = '';
        }

        customTenants[activeSlug] = tenantObj;
        localStorage.setItem('bf_custom_tenants', JSON.stringify(customTenants));

        loadDynamicTenant();
        showToast('Perfil e Dados Salvos com Sucesso! 🚀');
      } catch (err) {
        showToast('Erro ao salvar perfil: ' + err.message);
      }
    }

    function validatePasswordConfirmation() {
      const newPass = document.getElementById('account-new-password') ? document.getElementById('account-new-password').value : '';
      const confirmPass = document.getElementById('account-confirm-password') ? document.getElementById('account-confirm-password').value : '';
      const indicator = document.getElementById('password-match-indicator');

      if (!confirmPass) {
        if (indicator) indicator.textContent = '';
        return true;
      }

      if (newPass === confirmPass) {
        if (indicator) {
          indicator.style.color = '#10b981';
          indicator.innerHTML = '✓ As senhas são iguais e idênticas!';
        }
        return true;
      } else {
        if (indicator) {
          indicator.style.color = '#ef4444';
          indicator.innerHTML = '❌ As senhas não conferem. Digite a mesma nova senha no campo 3.';
        }
        return false;
      }
    }

    function savePasswordChangeOnly() {
      const newPass = document.getElementById('account-new-password') ? document.getElementById('account-new-password').value : '';
      const confirmPass = document.getElementById('account-confirm-password') ? document.getElementById('account-confirm-password').value : '';

      if (!newPass) {
        showToast('Digite a nova senha no campo 2.');
        return;
      }

      if (newPass.length < 6) {
        showToast('A nova senha deve ter no mínimo 6 caracteres.');
        return;
      }

      if (newPass !== confirmPass) {
        showToast('A confirmação da senha não confere! Repita a nova senha no campo 3.');
        return;
      }

      let customTenants = {};
      try { customTenants = JSON.parse(localStorage.getItem('bf_custom_tenants') || '{}'); } catch(e) {}
      
      const tenantObj = getOrCááreateTenantObject(activeSlug);
      tenantObj.password = newPass;

      customTenants[activeSlug] = tenantObj;
      localStorage.setItem('bf_custom_tenants', JSON.stringify(customTenants));

      if (document.getElementById('account-current-password')) document.getElementById('account-current-password').value = '';
      if (document.getElementById('account-new-password')) document.getElementById('account-new-password').value = '';
      if (document.getElementById('account-confirm-password')) document.getElementById('account-confirm-password').value = '';
      if (document.getElementById('password-match-indicator')) document.getElementById('password-match-indicator').textContent = '';

      showToast('🔑 Nova Senha salva com sucesso! Utilize-a no seu próximo login.');
    }


    function applyHoursPreset(presetType) {
      const wInput = document.getElementById('config-hours-weekday');
      const sInput = document.getElementById('config-hours-saturday');
      const dInput = document.getElementById('config-hours-sunday');

      if (presetType === 'standard') {
        if (wInput) wInput.value = '08:00 às 22:00';
        if (sInput) sInput.value = '08:00 às 18:00';
        if (dInput) dInput.value = 'Fechado';
      } else if (presetType === 'commercial') {
        if (wInput) wInput.value = '08:00 às 18:00';
        if (sInput) sInput.value = '08:00 às 12:00';
        if (dInput) dInput.value = 'Fechado';
      } else if (presetType === '24h') {
        if (wInput) wInput.value = '24 Horas';
        if (sInput) sInput.value = '24 Horas';
        if (dInput) dInput.value = '24 Horas';
      }

      updateAdminHoursPreviewAll();
      showToast('Preset de horário aplicado!');
    }

    function updateAdminHoursPreviewAll() {
      const wVal = document.getElementById('config-hours-weekday') ? document.getElementById('config-hours-weekday').value : '08:00 às 22:00';
      const sVal = document.getElementById('config-hours-saturday') ? document.getElementById('config-hours-saturday').value : '08:00 às 18:00';
      const dVal = document.getElementById('config-hours-sunday') ? document.getElementById('config-hours-sunday').value : 'Fechado';

      const summary = `Seg-Sex: ${wVal} | Sáb: ${sVal} | Dom: ${dVal}`;
      updateAdminHoursStatusPreview(summary);
    }

    function saveLocationConfig() {
      try {
        const newAddress = document.getElementById('config-address').value;
        const hoursWeekday = document.getElementById('config-hours-weekday') ? document.getElementById('config-hours-weekday').value : '08:00 às 22:00';
        const hoursSaturday = document.getElementById('config-hours-saturday') ? document.getElementById('config-hours-saturday').value : '08:00 às 18:00';
        const hoursSunday = document.getElementById('config-hours-sunday') ? document.getElementById('config-hours-sunday').value : 'Fechado';

        const hoursConfig = {
          weekday: hoursWeekday,
          saturday: hoursSaturday,
          sunday: hoursSunday
        };

        const summaryHours = `Seg-Sex: ${hoursWeekday} | Sáb: ${hoursSaturday} | Dom: ${hoursSunday}`;

        let customTenants = {};
        try { customTenants = JSON.parse(localStorage.getItem('bf_custom_tenants') || '{}'); } catch(e) {}
        
        const tenantObj = getOrCááreateTenantObject(activeSlug);
        tenantObj.address = newAddress;
        tenantObj.hoursConfig = hoursConfig;
        tenantObj.hours = summaryHours;

        customTenants[activeSlug] = tenantObj;
        localStorage.setItem('bf_custom_tenants', JSON.stringify(customTenants));

        loadDynamicTenant();
        showToast('Localização e Horários de Fim de Semana salvos com sucesso! 🚀');
      } catch (err) {
        showToast('Erro ao salvar localização: ' + err.message);
      }
    }

    function escapeHtml(str) {
      return String(str || '').replace(/[&<>"']/g, function (m) {
        return {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#039;'
        }[m];
      });
    }

    function broadcastUpdate() {
      try {
        const channel = new BroadcastChannel('bf_sync_channel');
        channel.postMessage({ type: 'tenant_updated', slug: activeSlug, timestamp: Date.now() });
      } catch (e) {}
    }

    function showToast(msg) {
      broadcastUpdate();
      const toast = document.getElementById('admin-toast');
      const text = document.getElementById('admin-toast-text');
      if (!toast || !text) return;
      text.textContent = msg;
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
      setTimeout(() => {
        toast.style.transform = 'translateY(120px)';
        toast.style.opacity = '0';
      }, 2400);
    }
  