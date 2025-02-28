import { Separator } from "../ui/separator";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

export default function BioCard() {
  return (
    <Card>
      <CardContent className="space-y-2">
        <h2 className="text-xl font-semibold">Bio</h2>
        <Separator />
        <ul className="text-sm space-y-2">
          <li>🧑🏻‍💻 Software Engineer Intern at {""}
            <Link href="https://www.aegiondynamic.com/" className="text-orange-500 hover:underline" target="_blank">Aegion Dynamic</Link>
          </li>
          <li>
            💻 Full-stack Developer
          </li>
          <li>
            ✨ Currently building <Link href="https://www.genlingo.app/" className="text-purple-500 hover:underline" target="_blank">Genlingo</Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}