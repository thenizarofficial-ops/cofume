/**
 * COFUME CAFE — RESERVATION & WHATSAPP CONCIERGE INTEGRATION
 */

class ReservationHandler {
  constructor() {
    this.form = document.getElementById('reservation-form');
    this.modal = document.getElementById('reservation-confirm-modal');
    this.modalText = document.getElementById('res-confirm-text');
    this.whatsappActionBtn = document.getElementById('res-confirm-wa-btn');
    this.closeBtn = document.getElementById('res-confirm-close');

    // Default WhatsApp concierge number (Placeholder for brand - easily configurable)
    this.whatsAppNumber = '1234567890'; // Replace with real Cofume cafe phone number

    this.init();
  }

  init() {
    if (!this.form) return;

    // Set minimum date to today
    const dateInput = document.getElementById('res-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));

    if (this.closeBtn && this.modal) {
      this.closeBtn.addEventListener('click', () => this.closeModal());
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeModal();
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('res-name')?.value.trim();
    const phone = document.getElementById('res-phone')?.value.trim();
    const date = document.getElementById('res-date')?.value;
    const time = document.getElementById('res-time')?.value;
    const guests = document.getElementById('res-guests')?.value;
    const seating = document.getElementById('res-seating')?.value;
    const occasion = document.getElementById('res-occasion')?.value;
    const notes = document.getElementById('res-notes')?.value.trim();

    if (!name || !phone || !date || !time || !guests) {
      alert('Please fill in all required fields (Name, Phone, Date, Time, and Number of Guests).');
      return;
    }

    // Build the WhatsApp formatted message
    const messageLines = [
      `*COFUME CAFE — TABLE RESERVATION REQUEST*`,
      `----------------------------------------`,
      `*Guest Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Date:* ${date}`,
      `*Time Slot:* ${time}`,
      `*Party Size:* ${guests} ${parseInt(guests) === 1 ? 'Guest' : 'Guests'}`,
      `*Seating Preference:* ${seating || 'Standard Comfortable Table'}`,
      `*Occasion:* ${occasion || 'Casual Dining'}`,
      notes ? `*Special Notes:* ${notes}` : null,
      `----------------------------------------`,
      `Please let me know if this table can be reserved. Thank you!`
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const waUrl = `https://wa.me/${this.whatsAppNumber}?text=${encodeURIComponent(fullMessage)}`;

    // Show confirmation dialog with direct dispatch
    if (this.modal && this.whatsappActionBtn) {
      if (this.modalText) {
        this.modalText.innerHTML = `
          <div class="res-summary-box">
            <p><strong>Guest:</strong> ${name} (${phone})</p>
            <p><strong>Schedule:</strong> ${date} at ${time}</p>
            <p><strong>Party & Space:</strong> ${guests} Guests &bull; ${seating}</p>
            ${occasion ? `<p><strong>Occasion:</strong> ${occasion}</p>` : ''}
          </div>
          <p class="res-notice-text">
            To guarantee your private space and real-time confirmation, connect directly with the Cofume Café host desk via WhatsApp.
          </p>
        `;
      }

      this.whatsappActionBtn.href = waUrl;
      this.whatsappActionBtn.setAttribute('target', '_blank');
      this.modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    } else {
      // Fallback direct open
      window.open(waUrl, '_blank');
    }
  }

  closeModal() {
    if (this.modal) {
      this.modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }
}

export default ReservationHandler;

