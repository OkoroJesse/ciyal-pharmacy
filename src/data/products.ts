export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  availability: boolean;
  description: string;
  badge?: 'In Stock' | 'Prescription Required' | 'Popular';
  dosage?: string;
  warnings?: string;
}

export const mockProducts: Product[] = [
  // ── Wellness ──────────────────────────────────────────────────────────────
  {
    id: 'w1',
    name: 'Relumins Thio-Glow 180 Chewables',
    price: 30210,
    category: 'Wellness',
    image: '/assets/relumins-thio-glow.jpg',
    availability: true,
    badge: 'Popular',
    description: 'Premium glutathione complex chewable lozenges for skin brightening, antioxidant support and overall cellular health.',
    dosage: 'Take 1–2 lozenges daily, preferably on an empty stomach.',
    warnings: 'Not recommended for pregnant or breastfeeding women without doctor approval.'
  },
  {
    id: 'w2',
    name: 'Fohow Garlic Softgel 60 Caps',
    price: 4080,
    category: 'Wellness',
    image: '/assets/fohow-garlic-softgel.jpg',
    availability: true,
    badge: 'In Stock',
    description: 'Concentrated garlic essence oil softgels that support cardiovascular health, immunity, and natural detoxification.',
    dosage: 'Take 1–2 softgels daily with water after meals.',
    warnings: 'Consult your physician if you are on blood-thinning medication.'
  },
  {
    id: 'w3',
    name: 'Krispine HB 12 Plus (Chewable)',
    price: 2290,
    category: 'Wellness',
    image: '/assets/krispine-hb12.jpg',
    availability: true,
    badge: 'In Stock',
    description: 'Fortified with Ginseng, Selenium, Zinc, Iodine, B-Complex and Vitamins to support red blood cell formation and reduce fatigue.',
    dosage: 'Chew 1 tablet daily or as directed by your healthcare provider.',
    warnings: 'Keep out of reach of children. Do not exceed recommended dose.'
  },
  {
    id: 'w4',
    name: 'Bio Wel Hyper-Wel',
    price: 6750,
    category: 'Wellness',
    image: '/assets/bio-wel-hyper-wel.jpg',
    availability: true,
    badge: 'In Stock',
    description: 'Advanced herbal antihypertensive formula combining natural extracts to help maintain healthy blood pressure levels.',
    dosage: 'Take as directed by your healthcare practitioner.',
    warnings: 'Not a substitute for prescribed hypertension medication. Consult your doctor.'
  },
  {
    id: 'w5',
    name: 'Immune-Activ Vitamin C + Zinc & Selenium',
    price: 7380,
    category: 'Wellness',
    image: '/assets/immune-activ-vitamin-c.jpg',
    availability: true,
    badge: 'Popular',
    description: 'High-strength 1000mg Vitamin C combined with Zinc and Selenium for maximum immune system activation and antioxidant defence.',
    dosage: 'Take 1 tablet daily with water, preferably with a meal.',
    warnings: 'Do not exceed the recommended daily intake. Keep out of reach of children.'
  },
  {
    id: 'w6',
    name: 'Ivory Caps Vitamin C Brightening Plus',
    price: 14650,
    category: 'Wellness',
    image: '/assets/ivory-caps-vitamin-c.jpg',
    availability: true,
    badge: 'Popular',
    description: 'Advanced brightening supplement with 100% natural dietary formula in 60 capsules to promote even skin tone and antioxidant support.',
    dosage: 'Take 1–2 capsules daily with water.',
    warnings: 'For adults only. Consult a healthcare professional before use if you have any medical condition.'
  },

  // ── Other Categories ──────────────────────────────────────────────────────
  {
    id: 'p1',
    name: 'Premium Vitamin C 1000mg (100 Tabs)',
    price: 7500,
    category: 'Vitamins',
    image: '/assets/ADH_Vitamin-C.jpg',
    availability: true,
    badge: 'Popular',
    description: 'High-potency dietary supplement formulated to boost immune response, support cardiovascular health, and promote radiant skin vitality.',
    dosage: 'Take 1 tablet daily with a meal.',
    warnings: 'Consult your physician if pregnant or nursing.'
  },
  {
    id: 'p2',
    name: 'Paracetamol Extra 500mg',
    price: 1200,
    category: 'Pain Relief',
    image: '/assets/paracetamol.jpg',
    availability: true,
    badge: 'In Stock',
    description: 'Rapid acting analgesic and antipyretic for effective relief from mild-to-moderate headaches, dental pain, and fever symptoms.',
    dosage: 'Adults: 1-2 tablets every 4-6 hours as needed. Max 8 tablets in 24 hours.',
    warnings: 'Contains paracetamol. Do not take with other paracetamol products.'
  },
  {
    id: 'p3',
    name: 'Blood Glucose Monitoring System',
    price: 22500,
    category: 'Diabetes',
    image: '/assets/images.jpg',
    availability: true,
    badge: 'Popular',
    description: 'State-of-the-art monitor delivering precise glucose readings in 5 seconds. Includes 50 test strips, lancets, and lancing device.',
    dosage: 'Use test strips only once. Read manual carefully before monitoring.',
    warnings: 'Consult your endocrinologist to interpret results.'
  },
  {
    id: 'p4',
    name: 'Hydrating Ceramide Lotion',
    price: 12000,
    category: 'Personal Care',
    image: '/assets/images-117.webp',
    availability: true,
    badge: 'In Stock',
    description: 'Dermatologist-recommended daily skin barrier repair formula, enriched with ceramides and hyaluronic acid for dry, sensitive skin.',
    dosage: 'Apply liberally as often as needed, or as directed by a dermatologist.',
    warnings: 'For external use only. Avoid contact with eyes.'
  },
  {
    id: 'p5',
    name: 'Metformin Hydrochloride 500mg',
    price: 4500,
    category: 'Diabetes',
    image: '/assets/amocilicin.jpg',
    availability: true,
    badge: 'Prescription Required',
    description: 'Prescription oral medication for managing blood glucose levels in adults with type 2 diabetes mellitus.',
    dosage: 'Take with meals exactly as prescribed by your physician.',
    warnings: 'Rx Only. Risk of lactic acidosis; consult doctor immediately if feeling unwell.'
  },
  {
    id: 'p7',
    name: 'Infant Ibuprofen Oral Suspension',
    price: 3500,
    category: 'Baby Care',
    image: '/assets/paracetamol.jpg',
    availability: true,
    badge: 'In Stock',
    description: 'Fever reducer and pain reliever specially formulated for infants, orange-flavored. Includes syringe for precise dosing.',
    dosage: 'Dose according to weight using the provided syringe. Consult pediatrician.',
    warnings: 'Do not use under 3 months of age. Keep out of reach of children.'
  },
  {
    id: 'p9',
    name: 'Gentle Baby Moisturizing Cream',
    price: 5200,
    category: 'Baby Care',
    image: '/assets/images-117.webp',
    availability: true,
    badge: 'Popular',
    description: 'Clinically proven mild formula designed to protect and soothe baby\'s delicate skin barrier against chafing and irritation.',
    dosage: 'Smooth over baby\'s body daily or as needed, especially after bathing.',
    warnings: 'Hypoallergenic. Keep out of reach of infants to avoid accidental ingestion.'
  },
  {
    id: 'p10',
    name: 'Antibacterial Hand Cleansing Gel',
    price: 1800,
    category: 'Personal Care',
    image: '/assets/images-117.webp',
    availability: true,
    badge: 'In Stock',
    description: 'Instant rinse-free hand sanitizer gel that eliminates 99.9% of common germs. Enriched with aloe vera extract to prevent drying.',
    dosage: 'Rub small amount thoroughly over dry hands until absorbed.',
    warnings: 'Flammable. Keep away from fire or flame. External use only.'
  }
];
