import BioCard from "@/components/cards/bio";
import BlogsCard from "@/components/cards/blogs";
import MeCard from "@/components/cards/me";
import WorkExpCard from "@/components/cards/work-exp";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-4 p-8 max-w-[450px] mx-auto">
      <MeCard />
      <BioCard />
      <WorkExpCard />
      <BlogsCard />
    </div>
  );
}
