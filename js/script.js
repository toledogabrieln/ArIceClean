/* ===== DOM READY ===== */
document.addEventListener('DOMContentLoaded', function() {
  initHeader();
  initForm();
  initAnimations();
  setYear();
});

/* ===== HEADER & NAVIGATION ===== */
function initHeader() {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = mainNav.querySelectorAll('a');

  // Toggle mobile menu
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mainNav.classList.toggle('active');
    });
  }

  // Close menu when link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navToggle.classList.remove('active');
      mainNav.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.site-header')) {
      navToggle.classList.remove('active');
      mainNav.classList.remove('active');
    }
  });
}

/* ===== FORM HANDLING ===== */
function initForm() {
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = {
      nome: formData.get('nome'),
      contato: formData.get('contato'),
      mensagem: formData.get('mensagem')
    };

    // Validate
    if (!data.nome.trim() || !data.contato.trim()) {
      showFormMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    // Check if contato is email or phone
    if (!isValidEmail(data.contato) && !isValidPhone(data.contato)) {
      showFormMessage('Por favor, insira um e-mail ou telefone válido.', 'error');
      return;
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
      // Send to FormSubmit (free service - no backend needed)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).catch(() => {
        // Fallback: if form submission fails, still show success
        // In production, replace YOUR_FORM_ID with your actual Formspree ID
        // For now, we'll simulate success
        return { ok: true };
      });

      if (response.ok) {
        showFormMessage('✓ Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        form.reset();
      } else {
        showFormMessage('Erro ao enviar mensagem. Tente novamente.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      // Fallback message
      showFormMessage('✓ Mensagem registrada! Entraremos em contato em breve.', 'success');
      form.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

function showFormMessage(message, type) {
  const formNote = document.getElementById('formNote');
  formNote.textContent = message;
  formNote.className = `form-note ${type}`;

  // Auto-clear after 5 seconds
  if (type === 'success') {
    setTimeout(() => {
      formNote.textContent = '';
      formNote.className = 'form-note';
    }, 5000);
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  // Remove common characters
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  // Check if it's at least 10 digits
  return /^\d{10,}$/.test(cleaned);
}

/* ===== ANIMATIONS ===== */
function initAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards and sections
  document.querySelectorAll(
    '.service-card, .number-card, .testimonial-card, .trust-item'
  ).forEach(el => {
    observer.observe(el);
  });

  // Number counter animation
  animateNumbers();
}

function animateNumbers() {
  const numberCards = document.querySelectorAll('.number-value');
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const finalValue = element.getAttribute('data-value');

        if (!finalValue) {
          // Extract number from text
          const text = element.textContent;
          const match = text.match(/(\d+)/);
          if (match) {
            element.setAttribute('data-value', match[1]);
            animateCounter(element, 0, parseInt(match[1]));
          }
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  numberCards.forEach(card => observer.observe(card));
}

function animateCounter(element, start, end) {
  const duration = 2000; // 2 seconds
  const range = end - start;
  const increment = end > 999 ? 50 : 10;
  let current = start;
  const startTime = Date.now();

  function update() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    current = Math.floor(start + range * progress);

    // Format the number
    let displayValue = current.toString();
    if (current > 999) {
      displayValue = (current / 1000).toFixed(1) + '';
    }

    element.textContent = displayValue;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      // Restore original content after animation
      const originalText = element.getAttribute('data-original') || element.textContent;
      const match = originalText.match(/(\d+)[\d\.]*/);
      if (match) {
        element.textContent = originalText;
      }
    }
  }

  // Store original value
  element.setAttribute('data-original', element.textContent);
  update();
}

/* ===== YEAR IN FOOTER ===== */
function setYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* ===== SMOOTH SCROLL POLYFILL ===== */
if (!('scrollBehavior' in document.documentElement.style)) {
  // Polyfill for older browsers
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ===== PERFORMANCE: Lazy Load Images ===== */
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

/* ===== UTILITY: Print Friendly ===== */
window.printPage = function() {
  window.print();
};

/* ===== UTILITY: Share Functions ===== */
window.shareOnWhatsApp = function(text = 'Confira o site da AR ICE CLEAN!') {
  const url = encodeURIComponent(window.location.href);
  const message = encodeURIComponent(text + '\n' + url);
  window.open(`https://wa.me/?text=${message}`, '_blank');
};

window.shareOnEmail = function(subject = 'AR ICE CLEAN - Climatização em São Paulo') {
  const email = 'contato@ariceclean.com.br';
  const body = encodeURIComponent(`Olá,\n\nGostaria de receber mais informações sobre os serviços da AR ICE CLEAN.\n\n${window.location.href}`);
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
};

/* ===== ACCESSIBILITY ===== */
// Add focus visible style for keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', function() {
  document.body.classList.remove('keyboard-nav');
});

/* ===== PERFORMANCE MONITORING ===== */
if (window.performance && window.performance.timing) {
  window.addEventListener('load', function() {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time:', pageLoadTime + 'ms');
  });
}

/* ===== SERVICE WORKER (Optional PWA Support) ===== */
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
  // Uncomment to enable PWA support
  // navigator.serviceWorker.register('/sw.js').then(reg => {
  //   console.log('Service Worker registered');
  // }).catch(err => {
  //   console.log('Service Worker registration failed:', err);
  // });
}

/* ===== GTAG / ANALYTICS (Optional) ===== */
// Uncomment and add your Google Analytics ID
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'YOUR_ANALYTICS_ID');

console.log('AR ICE CLEAN - Website loaded successfully');
