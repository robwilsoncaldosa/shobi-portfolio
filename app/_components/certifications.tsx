import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
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
      <div className="mx-auto w-full max-w-6xl space-y-6 sm:space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary/80">
            Credentials
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            A curated set of professional certifications presented in a
            scan-friendly layout, with core credential details surfaced first
            for faster review across devices.
          </p>
        </div>

        <div
          aria-label="Certifications"
          className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {visible.map((certificate) => {
            return (
              <Card
                key={certificate.id}
                className={cn(
                  "group overflow-hidden border-white/10 bg-card/80 py-0 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_60px_-24px_rgba(119,70,240,0.45)]",
                  certificate.gridClassName,
                )}
              >
                <CardContent className="flex h-full flex-col gap-5 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                      <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary">
                        {certificate.issuer}
                      </span>
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

                  <div
                    className={cn(
                      "relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-background/90 via-background/70 to-primary/10 p-3",
                      certificate.previewClassName,
                    )}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(119,70,240,0.24),transparent_42%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-background/40 p-2">
                      <Image
                        src={certificate.imageSrc}
                        alt={certificate.imageAlt || certificate.title}
                        width={1600}
                        height={1200}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
}
