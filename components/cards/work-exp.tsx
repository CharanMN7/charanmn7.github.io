import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { ExternalLinkIcon } from "lucide-react";
import DashedSeparator from "../ui/dashed-separator";
import { cn } from "@/lib/utils";

interface WorkExpItemProps {
  title: string;
  company: string;
  website: string;
  date: string;
  children?: React.ReactNode;
}

export default function WorkExpCard({ className }: { className?: string }) {
  return (
    <Card className={cn("gap-4 pt-4 w-full h-full", className)}>
      <CardHeader className="text-lg font-bold">Work Experience</CardHeader>
      <DashedSeparator />
      <WorkExpItem
        title="Software Engineer Intern"
        company="Aegion Dynamic"
        website="https://aegiondynamic.com/"
        date="May 2024 - Present"
      >
        <ul className="text-sm space-y-2 px-4 list-disc">
          <li className="text-muted-foreground text-sm">Worked on several client projects, including a Next.js app to replicate client&apos;s existing system on Airtable, built additional features on top of it.</li>
          <li className="text-muted-foreground text-sm">Eliminated the need for upfront per user payments on Airtable by creating a custom frontend and backend solution.</li>
        </ul>
      </WorkExpItem>
    </Card>
  );
}

function WorkExpItem({ title, company, website, date, children }: WorkExpItemProps) {
  return (
    <div className="flex flex-col gap-1 px-6">
      <h3 className="font-semibold">{title}</h3>

      <div className="flex justify-between">
        <Link href={website} className="text-xs hover:underline hover:text-blue-500 inline-flex items-center" target="_blank">{company} <ExternalLinkIcon size={12} className="ml-1" /></Link>
        <p className="text-muted-foreground text-xs">{date}</p>
      </div>

      <Separator className="my-2" />

      {children}
    </div>
  );
}