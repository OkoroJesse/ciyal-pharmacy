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
  {
    id: 'p1',
    name: 'Premium Vitamin C 1000mg',
    price: 14.99,
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
    price: 4.99,
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
    price: 39.99,
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
    price: 22.00,
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
    price: 12.50,
    category: 'Diabetes',
    image: '/assets/amocilicin.jpg',
    availability: true,
    badge: 'Prescription Required',
    description: 'Prescription oral medication for managing blood glucose levels in adults with type 2 diabetes mellitus.',
    dosage: 'Take with meals exactly as prescribed by your physician.',
    warnings: 'Rx Only. Risk of lactic acidosis; consult doctor immediately if feeling unwell.'
  },
  {
    id: 'p6',
    name: 'Advanced Antiseptic Wound Dressings',
    price: 15.99,
    category: 'Wellness',
    image: '/assets/clinic-tablet-hands-doctor-patient-600nw-2472677039.webp',
    availability: true,
    badge: 'In Stock',
    description: 'Clinical-grade sterile dressing pads with non-stick layer, ideal for post-surgical care and minor accident wound healing.',
    dosage: 'Apply to clean, dry wounds. Change dressing daily or as directed.',
    warnings: 'Seek immediate clinical attention for deep or infected wounds.'
  },
  {
    id: 'p7',
    name: 'Infant Ibuprofen Oral Suspension',
    price: 8.99,
    category: 'Baby Care',
    image: '/assets/paracetamol.jpg',
    availability: true,
    badge: 'In Stock',
    description: 'Fever reducer and pain reliever specially formulated for infants, orange-flavored. Includes syringe for precise dosing.',
    dosage: 'Dose according to weight using the provided syringe. Consult pediatrician.',
    warnings: 'Do not use under 3 months of age. Keep out of reach of children.'
  },
  {
    id: 'p8',
    name: 'Organic Sleep Aid & Melatonin',
    price: 16.50,
    category: 'Wellness',
    image: '/assets/ADH_Vitamin-C.jpg',
    availability: true,
    badge: 'In Stock',
    description: 'Soothing natural blend of chamomile, valerian root, and melatonin to support healthy circadian rhythms and restful sleep patterns.',
    dosage: 'Take 2 capsules 30 minutes before bedtime.',
    warnings: 'Do not operate machinery or drive after taking.'
  },
  {
    id: 'p9',
    name: 'Gentle Baby Moisturizing Cream',
    price: 11.50,
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
    price: 5.99,
    category: 'Personal Care',
    image: '/assets/images-117.webp',
    availability: true,
    badge: 'In Stock',
    description: 'Instant rinse-free hand sanitizer gel that eliminates 99.9% of common germs. Enriched with aloe vera extract to prevent drying.',
    dosage: 'Rub small amount thoroughly over dry hands until absorbed.',
    warnings: 'Flammable. Keep away from fire or flame. External use only.'
  }
];
