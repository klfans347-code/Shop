// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function() {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Quantity Selector
  const minusBtn = document.querySelector('.qty-btn.minus');
  const plusBtn = document.querySelector('.qty-btn.plus');
  const qtyValue = document.querySelector('.qty-value');

  if (minusBtn && plusBtn && qtyValue) {
    let quantity = 1;

    function updateQty() {
      qtyValue.textContent = quantity;
    }

    minusBtn.addEventListener('click', function() {
      if (quantity > 1) {
        quantity--;
        updateQty();
      }
    });

    plusBtn.addEventListener('click', function() {
      quantity++;
      updateQty();
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function() {
      item.classList.toggle('active');
    });
  });

  // Smooth Scroll for Anchor Links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // CTA Buttons
  const ctaButtons = document.querySelectorAll('.cta-btn, .sticky-btn');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      // Replace with your actual checkout or WhatsApp link
      window.open('https://wa.me/918067506852?text=Hi%2C%20I%20want%20to%20buy%20BreatheBetter', '_blank');
    });
  });

  // Scroll Animation (simple fade-in)
  const fadeElements = document.querySelectorAll('.benefit-item, .love-item, .lifestyle-item, .review-card');

  function checkFade() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }

  // Initial styles for fade-in
  fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  window.addEventListener('scroll', checkFade);
  checkFade(); // Run once on load
});
