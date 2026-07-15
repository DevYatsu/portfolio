export type Language = "en" | "fr";

export interface Project {
	id: string;
	name: string;
	category: string;
	description: { en: string; fr: string };
	tags: { name: string; url: string }[];
	link: { url: string; label: string };
}

export interface StaticSite {
	id: string;
	name: string;
	description: { en: string; fr: string };
	tags: string[];
	url?: string;
}

export interface Skill {
	name: string;
	level: { en: string; fr: string };
	category: string;
}

// ── Featured Projects ──────────────────────────────────────────

export const projects: Project[] = [
	{
		id: "mangaread",
		name: "MangaReader",
		category: { en: "Web Application", fr: "Application Web" },
		description: {
			en: "A Rust-powered manga reader that scrapes chapters from third-party sites, merges them into series, and serves them through a web interface. Three workspace crates — core domain, scraper adapter, Axum web server — with a background sync loop and SQLite persistence.",
			fr: "Un lecteur de manga en Rust qui récupère des chapitres depuis des sites tiers, les fusionne en séries, et les sert dans une interface web. Trois crates d'espace de travail — domaine principal, adaptateur de scraper, serveur web Axum — avec une boucle de synchronisation en arrière-plan et une persistance SQLite.",
		},
		tags: [
			{ name: "Rust", url: "https://rust-lang.org" },
			{ name: "Axum", url: "https://docs.rs/axum" },
			{ name: "SQLite", url: "https://sqlite.org" },
			{ name: "Docker", url: "https://docker.com" },
		],
		link: { url: "https://github.com/DevYatsu/mangaread", label: "GitHub →" },
	},
	{
		id: "axto",
		name: "Axto",
		category: { en: "Full-Stack Marketplace", fr: "Marketplace Full-Stack" },
		description: {
			en: "A marketplace platform for car parts. React Native mobile app for buyers, Astro web dashboard for sellers and admins. Supabase backend with vehicle compatibility matching, order management, reviews, and push notifications.",
			fr: "Une plateforme marketplace pour pièces auto. App mobile React Native pour les acheteurs, portail web Astro pour les vendeurs et administrateurs. Backend Supabase avec compatibilité véhicule, gestion des commandes, avis et notifications push.",
		},
		tags: [
			{ name: "React Native", url: "https://reactnative.dev" },
			{ name: "Astro", url: "https://astro.build" },
			{ name: "Supabase", url: "https://supabase.com" },
			{ name: "Postgres", url: "https://postgresql.org" },
		],
		link: { url: "", label: "Private source" },
	},
	{
		id: "yatsuscript",
		name: "YatsuScript",
		category: { en: "Compilers & Runtimes", fr: "Compilateurs & Runtimes" },
		description: {
			en: "A bytecode interpreter written entirely from scratch — no dependencies, no existing code, just Rust and the compiler. Register allocation, memory mapping, instruction set design. The hardest and most rewarding thing I've built.",
			fr: "Un interpréteur de bytecode écrit intégralement à partir de rien — aucune dépendance, aucun code existant, juste Rust et le compilateur. Allocation de registres, mapping mémoire, conception de jeu d'instructions. Le projet le plus difficile et le plus gratifiant que j'ai réalisé.",
		},
		tags: [
			{ name: "Rust", url: "https://rust-lang.org" },
			{ name: "Interpreter", url: "https://github.com/DevYatsu/YatsuScript" },
			{ name: "Bytecode", url: "https://en.wikipedia.org/wiki/Bytecode" },
		],
		link: { url: "https://github.com/DevYatsu/YatsuScript", label: "GitHub →" },
	},
];

// ── Static Websites (secondary) ────────────────────────────────

export const staticSites: StaticSite[] = [
	{
		id: "devigny",
		name: "De Vigny Avocat",
		description: {
			en: "Law firm website for IP and corporate law. Clean, professional law firm site that lets the content speak.",
			fr: "Site professionnel pour un cabinet d'avocats en droit des affaires. Sobre, élégant, le contenu prime.",
		},
		tags: ["Astro", "Tailwind"],
		url: "https://yatsu-avocat.netlify.app",
	},
	{
		id: "lestudio",
		name: "Le Studio",
		description: {
			en: "Bowling alley in Paris. Oak lanes, good food, clean web presence.",
			fr: "Bowling à Paris. Pistes en chêne, bonne cuisine, présence web soignée.",
		},
		tags: ["Astro", "Tailwind"],
		url: "https://le-bowling.netlify.app",
	},
	{
		id: "cisaille",
		name: "Cisaille Paris",
		description: {
			en: "Precision barber shop in Le Marais, Paris. Clean site, sharp cuts.",
			fr: "Barbier de précision dans le Marais à Paris. Site propre, coupes nettes.",
		},
		tags: ["Astro", "React"],
		url: "https://cisaille.netlify.app",
	},
];

// ── Skills ─────────────────────────────────────────────────────

export const skills: Skill[] = [
	{ name: "Rust", level: { en: "Advanced", fr: "Avancé" }, category: "lang" },
	{ name: "TypeScript", level: { en: "Advanced", fr: "Avancé" }, category: "lang" },
	{ name: "Python", level: { en: "Advanced", fr: "Avancé" }, category: "lang" },
	{ name: "C / C++", level: { en: "Proficient", fr: "Compétent" }, category: "lang" },
	{ name: "Java & C#", level: { en: "Proficient", fr: "Compétent" }, category: "lang" },
	{ name: "React", level: { en: "Advanced", fr: "Avancé" }, category: "frontend" },
	{ name: "Next.js", level: { en: "Proficient", fr: "Compétent" }, category: "frontend" },
	{ name: "Astro", level: { en: "Proficient", fr: "Compétent" }, category: "frontend" },
	{ name: "Node.js", level: { en: "Proficient", fr: "Compétent" }, category: "backend" },
	{ name: "Supabase / PostgreSQL", level: { en: "Proficient", fr: "Compétent" }, category: "data" },
	{ name: "Systems Programming", level: { en: "Advanced", fr: "Avancé" }, category: "systems" },
	{ name: "Compiler Design", level: { en: "Intermediate", fr: "Intermédiaire" }, category: "systems" },
	{ name: "Concurrency / Multithreading", level: { en: "Advanced", fr: "Avancé" }, category: "systems" },
];
