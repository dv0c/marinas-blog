import axios from "axios";
import { Article } from "../../types";

export async function getArticle(slug: string) {
  const data = await axios
    .get<Article>(`https://admin.meindesk.gr/api/articles/${slug}`)
    .then((res) => res?.data)
    .catch(() => null);

  return data;
}
