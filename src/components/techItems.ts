export interface item {
  name: string;
  type: string;
  description: string;
  caps: boolean;
}

export const items: item[] = [
  {
    name: 'arch',
    type: 'other',
    description:
      'Arch Linux is an independently developed, minimalist Linux distribution that emphasizes simplicity, modularity, and user-centric design, catering to advanced users who prefer a highly customizable and up-to-date operating system',
    caps: false
  },
  {
    name: 'astro',
    type: 'framework',
    description:
      'Astro is a modern web framework designed for building fast, content-focused websites. It uses a "bring your own framework" approach, allowing you to integrate popular tools like React, Vue, or Svelte, and optimizes performance by delivering only the minimal JavaScript needed for your pages.',
    caps: false
  },
  {
    name: 'bash',
    type: 'lang',
    description:
      'Bash is a command-line shell and scripting language for Unix-based systems that allows users to execute commands and automate tasks efficiently.',
    caps: false
  },
  {
    name: 'bootstrap',
    type: 'framework',
    description:
      'Bootstrap is a popular front-end framework that simplifies web development by providing pre-designed HTML, CSS, and JavaScript components for responsive and mobile-first design.',
    caps: false
  },
  {
    name: 'bun',
    type: 'tool',
    description:
      'Bun is a modern JavaScript runtime and package manager that focuses on speed and efficiency, designed to run JavaScript and TypeScript applications with built-in support for features like transpilation and bundling.',
    caps: false
  },
  {
    name: 'css',
    type: 'lang',
    description:
      'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and layout of web pages, allowing developers to control the appearance of HTML elements, including colors, fonts, spacing, and responsiveness.',
    caps: true
  },
  {
    name: 'discordjs',
    type: 'framework',
    description:
      'Discord.js is a powerful JavaScript library for interacting with the Discord API, enabling developers to create feature-rich bots and applications for Discord.',
    caps: false
  },
  {
    name: 'docker',
    type: 'tool',
    description:
      'Docker is an open-source platform that automates the deployment, scaling, and management of applications using containerization.',
    caps: false
  },
  {
    name: 'git',
    type: 'tool',
    description: '"the information manager from hell" -Linus Torvalds (Creator of Git)',
    caps: false
  },
  {
    name: 'github',
    type: 'tool',
    description:
      'GitHub is a web-based platform that hosts Git repositories, enabling collaboration on software development projects through features like version control, issue tracking, and code review.',
    caps: false
  },
  {
    name: 'go',
    type: 'lang',
    description:
      'Go, often referred to as Golang, is an open-source programming language developed by Google that emphasizes simplicity, concurrency, and efficiency, making it ideal for building scalable and high-performance applications.',
    caps: false
  },
  {
    name: 'html',
    type: 'lang',
    description:
      'HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web, defining elements like headings, paragraphs, links, and images.',
    caps: true
  },
  {
    name: 'javascript',
    type: 'lang',
    description:
      'JavaScript is a versatile, high-level programming language primarily used for adding interactivity and dynamic behavior to web pages, but it can also be executed as an interpreted language on the server side via Node.js.',
    caps: false
  },
  {
    name: 'jquery',
    type: 'framework',
    description:
      'jQuery is a fast, small JavaScript library that simplifies HTML document manipulation, event handling, and animation, making it easier to develop interactive web applications.',
    caps: false
  },
  {
    name: 'linux',
    type: 'other',
    description:
      'GNU/Linux is a free and open-source operating system that combines the GNU software system with the Linux kernel, providing a powerful and flexible platform for a wide range of computing environments.',
    caps: false
  },
  {
    name: 'mongodb',
    type: 'other',
    description:
      'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, allowing for scalable and high-performance data management suited for modern applications.',
    caps: false
  },
  {
    name: 'neovim',
    type: 'tool',
    description:
      'Neovim is a Vim-based text editor engineered for extensibility and usability, to encourage new applications and contributions.',
    caps: false
  },
  {
    name: 'nodejs',
    type: 'tool',
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine that enables the execution of Javascript outside of the browser",
    caps: false
  },
  {
    name: 'npm',
    type: 'tool',
    description:
      'NPM (Node Package Manager) is a package manager for JavaScript that simplifies the installation, management, and sharing of libraries and tools for Node.js applications.',
    caps: true
  },
  {
    name: 'postgreSQL',
    type: 'other',
    description:
      'PostgreSQL is an advanced, open-source relational database management system known for its robustness, extensibility, and support for complex queries and data types.',
    caps: false
  },
  {
    name: 'python',
    type: 'lang',
    description:
      'Python is a high-level, interpreted programming language known for its readability and versatility, making it popular for web development, data analysis, artificial intelligence, and scripting.',
    caps: false
  },
  {
    name: 'svelte',
    type: 'framework',
    description:
      'Svelte is a modern JavaScript framework for building user interfaces that compiles components into highly efficient, optimized JavaScript at build time, resulting in faster performance and smaller bundle sizes.',
    caps: false
  },
  {
    name: 'tailwind',
    type: 'framework',
    description:
      'Tailwind CSS is a utility-first CSS framework that allows developers to create custom designs by applying utility classes directly in the HTML, promoting a rapid and flexible styling approach.',
    caps: false
  },
  {
    name: 'threejs',
    type: 'framework',
    description:
      'Three.js is a JavaScript library that simplifies the creation of 3D graphics in the browser, leveraging WebGL to enable developers to build interactive and visually stunning 3D experiences on the web.',
    caps: false
  },
  {
    name: 'typescript',
    type: 'lang',
    description:
      'TypeScript is a superset of JavaScript that adds static typing and advanced features, allowing developers to catch errors early and enhance code maintainability while still being compatible with existing JavaScript code.',
    caps: false
  },
  {
    name: 'vercel',
    type: 'tool',
    description:
      'Vercel is a cloud platform for static sites and serverless functions that simplifies the deployment and hosting of web applications.',
    caps: false
  },
  {
    name: 'vite',
    type: 'tool',
    description:
      'Vite is a modern build tool and development server for JavaScript projects that provides fast, optimized development experiences using native ES modules, enabling instant server start and lightning-fast hot module replacement.',
    caps: false
  },
  {
    name: 'vscodium',
    type: 'tool',
    description:
      'VSCodium is a free and open-source version of Visual Studio Code, stripped of telemetry and proprietary features, offering a lightweight code editor with the same powerful functionality for developers.',
    caps: false
  },
  {
    name: 'webstorm',
    type: 'tool',
    description:
      'WebStorm is a powerful integrated development environment (IDE) from JetBrains specifically designed for JavaScript and related technologies.',
    caps: false
  }
];
