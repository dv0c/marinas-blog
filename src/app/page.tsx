import { Navigation } from "@/components/Navigation";
import Image from "next/image";
import Mainscreen from '../../public/main-screen.jpg'
import RecentArticles from "@/components/RecentArticles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="space-y-10 p-5 md:p-0">
        <div className="space-y-3 mx-auto max-w-3xl mt-10">
          <h1 className="text-3xl font-semibold md:font-normal md:text-5xl">Starter - a Minimalist</h1>
          <h1 className="text-3xl md:text-5xl font-semibold md:font-normal">Personal Blog Template</h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl font-semibold pt-5">Lorem ipsum dolor. Asperiores accusantium sit consequuntur doloribus blanditiis aliquam laudantium nesciunt illo adipisci voluptatem?</p>
        </div>
        <div className="relative overflow-hidden mx-auto max-w-5xl ">
          <Image src={Mainscreen} className="object-cover bg-gray-400 max-h-[700px] w-full rounded-xl h-[50vh] md:h-[70vh]" alt="img" placeholder="blur" width={500} height={500} />
          <p className="text-muted-foreground relative text-center text-xs md:text-sm p-3">A dock on a lake with a mountain in the background photo – Free Mt. rainier Image on <span className="underline cursor-pointer">Unsplash</span></p>
        </div>
        <RecentArticles />
      </div>
      <Footer />
    </>
  );
}
