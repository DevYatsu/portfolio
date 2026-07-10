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
		name: "MangaRead",
		category: { en: "Web Application", fr: "Application Web" },
		description: {
			en: "A manga reader that scrapes chapters from third-party sites, merges them into series, and serves them through a web UI. Built in Rust with Axum and SQLite. Three workspace crates, a background sync loop, and more time spent debugging chromedriver than I'd like to admit.",
			fr: "Un lecteur de manga qui scrape des chapitres depuis des sites tiers, les fusionne en séries, et les sert dans une interface web. Construit en Rust avec Axum et SQLite. Trois crates, une boucle de synchronisation, et plus de temps passé à debugger chromedriver que je veux bien l'admettre.",
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
			en: "A marketplace for car parts. React Native mobile app for buyers, Astro web dashboard for sellers and admins. Supabase backend, vehicle compatibility matching, order management, reviews, notifications. The kind of project where the scope creep was real but I learned more than any tutorial could teach.",
			fr: "Une marketplace pour pièces auto. App mobile React Native pour les acheteurs, portail web Astro pour les vendeurs. Backend Supabase, compatibilité véhicule, gestion des commandes, avis, notifications. Le genre de projet où le scope creep était réel mais où j'ai appris plus qu'avec n'importe quel tutoriel.",
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
			en: "A bytecode interpreter from absolute scratch. No dependencies, no existing code, just me and the Rust compiler. Register allocation, memory mapping, instruction set design. Honestly the hardest and most rewarding thing I've built. If you like compilers, we should talk.",
			fr: "Un interpréteur de bytecode écrit à partir de rien. Aucune dépendance, aucun code existant, juste moi et le compilateur Rust. Allocation de registres, mapping mémoire, design de jeu d'instructions. Honnêtement le truc le plus dur et le plus gratifiant que j'ai construit. Si t'aimes les compilateurs, on devrait parler.",
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
			en: "Law firm website for IP and corporate law. Clean, professional, gets out of the way of the content.",
			fr: "Site vitrine pour un cabinet d'avocats en droit des affaires. Propre, professionnel, laisse parler le contenu.",
		},
		tags: ["Astro", "Tailwind"],
		url: "https://yatsu-avocat.netlify.app",
	},
	{
		id: "cisaille",
		name: "Cisaille Paris",
		description: {
			en: "Barber shop in Le Marais, Paris. They do precision haircuts; I did the website.",
			fr: "Barber shop dans le Marais à Paris. Ils font des coupes de précision ; j'ai fait le site.",
		},
		tags: ["Astro", "React"],
		url: "https://cisaille.netlify.app",
	},
	{
		id: "lestudio",
		name: "Le Studio",
		description: {
			en: "Bowling alley in Paris. Oak lanes, good food, and a website that matches the vibe.",
			fr: "Bowling à Paris. Pistes en chêne, bonne cuisine, et un site qui colle à l'ambiance.",
		},
		tags: ["Astro", "Tailwind"],
		url: "https://le-bowling.netlify.app",
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
