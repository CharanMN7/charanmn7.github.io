import { Card } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function GenlingoCard({ className }: { className?: string }) {
  return (
    <Card className={cn("w-full p-0 gap-0", className)}>
      <Image
        src="https://uvt8fr24f6.ufs.sh/f/vP5L84ZPMm9eaBPEkk3C2lMhYwE0e8pR4ATZOH3gKaiBnfLz"
        alt="Genlingo"
        width={400}
        height={200}
        className="rounded-t-xl"
      />
      <Separator />
      <section className="p-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Genlingo
          </h2>
          <p className="text-muted-foreground">Try Genlingo for free!</p>
        </div>
        <Button variant="outline" size="icon" className="rounded-full" asChild>
          <Link href="https://genlingo.app" className="hover:underline" target="_blank">
            <ArrowRight size={16} className="-rotate-45" />
          </Link>
        </Button>
      </section>
    </Card>
  );
}