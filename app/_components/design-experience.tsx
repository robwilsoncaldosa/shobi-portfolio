import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import PageSection from "./page-section";

type ProjectItem = {
  id: string;
  title: string;
  type: string;
  src: string;
  alt: string;
  href?: string;
  width?: number;
  height?: number;
  gridClassName?: string;
  previewClassName?: string;
};

export default function DesignExperience() {
  const projects: ProjectItem[] = [
    {
      id: "barangay-konek",
      title: "Barangay Konek",
      type: "Community Platform",
      src: "/barangay-konek.svg",
      alt: "Barangay Konek",
      href: "#",
      width: 200,
      height: 200,
      gridClassName: "lg:col-span-2 lg:row-span-2",
      previewClassName: "min-h-[15rem] sm:min-h-[18rem] lg:min-h-[21rem]",
    },
    {
      id: "nocta",
      title: "Nocta",
      type: "Product Design",
      src: "/nocta.svg",
      alt: "Nocta",
      href: "#",
      width: 200,
      height: 200,
      gridClassName: "lg:col-span-1",
      previewClassName: "min-h-[14rem] sm:min-h-[16rem]",
    },
    {
      id: "bertology",
      title: "Bertology",
      type: "Brand Experience",
      src: "/bertology.svg",
      alt: "Bertology",
      href: "#",
      width: 200,
      height: 200,
      gridClassName: "md:row-span-2",
      previewClassName: "min-h-[15rem] sm:min-h-[18rem] lg:min-h-[22rem]",
    },
    {
      id: "ohlalacey",
      title: "Ohlalacey Travels",
      type: "Travel Interface",
      src: "/ohlalacey.svg",
      alt: "Ohlalacey Travels",
      href: "#",
      width: 200,
      height: 200,
      gridClassName: "md:col-span-2 lg:col-span-1",
      previewClassName: "min-h-[13rem] sm:min-h-[15rem]",
    },
    {
      id: "borak-travel",
      title: "Borak Travels",
      type: "Booking Experience",
      src: "/borak-travel.svg",
      alt: "Borak Travels",
      href: "#",
      width: 200,
      height: 200,
      gridClassName: "lg:col-span-1",
      previewClassName: "min-h-[14rem] sm:min-h-[16rem]",
    },
    {
      id: "mcash",
      title: "MCash",
      type: "Fintech Product",
      src: "/mcash.svg",
      alt: "MCash",
      href: "#",
      width: 200,
      height: 200,
      gridClassName: "md:col-span-2 lg:col-span-2",
      previewClassName: "min-h-[13rem] sm:min-h-[15rem]",
    },
  ];

  const items: ProjectItem[] = projects ?? [];

  return (
    <PageSection
      id="design-experience"
      className="flex items-center justify-center px-4 sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl space-y-6 sm:space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary/80">
            Selected Work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Design Experience
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            A bento-style gallery of recent product and brand work, designed to
            make each project easier to scan while keeping the section balanced
            across desktop, tablet, and mobile layouts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => {
            const card = (
              <Card
                className={cn(
                  "group h-full overflow-hidden border-white/10 bg-card/80 py-0 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_60px_-24px_rgba(119,70,240,0.45)]",
                  item.gridClassName,
                )}
              >
                <CardContent className="flex h-full flex-col gap-5 p-4 sm:p-5">
                  <div className="space-y-2">
                    <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary">
                      {item.type}
                    </span>
                    <h3 className="text-xl font-semibold leading-tight text-foreground sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                  <div
                    className={cn(
                      "relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-background/90 via-background/70 to-primary/10 p-3",
                      item.previewClassName,
                    )}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(119,70,240,0.24),transparent_42%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-background/40 p-4">
                      <Image
                        src={item.src}
                        alt={item.alt || "Project"}
                        width={item.width || 200}
                        height={item.height || 200}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );

            return item.href ? (
              <Link
                key={item.id}
                href={item.href}
                aria-label={item.alt}
                className="block h-full"
              >
                {card}
              </Link>
            ) : (
              <div key={item.id} className="h-full">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
}
