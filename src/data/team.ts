export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  isLead?: boolean;
  socials?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

// 4-Person agency team based in Karachi, Pakistan
// TODO: Replace placeholder team names with real team members when finalized
export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Sheri Lee Miller.',
    role: 'Creative Director & Founder',
    image: './images/team-1.jpg',
    bio: 'Oversees visual architecture, brand storytelling, and strategic client growth funnels.',
    isLead: true, // Highlighted dark green card with lime social column
    socials: {
      facebook: 'https://www.facebook.com/profile.php?id=61595149822424',
      instagram: 'https://www.instagram.com/clint_bridge_/',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: 'member-2',
    // TODO: Replace with lead web engineer name
    name: 'Hamza Tariq',
    role: 'Lead Web Engineer',
    image: './images/team-2.jpg',
    bio: 'Specialist in modern React, high-speed Vite architectures, and interactive 3D web experiences.',
    isLead: false,
    socials: {
      facebook: 'https://www.facebook.com/profile.php?id=61595149822424',
      instagram: 'https://www.instagram.com/clint_bridge_/',
    },
  },
  {
    id: 'member-3',
    // TODO: Replace with UI/UX designer name
    name: 'Zainab Fatima',
    role: 'Senior UI/UX Designer',
    image: './images/team-3.jpg',
    bio: 'Designs intuitive mobile-first interfaces and brand systems optimized for business conversions.',
    isLead: false,
    socials: {
      facebook: 'https://www.facebook.com/profile.php?id=61595149822424',
      instagram: 'https://www.instagram.com/clint_bridge_/',
    },
  },
  {
    id: 'member-4',
    // TODO: Replace with growth strategist name
    name: 'Bilal Khan',
    role: 'Performance & SEO Strategist',
    image: './images/team-4.jpg',
    bio: 'Drives Google Maps visibility, high-intent local search rankings, and Meta advertising campaigns.',
    isLead: false,
    socials: {
      facebook: 'https://www.facebook.com/profile.php?id=61595149822424',
      instagram: 'https://www.instagram.com/clint_bridge_/',
    },
  },
];
