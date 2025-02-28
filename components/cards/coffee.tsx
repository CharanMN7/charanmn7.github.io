import Image from "next/image";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CoffeeCard({ className }: { className?: string }) {
  return (
    <Card className={cn("p-4 flex items-center justify-center gap-4", className)}>
      <Link href=" https://www.buymeacoffee.com/charanmnx" target="_blank">
        <Image
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          width={217}
          height={60}
          className="md: "
        />
      </Link>
      <p>Support my work by buying me a coffee!</p>
    </Card>
  );
}