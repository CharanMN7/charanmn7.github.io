import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import DashedSeparator from "../ui/dashed-separator";

export default function BioCard() {
  return (
    <Card className="gap-4 pt-4 w-full">
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
        </ul>
      </CardContent>
    </Card>
  );
}