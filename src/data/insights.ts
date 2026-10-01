export interface InsightItem {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  content: string[];
}

export const insights: InsightItem[] = [
  {
    id: 'why-karachi-needs-website',
    category: 'Strategy & Web',
    title: 'Why Every Karachi Business Needs a Website',
    excerpt: 'Relying solely on social media pages leaves your brand vulnerable to algorithm shifts. A dedicated website builds authentic trust and Google search discovery.',
    readTime: '4 min read',
    image: './images/blog-1.jpg',
    content: [
      'For decades, local businesses in Pakistan relied on word of mouth and Facebook pages. However, modern consumers now search on Google before visiting any doctor, restaurant, rental service, or salon.',
      'A professional website provides total ownership of your digital storefront. It presents your menu, pricing, credentials, and locations clearly without social platform distractions.',
      'Most importantly, a high-converting website connects seamlessly to your sales team via WhatsApp, turning curious Google visitors into direct orders within minutes.',
    ],
  },
  {
    id: 'google-business-maps',
    category: 'Local SEO',
    title: 'Google Business Profile: Get Found on Maps',
    excerpt: 'Discover how optimizing your Google Maps presence helps nearby customers find your physical store, clinic, or office when searching on mobile.',
    readTime: '3 min read',
    image: './images/blog-2.jpg',
    content: [
      'When someone in Karachi searches for "dental clinic near me" or "car rental in Clifton", Google displays the Maps 3-Pack before organic search results.',
      'Setting up your Google Business Profile properly with verified phone numbers, business hours, high-definition photos, and authentic reviews ensures you capture high-intent local foot traffic.',
      'Client Bridge assists with pin verification, category optimization, and local citation synchronization to keep your business prominent.',
    ],
  },
  {
    id: 'whatsapp-marketing-guide',
    category: 'Sales Funnels',
    title: 'WhatsApp Marketing: A Simple Guide for Shops',
    excerpt: 'Practical strategies to convert your website and Instagram visitors into direct conversations using automated WhatsApp catalogs and quick replies.',
    readTime: '5 min read',
    image: './images/blog-3.jpg',
    content: [
      'In Pakistan, WhatsApp is not just a messaging app — it is the primary operating system for business commerce.',
      'By integrating click-to-WhatsApp buttons with pre-filled message templates, you eliminate checkout friction and answer customer objections immediately.',
      'Utilizing WhatsApp Business catalogs, automated greetings, and scheduled broadcasts helps you retain repeat customers with near-100% open rates.',
    ],
  },
];
