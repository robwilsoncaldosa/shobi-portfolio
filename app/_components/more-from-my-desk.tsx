import PageSection from "./page-section";
import { Card } from "@/components/ui/card";
import Image from "next/image";

type WorkItem = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function MoreFromMyDesk() {
  const items: WorkItem[] = [
    { src: "/barangay-konek.svg", alt: "Barangay Konek", width: 600, height: 400 },
    { src: "/nocta.svg", alt: "Nocta", width: 600, height: 400 },
    { src: "/bertology.svg", alt: "Bertology", width: 600, height: 400 },
    { src: "/ohlalacey.svg", alt: "Ohlalacey", width: 600, height: 400 },
    { src: "/logo.svg", alt: "Logo", width: 600, height: 400 },
    { src: "/next.svg", alt: "Next.js", width: 600, height: 400 },
    { src: "/vercel.svg", alt: "Vercel", width: 600, height: 400 },
    { src: "/globe.svg", alt: "Globe", width: 600, height: 400 },
  ];

  return (
    <PageSection id="more-from-my-desk">
      <div className="space-y-8">
        <p className="text-foreground text-2xl">04</p>
        <h2 className="text-3xl sm:text-5xl font-semibold leading-tight text-foreground">
          More from my Desk
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, i) => (
            <Card key={i} className="border-0 py-0">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width || 600}
                height={item.height || 400}
                className="w-full h-full"
              />
            </Card>
          ))}
        </div>
      </div>
    </PageSection>
  );
}