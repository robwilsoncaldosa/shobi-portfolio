import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  SectionIntro,
  SectionPanel,
  SectionPanelContent,
  SurfaceCard,
} from "./design-system";
import SocialIconLinks from "./social-icon-links";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-transparent pt-24 pb-12">
      <SectionPanel className="overflow-hidden rounded-4xl border border-white/15 bg-linear-to-br from-white/12 via-card/90 to-primary/8 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.65)]">
        <SectionPanelContent className="items-center md:grid-cols-2">
          <div className="space-y-8">
            <SectionIntro
              eyebrow="Contact"
              title="Shobi Ortiz Umaran"
              description="Let’s make design simple: graphics and UI/UX that feel clear, trustworthy, and effortless."
              className="max-w-xl"
            />
            <Button variant="outline" className="h-12 rounded-full border-white/20 bg-white/10 px-6 text-base leading-tight tracking-tight text-foreground shadow-[0_16px_40px_-30px_rgba(0,0,0,0.7)] hover:border-primary/35 hover:bg-white/14 sm:h-14 sm:text-lg">
              BOOK A CALL
              <Image src="/phone.svg" alt="call" width={20} height={20} className="ml-2 inline-block size-5 sm:size-6" />
            </Button>

            <div className="space-y-4 pt-2">
              <p className="text-lg text-foreground">u.shobiortiz@gmail.com</p>
              <p className="text-2xl text-foreground">+63 961 759 0889</p>
            </div>
          </div>

          <SurfaceCard className="mx-auto max-w-md">
            <CardContent className="flex items-center justify-center p-6 sm:p-8">
              <Image
                src="/full-body-portrait.png"
                alt="Shobi portrait"
                width={600}
                height={600}
                className="h-64 w-64 rounded-full object-cover sm:h-80 sm:w-80"
              />
            </CardContent>
          </SurfaceCard>
        </SectionPanelContent>
      </SectionPanel>

      <SocialIconLinks
        className="mt-10 justify-center"
        itemClassName="size-12 sm:size-14"
        iconClassName="size-5 sm:size-6"
      />

      <p className="text-muted-foreground text-sm text-center mt-10">
        @ {currentYear} All right reserved Designed by Shobi
      </p>
    </footer>
  );
}
