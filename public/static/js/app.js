// PFC Logistics 2025 - Frontend Application
console.log('🚀 PFC Logistics - Modern Fulfillment Solutions');

// Mobile Navigation Toggle
function initMobileNav() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
      mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });
  }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
}

// Animated Counter for Stats
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };
        
        updateCounter();
        observer.unobserve(counter);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => observer.observe(counter));
}

// Pricing Calculator
function initPricingCalculator() {
  const form = document.getElementById('pricing-calculator-form');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      weight: document.getElementById('weight')?.value,
      length: document.getElementById('length')?.value,
      width: document.getElementById('width')?.value,
      height: document.getElementById('height')?.value,
      origin: document.getElementById('origin')?.value,
      destination: document.getElementById('destination')?.value,
      service: document.getElementById('service')?.value
    };
    
    const resultDiv = document.getElementById('pricing-result');
    if (resultDiv) {
      resultDiv.innerHTML = '<div class="loading"></div>';
      
      try {
        const response = await fetch('/api/calculate-price', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        resultDiv.innerHTML = `
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Estimated Cost</h3>
            <div class="text-4xl font-bold text-orange-500 mb-2">$${data.price}</div>
            <p class="text-gray-600 mb-4">${data.service} - ${data.transit_time}</p>
            <button onclick="openQuoteForm()" class="btn btn-primary w-full">Get Detailed Quote</button>
          </div>
        `;
      } catch (error) {
        resultDiv.innerHTML = `
          <div class="bg-red-50 p-4 rounded-lg text-red-600">
            Error calculating price. Please try again or contact us directly.
          </div>
        `;
      }
    }
  });
}

// Quote Form with Progressive Disclosure
function initQuoteForm() {
  const form = document.getElementById('quote-form');
  if (!form) return;
  
  let currentStep = 1;
  const totalSteps = 3;
  
  const updateStepIndicator = () => {
    for (let i = 1; i <= totalSteps; i++) {
      const step = document.getElementById(`step-${i}`);
      const indicator = document.getElementById(`step-indicator-${i}`);
      
      if (step) {
        step.classList.toggle('hidden', i !== currentStep);
      }
      
      if (indicator) {
        if (i < currentStep) {
          indicator.className = 'w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center';
          indicator.innerHTML = '<i class="fas fa-check"></i>';
        } else if (i === currentStep) {
          indicator.className = 'w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center';
          indicator.textContent = i;
        } else {
          indicator.className = 'w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center';
          indicator.textContent = i;
        }
      }
    }
    
    // Update button visibility
    const prevBtn = document.getElementById('prev-step');
    const nextBtn = document.getElementById('next-step');
    const submitBtn = document.getElementById('submit-quote');
    
    if (prevBtn) prevBtn.classList.toggle('hidden', currentStep === 1);
    if (nextBtn) nextBtn.classList.toggle('hidden', currentStep === totalSteps);
    if (submitBtn) submitBtn.classList.toggle('hidden', currentStep !== totalSteps);
  };
  
  // Next/Previous buttons
  document.getElementById('next-step')?.addEventListener('click', () => {
    if (currentStep < totalSteps) {
      currentStep++;
      updateStepIndicator();
    }
  });
  
  document.getElementById('prev-step')?.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateStepIndicator();
    }
  });
  
  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submit-quote');
    const originalText = submitBtn?.textContent;
    
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<div class="loading"></div> Submitting...';
    }
    
    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (result.success) {
        showNotification('Quote submitted successfully! We\'ll contact you within 24 hours.', 'success');
        form.reset();
        currentStep = 1;
        updateStepIndicator();
      } else {
        showNotification('Error submitting quote. Please try again.', 'error');
      }
    } catch (error) {
      showNotification('Network error. Please try again.', 'error');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }
  });
  
  updateStepIndicator();
}

// FAQ Accordion
function initFAQAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('i.fa-chevron-down');
      const isOpen = !answer.classList.contains('hidden');
      
      // Close all other FAQs
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
      document.querySelectorAll('.faq-question i.fa-chevron-down').forEach(i => {
        i.style.transform = 'rotate(0deg)';
      });
      
      // Toggle current FAQ
      if (!isOpen) {
        answer.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// FAQ Search
function initFAQSearch() {
  const searchInput = document.getElementById('faq-search');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? 'block' : 'none';
    });
  });
}

// Notification System
function showNotification(message, type = 'info') {
  const container = document.getElementById('notification-container') || createNotificationContainer();
  
  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  };
  
  const notification = document.createElement('div');
  notification.className = `${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg mb-4 transform transition-all duration-300 translate-x-full`;
  notification.textContent = message;
  
  container.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 10);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

function createNotificationContainer() {
  const container = document.createElement('div');
  container.id = 'notification-container';
  container.className = 'fixed top-4 right-4 z-50 max-w-md';
  document.body.appendChild(container);
  return container;
}

// Lazy Load Images
function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Sticky Header Effect
function initStickyHeader() {
  const header = document.querySelector('.sticky-header');
  if (!header) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
    
    lastScroll = currentScroll;
  });
}

// Utility: Open Quote Form Modal
function openQuoteForm() {
  window.location.href = '/contact#quote';
}

// Shipping Method Tabs (for Global Shipping page)
function initShippingTabs() {
  const tabs = document.querySelectorAll('.shipping-tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  if (tabs.length === 0) return;
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      
      // Remove active class from all tabs
      tabs.forEach(t => {
        t.classList.remove('active', 'bg-pfc-orange', 'text-white');
        t.classList.add('bg-white', 'text-gray-700');
      });
      
      // Add active class to clicked tab
      tab.classList.add('active', 'bg-pfc-orange', 'text-white');
      tab.classList.remove('bg-white', 'text-gray-700');
      
      // Hide all tab contents
      tabContents.forEach(content => {
        content.classList.remove('active');
      });
      
      // Show target tab content
      const targetContent = document.getElementById(`${targetTab}-tab`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSmoothScroll();
  animateCounters();
  initPricingCalculator();
  initQuoteForm();
  initFAQAccordion();
  initFAQSearch();
  initLazyLoad();
  initStickyHeader();
  initShippingTabs();
});

// Export functions for global access
window.PFC = {
  showNotification,
  openQuoteForm
};
