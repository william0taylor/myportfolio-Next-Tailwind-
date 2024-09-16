import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'William Taylor | Full Stack developer',
  description:
    "Hello, I'm a Full Stack developer based in the United States. I enjoy building sites and apps. My focus is React (Next.js).",
  keywords: [
    'William Taylor',
    'Full Stack developer',
    'React',
    'Next.js',
    'Web development',
    'Full Stack',
    'JavaScript',
    'HTML',
    'CSS',
    'Portfolio',
    'Projects',
    'Website',
    'Web applications',
    'Developer',
    'Code',
    'Programming',
    'Tech enthusiast',
  ],
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
