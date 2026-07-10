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
