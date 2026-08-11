export interface Writing {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: string[];
  featured: boolean;
  status: "draft" | "published";
  createdAt: Date;
  updatedAt: Date;
}