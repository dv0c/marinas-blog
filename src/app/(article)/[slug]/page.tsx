import { getArticle } from "@/helpers/fetcher";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";

interface pageProps {
  params: {
    slug: string;
  };
}

const page: FC<pageProps> = async ({ params }) => {
  const { slug } = params;
  const article = await getArticle(slug);
  if (!article) return notFound();
  return (
    <div className="md:max-w-4xl md:border md:rounded-xl bg-white shadow mx-auto p-3 md:p-10 space-y-5">
      <div className="space-y-3 border-b pb-5">
        <h1 className="md:text-4xl text-3xl font-bold">{article.title}</h1>
        <p className="text-muted-foreground ">{article.description}</p>
      </div>
      <Image
        className="object-cover w-full h-full rounded-lg overflow-hidden"
        alt="image"
        src={article.thumbnail || "/placeholder.jpg"}
        width={1920}
        height={1080}
      />
      <div
        className="prose md:prose-xl"
        dangerouslySetInnerHTML={{ __html: article.html }}
      />
    </div>
  );
};

export default page;
