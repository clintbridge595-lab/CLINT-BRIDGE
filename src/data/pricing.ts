export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  currency: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  whatsappMessage: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '20,000',
    currency: 'PKR',
    description: 'Perfect for small local businesses ready to establish their first credible online presence.',
    features: [
      'Full Responsive Website',
      'Free Domain + 1 Month Cloud Hosting',
      'WhatsApp Enquiry Flow Integration',
      'Mobile & Tablet Optimized Layout',
      'Basic On-Page SEO Setup',
      'Social Media Profiles Linked',
    ],
    isPopular: false,
    ctaText: 'Choose Starter Plan',
    whatsappMessage: 'Hi Client Bridge, I am interested in the Starter package (PKR 20,000). Please share details.',
  },
  {
    id: 'business',
    name: 'Business',
    price: '30,000',
    currency: 'PKR',
    description: 'Our most sought-after plan for growing companies wanting a modern 3D presence and search foundation.',
    features: [
      '5-Page 3D Custom Website',
      'Google Business Profile & Maps Foundations',
      'Brand Identity & Direction Included',
      'Advanced On-Page & Technical SEO',
      'High-Speed Cloud Hosting & Free SSL',
      'Interactive Micro-Interactions & Contact Form',
      '24/7 Dedicated WhatsApp Support',
    ],
    isPopular: true, // Most popular highlighted card
    ctaText: 'Choose Business Plan',
    whatsappMessage: 'Hi Client Bridge, I am interested in the Business package (PKR 30,000). Please share details.',
  },
  {
    id: 'growth-partner',
    name: 'Growth Partner',
    price: '50,000',
    currency: 'PKR',
    description: 'Complete digital transformation for established businesses aiming for market leadership.',
    features: [
      'Full 3D Custom Website + Digital Marketing',
      'Ongoing Creative & Advertising Support',
      'Monthly Conversion & SEO Optimisation',
      'Custom Lead Funnel & Meta Advertising Setup',
      'WhatsApp Catalog & Automated Routing',
      'Speed Audit & Priority Technical Support',
      'Bi-Weekly Strategic Reporting',
    ],
    isPopular: false,
    ctaText: 'Choose Growth Partner',
    whatsappMessage: 'Hi Client Bridge, I am interested in the Growth Partner package (PKR 50,000). Please share details.',
  },
];
