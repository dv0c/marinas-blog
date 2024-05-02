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
  Category: Pick<
    Category,
    { id; name; description; published; createdAt; updatedAt; slug }
  >;
  author: Author;
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

export type Author = {
  name: string;
  username: string;
  email: string;
  image: string;
  emailVerified: boolean;
  role: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};
