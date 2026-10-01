export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  image: string;
  isFeaturedLime?: boolean;
}

export const featuredServices: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    category: 'Engineering & UI/UX',
    description: 'Bespoke, high-performance websites engineered for conversion. Modern tech stack, mobile perfection, and lightning-fast loading.',
    deliverables: ['Custom Responsive Code', 'Mobile-First Layouts', 'Speed Optimization', 'Lead Capture Flows'],
    image: 'images/service-1.jpg',
  },
  {
    id: 'social-media',
    title: 'Social Media & Content Marketing',
    category: 'Growth & Attention',
    description: 'Targeted campaigns and creative content that capture local Pakistani audiences and convert viewers into loyal paying customers.',
    deliverables: ['Meta & Instagram Ads', 'Reels & Story Creatives', 'Monthly Calendar', 'Lead Generation'],
    image: 'images/service-2.jpg',
    isFeaturedLime: true, // The highlighted center lime card matching the reference video!
  },
  {
    id: 'branding-identity',
    title: 'Branding & Logo Design',
    category: 'Identity & Visuals',
    description: 'Memorable brand identity systems that establish immediate credibility. Logo marks, color guidelines, typography, and marketing assets.',
    deliverables: ['Vector Logo Assets', 'Brand Guidelines', 'Social Media Kit', 'Stationery & Packaging'],
    image: 'images/service-3.jpg',
  },
];

export const secondaryServices: ServiceItem[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    category: 'Organic Visibility',
    description: 'Rank for high-intent keywords across Google so prospective clients discover your business when ready to purchase.',
    deliverables: ['On-Page SEO', 'Technical Audits', 'Local Keyword Targeting', 'Speed Score'],
    image: 'images/blog-1.jpg',
  },
  {
    id: 'google-business',
    title: 'Google Business Profile',
    category: 'Local Maps Dominance',
    description: 'Complete setup, verification guidance, category tuning, and local search optimization on Google Maps for local foot-traffic.',
    deliverables: ['Maps Verification Setup', 'Geo-Targeted Photos', 'Review Strategy', 'Local Citation Fixes'],
    image: 'images/blog-2.jpg',
  },
  {
    id: 'whatsapp-marketing',
    title: 'WhatsApp Marketing & Funnels',
    category: 'Direct Direct Sales',
    description: 'Set up direct WhatsApp catalog and lead routing so inquiries from social and search immediately land on your sales chat.',
    deliverables: ['Click-to-WhatsApp Ads', 'Catalog Integration', 'Pre-filled Chat Scripts', 'Fast Response Setup'],
    image: 'images/blog-3.jpg',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Development',
    category: 'Online Sales',
    description: 'High-converting online storefronts with seamless local checkout, cash on delivery (COD) tracking, and inventory control.',
    deliverables: ['Shopify / Custom Stores', 'Payment & COD Setup', 'Cart Abandonment', 'Order Management'],
    image: 'images/work-2.jpg',
  },
  {
    id: 'maintenance-hosting',
    title: 'Website Maintenance & Cloud Hosting',
    category: 'Reliability & Uptime',
    description: 'Ongoing technical maintenance, fast cloud hosting, SSL certificates, weekly backups, and dedicated priority support.',
    deliverables: ['99.9% Uptime Hosting', 'Free SSL Encryption', 'Regular Backups', 'WhatsApp Support'],
    image: 'images/hero-3.jpg',
  },
];
