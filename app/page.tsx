import BioCard from "@/components/cards/bio";
import BlogsCard from "@/components/cards/blogs";
import CoffeeCard from "@/components/cards/coffee";
import GenlingoCard from "@/components/cards/genlingo";
import MeCard from "@/components/cards/me";
import WorkExpCard from "@/components/cards/work-exp";

export default function Home() {
  return (
    <div className="md:flex md:items-start md:justify-center md:h-screen">
      <div className="flex flex-col items-center space-y-4 p-8 max-w-[450px] mx-auto md:grid md:grid-cols-2 md:space-y-0 md:gap-4 md:max-w-[800px] md:place-items-stretch">
        <MeCard />
        <BioCard />
        <GenlingoCard />
        <WorkExpCard />
        <BlogsCard />
        <CoffeeCard />
        {/* Projects */}
      </div>
    </div>
  );
}
