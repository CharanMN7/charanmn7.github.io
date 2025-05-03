import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import DashedSeparator from "../ui/dashed-separator";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function BioCard({ className }: { className?: string }) {
  return (
    <Card className={cn("gap-4 pt-4 w-full", className)}>
      <CardHeader className="text-xl font-semibold">Bio</CardHeader>
      <DashedSeparator />
      <CardContent className="space-y-2">
        <ul className="text-sm space-y-2">
          <li>🧑🏻‍💻 Software Engineer Intern at {""}
            <Link href="https://www.aegiondynamic.com/" className="hover:underline" target="_blank">Aegion Dynamic</Link>
          </li>
          <li>
            💻 Full-stack Developer
          </li>
          <li>
            ✨ Currently building <Link href="https://genlingo.app/" className="text-purple-500 hover:underline" target="_blank">Genlingo</Link>
          </li>
          <li>
            🚀 3x Hackathon Winner
          </li>
          <li>
            🎮 I built a <a href="https://www.sprint.dev/projects/54526899-0a31-4a08-869f-fdb1f7762888" className="underline text-red-400 inline-flex items-center">minecraft mod! <ArrowRight className="-rotate-45 h-4 w-4" /></a>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}