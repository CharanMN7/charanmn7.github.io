"use client"

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { User, UserRound } from "lucide-react";
import Link from "next/link";

export default function MainDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="xs" className="font-bold">
          Charan
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" alignOffset={1}>
        <DropdownMenuItem asChild>
          <Link href="/about" className="text-primary">
            <UserRound /> About Charan
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/settings" className="text-primary"><User /> Settings</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}