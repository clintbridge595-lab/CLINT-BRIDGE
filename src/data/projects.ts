export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  type: string;
  description: string;
  features: string[];
  contribution: string;
  url: string;
  image: string;
  liveDomain: string;
  isWide?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: 'beauty-salon',
    title: 'Beauty Salon — Booking Platform',
    category: 'Salon & Wellness',
    type: 'Web Application',
    description: 'A clean, modern appointment booking and service showcase web platform engineered for high-end beauty care and salon clients.',
    features: [
      'Interactive Treatment Menu & Pricing',
      'Direct Mobile Appointment Booking',
      'Staff & Stylist Showcase',
      'Mobile-First Touch Architecture',
    ],
    contribution: 'Full UI/UX Architecture, Mobile Optimization & Direct Lead Flow',
    url: 'https://beauty-salon-copy-2a20896a.base44.app/',
    image: './images/work-1.jpg',
    liveDomain: 'beauty-salon.app',
  },
  {
    id: 'pak-e-drive',
    title: 'PAK E DRIVE — Luxury Car Rental & Fleet',
    category: 'Automotive & Car Rental',
    type: 'Rental Portal',
    description: 'Executive car rental and luxury vehicle booking platform featuring chauffeur and self-drive tiers, transparent rates, and direct WhatsApp booking.',
    features: [
      'Executive Fleet Showcase (Sedans, SUVs & Luxury Vans)',
      'Self-Drive & Chauffeur Tier Filtering',
      'Instant WhatsApp Reservation Routing',
      'Transparent Pricing & Rental Policy Display',
    ],
    contribution: 'Brand Presentation, Fleet Catalog Layout & WhatsApp Booking Integration',
    url: 'https://www.pakedrive.com/',
    image: './images/pakedrive.jpg',
    liveDomain: 'pakedrive.com',
  },
  {
    id: 'prime-ride',
    title: 'Prime Ride Rent Car — Vehicle Rental',
    category: 'Automotive & Logistics',
    type: 'Rental Portal',
    description: 'Fleet discovery and reservation web application featuring vehicle tiers, daily rental calculations, and quick WhatsApp booking.',
    features: [
      'Multi-Category Vehicle Exploration',
      'Daily & Monthly Rental Estimates',
      'Airport Transfer & Intercity Packages',
      'One-Click Customer Support Line',
    ],
    contribution: 'Responsive Frontend Engineering, Fleet Filter Engine & CRO',
    url: 'https://prime-ride-rentcar-0c42d917.base44.app/',
    image: './images/work-3.jpg',
    liveDomain: 'primeride.app',
  },
  {
    id: 'best-rent-cars',
    title: 'Best Rent Cars — Car Rental Business',
    category: 'Automotive & Fleet',
    type: 'Commercial Website',
    description: 'Professional commercial vehicle rental site designed for corporate clients, tourists, and daily rental reservations.',
    features: [
      'Corporate Account Packages',
      'Real-Time Fleet Availability Inquiry',
      'Insurance & Documentation Guide',
      'Direct Click-to-Call & Location Sync',
    ],
    contribution: 'Complete Web Design, Technical SEO & Local Search Setup',
    url: 'https://bestrentcars.com/',
    image: './images/work-4.jpg',
    liveDomain: 'bestrentcars.com',
  },
  {
    id: 'mr-beef-burgrz',
    title: 'Mr Beef Burgrz — Burger Restaurant',
    category: 'Food & Beverage',
    type: 'Restaurant Brand Platform',
    description: 'Appetizing burger restaurant web portal showcasing premium smash burgers, store locations, and real-time online order links.',
    features: [
      'High-Impact Visual Menu with Custom Add-ons',
      'Branch Finder & Operating Hours',
      'Direct WhatsApp Ordering & Delivery Links',
      'Speed-Optimized Mobile Performance',
    ],
    contribution: 'Visual Brand Storytelling, Digital Menu UX & Performance Optimization',
    url: 'https://www.mrbeefburgrz.com/',
    image: './images/work-5.jpg',
    liveDomain: 'mrbeefburgrz.com',
    isWide: true,
  },
];
