import { cn } from "@/lib/utils";

export default function PageSection(
  { className, id, ...props }: React.ComponentProps<"section">
) {
  return (
    <section
      id={id}
      className={cn("h-screen w-full snap-start", className)}
      {...props}
    />
  );
}