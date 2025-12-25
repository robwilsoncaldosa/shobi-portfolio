import PageSection from "./page-section";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type ProjectItem = {
  src: string;
  alt: string;
  href?: string;
  width?: number;
  height?: number;
};

export default function DesignExperience() {
  const projects: ProjectItem[] = [
    { src: "/barangay-konek.svg", alt: "Barangay Konek", href: "#", width: 200, height: 200 },
    { src: "/nocta.svg", alt: "Nocta", href: "#", width: 200, height: 200 },
    { src: "/bertology.svg", alt: "Bertology", href: "#", width: 200, height: 200 },
    { src: "/ohlalacey.svg", alt: "Ohlalacey Travels", href: "#", width: 200, height: 200 },
    { src: "/borak-travel.svg", alt: "Borak Travels", href: "#", width: 200, height: 200 },
    { src: "/mcash.svg", alt: "MCash", href: "#", width: 200, height: 200 },
  ];
  const items: ProjectItem[] = projects ?? [];
  const padded: ProjectItem[] =
    items.length >= 6
      ? items
      : [
        ...items,
        ...Array.from({ length: 6 - items.length }, () => ({ src: "", alt: "" } as ProjectItem)),
      ];
  return (
    <PageSection id="design-experience" className="h-full mb-20">
      <div className="h-full space-y-8">
        <h2 className="text-2xl sm:text-3xl font-semibold leading-none text-foreground">
          Design Experience
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 h-full">
          {padded.map((item, i) => {
            const card = (
              <Card className="border-0 py-0 h-full">
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.alt || "Project"}
                    width={item.width || 200}
                    height={item.height || 200}
                    className="w-full h-full"
                  />
                ) : null}
              </Card>
            );
            return item.href ? (
              <Link key={i} href={item.href} aria-label={item.alt}>
                {card}
              </Link>
            ) : (
              <div key={i}>{card}</div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
}