import { Button } from "@/components/ui/button";
import Image from "next/image";
import PageSection from "./_components/page-section";
import DesignExperience from "./_components/design-experience";
import TrustworthyPartner from "./_components/trustworthy-partner";
import Certifications from "./_components/certifications";
import DesignPlayground from "./_components/design-playground";
import MoreFromMyDesk from "./_components/more-from-my-desk";
import Testimonials from "./_components/testimonials";

export default function Home() {
  return (
    <main>
      <PageSection id="home">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 items-start h-full">
          {/* Left: headline, copy, CTA */}
          <div className="space-y-6 max-w-full sm:max-w-xl flex flex-col h-full">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              <span className="text-foreground">HEY, I’M</span>{" "}
              <span className="text-primary">SHOBI</span>
              <Image src="/paint.svg" alt="paint" width={40} height={40} className="inline-block ml-2 sm:ml-3 size-8 sm:size-10 md:size-12" />
            </h1>
            <p className="text-foreground/80 max-w-prose">
              Hi, I design clean, user-friendly interfaces and help businesses
              streamline processes for better experiences.
            </p>
            <div>
              <Button
                className="border-foreground rounded-full px-5 py-3 text-base sm:text-lg leading-tight tracking-tight mt-4"
                variant={"outline"}
              >
                BOOK A CALL <Image src="/phone.svg" alt="call" width={20} height={20} className="inline-block ml-2 sm:ml-3 size-5 sm:size-6" />
              </Button>

            </div>
            <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-auto mb-40">
              <p className="text-muted-foreground text-sm sm:text-base">(SCROLL DOWN)</p>
              <p className="text-foreground text-lg sm:text-2xl">01</p>
            </div>
          </div>

          {/* Right: supporting paragraph */}
          <div className="order-first md:order-none space-y-6 flex flex-col items-center md:items-end">
            <Image src="/landing-page-portrait.png" alt="paint" width={2000} height={2000} className="w-full max-w-xs sm:max-w-md md:max-w-lg" />
            <p className="text-foreground/80 max-w-[40ch] text-center md:text-left me-20">
              I don’t just design — I solve problems. From concept to full
              product delivery, my goal is to create designs that feel right:
              clean, functional, and effortless for you and your audience.
            </p>
          </div>
        </div>
      </PageSection>
      <DesignExperience />
      <TrustworthyPartner />
      <Certifications />
      <DesignPlayground />
      <MoreFromMyDesk />
      <Testimonials />
    </main >
  );
}
