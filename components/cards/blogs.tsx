import { Card, CardContent, CardHeader } from "../ui/card";
import DashedSeparator from "../ui/dashed-separator";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

const blogs = [
  {
    title: "LLMs & Agents",
    description: "All about LLMs and Agents",
    href: "https://llmsandagents.com",
  },
  {
    title: "Genlingo",
    description: "A blog for korean language learners",
    href: "",
  },
]

const recentBlogs = [
  {
    title: "LLMs & Agents #0",
    description: "LLMs and Agents is a tiny educational project that I’m doing to publicly document my learning about the AI field as a whole. I always wanted to dedicate time to learning things like Machine Learning, Generative AI, understand how they work and build things that are not just GPT/API wrappers. So, I’m starting LLMs and Agents as a blog to keep myself in a continuous learning + building loop.",
    href: "https://www.llmsandagents.com/blog/llms-and-agents",
    src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1746120617008/69ea778a-ba57-4728-821e-22ea90e80071.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    alt: "LLMs and Agents blog post banner",
  },
]

export default function BlogsCard({ className }: { className?: string }) {
  return (
    <Card className={cn("gap-4 pt-4 w-full", className)}>
      <CardHeader className="text-xl font-semibold">Blogs</CardHeader>
      <DashedSeparator />
      <CardContent>
        <ul className="text-sm space-y-2">
          {recentBlogs.map((blog, index) => (
            <div key={index}>
              <RecentBlogPost key={index} {...blog} />
            </div>
          ))}
        </ul>

        <Separator className="my-4" />

        <ul className="text-sm space-y-2">
          {blogs.map((blog, index) => (
            <div key={index}>
              <BlogItem key={index} {...blog} />
              {index < blogs.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </ul>
      </CardContent>
    </Card >
  );
}

function BlogItem({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <li className="flex justify-between items-center">
      <div>
        <h3 className="text-lg font-light">{title}</h3>
        <p className="text-muted-foreground truncate w-[180px] md:w-[250px]">{description}</p>
      </div>
      <Button variant="outline" size="icon" className="rounded-full" disabled={href == "" ? true : false} title="Coming soon" asChild={href == "" ? false : true}>
        <a href={href} className="hover:underline" target="_blank">
          <ArrowRight className="-rotate-45" />
        </a>
      </Button>
    </li>
  );
}

function RecentBlogPost({ title, description, href, src, alt }: { title: string; description: string; href: string, src: string; alt: string }) {
  return (
    <a className="flex justify-between items-center hover:bg-muted/50 p-2 rounded-md" href={href} target="_blank" title={description}>

      <div className="flex items-center space-x-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="object-fit w-[100px] border rounded-md" />
        <div className="relative">
          <h3 className="text-lg font-light">{title}</h3>
          <ArrowRight className="-rotate-45 w-4 h-4 absolute top-1 right-0" />
          <p className="text-muted-foreground truncate w-[179px]">{description}</p>
        </div>
      </div>
    </a>
  );
}