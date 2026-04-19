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

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  imageSrc: string;
  imageAlt?: string;
  gridClassName?: string;
  previewClassName?: string;
};

const DEFAULT_CERTIFICATES: Certificate[] = [
  {
    id: "best-blockchain-certificate",
    title: "Best Blockchain Certificate",
    issuer: "Best Blockchain",
    imageSrc: "/best-blockchain-certificate.svg",
    imageAlt: "Best blockchain course certificate",
    gridClassName: "lg:col-span-2 lg:row-span-2",
    previewClassName: "min-h-[14rem] sm:min-h-[18rem] lg:min-h-[20rem]",
  },
  {
    id: "itil-certificate",
    title: "ITIL Certificate",
    issuer: "ITIL",
    imageSrc: "/itil-certificate.svg",
    imageAlt: "ITIL foundation certificate",
    gridClassName: "md:row-span-2",
    previewClassName: "min-h-[16rem] sm:min-h-[20rem] lg:min-h-[24rem]",
  },
  {
    id: "ux-certificate",
    title: "UX Certificate",
    issuer: "UX Program",
    imageSrc: "/ux-certificate.svg",
    imageAlt: "User experience design certificate",
    gridClassName: "lg:col-span-1",
    previewClassName: "min-h-[14rem] sm:min-h-[15rem]",
  },
  {
    id: "linkedin-certificate",
    title: "LinkedIn Certificate",
    issuer: "LinkedIn Learning",
    imageSrc: "/linkedin-certificate.svg",
    imageAlt: "LinkedIn learning certificate",
    gridClassName: "md:col-span-2 lg:col-span-1",
    previewClassName: "min-h-[13rem] sm:min-h-[16rem]",
  },
  {
    id: "pineapple-certificate",
    title: "Pineapple Certificate",
    issuer: "Pineapple",
    imageSrc: "/pineapple-certificate.svg",
    imageAlt: "Pineapple design certificate",
    gridClassName: "lg:col-span-1",
    previewClassName: "min-h-[14rem] sm:min-h-[15rem]",
  },
  {
    id: "pineapple-virtual-certificate",
    title: "Pineapple Virtual Certificate",
    issuer: "Pineapple",
    imageSrc: "/pineapple-virtual-certificate.svg",
    imageAlt: "Pineapple virtual conference certificate",
    gridClassName: "md:col-span-2 lg:col-span-2",
    previewClassName: "min-h-[13rem] sm:min-h-[16rem]",
  },
  {
    id: "udemy-certificate",
    title: "Udemy Certificate",
    issuer: "Udemy",
    imageSrc: "/udemy-certificate.svg",
    imageAlt: "Udemy course completion certificate",
    gridClassName: "lg:col-span-1",
    previewClassName: "min-h-[14rem] sm:min-h-[15rem]",
  },
];

type CertificationsProps = {
  items?: Certificate[];
  itemCount?: number;
  title?: string;
};

export default function Certifications({
  items,
  itemCount = DEFAULT_CERTIFICATES.length,
  title = "Certifications",
}: CertificationsProps) {
  const source = items?.length ? items : DEFAULT_CERTIFICATES;
  const visible = source.slice(0, itemCount);

  if (!visible.length) {
    return null;
  }

  return (
    <PageSection
      id="certifications"
      className="flex items-center justify-center px-4 sm:px-6"
    >
      <SectionPanel className="mx-auto w-full max-w-6xl">
        <SectionPanelContent>
          <SectionIntro
            eyebrow="Credentials"
            title={title}
            description="A curated set of professional certifications presented in a scan-friendly layout, with core credential details surfaced first for faster review across devices."
            className="max-w-3xl"
          />

          <div
            aria-label="Certifications"
            className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {visible.map((certificate) => {
              return (
                <SurfaceCard
                  key={certificate.id}
                  className={cn(certificate.gridClassName)}
                >
                  <CardContent className="flex h-full flex-col gap-5 p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-2">
                        <EyebrowPill>
                          {certificate.issuer}
                        </EyebrowPill>
                        <div className="space-y-1">
                          <h3 className="text-xl font-semibold leading-tight text-foreground sm:text-2xl">
                            {certificate.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Professional certification
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full border border-white/10 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:border-primary/30 group-hover:text-foreground">
                        Verified Asset
                      </span>
                    </div>

                    <MediaFrame className={cn(certificate.previewClassName)}>
                      <ExpandableImageDialog
                        src={certificate.imageSrc}
                        alt={certificate.imageAlt || certificate.title}
                        width={1600}
                        height={1200}
                        title={certificate.title}
                        subtitle={certificate.issuer}
                        description="Professional certification preview."
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        triggerClassName="h-full w-full"
                        previewClassName="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        dialogMediaClassName="min-h-[20rem] sm:min-h-[28rem]"
                      />
                    </MediaFrame>
                  </CardContent>
                </SurfaceCard>
              );
            })}
          </div>
        </SectionPanelContent>
      </SectionPanel>
    </PageSection>
  );
}
