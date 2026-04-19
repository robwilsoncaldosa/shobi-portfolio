import { cn } from "@/lib/utils";

export default function PageSection(
  { className, id, ...props }: React.ComponentProps<"section">
) {
  return (
    <section
      id={id}
      className={cn("min-h-screen w-full snap-start pb-16 sm:pb-24", className)}
      {...props}
    />
  );
}
