import { cn } from "@/lib/utils";
import { CardContent } from "@/components/ui/card";
import {
  EyebrowPill,
  MediaFrame,
  SectionIntro,
  SectionPanel,
  SectionPanelContent,
  SurfaceCard,
} from "./design-system";
import ExpandableImageDialog from "./expandable-image-dialog";
import PageSection from "./page-section";

type ProjectItem = {
  id: string;
  title: string;
  type: string;
  summary: string;
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
      summary: "Service and community design system work presented in a larger feature tile.",
      src: "/barangay-konek.svg",
      alt: "Barangay Konek",
      href: "#",
      width: 200,
      height: 200,
      gridClassName: "col-span-12 md:col-span-8 xl:col-span-7 xl:row-span-2",
      previewClassName: "min-h-[15rem] sm:min-h-[18rem] lg:min-h-[21rem]",
    },
    {
      id: "nocta",
      title: "Nocta",
      type: "Product Design",
      summary: "Focused interface concept tile with a compact footprint for faster scanning.",
      src: "/nocta.svg",
      alt: "Nocta",
      href: "#",
      width: 200,
      height: 200,
      gridClassName: "col-span-12 md:col-span-4 xl:col-span-5",
      previewClassName: "min-h-[14rem] sm:min-h-[16rem]",
    },
    {
      id: "bertology",
      title: "Bertology",
      type: "Brand Experience",
      summary: "Brand-led exploration showcased as a tall tile within the board.",
      src: "/bertology.svg",
      alt: "Bertology",
      href: "#",
      width: 200,
      height: 200,
      gridClassName: "col-span-12 md:col-span-6 xl:col-span-5 xl:row-span-2",
      previewClassName: "min-h-[15rem] sm:min-h-[18rem] lg:min-h-[22rem]",
    },
    {
      id: "ohlalacey",
      title: "Ohlalacey Travels",
      type: "Travel Interface",
      summary: "Travel planning interface concept with room for clearer supporting context.",
      src: "/ohlalacey.svg",
      alt: "Ohlalacey Travels",
      href: "#",
      width: 200,
      height: 200,
      gridClassName: "col-span-12 md:col-span-6 xl:col-span-4",
      previewClassName: "min-h-[13rem] sm:min-h-[15rem]",
    },
    {
      id: "borak-travel",
      title: "Borak Travels",
      type: "Booking Experience",
      summary: "Booking and destination design concept positioned as a supporting tile.",
      src: "/borak-travel.svg",
      alt: "Borak Travels",
      href: "#",
      width: 200,
      height: 200,
      gridClassName: "col-span-12 md:col-span-6 xl:col-span-3",
      previewClassName: "min-h-[14rem] sm:min-h-[16rem]",
    },
    {
      id: "mcash",
      title: "MCash",
      type: "Fintech Product",
      summary: "Fintech work highlighted in a wider tile to balance the lower row.",
      src: "/mcash.svg",
      alt: "MCash",
      href: "#",
      width: 200,
      height: 200,
      gridClassName: "col-span-12 md:col-span-12 xl:col-span-8",
      previewClassName: "min-h-[13rem] sm:min-h-[15rem]",
    },
  ];

  const items: ProjectItem[] = projects ?? [];

  return (
    <PageSection
      id="design-experience"
      className="flex items-center justify-center px-4 sm:px-6"
    >
      <SectionPanel className="mx-auto w-full max-w-6xl">
        <SectionPanelContent>
          <SectionIntro
            eyebrow="Selected Work"
            title="Design Experience"
            description="A bento-style gallery of recent product and brand work, designed to make each project easier to scan while keeping the section balanced across desktop, tablet, and mobile layouts."
            className="max-w-3xl"
          />

          <ul className="grid grid-cols-12 gap-4 sm:gap-5" aria-label="Design experience projects">
            {items.map((item) => (
              <li key={item.id} className={cn("h-full", item.gridClassName)}>
                <SurfaceCard className="h-full">
                  <CardContent className="flex h-full flex-col gap-5 p-4 sm:p-5">
                    <div className="space-y-2">
                      <EyebrowPill>
                        {item.type}
                      </EyebrowPill>
                      <h3 className="text-xl font-semibold leading-tight text-foreground sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="max-w-xl text-sm leading-6 text-foreground/72">
                        {item.summary}
                      </p>
                    </div>

                    <MediaFrame className={cn(item.previewClassName)}>
                      <ExpandableImageDialog
                        src={item.src}
                        alt={item.alt || "Project"}
                        width={item.width || 200}
                        height={item.height || 200}
                        title={item.title}
                        subtitle={item.type}
                        description={item.summary}
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        triggerClassName="h-full w-full"
                        previewClassName="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                        dialogMediaClassName="min-h-[20rem] sm:min-h-[28rem]"
                      />
                    </MediaFrame>
                  </CardContent>
                </SurfaceCard>
              </li>
            ))}
          </ul>
        </SectionPanelContent>
      </SectionPanel>
    </PageSection>
  );
}
