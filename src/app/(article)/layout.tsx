import { FC } from "react";

interface ArticleLayoutProps {
  children: React.ReactNode;
}

const ArticleLayout: FC<ArticleLayoutProps> = ({ children }) => {
  return <main className="md:p-10 bg-gray-300/20">{children}</main>;
};

export default ArticleLayout;
