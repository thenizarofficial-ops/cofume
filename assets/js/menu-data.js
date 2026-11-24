/**
 * COFUME CAFE — EDITORIAL MENU DATASET
 * Specialty Coffee, Italian Pasta, Authentic Pizza & Artisanal Bakery
 */

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Complete Collection' },
  { id: 'coffee', label: 'Specialty Coffee' },
  { id: 'pasta', label: 'Handcrafted Pasta' },
  { id: 'pizza', label: 'Artisanal Pizza' },
  { id: 'bakery', label: 'Croissants & Dolci' }
];

export const MENU_ITEMS = [
  // --- SPECIALTY COFFEE ---
  {
    id: 'c1',
    category: 'coffee',
    title: 'Single Origin Espresso',
    description: 'Double extraction featuring Ethiopian Yirgacheffe with notes of bergamot, jasmine florals and candied apricot. Served with sparkling water.',
    price: '$4.50',
    tags: ['Single Origin', 'Double Shot'],
    image: 'assets/images/coffee-espresso.jpg'
  },
  {
    id: 'c2',
    category: 'coffee',
    title: 'Velvet Flat White',
    description: 'Ristretto blend paired with silky micro-foam, highlighting dark chocolate, toasted macadamia and a lingering honeyed finish.',
    price: '$5.50',
    tags: ['Signature', 'House Blend'],
    image: 'assets/images/coffee-latteart.jpg'
  },
  {
    id: 'c3',
    category: 'coffee',
    title: 'Vanilla Bean Oat Latte',
    description: 'Madagascan vanilla bean infusion, Colombian medium roast, steamed organic oat milk, finished with raw golden sugar crystal.',
    price: '$6.50',
    tags: ['Plant-Based', 'House Vanilla'],
    image: 'assets/images/coffee-cappuccino.jpg'
  },
  {
    id: 'c4',
    category: 'coffee',
    title: 'Slow Cold Drip Americano',
    description: '14-hour Kyoto-style cold drip over clear carved ice sphere. Clean, wine-like clarity with hints of dark cocoa and blood orange.',
    price: '$6.00',
    tags: ['14h Extraction', 'Low Acidity'],
    image: 'assets/images/coffee-coldbrew.jpg'
  },
  {
    id: 'c5',
    category: 'coffee',
    title: 'Pistachio Affogato al Café',
    description: 'Single origin espresso poured over artisanal Sicilian pistachio gelato, sprinkled with roasted Bronte pistachio crumbs.',
    price: '$7.50',
    tags: ['Chef Special', 'Dolce Pairing'],
    image: 'assets/images/gallery-dessert.jpg'
  },

  // --- ITALIAN PASTA ---
  {
    id: 'p1',
    category: 'pasta',
    title: 'Tagliatelle al Tartufo Pregiato',
    description: 'Fresh bronze-die cut egg tagliatelle, cultured Umbrian truffle butter, Parmigiano Reggiano 24-Month and shaved black truffle.',
    price: '$24.00',
    tags: ['Handmade', 'Black Truffle', 'Vegetarian'],
    image: 'assets/images/food-pasta.jpg'
  },
  {
    id: 'p2',
    category: 'pasta',
    title: 'Rigatoni alla Carbonara Classica',
    description: 'Artisanal Gragnano rigatoni, crisp cured guanciale, free-range egg yolks and freshly ground Sarawak black pepper.',
    price: '$22.00',
    tags: ['Authentic Roman', 'Guanciale'],
    image: 'assets/images/food-pasta.jpg'
  },
  {
    id: 'p3',
    category: 'pasta',
    title: 'Penne all’Arrabbiata con Burrata',
    description: 'Slow-simmered San Marzano tomatoes, fresh Calabrian chili, fragrant sweet basil, crowned with cool Puglia burrata.',
    price: '$20.00',
    tags: ['Spicy', 'Burrata D.O.P.', 'Vegetarian'],
    image: 'assets/images/food-pasta.jpg'
  },

  // --- ARTISANAL PIZZA ---
  {
    id: 'z1',
    category: 'pizza',
    title: 'Margherita Verace D.O.P.',
    description: '48-hour fermented sourdough crust, San Marzano tomato reduction, fresh Fior di Latte mozzarella, basil leaves and Ligurian EVOO.',
    price: '$19.00',
    tags: ['Wood-Fired', 'D.O.P. Certified', 'Vegetarian'],
    image: 'assets/images/food-pizza.jpg'
  },
  {
    id: 'z2',
    category: 'pizza',
    title: 'Funghi Porcini e Crema di Tartufo',
    description: 'Wild forest porcini mushrooms, Fior di Latte, black truffle cream, aged pecorino romano and fresh thyme.',
    price: '$23.00',
    tags: ['Wood-Fired', 'Wild Mushroom', 'Chef Choice'],
    image: 'assets/images/food-pizza.jpg'
  },
  {
    id: 'z3',
    category: 'pizza',
    title: 'Quattro Formaggi al Miele di Castagno',
    description: 'Gorgonzola Dolce, smoked provola, taleggio, mozzarella, finished with warm chestnut blossom honey drizzle and walnuts.',
    price: '$22.00',
    tags: ['Vegetarian', 'Aged Cheeses'],
    image: 'assets/images/food-pizza.jpg'
  },

  // --- BAKERY & DOLCI ---
  {
    id: 'b1',
    category: 'bakery',
    title: 'Pistacchio Supreme Croissant',
    description: '72-layer laminated French butter pastry filled with roasted Bronte pistachio cream and dipped in crushed emerald pistachios.',
    price: '$6.50',
    tags: ['Freshly Baked', 'Artisanal'],
    image: 'assets/images/food-croissant.jpg'
  },
  {
    id: 'b2',
    category: 'bakery',
    title: 'Pain au Chocolat Valrhona',
    description: 'Hand-rolled butter pastry encasing double batons of bittersweet Valrhona 66% dark chocolate.',
    price: '$5.50',
    tags: ['Valrhona Chocolate', 'Classic'],
    image: 'assets/images/food-croissant.jpg'
  },
  {
    id: 'b3',
    category: 'bakery',
    title: 'Tiramisù Tradizionale al Mascarpone',
    description: 'Single-origin espresso-soaked savoiardi biscuits, whipped mascarpone zabaione and dusted with extra bitter cocoa.',
    price: '$8.50',
    tags: ['House Classic', 'Italian Dolce'],
    image: 'assets/images/gallery-dessert.jpg'
  }
];

