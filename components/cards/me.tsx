import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import xlogo from "@/public/xcom.svg";
import instagramLogo from "@/public/instagram.svg";
import youtubeLogo from "@/public/youtube.png";
import githubLogo from "@/public/github.svg";
import { cn } from "@/lib/utils";

export default function MeCard({ className }: { className?: string }) {
  return (
    <Card className={cn("w-full", className)}>
      <CardContent className="flex items-center space-x-4 mx-auto">
        <Image
          src="https://uvt8fr24f6.ufs.sh/f/vP5L84ZPMm9e4vDFCg9lXC92ZNpdreBKExyJizWuAkoU1OvS"
          width={100}
          height={100}
          className="rounded-full"
          alt="Charan's placeholder profile picture"
        />

        <div>
          <h1 className="font-bold text-4xl">Charan</h1>

          <Link target="_blank" href="mailto:hello@charan.dev" className="text-sm text-muted-foreground">
            hello@charan.dev
          </Link>

          <div className="flex space-x-2 mt-2">
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <Link target="_blank" href="https://x.com/CharanMNX/">
                <Image
                  src={xlogo}
                  alt="X"
                  width={16}
                  height={16}
                />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <Link target="_blank" href="https://iam.charan.dev/">
                <Image
                  src={instagramLogo}
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <Link target="_blank" href="https://www.youtube.com/@charan-dev">
                <Image
                  src={youtubeLogo}
                  alt="YouTube"
                  width={20}
                  height={20}
                />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full p-0" asChild>
              <Link target="_blank" href="https://github.com/CharanMN7">
                <Image
                  src={githubLogo}
                  alt="GitHub"
                  width={20}
                  height={20}
                />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card >
  );
}