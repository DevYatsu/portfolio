export type Language = 'en' | 'fr';

export const levelColors: Record<string, string> = {
  // English keys
  'Advanced': 'hsl(24,100%,60%)',
  'Proficient': 'hsl(0,0%,50%)',
  'Intermediate': 'hsl(0,0%,35%)',
  // French keys
  'Avancé': 'hsl(24,100%,60%)',
  'Compétent': 'hsl(0,0%,50%)',
  'Intermédiaire': 'hsl(0,0%,35%)',
};

export const marqueeItems = [
  'Rust', 'TypeScript', 'Python', 'React', 'Next.js', 'C++', 'Astro',
  'Supabase', 'Node.js', 'x86-64', 'PostgreSQL', 'WebSockets', 'HTTP', 'HE-Arc'
];

export const skills = [
  { name: 'Rust', level: { en: 'Advanced', fr: 'Avancé' }, category: 'lang' },
  { name: 'TypeScript', level: { en: 'Advanced', fr: 'Avancé' }, category: 'lang' },
  { name: 'Python', level: { en: 'Advanced', fr: 'Avancé' }, category: 'lang' },
  { name: 'C / C++', level: { en: 'Proficient', fr: 'Compétent' }, category: 'lang' },
  { name: 'Java & C#', level: { en: 'Proficient', fr: 'Compétent' }, category: 'lang' },
  { name: 'React', level: { en: 'Advanced', fr: 'Avancé' }, category: 'frontend' },
  { name: 'Next.js', level: { en: 'Proficient', fr: 'Compétent' }, category: 'frontend' },
  { name: 'Astro', level: { en: 'Proficient', fr: 'Compétent' }, category: 'frontend' },
  { name: 'Node.js', level: { en: 'Proficient', fr: 'Compétent' }, category: 'backend' },
  { name: 'Supabase / PostgreSQL', level: { en: 'Proficient', fr: 'Compétent' }, category: 'data' },
  { name: 'Systems Programming', frName: 'Programmation Système', level: { en: 'Advanced', fr: 'Avancé' }, category: 'systems' },
  { name: 'Compiler Design', frName: 'Conception de Compilateurs', level: { en: 'Intermediate', fr: 'Intermédiaire' }, category: 'systems' },
  { name: 'Concurrency / Multithreading', frName: 'Concurrence / Multithreading', level: { en: 'Advanced', fr: 'Avancé' }, category: 'systems' },
];

export const projects = [
  {
    id: 'kora',
    num: '01',
    name: 'Kora',
    url: 'https://yatsu-kora.netlify.app',
    tags: ['React', 'TypeScript', 'Supabase'],
    statusColor: 'chip-orange',
    span: 'lg:col-span-2',
    accentVar: '--accent: hsl(230,80%,65%)',
    accentHsl: '230,80%,65%',
    locales: {
      en: {
        tagline: 'Real-time messaging, zero flicker',
        description: 'Production-ready chat app with fully optimistic UI, Supabase real-time subscriptions, and zero visible latency. Built to handle edge cases most devs never think about.',
        status: 'Live ↗',
      },
      fr: {
        tagline: 'Messagerie en temps réel, aucune latence',
        description: 'Une application de chat prête pour la production. UI totalement optimiste, abonnements temps réel Supabase, et aucune latence visuelle. Pensée pour les cas extrêmes.',
        status: 'Live ↗',
      }
    }
  },
  {
    id: 'express-rs',
    num: '02',
    name: 'express_rs',
    url: 'https://github.com/DevYatsu/express_rs',
    tags: ['Rust', 'HTTP', 'TCP', 'Multithreading'],
    statusColor: '',
    span: '',
    accentVar: '--accent: hsl(14,95%,58%)',
    accentHsl: '14,95%,58%',
    locales: {
      en: {
        tagline: 'Express.js, reborn in Rust',
        description: 'A memory-safe, blazing-fast HTTP framework for Rust. Inspired by Express.js, built for maximum concurrency and zero-cost abstractions.',
        status: 'OSS',
      },
      fr: {
        tagline: 'Express.js, réinventé en Rust',
        description: 'Un framework HTTP pour Rust : sûr, sans fuite mémoire, et extrêmement rapide. Inspiré par Express.js, conçu pour simplifier la concurrence et supprimer les abstractions coûteuses.',
        status: 'Opensource',
      }
    }
  },
  {
    id: 'small-jit',
    num: '03',
    name: 'SmallJIT',
    url: 'https://github.com/DevYatsu/small_jit',
    tags: ['C++', 'x86-64', 'Assembly'],
    statusColor: '',
    span: '',
    accentVar: '--accent: hsl(0,80%,62%)',
    accentHsl: '0,80%,62%',
    locales: {
      en: {
        tagline: 'Machine code from scratch',
        description: 'A JIT compiler written in C++. Direct x86-64 codegen, register allocation, memory mapping with no external libs, pure low-level craft.',
        status: 'Systems',
      },
      fr: {
        tagline: 'Du code machine depuis zéro',
        description: 'Un compilateur JIT (Just-In-Time) directement en C++. Génération de code x86-64, allocation de registres, mapping mémoire — aucune librairie, du pur bas niveau.',
        status: 'Système',
      }
    }
  },
  {
    id: 'car-rental',
    num: '04',
    name: 'CarFlow',
    url: null,
    tags: ['Full Stack', 'API Design', 'Auth'],
    statusColor: '',
    span: '',
    accentVar: '--accent: hsl(180,70%,45%)',
    accentHsl: '180,70%,45%',
    locales: {
      en: {
        tagline: 'Full-stack vehicle rental platform',
        description: 'Complete rental system: booking flow, live availability, auth, admin dashboard. Full-stack from database schema to responsive UI.',
        status: 'Full Stack',
      },
      fr: {
        tagline: 'Gestion de flotte full-stack',
        description: 'Système complet de location de véhicules : réservation, disponibilité en direct, authentification et dashboard d\'administration complet.',
        status: 'Full Stack',
      }
    }
  },
  {
    id: 'axto',
    num: '05',
    name: 'Axto',
    url: null,
    tags: ['Web App', 'Architecture'],
    statusColor: '',
    span: '',
    accentVar: '--accent: hsl(50,90%,55%)',
    accentHsl: '50,90%,55%',
    locales: {
      en: {
        tagline: 'High-performance web architecture',
        description: 'Engineered for speed, reliability, and elegance. A demonstration project with meticulous attention to DX and performance at every level.',
        status: 'Demo',
      },
      fr: {
        tagline: 'Architecture web haute performance',
        description: 'Conçu pour la vitesse et la fiabilité. Un projet de démonstration qui repousse les limites des performances web et propose une expérience utilisateur parfaite.',
        status: 'Demo',
      }
    }
  },
];