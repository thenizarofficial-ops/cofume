# COFUME CAFE — Premium Website Experience

A bespoke, production-ready digital experience designed and developed for **COFUME CAFE**, inspired by high-end hospitality editorial design.

---

## 1. Creative Direction & Brand Philosophy

- **Primary Visual Reference (80%):** [Cafenza](https://www.framer.com/marketplace/templates/cafenza/) — Editorial asymmetry, warm dark espresso and ivory transitions, refined serif headlines, tactile photography framing, and intentional whitespace.
- **Secondary Influences (20%):** [Coffee Cup](https://www.framer.com/marketplace/templates/coffee-cup/) & [Caplatte](https://www.framer.com/marketplace/templates/caplatte/) — Rich culinary storytelling, interactive menu categories, and minimalist coffee craftsmanship.
- **Core Brand Differentiator:** **Privacy, Comfort, and Personalized Hospitality**. The architecture of the website emphasizes comfortable, intimate spaces designed for couples on dates, quiet conversations with friends, peaceful solo focus, and family dinners.

---

## 2. Color Palette & Typography

### Palette
| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Deep Espresso** | `#241711` | Primary background, rich dark sections |
| **Dark Coffee** | `#35231B` | Card surfaces, elevation levels |
| **Near-Black Roast** | `#180F0B` | Preloader, footer, deep ambient backgrounds |
| **Warm Cream** | `#F5EFE5` | Italian Food section, primary text accents |
| **Soft Ivory** | `#FAF7F0` | High-contrast editorial highlights |
| **Warm Caramel** | `#B77A4B` | Interactive elements, CTA accents, badges |
| **Muted Beige** | `#D9C7AF` | Secondary labels, timestamps, border accents |

### Typography
- **Display Headlines:** *Cormorant Garamond* & *Playfair Display* (Editorial serifs with italic accents)
- **Body & Interface:** *Plus Jakarta Sans* & *Inter* (Legible, modern geometry)
- **Monospace Accents:** *Space Mono* (Timestamps, plate numbers, prices)

---

## 3. Website Structure & Sections

1. **Preloader:** Minimalist luxury intro featuring the COFUME insignia, live counter (`0% – 100%`), and smooth veil reveal.
2. **Section 01 — Navigation Bar:** Transparent-to-solid glass header on scroll, brand insignia lockup, full desktop links, "Reserve Your Space" button, and an animated mobile drawer.
3. **Section 02 — Hero Section:** Full-viewport cinematic visual, staggered headline reveal (*"More Than Coffee. A Place to Belong."*), dual CTAs, and animated scroll indicator.
4. **Section 03 — Brand Introduction:** Asymmetrical editorial spread with dual overlapping photography frames, manifesto copy, and key metric badges.
5. **Section 04 — The Cofume Experience:** Three bespoke hospitality cards:
   - `01 — Private Moments`
   - `02 — Togetherness`
   - `03 — Special Dates`
6. **Section 05 — Signature Coffee:** Dark luxury coffee showcase featuring an interactive brew selector that swaps the featured photograph, tasting notes, and origin details.
7. **Section 06 — Italian Food:** Warm cream section transition with category filters for **Handcrafted Pasta**, **Authentic Wood-Fired Pizza**, and **Croissants & Bakery**.
8. **Section 07 — Private Space Showcase:** Dedicated showcase of the café's greatest differentiator: secluded velvet booths, acoustic privacy, and unhurried hospitality.
9. **Section 08 — Our Story:** Editorial split-screen magazine layout detailing the philosophy of slow coffee and authentic Italian culinary craftsmanship.
10. **Section 09 — Visual Gallery:** 7-plate editorial masonry grid with hover zoom and a full-screen interactive lightbox with captions and navigation.
11. **Section 10 — Reservation & Concierge:** Dual-column booking sanctuary featuring opening hours, address coordinates, seating preferences, and a live WhatsApp Concierge integration.
12. **Section 11 — Footer:** Deep espresso-brown monolithic footer with insignia, quick links, opening hours, Instagram handle, and the closing tagline: *"Good Taste. Good Company. Great Moments."*
13. **Floating Stack:** 
    - Floating WhatsApp Concierge button with live status pulse.
    - Ambient Soundscape toggle (Web Audio API subtle vinyl & warm room tone).
    - Back-to-top button.

---

## 4. How to Run the Website

### Option A: Open Directly in Browser
You can open `index.html` directly in any modern web browser (Google Chrome, Edge, Safari, Brave, Firefox) by double-clicking it. All styles, modules, and assets are 100% self-contained locally.

### Option B: High-Performance Local Server
Run the built-in zero-dependency HTTP server:
```bash
# Using standard Node.js
node server.js
```
Then visit: `http://localhost:3000`

---

## 5. WhatsApp Concierge Configuration

In `assets/js/reservation.js`, locate line 16:
```javascript
this.whatsAppNumber = '1234567890'; // Replace with the official Cofume Cafe WhatsApp number
```
Enter your café's international phone number (without `+` or spaces). Whenever visitors request a reservation, their complete booking details (Name, Phone, Date, Time, Party Size, Seating Preference, and Occasion) are automatically formatted and loaded into WhatsApp for immediate confirmation.

---

## 6. Project Architecture

```
c:\Users\User\Desktop\cofume\
├── index.html                  # Semantic HTML5 master document
├── server.js                   # High-performance local HTTP server (Node.js standard lib)
├── README.md                   # Project documentation & style guide
├── assets/
│   ├── brand/
│   │   ├── cofume-logo.jpg     # Original brand image
│   │   ├── logo-mark.svg       # Precision vector cup insignia
│   │   └── logo-full.svg       # Full vector logo with wordmark
│   ├── css/
│   │   ├── variables.css       # Design tokens & color system
│   │   ├── base.css            # Typography, reset & film-grain overlay
│   │   ├── components.css      # Header, buttons, experience cards, badges
│   │   ├── sections.css        # Detailed layouts for all 11 sections
│   │   ├── modals.css          # Menu modal, reservation dialog, lightbox
│   │   └── responsive.css      # Fluid layouts for Desktop, Tablet & Mobile
│   ├── js/
│   │   ├── app.js              # Master orchestrator
│   │   ├── animations.js       # Preloader, header scroll, reveals & switchers
│   │   ├── menu-data.js        # Detailed coffee & Italian food collection
│   │   ├── menu-modal.js       # Interactive menu explorer & live search
│   │   ├── reservation.js      # Booking validation & WhatsApp formatter
│   │   ├── gallery-modal.js    # Visual gallery lightbox with keyboard support
│   │   └── audio-ambiance.js   # Ambient room tone via Web Audio API
│   └── images/                 # 18 curated high-resolution photography assets
```

