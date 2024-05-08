import { formatDate } from "@/helpers/date";
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
    <div>
      <div className="max-w-6xl mx-auto p-5 md:p-0">
        <div className="flex items-center gap-10 justify-center flex-col">
          <p className="text-muted-foreground">
            {formatDate(article.createdAt)}
          </p>
          <h1 className="text-3xl md:text-5xl text-center">{article.title}</h1>
          <p className="text-center text-sm md:text-base text-muted-foreground">{article.description}</p>
          <div className="flex gap-3 items-center">
            <Image className="object-cover rounded-full"
              src={article.author.image}
              alt={article.author.name}
              width={40}
              height={40}
            />
            <div className="flex text-xs flex-col">
              <h3>{article.author.name}</h3>
              <p>Administrator</p>
            </div>
          </div>
          <Image width={1920} height={1080} className="object-cover h-[50vh] md:h-[75vh] max-h-[800px] rounded-lg" src={article.thumbnail || "/placeholder.png"} alt={article.title} />
        </div>
      </div>
      <div className="mt-10 md:mt-28">
        <div className="prose initial-letter dark:prose-invert prose-lg px-8 md:p-0 mx-auto" dangerouslySetInnerHTML={{ __html: article.html }}></div>
      </div>
    </div>
  );
};

export default page;
