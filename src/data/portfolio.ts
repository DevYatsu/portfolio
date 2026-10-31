export type Language = "en" | "fr";

export interface Project {
	id: string;
	name: string;
	category: { en: string; fr: string };
	description: { en: string; fr: string };
	tags: { name: string; url: string }[];
	link: { url: string; label: string };
	layer: LayerId;
	/** Credited role when the project isn't solo work. */
	role?: { en: string; fr: string };
	/** Checkable proof only: every value must trace back to the repository. */
	facts: { value: string; label: { en: string; fr: string } }[];
}

export type LayerId = "surface" | "product" | "language" | "runtime" | "machine";

export interface Layer {
	id: LayerId;
	depth: string;
	name: { en: string; fr: string };
	claim: { en: string; fr: string };
}

export interface LineageEntry {
	year: string;
	name: string;
	url: string;
	note: { en: string; fr: string };
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

// ── The descent: the home page reads top to bottom, pixel to register ──

export const layers: Layer[] = [
	{
		id: "surface",
		depth: "05",
		name: { en: "Surface", fr: "Surface" },
		claim: {
			en: "What people see first. Website designs for a law firm, a bowling alley and a barber shop.",
			fr: "Ce qu'on voit en premier. Des sites conçus pour un cabinet d'avocats, un bowling et un barbier.",
		},
	},
	{
		id: "product",
		depth: "04",
		name: { en: "Product", fr: "Produit" },
		claim: {
			en: "Complete applications: accounts, data, background jobs.",
			fr: "Des applications complètes : comptes, données, tâches de fond.",
		},
	},
	{
		id: "language",
		depth: "03",
		name: { en: "Language", fr: "Langage" },
		claim: {
			en: "How code becomes meaning. This is where it started, in 2023, and I never stopped.",
			fr: "Comment le code prend du sens. Tout a commencé ici en 2023, et je n'ai jamais arrêté.",
		},
	},
	{
		id: "runtime",
		depth: "02",
		name: { en: "Runtime", fr: "Runtime" },
		claim: {
			en: "What executes that meaning: bytecode, objects, garbage collection, a JIT.",
			fr: "Ce qui exécute ce sens : bytecode, objets, ramasse-miettes, JIT.",
		},
	},
	{
		id: "machine",
		depth: "01",
		name: { en: "Machine", fr: "Machine" },
		claim: {
			en: "The bottom. x86-64 instructions rewritten as ARM64 while the program runs.",
			fr: "Le fond. Des instructions x86-64 réécrites en ARM64 pendant que le programme tourne.",
		},
	},
];

/** Case-study eyebrow: ties a project page back to its place in the descent. */
export const layerLabel = (id: LayerId, lang: Language) => {
	const layer = layers.find((l) => l.id === id)!;
	return `${lang === "fr" ? "Couche" : "Layer"} ${layer.depth} · ${layer.name[lang]}`;
};

// Dates are repository creation dates on GitHub.
export const lineage: LineageEntry[] = [
	{
		year: "2023",
		name: "JadeFlow",
		url: "https://github.com/DevYatsu/JadeFlow",
		note: { en: "The first one, to understand how languages work.", fr: "Le premier, pour comprendre comment marchent les langages." },
	},
	{
		year: "2023",
		name: "ComfyScript",
		url: "https://github.com/DevYatsu/ComfyScript",
		note: { en: "A language designed to be comfortable to write.", fr: "Un langage pensé pour être agréable à écrire." },
	},
	{
		year: "2024",
		name: "Aspen",
		url: "https://github.com/DevYatsu/aspen",
		note: { en: "A simple scripting language.", fr: "Un langage de script simple." },
	},
	{
		year: "2025",
		name: "Lira",
		url: "https://github.com/DevYatsu/lira",
		note: { en: "A beginner-friendly language that teaches how code becomes meaning.", fr: "Un langage accessible qui montre comment le code prend du sens." },
	},
	{
		year: "2026",
		name: "YatsuScript",
		url: "https://github.com/DevYatsu/ysc",
		note: { en: "Register VM, generational GC, async/await, its own language server.", fr: "VM à registres, GC générationnel, async/await, son propre serveur de langage." },
	},
];

// ── Featured Projects ──────────────────────────────────────────

export const projects: Project[] = [
	{
		id: "wie",
		name: "WIE",
		category: { en: "Emulation & Systems", fr: "Émulation & Systèmes" },
		description: {
			en: "A user-mode x86-64 emulator that runs 64-bit Windows programs on Apple Silicon macOS. A Cranelift block JIT translates the code, Rust handlers answer the Win32 API, and GUI apps open real Cocoa windows. Includes a Direct3D 9 software renderer.",
			fr: "Un émulateur x86-64 en mode utilisateur qui exécute des programmes Windows 64 bits sur macOS Apple Silicon. Un JIT Cranelift par blocs traduit le code, des handlers Rust répondent à l'API Win32, et les applications graphiques ouvrent de vraies fenêtres Cocoa. Avec un moteur de rendu logiciel Direct3D 9.",
		},
		tags: [
			{ name: "Rust", url: "https://rust-lang.org" },
			{ name: "Cranelift", url: "https://cranelift.dev" },
			{ name: "Metal / wgpu", url: "https://developer.apple.com/metal/" },
			{ name: "x86-64 / PE64", url: "https://en.wikipedia.org/wiki/Portable_Executable" },
		],
		link: { url: "https://github.com/wie-project/wie", label: "GitHub →" },
		layer: "machine",
		role: { en: "Co-developer, WIE Project", fr: "Co-développeur, WIE Project" },
		facts: [
			{ value: "Notepad", label: { en: "real Windows binary, with menus and printing", fr: "vrai binaire Windows, avec menus et impression" } },
			{ value: "7-Zip", label: { en: "creates and extracts real .7z archives", fr: "crée et extrait de vraies archives .7z" } },
			{ value: "0", label: { en: "Wine, virtual machines or Windows installs needed", fr: "Wine, machine virtuelle ou Windows nécessaire" } },
		],
	},
	{
		id: "v12",
		name: "v12",
		category: { en: "Compilers & Runtimes", fr: "Compilateurs & Runtimes" },
		description: {
			en: "An embeddable JavaScript engine for Rust apps, with no V8 or QuickJS underneath. The runtime is my own: register-based bytecode, NaN-boxed values, hidden classes with inline caches, a mark-sweep GC and a Cranelift JIT. The oxc crate handles parsing.",
			fr: "Un moteur JavaScript intégrable pour applications Rust, sans V8 ni QuickJS en dessous. Le runtime est le mien : bytecode à registres, NaN-boxing, classes cachées avec inline caches, GC mark-sweep et JIT Cranelift. Le crate oxc s'occupe du parsing.",
		},
		tags: [
			{ name: "Rust", url: "https://rust-lang.org" },
			{ name: "JavaScript Engine", url: "https://github.com/DevYatsu/v12" },
			{ name: "Cranelift", url: "https://cranelift.dev" },
			{ name: "Bytecode / JIT", url: "https://en.wikipedia.org/wiki/Just-in-time_compilation" },
		],
		link: { url: "https://github.com/DevYatsu/v12", label: "GitHub →" },
		layer: "runtime",
		facts: [
			{ value: "1,414", label: { en: "tests passing, measured 6 Oct 2026", fr: "tests réussis, mesuré le 6 oct. 2026" } },
			{ value: "77.6%", label: { en: "of the Test262 language suite passing", fr: "de la suite Test262 language réussie" } },
		],
	},
	{
		id: "yatsuscript",
		name: "YatsuScript",
		category: { en: "Compilers & Runtimes", fr: "Compilateurs & Runtimes" },
		description: {
			en: "My own scripting language and the register-based VM that runs it, with NaN-boxed values, a generational GC, closures, pattern matching and async/await. It has a language server, and a WebAssembly playground you can try in the browser.",
			fr: "Mon propre langage de script et la VM à registres qui l'exécute, avec NaN-boxing, GC générationnel, closures, pattern matching et async/await. Il a un serveur de langage et un playground WebAssembly à essayer dans le navigateur.",
		},
		tags: [
			{ name: "Rust", url: "https://rust-lang.org" },
			{ name: "Interpreter", url: "https://github.com/DevYatsu/ysc" },
			{ name: "Bytecode", url: "https://en.wikipedia.org/wiki/Bytecode" },
		],
		link: { url: "https://github.com/DevYatsu/ysc", label: "GitHub →" },
		layer: "language",
		facts: [],
	},
	{
		id: "mangaread",
		name: "MangaReader",
		category: { en: "Web Application", fr: "Application Web" },
		description: {
			en: "A self-hosted manga library in Rust. It syncs chapters from several sources, merges them into one series, and serves a fast reader with accounts and synced progress. Runs on a Raspberry Pi 4.",
			fr: "Une bibliothèque de manga auto-hébergée en Rust. Elle synchronise les chapitres de plusieurs sources, les fusionne en une série, et sert un lecteur rapide avec comptes et progression synchronisée. Tourne sur un Raspberry Pi 4.",
		},
		tags: [
			{ name: "Rust", url: "https://rust-lang.org" },
			{ name: "Axum", url: "https://docs.rs/axum" },
			{ name: "SQLite", url: "https://sqlite.org" },
			{ name: "Docker", url: "https://docker.com" },
		],
		link: { url: "https://github.com/DevYatsu/mangareader", label: "GitHub →" },
		layer: "product",
		facts: [
			{ value: "1 + 1", label: { en: "one Docker container, one SQLite file", fr: "un conteneur Docker, un fichier SQLite" } },
		],
	},
	{
		id: "ghaiari",
		name: "Ghaiari",
		category: { en: "Full-Stack Marketplace", fr: "Marketplace Full-Stack" },
		description: {
			en: "A car-parts marketplace for Libya, live at ghaiari.com. React Native mobile app for buyers, Astro web dashboard for sellers and admins. Supabase backend with vehicle compatibility, wallet payments, order management and push notifications.",
			fr: "Une marketplace de pièces auto pour la Libye, en ligne sur ghaiari.com. App mobile React Native pour les acheteurs, portail web Astro pour les vendeurs et administrateurs. Backend Supabase avec compatibilité véhicule, paiement par portefeuille, gestion des commandes et notifications push.",
		},
		tags: [
			{ name: "ghaiari.com", url: "https://ghaiari.com/" },
			{ name: "React Native", url: "https://reactnative.dev" },
			{ name: "Astro", url: "https://astro.build" },
			{ name: "Supabase", url: "https://supabase.com" },
			{ name: "Postgres", url: "https://postgresql.org" },
		],
		link: { url: "https://ghaiari.com/", label: "ghaiari.com →" },
		layer: "product",
		facts: [],
	},
];

// ── Static Websites (secondary) ────────────────────────────────

export const staticSites: StaticSite[] = [
	{
		id: "devigny",
		name: "De Vigny Avocat",
		description: {
			en: "Website for a law firm. Sober design that lets the content speak.",
			fr: "Site pour un cabinet d'avocats. Sobre, le contenu prime.",
		},
		tags: ["Astro", "Tailwind"],
		url: "https://yatsu-avocat.netlify.app",
	},
	{
		id: "lestudio",
		name: "Le Studio",
		description: {
			en: "Website for a Paris bowling alley: pricing, private events, booking.",
			fr: "Site pour un bowling parisien : tarifs, privatisation, réservation.",
		},
		tags: ["Astro", "Tailwind"],
		url: "https://le-bowling.netlify.app",
	},
	{
		id: "cisaille",
		name: "Cisaille Paris",
		description: {
			en: "Website for a barber shop in Le Marais, Paris.",
			fr: "Site pour un barbier du Marais à Paris.",
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
	{ name: "SQLite", level: { en: "Proficient", fr: "Compétent" }, category: "data" },
	{ name: "Docker", level: { en: "Proficient", fr: "Compétent" }, category: "backend" },
	{ name: "Kubernetes", level: { en: "Intermediate", fr: "Intermédiaire" }, category: "backend" },
	{ name: "PHP", level: { en: "Proficient", fr: "Compétent" }, category: "lang" },
	{ name: "Solid.js", level: { en: "Intermediate", fr: "Intermédiaire" }, category: "frontend" },
	{ name: "Systems Programming", level: { en: "Advanced", fr: "Avancé" }, category: "systems" },
	{ name: "Compiler Design", level: { en: "Intermediate", fr: "Intermédiaire" }, category: "systems" },
	{ name: "Concurrency / Multithreading", level: { en: "Advanced", fr: "Avancé" }, category: "systems" },
];
