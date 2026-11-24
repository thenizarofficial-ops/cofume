import { MENU_CATEGORIES, MENU_ITEMS } from './menu-data.js';

class MenuModal {
  constructor() {
    this.modal = document.getElementById('menu-modal');
    this.tabsContainer = document.getElementById('modal-menu-tabs');
    this.gridContainer = document.getElementById('modal-menu-grid');
    this.searchInput = document.getElementById('modal-menu-search');
    this.closeBtn = document.getElementById('modal-menu-close');
    this.openBtns = document.querySelectorAll('[data-open-menu]');

    this.activeCategory = 'all';
    this.searchQuery = '';

    this.init();
  }

  init() {
    if (!this.modal) return;

    // Render category tabs
    this.renderTabs();
    // Render initial menu cards
    this.renderItems();

    // Event listeners
    this.openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = btn.getAttribute('data-menu-category');
        if (cat) this.activeCategory = cat;
        this.open();
      });
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('is-open')) {
        this.close();
      }
    });

    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderItems();
      });
    }
  }

  open() {
    this.modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    this.renderTabs();
    this.renderItems();
    if (this.searchInput) {
      setTimeout(() => this.searchInput.focus(), 150);
    }
  }

  close() {
    this.modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  renderTabs() {
    if (!this.tabsContainer) return;
    this.tabsContainer.innerHTML = MENU_CATEGORIES.map(cat => `
      <button class="modal-tab-btn ${cat.id === this.activeCategory ? 'is-active' : ''}" data-cat="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    this.tabsContainer.querySelectorAll('.modal-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeCategory = btn.getAttribute('data-cat');
        this.renderTabs();
        this.renderItems();
      });
    });
  }

  renderItems() {
    if (!this.gridContainer) return;

    let filtered = MENU_ITEMS.filter(item => {
      const matchesCategory = this.activeCategory === 'all' || item.category === this.activeCategory;
      const matchesSearch = !this.searchQuery || 
        item.title.toLowerCase().includes(this.searchQuery) ||
        item.description.toLowerCase().includes(this.searchQuery) ||
        item.tags.some(t => t.toLowerCase().includes(this.searchQuery));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      this.gridContainer.innerHTML = `
        <div class="modal-menu-empty">
          <p>No dishes found matching your selection.</p>
        </div>
      `;
      return;
    }

    this.gridContainer.innerHTML = filtered.map(item => `
      <div class="modal-item-card">
        <div class="modal-item-img-wrap">
          <img src="${item.image}" alt="${item.title}" class="modal-item-img" loading="lazy">
        </div>
        <div class="modal-item-body">
          <div class="modal-item-header">
            <h4 class="modal-item-title">${item.title}</h4>
            <span class="modal-item-price">${item.price}</span>
          </div>
          <p class="modal-item-desc">${item.description}</p>
          <div class="modal-item-tags">
            ${item.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }
}

export default MenuModal;

