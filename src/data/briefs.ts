export interface BriefLink {
  id: string;
  title: string;
  description: string;
  url: string;
  isExternal: boolean;
}

export const projectBriefs: BriefLink[] = [
  {
    id: 'website-brief',
    title: 'Website Brief',
    description: 'Share your business goals, target audience, preferred pages, and feature needs for your new custom website.',
    url: 'https://forms.gle/eUynYqzZziPvoqZz6',
    isExternal: true,
  },
  {
    id: 'logo-brief',
    title: 'Logo Brief',
    description: 'Detail your brand style, preferred colors, aesthetic vibe, and visual identity requirements.',
    url: 'https://forms.gle/E9EsZxT2tzxWwHn69',
    isExternal: true,
  },
  {
    id: 'seo-brief',
    title: 'SEO Brief',
    description: 'Provide your primary service categories, target cities, and key competitors for Google search ranking.',
    url: 'https://forms.gle/wZsNM9UBvd8Nejbm6',
    isExternal: true,
  },
  {
    id: 'illustration-brief',
    title: 'Illustration & Custom Creative',
    description: 'Custom digital artwork, promotional graphics, social media templates, and bespoke marketing assets.',
    url: 'https://wa.me/923112713755?text=Hi%20Client%20Bridge,%20I%20would%20like%20to%20discuss%20a%20custom%20illustration%20or%20creative%20project.',
    isExternal: true,
  },
];
