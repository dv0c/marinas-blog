export type Article = {
  id: string;
  title: string;
  description?: string;
  published: boolean;
  thumbnail: string | null;
  categoryId: string | null;
  content?: string;
  html: string;
  siteId: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
};