// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Mobile menu drawer =====
const menuBtn = document.getElementById('menuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
menuBtn.addEventListener('click', () => mobileDrawer.classList.toggle('open'));
mobileDrawer.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileDrawer.classList.remove('open'))
);

// ===== Gallery thumbnail switching =====
const mainImage = document.getElementById('mainImage');
document.querySelectorAll('.thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    mainImage.src = thumb.dataset.img;
  });
});

// ===== Colour swatch selector =====
const colorLabel = document.getElementById('colorLabel');
document.querySelectorAll('.swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');
    colorLabel.textContent = swatch.dataset.color;
  });
});

// ===== Size selector =====
const sizeLabel = document.getElementById('sizeLabel');
const stickySize = document.getElementById('stickySize');
document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    sizeLabel.textContent = btn.dataset.size;
    if (stickySize) stickySize.textContent = btn.dataset.size;
  });
});

// ===== Quantity selector =====
const qtyValue = document.getElementById('qtyValue');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');

function getQty() {
  return parseInt(qtyValue.value, 10) || 1;
}
qtyMinus.addEventListener('click', () => {
  const current = getQty();
  if (current > 1) qtyValue.value = current - 1;
});
qtyPlus.addEventListener('click', () => {
  const current = getQty();
  if (current < 10) qtyValue.value = current + 1;
});

// ===== Add to cart (demo behaviour) =====
const addToCartBtn = document.getElementById('addToCartBtn');
if (addToCartBtn) {
  addToCartBtn.addEventListener('click', () => {
    const size = sizeLabel.textContent;
    const color = colorLabel.textContent;
    const qty = getQty();
    addToCartBtn.textContent = `Added ${qty} × ${color} / ${size} ✓`;
    setTimeout(() => { addToCartBtn.textContent = 'Add to Cart'; }, 2000);
  });
}

// ===== FAQ accordion =====
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-q');
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ===== Sticky bottom bar hides at footer =====
const stickyBar = document.getElementById('stickyBar');
const footer = document.querySelector('.site-footer');
const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    stickyBar.style.transform = entry.isIntersecting ? 'translateY(100%)' : 'translateY(0)';
  });
}, { threshold: 0.05 });
if (footer) footerObserver.observe(footer);

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// ===== Newsletter form (demo) =====
const emailForm = document.getElementById('emailForm');
if (emailForm) {
  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = emailForm.querySelector('input');
    input.value = '';
    input.placeholder = 'Thanks for subscribing!';
  });
}
