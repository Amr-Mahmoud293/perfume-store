import { Product } from '../../src/app/core/models/product.model';

export const MOCK_PRODUCTS: Product[] = [
  // Page 1 (matches Figma design 1:208)
  {
    id: 1,
    name: 'Fleur de Lune',
    description:
      'A luminous, ethereal white floral bouquet accented by crisp nocturnal greens and velvety musks, evoking a blooming Parisian garden at twilight.',
    category: {
      id: 1,
      name: 'Pure Extractions',
    },
    scentFamily: ['floral', 'fresh'],
    notes: {
      top: ['Jasmine', 'Neroli', 'Dewy Greens'],
      heart: ['Tuberose', 'White Lily', 'Orange Blossom'],
      base: ['White Musk', 'Cashmere Wood', 'Sandalwood'],
    },
    occasions: ['wedding', 'personal use'],
    inStock: true,
    images: [
      { url: '/images/perfume_fleur.jpg', alt: 'Fleur de Lune Perfume' },
    ],
    variants: [
      { size: '50ml', price: 195 },
      { size: '100ml', price: 275 },
    ],
  },
  {
    id: 2,
    name: 'Santal Parchment',
    description:
      'A calming, meditative composition built around creamy Australian sandalwood, dry papyrus, and subtle aromatic cardamom undertones.',
    category: {
      id: 3,
      name: 'Atelier Oils',
    },
    scentFamily: ['woody'],
    notes: {
      top: ['Sandalwood', 'Cardamom', 'Violet Leaf'],
      heart: ['Creamy Sandalwood', 'Papyrus', 'Iris'],
      base: ['Cardamom', 'Iso E Super', 'Golden Amber'],
    },
    occasions: ['gift', 'personal use'],
    inStock: true,
    images: [
      { url: '/images/perfume_santal.jpg', alt: 'Santal Parchment Perfume' },
    ],
    variants: [
      { size: '50ml', price: 220 },
      { size: '100ml', price: 310 },
    ],
  },
  {
    id: 3,
    name: 'Noir Cocoon',
    description:
      'A seductive and hypnotic nocturnal elixir combining supple dark leather, warm amber, and exotic spices wrapped in roasted tonka bean.',
    category: {
      id: 2,
      name: 'Private Reserve',
    },
    scentFamily: ['oriental', 'woody'],
    notes: {
      top: ['Tobacco', 'Black Pepper', 'Nutmeg'],
      heart: ['Amber', 'Dark Rose', 'Smoky Leather'],
      base: ['Amber', 'Tonka Bean', 'Oud Wood'],
    },
    occasions: ['wedding', 'personal use'],
    inStock: true,
    images: [
      { url: '/images/perfume_noir.jpg', alt: 'Noir Cocoon Perfume' },
    ],
    variants: [
      { size: '50ml', price: 240 },
      { size: '100ml', price: 340 },
    ],
  },
  {
    id: 4,
    name: "Sol d'Or",
    description:
      'A radiant solar scent capturing sun-drenched Italian bergamot, exotic frangipani petals, and the warmth of Mediterranean sea breeze on sand.',
    category: {
      id: 4,
      name: 'Discovery Vault',
    },
    scentFamily: ['fresh', 'floral'],
    notes: {
      top: ['Bergamot', 'Sunlit Lemon', 'Marine Accord'],
      heart: ['Frangipani', 'Ylang-Ylang', 'Coconut Water'],
      base: ['Sea Salt', 'Solar Amber', 'Driftwood'],
    },
    occasions: ['birthday', 'personal use'],
    inStock: true,
    images: [
      { url: '/images/perfume_sol.jpg', alt: "Sol d'Or Perfume" },
    ],
    variants: [
      { size: '50ml', price: 185 },
      { size: '100ml', price: 260 },
    ],
  },
  {
    id: 5,
    name: 'Atelier Oud',
    description:
      'An opulent, artisanal fragrance blending rich Cambodian oud with warm saffron, smoky resins, and velvet woods.',
    category: {
      id: 3,
      name: 'Atelier Oils',
    },
    scentFamily: ['woody', 'oriental'],
    notes: {
      top: ['Rich Oud', 'Cardamom', 'Pink Peppercorn'],
      heart: ['Saffron', 'Smoked Incense', 'Myrrh'],
      base: ['Saffron', 'Smoked Cedar', 'Vanilla Bourbon'],
    },
    occasions: ['wedding', 'gift'],
    inStock: true,
    images: [
      { url: '/images/perfume_atelier.jpg', alt: 'Atelier Oud Perfume' },
    ],
    variants: [
      { size: '50ml', price: 310 },
      { size: '100ml', price: 420 },
    ],
  },
  {
    id: 6,
    name: 'Rose Absolute',
    description:
      'A sophisticated celebration of the royal flower, intertwining precious Damask rose petals with honeyed cedar and sparkling pink lychee.',
    category: {
      id: 1,
      name: 'Pure Extractions',
    },
    scentFamily: ['floral', 'woody'],
    notes: {
      top: ['Damask Rose', 'Pink Lychee', 'Pink Pepper'],
      heart: ['Rose de Mai', 'Bulgarian Rose', 'Peony'],
      base: ['Cedar', 'Honeyed Amber', 'Velvet Musk'],
    },
    occasions: ['birthday', 'gift', 'personal use'],
    inStock: true,
    images: [
      { url: '/images/perfume_rose.jpg', alt: 'Rose Absolute Perfume' },
    ],
    variants: [
      { size: '50ml', price: 205 },
      { size: '100ml', price: 290 },
    ],
  },

  // Page 2
  {
    id: 7,
    name: 'Atelier Mystique',
    description:
      'A master perfumer creation of sacred woods, rare frankincense, and deep amber resonance.',
    category: {
      id: 1,
      name: 'Pure Extractions',
    },
    scentFamily: ['oriental', 'woody'],
    notes: {
      top: ['Frankincense', 'Bergamot', 'Bitter Orange'],
      heart: ['Cistus Labdanum', 'Myrrh', 'Black Rose'],
      base: ['Amber Resin', 'Smoked Oud', 'Guaiacwood'],
    },
    occasions: ['wedding', 'gift'],
    inStock: true,
    images: [
      { url: '/images/perfume_atelier.jpg', alt: 'Atelier Mystique' },
    ],
    variants: [
      { size: '50ml', price: 235 },
      { size: '100ml', price: 320 },
    ],
  },
  {
    id: 8,
    name: 'Fleur Blanche',
    description:
      'Luminous morning blossoms kissed with citrus blossoms, neroli, and pure white musk.',
    category: {
      id: 1,
      name: 'Pure Extractions',
    },
    scentFamily: ['floral', 'fresh'],
    notes: {
      top: ['Neroli', 'Dewy Petals', 'Grapefruit'],
      heart: ['Gardenia', 'Jasmine Sambac', 'Freesia'],
      base: ['Clean Musks', 'Blonde Woods', 'Cedar'],
    },
    occasions: ['wedding', 'personal use'],
    inStock: true,
    images: [
      { url: '/images/perfume_fleur.jpg', alt: 'Fleur Blanche' },
    ],
    variants: [
      { size: '50ml', price: 175 },
      { size: '100ml', price: 245 },
    ],
  },
  {
    id: 9,
    name: 'Noir Absolu',
    description:
      'An intense nocturnal study in darkness, smoky vetiver, leather, and Indonesian patchouli.',
    category: {
      id: 2,
      name: 'Private Reserve',
    },
    scentFamily: ['woody', 'oriental'],
    notes: {
      top: ['Black Pepper', 'Nutmeg', 'Cypriol'],
      heart: ['Birch Tar', 'Dark Leather', 'Cacao'],
      base: ['Oud Wood', 'Dark Patchouli', 'Tonka Bean'],
    },
    occasions: ['personal use', 'gift'],
    inStock: true,
    images: [
      { url: '/images/perfume_noir.jpg', alt: 'Noir Absolu' },
    ],
    variants: [
      { size: '50ml', price: 265 },
      { size: '100ml', price: 375 },
    ],
  },
  {
    id: 10,
    name: 'Santal Céleste',
    description:
      'A serene and radiant sandalwood elixir layered with cardamom and powdered iris.',
    category: {
      id: 3,
      name: 'Atelier Oils',
    },
    scentFamily: ['woody'],
    notes: {
      top: ['Cardamom', 'Violet Petals', 'Coriander'],
      heart: ['Mysore Sandalwood', 'Florentine Iris', 'Cedar'],
      base: ['White Amber', 'Dry Moss', 'Cashmeran'],
    },
    occasions: ['birthday', 'personal use'],
    inStock: true,
    images: [
      { url: '/images/perfume_santal.jpg', alt: 'Santal Céleste' },
    ],
    variants: [
      { size: '50ml', price: 215 },
      { size: '100ml', price: 295 },
    ],
  },
  {
    id: 11,
    name: 'Rose Impériale',
    description:
      'Velvety Bulgarian rose and sweet amber combined with a dash of sparkling citrus.',
    category: {
      id: 2,
      name: 'Private Reserve',
    },
    scentFamily: ['floral'],
    notes: {
      top: ['Rose Damascena', 'Mandarin', 'Pink Pepper'],
      heart: ['Centifolia Rose', 'Raspberry Leaf', 'Orris'],
      base: ['Precious Amber', 'Vanilla Absolute', 'Cedar'],
    },
    occasions: ['birthday', 'gift'],
    inStock: true,
    images: [
      { url: '/images/perfume_rose.jpg', alt: 'Rose Impériale' },
    ],
    variants: [
      { size: '50ml', price: 250 },
      { size: '100ml', price: 360 },
    ],
  },
  {
    id: 12,
    name: 'Riviera Zeste',
    description:
      'The vibrant brilliance of coastal citrus trees with sparkling sea breezes and cedarwood.',
    category: {
      id: 4,
      name: 'Discovery Vault',
    },
    scentFamily: ['fresh'],
    notes: {
      top: ['Calabrian Bergamot', 'Bitter Orange', 'Mint'],
      heart: ['Neroli', 'Maritime Pine', 'Rosemary'],
      base: ['Vetiver', 'Sea Moss', 'Driftwood'],
    },
    occasions: ['personal use', 'birthday'],
    inStock: true,
    images: [
      { url: '/images/perfume_sol.jpg', alt: 'Riviera Zeste' },
    ],
    variants: [
      { size: '50ml', price: 160 },
      { size: '100ml', price: 225 },
    ],
  },

  // Page 3
  {
    id: 13,
    name: 'Bois Éternel',
    description:
      'Centuries-old cedar trees, smoldering dry leaves, and refined leather under a starlit canopy.',
    category: {
      id: 3,
      name: 'Atelier Oils',
    },
    scentFamily: ['woody'],
    notes: {
      top: ['Atlas Cedar', 'Juniper Berry', 'Thyme'],
      heart: ['Cypress', 'Birch Wood', 'Clary Sage'],
      base: ['Vetiver Root', 'Dry Leather', 'Oakmoss'],
    },
    occasions: ['gift', 'personal use'],
    inStock: true,
    images: [
      { url: '/images/perfume_atelier.jpg', alt: 'Bois Éternel' },
    ],
    variants: [
      { size: '50ml', price: 280 },
      { size: '100ml', price: 390 },
    ],
  },
  {
    id: 14,
    name: 'Éclat Floral',
    description:
      'An intoxicating bouquet of night-blooming jasmine, creamy magnolia, and sensual ylang.',
    category: {
      id: 1,
      name: 'Pure Extractions',
    },
    scentFamily: ['floral'],
    notes: {
      top: ['Magnolia', 'Pink Grapefruit', 'Green Apple'],
      heart: ['Night Jasmine', 'Ylang-Ylang', 'Peony'],
      base: ['Crystal Musk', 'Sandalwood', 'Golden Amber'],
    },
    occasions: ['wedding', 'birthday'],
    inStock: true,
    images: [
      { url: '/images/perfume_fleur.jpg', alt: 'Éclat Floral' },
    ],
    variants: [
      { size: '50ml', price: 190 },
      { size: '100ml', price: 270 },
    ],
  },
  {
    id: 15,
    name: 'Ambre Nuit',
    description:
      'Warm resinous golden amber entwined with sensual vanilla and exotic smoked spices.',
    category: {
      id: 2,
      name: 'Private Reserve',
    },
    scentFamily: ['oriental'],
    notes: {
      top: ['Cinnamon Bark', 'Saffron', 'Sweet Orange'],
      heart: ['Golden Amber', 'Benzoin', 'Labdanum'],
      base: ['Bourbon Vanilla', 'Tonka Bean', 'Patchouli'],
    },
    occasions: ['wedding', 'gift'],
    inStock: true,
    images: [
      { url: '/images/perfume_noir.jpg', alt: 'Ambre Nuit' },
    ],
    variants: [
      { size: '50ml', price: 270 },
      { size: '100ml', price: 380 },
    ],
  },
  {
    id: 16,
    name: 'Brise Marine',
    description:
      'Crisp salty ocean spray splashing over sun-warmed rocks and aquatic greenery.',
    category: {
      id: 4,
      name: 'Discovery Vault',
    },
    scentFamily: ['fresh'],
    notes: {
      top: ['Ocean Spray', 'Crushed Mint', 'Lime'],
      heart: ['Sea Kelp', 'Driftwood', 'Water Lily'],
      base: ['Mineral Amber', 'White Cedar', 'Clean Musk'],
    },
    occasions: ['personal use'],
    inStock: true,
    images: [
      { url: '/images/perfume_sol.jpg', alt: 'Brise Marine' },
    ],
    variants: [
      { size: '50ml', price: 145 },
      { size: '100ml', price: 210 },
    ],
  },
  {
    id: 17,
    name: 'Rose Crépuscule',
    description:
      'A deep, velvety rose bathed in evening shadows, infused with black plum and smoky patchouli.',
    category: {
      id: 1,
      name: 'Pure Extractions',
    },
    scentFamily: ['floral', 'oriental'],
    notes: {
      top: ['Black Plum', 'Pink Peppercorn', 'Bergamot'],
      heart: ['Crimson Rose', 'Osmanthus', 'Geranium'],
      base: ['Patchouli', 'Dark Amber', 'Leather'],
    },
    occasions: ['wedding', 'birthday'],
    inStock: true,
    images: [
      { url: '/images/perfume_rose.jpg', alt: 'Rose Crépuscule' },
    ],
    variants: [
      { size: '50ml', price: 225 },
      { size: '100ml', price: 315 },
    ],
  },
  {
    id: 18,
    name: 'Santal Doré',
    description:
      'Gilded sandalwood warmed by toasted spices, caramelized benzoin, and rich almond milk.',
    category: {
      id: 3,
      name: 'Atelier Oils',
    },
    scentFamily: ['woody', 'oriental'],
    notes: {
      top: ['Cardamom', 'Almond', 'Nutmeg'],
      heart: ['Creamy Sandalwood', 'Orris Butter', 'Cedar'],
      base: ['Benzoin', 'Vanilla', 'Musk'],
    },
    occasions: ['gift', 'personal use'],
    inStock: true,
    images: [
      { url: '/images/perfume_santal.jpg', alt: 'Santal Doré' },
    ],
    variants: [
      { size: '50ml', price: 295 },
      { size: '100ml', price: 395 },
    ],
  },

  // Page 4
  {
    id: 19,
    name: 'Cuir Majestueux',
    description:
      'An aristocratic leather composition enveloped by dry woods, incense smoke, and dried fruits.',
    category: {
      id: 2,
      name: 'Private Reserve',
    },
    scentFamily: ['oriental', 'woody'],
    notes: {
      top: ['Dried Fig', 'Saffron', 'Thyme'],
      heart: ['Russian Leather', 'Frankincense', 'Violet'],
      base: ['Oud Wood', 'Birch Tar', 'Amber'],
    },
    occasions: ['wedding', 'personal use'],
    inStock: true,
    images: [
      { url: '/images/perfume_noir.jpg', alt: 'Cuir Majestueux' },
    ],
    variants: [
      { size: '50ml', price: 325 },
      { size: '100ml', price: 440 },
    ],
  },
  {
    id: 20,
    name: 'Jardin Serein',
    description:
      'A serene sanctuary of blossoming orange trees, dewy clover, and gentle mountain breezes.',
    category: {
      id: 4,
      name: 'Discovery Vault',
    },
    scentFamily: ['fresh', 'floral'],
    notes: {
      top: ['Petitgrain', 'Mandarin Leaf', 'Green Tea'],
      heart: ['Orange Blossom', 'Neroli', 'Lily'],
      base: ['White Woods', 'Musk', 'Vetiver'],
    },
    occasions: ['birthday', 'personal use'],
    inStock: true,
    images: [
      { url: '/images/perfume_sol.jpg', alt: 'Jardin Serein' },
    ],
    variants: [
      { size: '50ml', price: 155 },
      { size: '100ml', price: 220 },
    ],
  },
  {
    id: 21,
    name: 'Oud Céleste',
    description:
      'A rare heavenly oud lifted by sparkling aldehydes, cardamom, and soft white ambergris.',
    category: {
      id: 3,
      name: 'Atelier Oils',
    },
    scentFamily: ['woody'],
    notes: {
      top: ['Aldehydes', 'Cardamom', 'Pink Pepper'],
      heart: ['White Oud', 'Orris Root', 'Cypriol'],
      base: ['Ambergris', 'Sandalwood', 'Cashmeran'],
    },
    occasions: ['wedding', 'gift'],
    inStock: true,
    images: [
      { url: '/images/perfume_atelier.jpg', alt: 'Oud Céleste' },
    ],
    variants: [
      { size: '50ml', price: 340 },
      { size: '100ml', price: 460 },
    ],
  },
  {
    id: 22,
    name: 'Velours Rose',
    description:
      'A tactile indulgence of crushed rose petals, powdered cocoa, and sultry patchouli.',
    category: {
      id: 1,
      name: 'Pure Extractions',
    },
    scentFamily: ['floral', 'oriental'],
    notes: {
      top: ['Raspberry', 'Pink Pepper', 'Rose Water'],
      heart: ['May Rose', 'Dark Chocolate', 'Iris'],
      base: ['Patchouli', 'Benzoin', 'Musk'],
    },
    occasions: ['birthday', 'gift'],
    inStock: true,
    images: [
      { url: '/images/perfume_rose.jpg', alt: 'Velours Rose' },
    ],
    variants: [
      { size: '50ml', price: 210 },
      { size: '100ml', price: 295 },
    ],
  },
  {
    id: 23,
    name: 'Fleur d’Oranger',
    description:
      'Sun-drenched Mediterranean orange blossoms drenched in sweet honey and soft almond veil.',
    category: {
      id: 4,
      name: 'Discovery Vault',
    },
    scentFamily: ['floral', 'fresh'],
    notes: {
      top: ['Sweet Orange', 'Bergamot', 'Bitter Almond'],
      heart: ['Orange Blossom', 'Jasmine', 'Tuberose'],
      base: ['Honey', 'Cedar', 'Vanilla'],
    },
    occasions: ['wedding', 'personal use'],
    inStock: true,
    images: [
      { url: '/images/perfume_fleur.jpg', alt: 'Fleur d’Oranger' },
    ],
    variants: [
      { size: '50ml', price: 170 },
      { size: '100ml', price: 240 },
    ],
  },
  {
    id: 24,
    name: 'Encens Sacré',
    description:
      'Sacred temple smoke, rare Somali frankincense, golden resins, and ancient cedarwood.',
    category: {
      id: 2,
      name: 'Private Reserve',
    },
    scentFamily: ['oriental', 'woody'],
    notes: {
      top: ['Frankincense', 'Elemi', 'Black Pepper'],
      heart: ['Myrrh', 'Incense Smoke', 'Guaiacwood'],
      base: ['Cedarwood', 'Amber', 'Benzoin'],
    },
    occasions: ['gift', 'personal use'],
    inStock: true,
    images: [
      { url: '/images/perfume_noir.jpg', alt: 'Encens Sacré' },
    ],
    variants: [
      { size: '50ml', price: 285 },
      { size: '100ml', price: 395 },
    ],
  },
];

export const MOCK_CATEGORIES = [
  { id: 1, name: 'Pure Extractions' },
  { id: 2, name: 'Private Reserve' },
  { id: 3, name: 'Atelier Oils' },
  { id: 4, name: 'Discovery Vault' },
];

export const MOCK_ScentFamily = [
  { id: 1, name: 'Floral' },
  { id: 2, name: 'Woody' },
  { id: 3, name: 'Oriental' },
  { id: 4, name: 'Fresh' },
];

export const MOCK_Occasions = [
  { id: 1, name: 'Personal Use' },
  { id: 2, name: 'Wedding' },
  { id: 3, name: 'Gift Sets' },
  { id: 4, name: 'Birthday' },
];
