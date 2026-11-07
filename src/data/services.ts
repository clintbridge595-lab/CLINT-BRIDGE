export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  businessBenefit: string;
  deliverables: string[];
  image: string;
  isFeaturedLime?: boolean;
}

export const featuredServices: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    category: 'Engineering & UI/UX',
    description: 'Bespoke, high-performance websites engineered for business conversions. Modern React and Vite architecture, mobile perfection, and lightning-fast loading speeds.',
    businessBenefit: 'Turns casual mobile visitors into qualified sales inquiries with zero loading delay.',
    deliverables: ['Custom Responsive Code', 'Mobile-First Layouts', 'Speed Optimization', 'Lead Capture Flows'],
    image: 'images/service-1.jpg',
  },
  {
    id: 'mobile-app',
    title: 'Android Mobile App Development',
    category: 'Mobile Applications',
    description: 'Custom Android MVP applications tailored to your business operations. Clean mobile UX, API integration, client engagement hooks, and Play Store release support.',
    businessBenefit: 'Establishes direct smartphone presence on your customers’ home screens.',
    deliverables: ['Android MVP App', 'Custom Mobile UI', 'Core Feature Logic', 'Testing & Deployment Help'],
    image: 'images/service-2.jpg',
    isFeaturedLime: true,
  },
  {
    id: 'branding-identity',
    title: 'Branding & Logo Design',
    category: 'Identity & Visuals',
    description: 'Memorable brand identity systems that establish instant market credibility. Vector logo marks, color typography guidelines, and digital marketing assets.',
    businessBenefit: 'Positions your business as the premium market choice over generic local competitors.',
    deliverables: ['Vector Logo Formats', 'Color & Font Guidelines', 'Social Media Branding Kit', 'Stationery & Packaging'],
    image: 'images/service-3.jpg',
  },
];

export const secondaryServices: ServiceItem[] = [
  {
    id: 'social-media',
    title: 'Social Media & Content Marketing',
    category: 'Growth & Attention',
    description: 'Targeted campaigns, 12 social media posts, and 4 short-form reels that capture local Pakistani and regional audiences, converting viewers into paying customers.',
    businessBenefit: 'Generates predictable inbound message volume directly on WhatsApp.',
    deliverables: ['Meta & Instagram Ads', 'Reels & Story Creatives', 'Monthly Strategy Calendar', 'Paid Lead Generation'],
    image: 'images/why-1.jpg',
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    category: 'Organic Visibility',
    description: 'Rank for high-intent commercial keywords across Google so prospective clients find your business when actively searching to buy.',
    businessBenefit: 'Long-term organic client flow without perpetual ad spend.',
    deliverables: ['On-Page SEO', 'Technical Audits', 'Local Keyword Targeting', 'Core Web Vitals Tuning'],
    image: 'images/blog-1.jpg',
  },
  {
    id: 'google-business',
    title: 'Google Business Profile',
    category: 'Local Maps Dominance',
    description: 'Complete setup, verification guidance, category tuning, and search optimization on Google Maps for high-value local walk-in and phone leads.',
    businessBenefit: 'Dominates neighborhood search for customers ready to call or visit.',
    deliverables: ['Maps Verification Setup', 'Geo-Tagged Photos', 'Review Strategy', 'Local Citation Sync'],
    image: 'images/blog-2.jpg',
  },
  {
    id: 'whatsapp-marketing',
    title: 'WhatsApp Marketing & Funnels',
    category: 'Direct Sales Routing',
    description: 'Set up direct WhatsApp Business catalog and lead routing so inquiries from social and search immediately land in your sales chat with pre-filled context.',
    businessBenefit: 'Shortens the sales cycle from days to minutes.',
    deliverables: ['Click-to-WhatsApp Ads', 'Catalog Integration', 'Pre-filled Chat Scripts', 'Instant Response Workflows'],
    image: 'images/blog-3.jpg',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Development',
    category: 'Online Sales',
    description: 'High-converting online storefronts with seamless local checkout, Cash on Delivery (COD) tracking, and inventory control.',
    businessBenefit: 'Empowers smooth multi-item purchases with zero checkout friction.',
    deliverables: ['Custom Storefront', 'Payment & COD Setup', 'Cart Optimization', 'Order Notification Routing'],
    image: 'images/work-2.jpg',
  },
  {
    id: 'maintenance-hosting',
    title: 'Website Maintenance & Cloud Hosting',
    category: 'Reliability & Uptime',
    description: 'Ongoing technical maintenance, fast cloud hosting, free SSL certificates, weekly backups, and dedicated priority support.',
    businessBenefit: 'Protects your digital platform with continuous uptime and immediate developer assistance.',
    deliverables: ['99.9% Uptime Hosting', 'Free SSL Encryption', 'Weekly Backups', 'Direct WhatsApp Developer Support'],
    image: 'images/hero-3.jpg',
  },
];
