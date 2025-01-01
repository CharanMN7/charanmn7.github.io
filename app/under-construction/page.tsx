import { Cog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <div className="container p-12 max-w-screen-lg mx-auto text-center h-screen flex flex-col justify-center items-center realtive">
      <Image
        src="/charandevbanner.jpg"
        alt=""
        className="rounded-lg sm:rounded-[1rem] lg:rounded-[2rem] w-full h-[150px] sm:h-[250px] object-cover brightness-75"
        width={1920}
        height={1080}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-lg md:text-2xl font-semibold">
          Hi, I&apos;m Charan 👋
        </h1>

        <div className="flex justify-center items-center text-xs md:text-sm text-muted-foreground gap-1">
          <Cog className="animate-spin-slow h-4 w-4" />
          <span>Coming soon...</span>
        </div>

        <Link
          href="mailto:hello@charan.dev"
          className="text-muted-foreground text-xs"
        >
          hello@charan.dev
        </Link>
      </div>
    </div>
  );
}
