export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  type: string;
  description: string;
  url: string;
  image: string;
  metrics?: string;
  isWide?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: 'beauty-salon',
    title: 'Beauty Salon — Booking Platform',
    category: 'Salon & Wellness',
    type: 'Website',
    description: 'A clean, modern appointment booking and service showcase web platform built for high-end beauty care and salon clients.',
    url: 'https://beauty-salon-copy-2a20896a.base44.app/',
    image: '/images/work-1.jpg',
  },
  {
    id: 'pizza-munch',
    title: 'Pizza Munch — Fast Food & Online Menu',
    category: 'Restaurant & Food',
    type: 'E-commerce',
    description: 'Fast food digital menu and ordering interface with vibrant visual hierarchy, meal customization, and direct checkout.',
    url: 'https://pizzamunch.pk/',
    image: '/images/work-2.jpg',
  },
  {
    id: 'prime-ride',
    title: 'Prime Ride Rent Car — Vehicle Rental',
    category: 'Automotive & Logistics',
    type: 'Rental Portal',
    description: 'Fleet discovery and reservation web application featuring vehicle tiers, daily rental calculations, and quick WhatsApp booking.',
    url: 'https://prime-ride-rentcar-0c42d917.base44.app/',
    image: '/images/work-3.jpg',
  },
  {
    id: 'best-rent-cars',
    title: 'Best Rent Cars — Car Rental Business',
    category: 'Automotive & Fleet',
    type: 'Website',
    description: 'Professional commercial vehicle rental site designed for corporate clients, tourists, and daily rental reservations.',
    url: 'https://bestrentcars.com/',
    image: '/images/work-4.jpg',
  },
  {
    id: 'mr-beef-burgrz',
    title: 'Mr Beef Burgrz — Burger Restaurant',
    category: 'Food & Beverage',
    type: 'Restaurant Brand',
    description: 'Appetizing burger restaurant web portal showcasing premium smash burgers, store locations, and real-time online order links.',
    url: 'https://www.mrbeefburgrz.com/',
    image: '/images/work-5.jpg',
    isWide: true, // 5th project spans across the bottom row as specified in the master prompt!
  },
];
