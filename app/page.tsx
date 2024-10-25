"use client";
import BottomBar from "@/components/bottom-bar";
import CustomHomeSection from "@/components/custom-home-section";
import ProjectsCarousel from "@/components/projects-carousel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Cog } from "lucide-react";

const styles = {
  black_and_white_text: "text-black dark:text-white",
};

const skills = [
  "Next.JS",
  "React",
  "AI/ML",
  "Node.JS",
  "Express",
  "TypeScript",
  "JavaScript",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Firebase",
  "Tailwind CSS",
  "Figma",
  "VSCode",
  "Google Cloud",
  "AWS",
  "Wordpress",
  "Go",
  "HTML",
  "CSS",
  "SCSS",
  "Python",
];

export default function Home() {
  return (
    <>
      <div className="container p-12 max-w-screen-lg mx-auto mb-28">
        <img
          src="/charandevbanner.jpg"
          alt=""
          className="rounded-lg sm:rounded-[1rem] mb-4 lg:rounded-[2rem] md:mb-8 w-full h-[150px] sm:h-[250px] object-cover"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold my-4 md:my-8">
          Hi, I&apos;m Charan 👋
        </h1>

        <div className="flex h-6 items-center space-x-2 md:space-x-4 mb-4 md:mb-8 text-gray-500 text-sm md:text-lg sm:font-bold">
          <div>Full-Stack Developer</div>
          <Separator orientation="vertical" />
          <div>Web Designer</div>
        </div>

        <p className="text-gray-500 text-md md:text-lg">
          I&apos;m a{" "}
          <span className={styles.black_and_white_text}>
            design-oriented full-stack web developer.
          </span>{" "}
          I build <span className={styles.black_and_white_text}>beautiful</span>{" "}
          and <span className={styles.black_and_white_text}>fast</span> websites
          and web apps. I am open to work for contract, part-time, full-time
          positions. Need a website or a web app? Or have a
          contract/part-time/full-time position for a web developer?{" "}
          <span
            className={`${styles.black_and_white_text} underline cursor-pointer`}
          >
            Get in touch!
          </span>
        </p>

        <CustomHomeSection title="Skills" heading="Tech I love & use">
          <div>
            {skills.map((skill) => (
              <Badge key={skill} className="m-1">
                {skill}
              </Badge>
            ))}
          </div>
        </CustomHomeSection>

        <CustomHomeSection title="Projects" heading="Here's my work">
          <ProjectsCarousel />
        </CustomHomeSection>

        <CustomHomeSection title="About Me" heading="Here's my 'other' work!">
          <div className="flex justify-center text-gray-500 gap-2">
            <Cog className="animate-spin-slow" />
            <span>Coming Soon...</span>
          </div>
        </CustomHomeSection>

        <Separator className="my-12" />
      </div>
      <BottomBar />
    </>
  );
}
