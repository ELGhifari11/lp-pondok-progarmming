import aiCard from '../assets/portfolio-ai.svg';
import webCard from '../assets/portfolio-web.svg';
import brandCard from '../assets/portfolio-brand.svg';

export const portfolioItems = [
  {
    title: 'NeonX Dashboard',
    description:
      'A realtime analytics cockpit for autonomous retail, blending volumetric data visuals with glassmorphic controls.',
    image: aiCard,
    tags: ['AI', 'Analytics', 'WebGL'],
  },
  {
    title: 'Astral Commerce',
    description:
      'Cross-device ecommerce platform with adaptive storytelling, neon gradients, and dynamic product choreography.',
    image: webCard,
    tags: ['Ecommerce', 'Storytelling', 'Responsive'],
  },
  {
    title: 'Flux Identity System',
    description:
      'A modular identity suite with generative logo system, typography guidelines, and sonic signatures.',
    image: brandCard,
    tags: ['Branding', 'Design Systems', 'Motion'],
  },
];
