import BioCard from "@/components/cards/bio";
import MeCard from "@/components/cards/me";
import WorkExpCard from "@/components/cards/work-exp";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <MeCard />
      <BioCard />
      <WorkExpCard />
    </div>
  );
}
