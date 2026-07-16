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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
    category: 'Wellness',
    image: '/assets/ivory-caps-vitamin-c.jpg',
    availability: true,
    badge: 'Popular',
    description: 'Advanced brightening supplement with 100% natural dietary formula in 60 capsules to promote even skin tone and antioxidant support.',
    dosage: 'Take 1–2 capsules daily with water.',
    warnings: 'For adults only. Consult a healthcare professional before use if you have any medical condition.'
  },

  // ── Baby Care ─────────────────────────────────────────────────────────────
  {
    id: 'b1',
    name: 'Kids & Teens Body Milk S/S',
    price: 0,
    category: 'Baby Care',
    image: '/assets/kids-teens-body-milk.png',
    availability: true,
    badge: 'Popular',
    description: 'Clinically mild tone proven moisturizing body milk with multi-vitamins. Daily rejuvenating soft, toning and nourishing formula for kids and teens.',
    dosage: 'Apply generously to skin daily after bathing.',
    warnings: 'For external use only. Keep out of reach of young children.'
  },
  {
    id: 'b2',
    name: 'Huggies Pure Baby Wipes',
    price: 0,
    category: 'Baby Care',
    image: '/assets/huggies-baby-wipes.png',
    availability: true,
    badge: 'In Stock',
    description: 'Gentle and pure baby wipes with 99% pure water. Dermatologically tested and hypoallergenic for sensitive newborn skin.',
    dosage: 'Use as needed for gentle cleansing during diaper changes.',
    warnings: 'For external use only. Do not flush. Keep away from infants\' eyes.'
  },
  {
    id: 'b3',
    name: 'Cussons Baby Lotion 200ml',
    price: 0,
    category: 'Baby Care',
    image: '/assets/cussons-baby-lotion.png',
    availability: true,
    badge: 'In Stock',
    description: 'Specially formulated soft and smooth baby lotion that gently moisturises and protects delicate baby skin while keeping it supple.',
    dosage: 'Apply to baby\'s body after bath. Massage gently into skin.',
    warnings: 'Avoid contact with eyes. For external use only.'
  },

  // ── Personal Care ─────────────────────────────────────────────────────────
  {
    id: 'pc1',
    name: 'Kenacomb Cream 20g',
    price: 0,
    category: 'Personal Care',
    image: '/assets/kenacomb-cream.png',
    availability: true,
    badge: 'In Stock',
    description: 'Multi-action pharmaceutical cream containing Nystatin, Neomycin Sulfate, Gramicidin and Triamcinolone Acetonide for skin infections.',
    dosage: 'Apply a thin layer to the affected area 2-4 times daily as directed.',
    warnings: 'Rx Only. For external use only. Not for ophthalmic use. Consult your doctor.'
  },
  {
    id: 'pc2',
    name: 'Mycota Cream 25g',
    price: 0,
    category: 'Personal Care',
    image: '/assets/mycota-cream.png',
    availability: true,
    badge: 'In Stock',
    description: 'Effective antifungal cream for the treatment of athlete\'s foot and other fungal skin infections between toes and on feet.',
    dosage: 'Apply to affected areas twice daily, morning and evening.',
    warnings: 'For external use only. Keep away from eyes. Discontinue if irritation occurs.'
  },
  {
    id: 'pc3',
    name: 'Bazuka Extra Strength Gel 5g',
    price: 0,
    category: 'Personal Care',
    image: '/assets/bazuka-gel.png',
    availability: true,
    badge: 'In Stock',
    description: 'Extra strength treatment for verrucas, warts, corns and calluses. Forms a water-resistant protective barrier for effective once-daily application.',
    dosage: 'Apply once daily to the affected area. No plaster necessary.',
    warnings: 'Pharmacy only. Not for use on facial warts or genital warts. Keep out of reach of children.'
  },

  // ── Vitamins ──────────────────────────────────────────────────────────────
  {
    id: 'p1',
    name: 'Premium Vitamin C 1000mg (100 Tabs)',
    price: 0,
    category: 'Vitamins',
    image: '/assets/ADH_Vitamin-C.jpg',
    availability: true,
    badge: 'Popular',
    description: 'High-potency dietary supplement formulated to boost immune response, support cardiovascular health, and promote radiant skin vitality.',
    dosage: 'Take 1 tablet daily with a meal.',
    warnings: 'Consult your physician if pregnant or nursing.'
  },

  // ── Pain Relief ───────────────────────────────────────────────────────────
  {
    id: 'p2',
    name: 'Paracetamol Extra 500mg',
    price: 0,
    category: 'Pain Relief',
    image: '/assets/paracetamol.jpg',
    availability: true,
    badge: 'In Stock',
    description: 'Rapid acting analgesic and antipyretic for effective relief from mild-to-moderate headaches, dental pain, and fever symptoms.',
    dosage: 'Adults: 1-2 tablets every 4-6 hours as needed. Max 8 tablets in 24 hours.',
    warnings: 'Contains paracetamol. Do not take with other paracetamol products.'
  },

  // ── Diabetes ──────────────────────────────────────────────────────────────
  {
    id: 'p3',
    name: 'Blood Glucose Monitoring System',
    price: 0,
    category: 'Diabetes',
    image: '/assets/images.jpg',
    availability: true,
    badge: 'Popular',
    description: 'State-of-the-art monitor delivering precise glucose readings in 5 seconds. Includes 50 test strips, lancets, and lancing device.',
    dosage: 'Use test strips only once. Read manual carefully before monitoring.',
    warnings: 'Consult your endocrinologist to interpret results.'
  },
  {
    id: 'p5',
    name: 'Metformin Hydrochloride 500mg',
    price: 0,
    category: 'Diabetes',
    image: '/assets/amocilicin.jpg',
    availability: true,
    badge: 'Prescription Required',
    description: 'Prescription oral medication for managing blood glucose levels in adults with type 2 diabetes mellitus.',
    dosage: 'Take with meals exactly as prescribed by your physician.',
    warnings: 'Rx Only. Risk of lactic acidosis; consult doctor immediately if feeling unwell.'
  },
];
