import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { ExternalLinkIcon } from "lucide-react";
import DashedSeparator from "../ui/dashed-separator";

interface WorkExpItemProps {
  title: string;
  company: string;
  website: string;
  date: string;
  description: string;
}

export default function WorkExpCard() {
  return (
    <Card className="gap-4 pt-4 w-full">
      <CardHeader className="text-lg font-bold">Work Experience</CardHeader>
      <DashedSeparator />
      <WorkExpItem
        title="Software Engineer Intern"
        company="Aegion Dynamic"
        website="https://aegiondynamic.com/"
        date="May 2024 - Present"
        description="Worked on several client projects, including a Next.js app to replicate their existing system on Airtable and build additional features."
      />
    </Card>
  );
}

function WorkExpItem({ title, company, website, date, description }: WorkExpItemProps) {
  return (
    <div className="flex flex-col gap-1 px-6">
      <h3 className="font-semibold">{title}</h3>

      <div className="flex justify-between">
        <Link href={website} className="text-xs hover:underline hover:text-blue-500 inline-flex items-center" target="_blank">{company} <ExternalLinkIcon size={12} className="ml-1" /></Link>
        <p className="text-muted-foreground text-xs">{date}</p>
      </div>

      <Separator className="my-2" />

      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}