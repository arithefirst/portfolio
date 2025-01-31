import type { project } from './types';
const projects: project[] = [
  {
    title: 'Kōshi',
    altname: 'koshi',
    desc: 'an Imageboard software designed for hikari3.ch',
    images: [
      {
        src: '/images/h3.png',
        alt: 'Hikari3.ch',
      },
      {
        src: '/images/h3-thread.png',
        alt: 'Hikari3.ch (thread)',
      },
      {
        src: '/images/h3-mocha.png',
        alt: 'Hikari3.ch (Mocha Theme)',
      },
      {
        src: '/images/h3-tomorrow.png',
        alt: 'Hikari3.ch (Tomorrow Theme)',
      },
    ],
    badges: [
      {
        content: 'CSS',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      {
        content: 'EJS',
        url: 'https://ejs.co/',
      },
      {
        content: 'Express',
        url: 'https://expressjs.com/',
      },
      {
        content: 'JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        content: 'MongoDB',
        url: 'https://www.mongodb.com/',
      },
    ],
  },
  {
    title: 'Lockbox',
    desc: ' A password protected dropbox where users given a password can upload a file ',
    images: [
      {
        src: '/images/lockbox.png',
        alt: 'Lockbox',
      },
      {
        src: '/images/lockbox-admin.png',
        alt: 'Lockbox (admin dash)',
      },
    ],
    badges: [
      {
        content: 'DaisyUI',
        url: 'https://daisyui.com',
      },
      {
        content: 'Docker',
        url: 'https://docker.com',
      },
      {
        content: 'Svelte',
        url: 'https://svelte.dev/',
      },
      {
        content: 'SvelteKit',
        url: 'https://svelte.dev/kit',
      },
      {
        content: 'TailwindCSS',
        url: 'https://tailwindcss.com',
      },
      {
        content: 'TypeScript',
        url: 'https://www.typescriptlang.org',
      },
    ],
  },
  {
    title: 'Now Playing Widget',
    altname: 'now-playing-widget',
    desc: 'A simple widget to show the current song playing on your spotify account. Useful for twitch streams and youtube videos.',
    images: [
      {
        src: '/images/now-playing-widget.webp',
        alt: 'Now Playing Widget',
      },
    ],
    badges: [
      {
        content: 'CSS',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      {
        content: 'Golang',
        url: 'https://go.dev',
      },
      {
        content: 'HTML',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        content: 'JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        content: 'JQuery',
        url: 'https://jquery.com/',
      },
    ],
  },
  {
    title: 'Portfolio',
    desc: "My portfolio website, the one you're on now !",
    images: [
      {
        src: '/images/portfolio.png',
        alt: 'Personal Portfolio',
      },
      {
        src: '/images/portfolio-stack.png',
        alt: 'Personal Portfolio (Techstack)',
      },
      {
        src: '/images/portfolio-projects.png',
        alt: 'Personal Portfolio (Projects)',
      },
      {
        src: '/images/portfolio-contact.png',
        alt: 'Personal Portfolio (Contact)',
      },
    ],
    badges: [
      {
        content: 'AstroJS',
        url: 'https://astro.build',
      },
      {
        content: 'DaisyUI',
        url: 'https://daisyui.com',
      },
      {
        content: 'Svelte',
        url: 'https://svelte.dev',
      },
      {
        content: 'TailwindCSS',
        url: 'https://tailwindcss.com',
      },
      {
        content: 'Vercel',
        url: 'https://vercel.com',
      },
    ],
  },
  {
    title: 'shibedrill.site',
    altname: 'shibedrill-site',
    desc: 'A custom built blog site with automatic post creation from markdown',
    images: [
      {
        src: '/images/shibedrill-site.png',
        alt: 'shibedrill.site',
      },
      {
        src: '/images/shibedrill-site-tags.png',
        alt: 'shibedrill.site (Tags)',
      },
      {
        src: '/images/shibedrill-site-archive.png',
        alt: 'shibedrill.site (Archive)',
      },
      {
        src: '/images/shibedrill-site-about.png',
        alt: 'shibedrill.site (About)',
      },
      {
        src: '/images/shibedrill-site-contact.png',
        alt: 'shibedrill.site (Contact)',
      },
      {
        src: '/images/shibedrill-site-article.png',
        alt: 'shibedrill.site (Article)',
      },
    ],
    badges: [
      {
        content: 'AstroJS',
        url: 'https://astro.build',
      },
      {
        content: 'DaisyUI',
        url: 'https://daisyui.com',
      },
      {
        content: 'TailwindCSS',
        url: 'https://tailwindcss.com',
      },
      {
        content: 'Vercel',
        url: 'https://vercel.com',
      },
    ],
  },
];

export default projects;
