export interface TestimonialItem {
  id: string;
  clientName: string;
  businessName: string;
  location: string;
  projectType: string;
  quote: string;
  avatar: string;
}

// TODO: Replace with real client reviews once verified testimonials are collected from clients
export const placeholderReviews: TestimonialItem[] = [
  {
    id: 'review-1',
    // TODO: Replace with verified client review
    clientName: 'Local Business Partner',
    businessName: 'Karachi Retail Enterprise',
    location: 'Karachi, Pakistan',
    projectType: 'Website & Google Business',
    quote: 'Client Bridge designed our modern web presence with a direct WhatsApp ordering system that made connecting with local customers straightforward and fast.',
    avatar: '/images/hero-1.jpg',
  },
  {
    id: 'review-2',
    // TODO: Replace with verified client review
    clientName: 'Hospitality Partner',
    businessName: 'Culinary Brand',
    location: 'Sindh, Pakistan',
    projectType: 'Online Menu & Brand Direction',
    quote: 'The team understood our requirements immediately. Our new digital menu looks sharp on mobile screens and has zero clutter.',
    avatar: '/images/hero-2.jpg',
  },
  {
    id: 'review-3',
    // TODO: Replace with verified client review
    clientName: 'Automotive Partner',
    businessName: 'Fleet Service Owner',
    location: 'Karachi, Pakistan',
    projectType: 'Custom 3D Web Portal',
    quote: 'Clean pricing structure and transparent delivery timeline. From strategy to final launch, the process was seamless.',
    avatar: '/images/hero-3.jpg',
  },
];
