export type BlogCategory =
  | "ai-tech"
  | "engineering"
  | "product"
  | "company";

export interface BlogAuthor {
  name: string;
  role?: string;
  avatar?: string;
}

export interface BlogSection {
  id: string;

  heading?: string;

  /**
   * Multiple paragraphs are better than one giant string.
   */
  paragraphs?: string[];

  bullets?: string[];

  quote?: {
    text: string;
    author?: string;
  };

  /**
   * Useful for architecture diagrams / flows for now.
   * Later we can replace these with proper visual components.
   */
  code?: string;

  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
}

export interface Blog {
  id: string;
  slug: string;

  title: string;
  excerpt: string;

  category: BlogCategory;

  author: BlogAuthor;

  publishedAt: string;
  readingTime: number;

  featuredImage?: string;

  featured?: boolean;

  tags: string[];

  sections: BlogSection[];

  status: "draft" | "published" | "archived";

  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}