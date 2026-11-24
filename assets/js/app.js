/**
 * COFUME CAFE — MASTER APPLICATION INITIALIZER
 */

import { initAnimations } from './animations.js';
import MenuModal from './menu-modal.js';
import ReservationHandler from './reservation.js';
import GalleryLightbox from './gallery-modal.js';
import AudioAmbiance from './audio-ambiance.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Motion & Core Page Interactions
  initAnimations();

  // 2. Initialize Interactive Full Menu Explorer Modal
  const menuModal = new MenuModal();

  // 3. Initialize Reservation Form & WhatsApp Integration
  const reservationHandler = new ReservationHandler();

  // 4. Initialize Visual Gallery Lightbox
  const galleryLightbox = new GalleryLightbox();

  // 5. Initialize Optional Acoustic Soundscape
  const audioAmbiance = new AudioAmbiance();

  console.log('Cofume Cafe — Experience Initialized Successfully.');
});

