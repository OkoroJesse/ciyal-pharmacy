export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  availability: boolean;
  description: string;
  dosage?: string;
  warnings?: string;
}

export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'Premium Vitamin C 1000mg (100 Tabs)',
    price: 14.99,
    category: 'Vitamins',
    image: '/assets/ADH_Vitamin-C.jpg',
    availability: true,
    description: 'High-potency dietary supplement formulated to boost immune response, support cardiovascular health, and promote radiant skin vitality.',
    dosage: 'Take 1 tablet daily with a meal.',
    warnings: 'Do not exceed recommended daily dose. Consult your doctor if pregnant.'
  },
  {
    id: 'p2',
    name: 'Paracetamol Pain Relief 500mg (20 Tablets)',
    price: 4.99,
    category: 'Pain Relief',
    image: '/assets/paracetamol.jpg',
    availability: true,
    description: 'Rapid acting analgesic and antipyretic for effective relief from mild-to-moderate headaches, dental pain, and fever symptoms.',
    dosage: 'Adults: 1-2 tablets every 4-6 hours as needed. Max 8 tablets in 24 hours.',
    warnings: 'Contains paracetamol. Do not take with other paracetamol products.'
  },
  {
    id: 'p3',
    name: 'Amoxicillin Antibiotic 500mg Capsules',
    price: 18.50,
    category: 'Prescriptions',
    image: '/assets/amocilicin.jpg',
    availability: true,
    description: 'Clinical grade antibiotic prescribed for the treatment of various bacterial infections including ear, nose, throat, and urinary tract infections.',
    dosage: 'As prescribed by your healthcare physician.',
    warnings: 'Rx Only. Finish the full prescribed course even if symptoms disappear.'
  },
  {
    id: 'p4',
    name: 'Hydrating Skincare Lotion (250ml)',
    price: 22.00,
    category: 'Skincare',
    image: '/assets/images-117.webp',
    availability: true,
    description: 'Dermatologist-recommended daily skin barrier repair formula, enriched with ceramides and hyaluronic acid for dry, sensitive skin.',
    dosage: 'Apply liberally as often as needed, or as directed by a dermatologist.',
    warnings: 'For external use only. Avoid contact with eyes.'
  },
  {
    id: 'p5',
    name: 'Automatic Digital Blood Pressure Monitor',
    price: 45.00,
    category: 'Devices',
    image: '/assets/images.jpg',
    availability: true,
    description: 'High-accuracy medical device with irregular heartbeat detection, standard cuff size, and 90-reading memory for at-home health monitoring.',
    dosage: 'Use sitting down, at rest, following the included manual instructions.',
    warnings: 'Self-monitoring is not diagnostic. Consult your cardiologist for values.'
  },
  {
    id: 'p6',
    name: 'Emergency First Aid Kit (50 Pieces)',
    price: 29.99,
    category: 'First Aid',
    image: '/assets/clinic-tablet-hands-doctor-patient-600nw-2472677039.webp',
    availability: true,
    description: 'Comprehensive medical responder pack containing sterile gauze, bandages, alcohol swabs, medical tape, tweezers, and a quick-guide booklet.',
    dosage: 'Apply dressings to clean, dry wounds. Follow first aid guidelines.',
    warnings: 'Seek immediate clinical attention for deep, arterial, or infected wounds.'
  },
  {
    id: 'p7',
    name: 'Infant Ibuprofen Oral Suspension (100ml)',
    price: 8.99,
    category: 'Pain Relief',
    image: '/assets/paracetamol.jpg',
    availability: false,
    description: 'Fever and pain reducer for children, orange flavored, includes measuring syringe for exact dosage safety.',
    dosage: 'Dose according to child weight. Consult pediatrician.',
    warnings: 'Do not use under 3 months of age. Keep out of reach of children.'
  },
  {
    id: 'p8',
    name: 'Organic Herbal Sleep Supplements (60 Veggie Capsules)',
    price: 16.50,
    category: 'Vitamins',
    image: '/assets/ADH_Vitamin-C.jpg',
    availability: true,
    description: 'Soothing blend of chamomile, valerian root, and melatonin to support healthy natural sleep patterns without grogginess.',
    dosage: 'Take 2 capsules 30 minutes before bedtime.',
    warnings: 'Do not operate machinery or drive after taking.'
  }
];
