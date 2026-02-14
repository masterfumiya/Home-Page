import profile from '@/content/profile.json';

export const siteMeta = {
  title: `${profile.name} | Portfolio`,
  description: profile.intro,
  siteUrl: 'https://example.com',
  image: '/og-image.svg'
};

export const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  affiliation: profile.affiliation,
  url: siteMeta.siteUrl,
  sameAs: [profile.contact.github, profile.contact.x, profile.contact.linkedin],
  email: `mailto:${profile.contact.email}`
};

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${profile.name} Portfolio`,
  url: siteMeta.siteUrl,
  inLanguage: 'ja-JP'
};
