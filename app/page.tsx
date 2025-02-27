import Desktop from "@/components/os/desktop/desktop";
import TopBar from "@/components/os/top-bar/top-bar";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <TopBar />
      <Desktop />
    </div>
  );
}
