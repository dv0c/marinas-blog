import axios from "axios";
import { Article, Category } from "../../types";

export async function getArticle(slug: string) {
  const data = await axios
    .get<Article>(`https://admin.meindesk.gr/api/articles/${slug}`, {
      params: {
        api: process.env.API_KEY,
      },
    })
    .then((res) => res?.data)
    .catch(() => null);

  return data;  
}

export async function getArticles() {
  const data = await axios
    .get<Article[]>(`https://admin.meindesk.gr/api/articles`, {
      params: {
        api: process.env.API_KEY,
      },
    })
    .then((res) => res?.data)
    .catch(() => null);

  return data;
}

export async function getCategory(slug: string) {
  const data = await axios
    .get<Category>(`https://admin.meindesk.gr/api/categories/${slug}`, {
      params: {
        api: process.env.API_KEY,
      },
    })
    .then((res) => res?.data)
    .catch(() => null);

  return data;
}

export async function getCategories() {
  const data = await axios
    .get<Category[]>(`https://admin.meindesk.gr/api/categories`, {
      params: {
        api: process.env.API_KEY,
      },
    })
    .then((res) => res?.data)
    .catch(() => null);

  return data;
}
