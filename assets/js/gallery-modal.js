/**
 * COFUME CAFE — VISUAL GALLERY LIGHTBOX
 */

class GalleryLightbox {
  constructor() {
    this.lightbox = document.getElementById('gallery-lightbox');
    this.imgEl = document.getElementById('lightbox-img');
    this.titleEl = document.getElementById('lightbox-title');
    this.tagEl = document.getElementById('lightbox-tag');
    this.counterEl = document.getElementById('lightbox-counter');
    this.prevBtn = document.getElementById('lightbox-prev');
    this.nextBtn = document.getElementById('lightbox-next');
    this.closeBtn = document.getElementById('lightbox-close');

    this.items = [];
    this.currentIndex = 0;

    this.init();
  }

  init() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (!galleryItems.length || !this.lightbox) return;

    galleryItems.forEach((el, index) => {
      const img = el.querySelector('.gallery-item-img');
      const title = el.querySelector('.gallery-item-title')?.textContent || 'Cofume Moment';
      const tag = el.querySelector('.gallery-item-tag')?.textContent || 'Gallery';
      const src = img ? img.getAttribute('src') : '';

      this.items.push({ src, title, tag });

      el.addEventListener('click', () => {
        this.open(index);
      });
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.navigate(-1));
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.navigate(1));
    }

    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.navigate(-1);
      if (e.key === 'ArrowRight') this.navigate(1);
    });
  }

  open(index) {
    this.currentIndex = index;
    this.updateContent();
    this.lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  navigate(dir) {
    this.currentIndex = (this.currentIndex + dir + this.items.length) % this.items.length;
    this.updateContent();
  }

  updateContent() {
    const item = this.items[this.currentIndex];
    if (!item) return;

    if (this.imgEl) {
      this.imgEl.style.opacity = '0';
      setTimeout(() => {
        this.imgEl.src = item.src;
        this.imgEl.alt = item.title;
        this.imgEl.style.opacity = '1';
      }, 120);
    }

    if (this.titleEl) this.titleEl.textContent = item.title;
    if (this.tagEl) this.tagEl.textContent = item.tag;
    if (this.counterEl) {
      const current = String(this.currentIndex + 1).padStart(2, '0');
      const total = String(this.items.length).padStart(2, '0');
      this.counterEl.textContent = `${current} / ${total}`;
    }
  }
}

export default GalleryLightbox;

