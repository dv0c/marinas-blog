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
  slug: string;
  Category: {
    name: string;
    id: string,
    createdAt: string,
    updatedAt: string,
  }
};

export type Category = {
  id: string;
  name: string;
  description: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  slug: string;
  articles?: Article[];
};
