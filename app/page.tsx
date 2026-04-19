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
    <main className="pt-8">
      <PageSection id="home">
        <div className="grid items-start gap-10 px-4 sm:px-6 md:grid-cols-2">
          <div className="flex h-full max-w-full flex-col space-y-6 pt-8 sm:max-w-xl sm:pt-16">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary/80">
                Introduction
              </p>
              <p className="text-foreground text-2xl">01</p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                <span className="text-foreground">HEY, I&rsquo;M</span>{" "}
                <span className="text-primary">SHOBI</span>
                <Image src="/paint.svg" alt="paint" width={40} height={40} className="ml-2 inline-block size-8 sm:ml-3 sm:size-10 md:size-16" />
              </h1>
              <p className="max-w-[35ch] text-sm leading-6 text-foreground/75 sm:text-base">
                Hi, I design clean, user-friendly interfaces and help businesses
                streamline processes for better experiences.
              </p>
            </div>
            <div>
              <Button
                className="mt-4 h-12 rounded-full border-white/20 bg-white/10 px-6 text-base leading-tight tracking-tight text-foreground shadow-[0_16px_40px_-30px_rgba(0,0,0,0.7)] hover:border-primary/35 hover:bg-white/14 sm:h-14 sm:text-lg"
                variant={"outline"}
              >
                BOOK A CALL <Image src="/phone.svg" alt="call" width={20} height={20} className="ml-2 inline-block size-5 sm:ml-3 sm:size-6" />
              </Button>
            </div>
            <div className="space-y-4 sm:mt-auto sm:space-y-6">
              <p className="text-sm text-foreground/55 sm:text-base">(SCROLL DOWN)</p>
            </div>
          </div>

          <div className="order-first space-y-5 md:order-0">
            <Image
              src="/landing-page-portrait.png"
              alt="Shobi portrait"
              width={2000}
              height={2000}
              className="mx-auto w-full max-w-xs object-contain sm:max-w-md md:max-w-lg"
            />
            <p className="max-w-[40ch] text-center text-sm leading-6 text-foreground/75 md:ml-auto md:text-left sm:text-base">
              I don’t just design. I solve problems. From concept to full
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
