import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { FC } from "react";

interface ArticleLayoutProps {
  children: React.ReactNode;
}

const ArticleLayout: FC<ArticleLayoutProps> = ({ children }) => {

  return <>
    <Navigation />
    <main className="md:p-10">{children}</main>
    <Footer />
  </>
};

export default ArticleLayout;
