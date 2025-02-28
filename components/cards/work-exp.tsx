import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";

interface WorkExpItemProps {
  title: string;
  company: string;
  website: string;
  date: string;
  description: string;
}

export default function WorkExpCard() {
  return (
    <Card className="w-[300px] gap-4 py-4">
      <CardHeader className="text-lg font-bold pl-4">Work Experience</CardHeader>
      <Separator />
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
    <div className="flex flex-col gap-1 px-4">
      <h3 className="font-semibold">{title}</h3>

      <div className="flex justify-between">
        <Link href={website} className="text-muted-foreground text-xs text-orange-500 hover:underline" target="_blank">{company}</Link>
        <p className="text-muted-foreground text-xs">{date}</p>
      </div>

      <Separator className="my-2" />

      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}