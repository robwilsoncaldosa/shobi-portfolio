import Image from "next/image";
import PageSection from "./page-section";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

type Certificate = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
};

const DEFAULT_CERTIFICATES: Certificate[] = [
  {
    id: "best-blockchain-certificate",
    title: "Best Blockchain Certificate",
    imageSrc: "/best-blockchain-certificate.svg",
    imageAlt: "Best blockchain course certificate",
  },
  {
    id: "itil-certificate",
    title: "ITIL Certificate",
    imageSrc: "/itil-certificate.svg",
    imageAlt: "ITIL foundation certificate",
  },
  {
    id: "ux-certificate",
    title: "UX Certificate",
    imageSrc: "/ux-certificate.svg",
    imageAlt: "User experience design certificate",
  },
  {
    id: "linkedin-certificate",
    title: "LinkedIn Certificate",
    imageSrc: "/linkedin-certificate.svg",
    imageAlt: "LinkedIn learning certificate",
  },
  {
    id: "pineapple-certificate",
    title: "Pineapple Certificate",
    imageSrc: "/pineapple-certificate.svg",
    imageAlt: "Pineapple design certificate",
  },
  {
    id: "pineapple-virtual-certificate",
    title: "Pineapple Virtual Certificate",
    imageSrc: "/pineapple-virtual-certificate.svg",
    imageAlt: "Pineapple virtual conference certificate",
  },
  {
    id: "udemy-certificate",
    title: "Udemy Certificate",
    imageSrc: "/udemy-certificate.svg",
    imageAlt: "Udemy course completion certificate",
  },
];

type CertificationsProps = {
  items?: Certificate[];
  itemCount?: number;
  title?: string;
};

export default function Certifications({
  items,
  itemCount = 5,
  title = "Certifications",
}: CertificationsProps) {
  const source = DEFAULT_CERTIFICATES;
  const visible = source.slice(0, DEFAULT_CERTIFICATES.length);

  if (!visible.length) {
    return null;
  }

  return (
    <PageSection id="certifications" className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-4xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold leading-none text-foreground">
          {title}
        </h2>
        <Carousel aria-label="Certifications" className="w-full max-w-5xl" >
          <CarouselContent>
            {Array.from({ length: visible.length }).map((_, index) => {
              const certificate = visible[index];
              return (
                <CarouselItem key={certificate.id}>
                  <Card className="border-0 bg-transparent shadow-none flex items-center justify-center">
                    <CardContent className="flex w-full items-center justify-center px-4 py-4">
                      <div className="flex w-full max-w-3xl max-h-[80vh] items-center justify-center">
                        <Image
                          src={certificate.imageSrc}
                          alt={certificate.imageAlt || certificate.title}
                          width={1600}
                          height={1200}
                          loading="lazy"
                          className="h-full w-auto  object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </PageSection>
  );
}
