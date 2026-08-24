export interface LocalizedText {
  en: string;
  pt: string;
}

export interface Project {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  techStack: string[];
  links: {
    demo?: string;
    repo?: string;
  };
  featured?: boolean;
  year?: number;
}
