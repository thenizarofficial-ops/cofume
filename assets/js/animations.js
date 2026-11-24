/**
 * COFUME CAFE — INTERACTION & ANIMATION LOGIC (HUMAN DESIGNED)
 */

export function initAnimations() {
  initHeaderScroll();
  initMobileDrawer();
  initFaqAccordion();
  initMenuFilter();
  initSmoothAnchors();
}

/**
 * 01. HEADER SCROLL STATE
 */
function initHeaderScroll() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * 02. MOBILE DRAWER NAVIGATION
 */
function initMobileDrawer() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-menu-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const links = document.querySelectorAll('.drawer-link');

  if (!toggle || !drawer || !backdrop) return;

  const toggleDrawer = (open) => {
    toggle.classList.toggle('is-open', open);
    drawer.classList.toggle('is-open', open);
    backdrop.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('is-open');
    toggleDrawer(!isOpen);
  });

  backdrop.addEventListener('click', () => toggleDrawer(false));

  links.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
}

/**
 * 03. FAQ ACCORDION (CAFENZA STYLE)
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      // Close other items
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('is-open');
      });
      item.classList.toggle('is-open', !isOpen);
    });
  });
}

/**
 * 04. MENU PREVIEW CATEGORY FILTER
 */
function initMenuFilter() {
  const filterBtns = document.querySelectorAll('.menu-filter-btn');
  const cards = document.querySelectorAll('.menu-editorial-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const cat = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-cat');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 05. SMOOTH ANCHOR LINKS
 */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
