export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What services do you offer?',
    answer: 'We provide end-to-end digital services tailored for growing businesses: Website Design & Development (including 3D experiences), Brand Identity & Logo Design, Search Engine Optimization (SEO), Google Business Profile setup, Social Media Marketing & Meta Advertising, WhatsApp Marketing Funnels, E-commerce Stores, and reliable Cloud Hosting & Maintenance.',
  },
  {
    id: 'faq-2',
    question: 'Which industries do you work with?',
    answer: 'We primarily partner with local Pakistani and international service businesses including clinics and dental practices, restaurants and cafes, gyms and fitness clubs, beauty salons, car rental and automotive services, schools, real estate firms, law firms, and boutique e-commerce shops.',
  },
  {
    id: 'faq-3',
    question: 'How much does a website cost?',
    answer: 'We believe in transparent, upfront pricing with zero hidden fees. Our Starter website package begins at PKR 20,000, our full 5-page 3D Business package is PKR 30,000, and our comprehensive Growth Partner solution is PKR 50,000. Custom enterprise solutions are quoted based on specific scope.',
  },
  {
    id: 'faq-4',
    question: 'How long does a website take to complete?',
    answer: 'A standard Starter website typically takes 5 to 7 business days from brief completion. A 5-page Business package with custom 3D touches and SEO foundations takes around 10 to 14 business days, provided feedback and assets are supplied on schedule.',
  },
  {
    id: 'faq-5',
    question: 'Is hosting included with your packages?',
    answer: 'Yes, our Starter plan includes free domain registration plus 1 month of high-speed cloud hosting. Our Business and Growth plans come with fast cloud infrastructure, free SSL encryption, and automated backups.',
  },
  {
    id: 'faq-6',
    question: 'Can I see my website before final payment?',
    answer: 'Absolutely. We operate with complete transparency. You review the staging site on a private preview link, suggest revisions during the review milestone, and only complete final sign-off once you are satisfied with the design and responsiveness.',
  },
];
