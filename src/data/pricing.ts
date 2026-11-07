export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  currency: string;
  period?: string;
  timeline: string;
  billingType: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  whatsappMessage: string;
}

export interface FlagshipDeliverableModule {
  title: string;
  iconName: string;
  items: string[];
}

export interface FlagshipPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  currency: string;
  billingType: string;
  timeline: string;
  description: string;
  deliverables: FlagshipDeliverableModule[];
  conditions: string[];
  ctaText: string;
  whatsappMessage: string;
}

export const flagshipPackage: FlagshipPackage = {
  id: 'complete-digital-growth',
  name: 'COMPLETE DIGITAL GROWTH',
  tagline: 'Our Premium All-Inclusive Flagship Solution',
  price: '200,000',
  currency: 'PKR',
  billingType: 'Flagship All-In-One Solution',
  timeline: '25 – 35 Business Days',
  description:
    'Everything your business needs to launch, scale, and dominate online. An end-to-end transformation bringing together custom web engineering, an Android mobile app, complete brand identity, digital advertising, social media execution, and WhatsApp automated lead funnels.',
  deliverables: [
    {
      title: '1. Professional Website',
      iconName: 'Globe',
      items: [
        'Up to 8 responsive pages',
        'Premium custom UI/UX design',
        'Mobile-first development',
        'Contact & WhatsApp integration',
        'Basic technical SEO',
        'Speed optimization',
      ],
    },
    {
      title: '2. Android Mobile App',
      iconName: 'Smartphone',
      items: [
        'Android MVP application',
        'Professional mobile UI',
        'Business-specific core features',
        'Basic backend / API integration where required',
        'Testing & deployment assistance',
        'App publishing subject to client accounts & platform requirements',
      ],
    },
    {
      title: '3. Complete Branding',
      iconName: 'Palette',
      items: [
        'Custom logo design',
        'Brand color palette',
        'Typography selection',
        'Basic brand guidelines document',
        'Social media brand identity kit',
      ],
    },
    {
      title: '4. Social Media Marketing',
      iconName: 'Share2',
      items: [
        'Facebook & Instagram business setup',
        '12 social media posts',
        '4 short-form reels',
        'Content calendar',
        'Captions & creative designs',
        'First month campaign management',
      ],
    },
    {
      title: '5. Digital Advertising',
      iconName: 'Target',
      items: [
        'Meta Ads account setup',
        'Campaign strategy',
        'Audience research',
        'Lead generation campaign setup',
        'Campaign monitoring during included first month',
      ],
    },
    {
      title: '6. SEO & Google Visibility',
      iconName: 'Search',
      items: [
        'Technical SEO foundation',
        'On-page SEO optimization',
        'Google Business Profile setup assistance',
        'Local SEO foundation',
        'Search visibility improvements',
      ],
    },
    {
      title: '7. WhatsApp Business',
      iconName: 'MessageSquare',
      items: [
        'WhatsApp Business setup',
        'Business profile optimization',
        'Catalogue setup assistance',
        'Lead enquiry flow',
        'Quick replies configuration',
      ],
    },
    {
      title: '8. Analytics & Support',
      iconName: 'BarChart',
      items: [
        'Website analytics setup',
        'Conversion tracking where technically supported',
        'Basic performance reporting',
        '30-day post-launch technical support',
      ],
    },
  ],
  conditions: [
    'Package price: PKR 200,000 (Transparent fixed investment).',
    'Advertising ad spend is paid directly by client to Meta/Google and is not included in package price.',
    'Hosting, domains, developer accounts (e.g. Google Play Console $25 one-time), and third-party subscriptions are charged separately where applicable.',
    'Monthly marketing management after the first included month requires a separate agreement.',
    'Advanced app features, complex multi-vendor marketplaces, and custom backend requirements must be scoped separately.',
    'Final deliverables, project timelines, and revision rounds must be agreed in writing before project commencement.',
  ],
  ctaText: 'Start Your Digital Transformation',
  whatsappMessage:
    'Hi CLINT BRIDGE, I am interested in the flagship COMPLETE DIGITAL GROWTH package (PKR 200,000). Please share proposal and start timeline.',
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '30,000',
    currency: 'PKR',
    period: 'one-time',
    timeline: '5 – 7 Business Days',
    billingType: 'One-Time Project Fee',
    description: 'Perfect for small local businesses ready to establish their first credible online presence.',
    features: [
      'Full Responsive Website (Up to 3 Sections)',
      'Free Domain Registration (.com / .pk) + 1 Month Cloud Hosting',
      'WhatsApp Direct Inquiry Flow Integration',
      'Mobile & Tablet Optimized Layout',
      'Basic On-Page SEO & Meta Tags Setup',
      'Social Media Profiles Verified & Linked',
      '2 Rounds of Iterative Revisions',
    ],
    isPopular: false,
    ctaText: 'Choose Starter Plan',
    whatsappMessage: 'Hi CLINT BRIDGE, I am interested in the Starter package (PKR 30,000). Please share details.',
  },
  {
    id: 'business',
    name: 'Business',
    price: '40,000',
    currency: 'PKR',
    period: 'one-time',
    timeline: '10 – 14 Business Days',
    billingType: 'One-Time Project Fee',
    description: 'Our most sought-after plan for growing companies wanting a modern 3D presence and local search dominance.',
    features: [
      '5-Page Custom 3D Interactive Website',
      'Google Business Profile & Local Maps Verification Foundation',
      'Brand Identity, Vector Logo & Color Direction',
      'Advanced On-Page & Technical SEO Setup',
      'High-Speed Cloud Hosting & Free SSL Certificate',
      'Interactive Micro-Interactions & Contact Form',
      'Dedicated Direct WhatsApp Support During Launch',
      '3 Rounds of Iterative Revisions',
    ],
    isPopular: true,
    ctaText: 'Choose Business Plan',
    whatsappMessage: 'Hi CLINT BRIDGE, I am interested in the Business package (PKR 40,000). Please share details.',
  },
  {
    id: 'growth-partner',
    name: 'Growth Partner',
    price: '60,000',
    currency: 'PKR',
    period: 'one-time setup',
    timeline: '14 – 20 Business Days',
    billingType: 'Complete Launch + Marketing Setup',
    description: 'Complete digital transformation for established businesses aiming for market leadership and automated client flow.',
    features: [
      'Full Bespoke 3D Custom Website + Digital Marketing Engine',
      'Meta & Instagram Ad Campaign Setup & Pixel Configuration',
      'Google Search Console & Conversion Tracking Setup',
      'Custom Lead Funnel & Direct WhatsApp Lead Routing',
      'Speed Audit & 99.9% Uptime Cloud Infrastructure',
      'Bi-Weekly Strategic Reporting & CRO Insights',
      'Priority Technical Developer Support',
      'Unlimited Revisions During Staging Review',
    ],
    isPopular: false,
    ctaText: 'Choose Growth Partner',
    whatsappMessage: 'Hi CLINT BRIDGE, I am interested in the Growth Partner package (PKR 60,000). Please share details.',
  },
];
