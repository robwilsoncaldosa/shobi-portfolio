import PageSection from "./page-section";
import { CardContent } from "@/components/ui/card";
import {
  MediaFrame,
  SectionIntro,
  SectionPanel,
  SectionPanelContent,
  SurfaceCard,
} from "./design-system";
import ExpandableImageDialog from "./expandable-image-dialog";

type WorkItem = {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  tileClassName?: string;
  frameClassName?: string;
};

export default function MoreFromMyDesk() {
  const items: WorkItem[] = [
    { id: "desk-1", src: "/desk-1.svg", alt: "Desk work 1", width: 600, height: 400, tileClassName: "col-span-12 md:col-span-8 xl:col-span-7 xl:row-span-2", frameClassName: "min-h-[15rem] sm:min-h-[18rem] lg:min-h-[22rem]" },
    { id: "desk-2", src: "/desk-2.svg", alt: "Desk work 2", width: 600, height: 400, tileClassName: "col-span-12 md:col-span-4 xl:col-span-5", frameClassName: "min-h-[12rem] sm:min-h-[14rem]" },
    { id: "desk-3", src: "/desk-3.svg", alt: "Desk work 3", width: 600, height: 400, tileClassName: "col-span-12 md:col-span-6 xl:col-span-5", frameClassName: "min-h-[13rem] sm:min-h-[15rem]" },
    { id: "desk-4", src: "/desk-4.svg", alt: "Desk work 4", width: 600, height: 400, tileClassName: "col-span-12 md:col-span-6 xl:col-span-4", frameClassName: "min-h-[13rem] sm:min-h-[15rem]" },
    { id: "desk-5", src: "/desk-5.svg", alt: "Desk work 5", width: 600, height: 400, tileClassName: "col-span-6 md:col-span-6 xl:col-span-4", frameClassName: "min-h-[11rem] sm:min-h-[13rem]" },
    { id: "desk-6", src: "/desk-6.svg", alt: "Desk work 6", width: 600, height: 400, tileClassName: "col-span-6 md:col-span-6 xl:col-span-4", frameClassName: "min-h-[11rem] sm:min-h-[13rem]" },
    { id: "desk-7", src: "/desk-7.svg", alt: "Desk work 7", width: 600, height: 400, tileClassName: "col-span-6 md:col-span-6 xl:col-span-4", frameClassName: "min-h-[11rem] sm:min-h-[13rem]" },
    { id: "desk-8", src: "/desk-8.svg", alt: "Desk work 8", width: 600, height: 400, tileClassName: "col-span-6 md:col-span-12 xl:col-span-8", frameClassName: "min-h-[11rem] sm:min-h-[13rem]" },
  ];

  return (
    <PageSection id="more-from-my-desk">
      <SectionPanel>
        <SectionPanelContent>
          <SectionIntro
            eyebrow="Archive"
            index="04"
            title="More from My Desk"
            description="Additional interface studies, product snapshots, and visual explorations presented with the same responsive surfaces used throughout the portfolio."
            className="max-w-3xl"
          />

          <ul className="grid grid-cols-12 gap-4 sm:gap-5" aria-label="More from my desk work tiles">
            {items.map((item) => (
              <li key={item.id} className={item.tileClassName}>
                <SurfaceCard className="h-full">
                  <CardContent className="p-4">
                    <MediaFrame className={item.frameClassName}>
                      <ExpandableImageDialog
                        src={item.src}
                        alt={item.alt}
                        width={item.width || 600}
                        height={item.height || 400}
                        title={item.alt}
                        subtitle="Archive"
                        description="Expanded showcase view from the More from My Desk gallery."
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
