import Link from "next/link";
import { ThemeSwitch } from "./ui/theme-switcher";

export const Navigation = () => {
  const List = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Tags",
      link: "/tags",
    },
  ];
  return (
    <nav>
      <header className="flex px-5 max-w-[100rem] mx-auto py-8 items-center justify-between gap-5">
        <Link href="/" className="text-xl md:text-2xl font-semibold">
          {process.env.SITE_NAME}
        </Link>
        <ul className="flex items-center gap-5 text-sm">
          {List.map((item, index) => (
            <li key={index} className="hover:underline transition-all">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </header>
    </nav>
  );
};
