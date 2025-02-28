import { cn } from "@/lib/utils";

export default function DashedSeparator({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("w-full border-t border-dashed", className)}
      {...props}
    />
  );
}