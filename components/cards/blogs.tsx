import Link from "next/link";
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

export default function BlogsCard({ className }: { className?: string }) {
  return (
    <Card className={cn("gap-4 pt-4 w-full", className)}>
      <CardHeader className="text-xl font-semibold">Blogs</CardHeader>
      <DashedSeparator />
      <CardContent>
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
        <p className="text-muted-foreground truncate w-[180px]">{description}</p>
      </div>
      <Button variant="outline" size="icon" className="rounded-full" disabled={href == "" ? true : false} title="Coming soon" asChild={href == "" ? false : true}>
        <Link href={href} className="hover:underline" target="_blank">
          <ArrowRight className="-rotate-45" />
        </Link>
      </Button>
    </li>
  );
}