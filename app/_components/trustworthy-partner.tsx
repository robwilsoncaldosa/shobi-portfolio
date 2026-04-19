import PageSection from "./page-section";
import { CardContent } from "@/components/ui/card";
import {
  SectionGlow,
  SectionIntro,
  SectionPanel,
  SectionPanelContent,
  SurfaceCard,
} from "./design-system";
import ExpandableImageDialog from "./expandable-image-dialog";

export default function TrustworthyPartner() {
  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "2+", label: "Years of Experience" },
    { value: "5+", label: "Industries Served" },
  ];

  return (
    <PageSection id="trustworthy-partner">
      <SectionPanel className="mx-auto">
        <SectionPanelContent className="items-start lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.8fr)]">
          <div className="relative space-y-6">
            <SectionGlow />
            <SectionIntro
              eyebrow="About"
              index="02"
              title="Meet Your Trustworthy Design Partner"
              description="I’m Shobi, a designer based in Cebu. I focus on making design feel effortless and human, from branding to full product design that not only looks good but feels right."
              className="max-w-2xl"
              titleClassName="max-w-[12ch] sm:text-6xl"
              descriptionClassName="max-w-[40ch]"
            />

            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {stats.map((stat) => (
                <SurfaceCard key={stat.label} className="h-full">
                  <CardContent className="flex h-full flex-col items-center justify-center gap-3 p-5 text-center sm:p-6">
                    <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
                      {stat.value}
                    </p>
                    <p className="text-sm leading-6 text-foreground/72 sm:text-base">
                      {stat.label}
                    </p>
                  </CardContent>
                </SurfaceCard>
              ))}
            </div>
          </div>

          <SurfaceCard className="overflow-hidden">
            <CardContent className="p-4 sm:p-5">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-background/90 via-background/70 to-primary/10 p-3">
                <div className="flex items-center justify-center rounded-[1.75rem] bg-background/35 p-3">
                  <ExpandableImageDialog
                    src="/full-body-portrait.svg"
                    alt="Full body portrait"
                    width={4000}
                    height={4000}
                    title="Shobi Portrait"
                    subtitle="About"
                    description="Expanded portrait view from the Trustworthy Design Partner section."
                    sizes="(max-width: 768px) 100vw, 45vw"
                    triggerClassName="mx-auto block h-auto w-full max-w-md"
                    previewClassName="h-auto w-full object-contain"
                    dialogMediaClassName="min-h-[22rem] sm:min-h-[30rem]"
                  />
                </div>
              </div>
            </CardContent>
          </SurfaceCard>
        </SectionPanelContent>
      </SectionPanel>
    </PageSection>
  );
}
