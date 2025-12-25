import { cn } from "@/lib/utils";

export default function PageSection(
  { className, id, ...props }: React.ComponentProps<"section">
) {
  return (
    <section
      id={id}
      className={cn("min-h-screen w-full snap-start py-16 sm:py-24 first:pt-5", className)}
      {...props}
    />
  );
}
