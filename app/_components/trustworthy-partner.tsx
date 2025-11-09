import PageSection from "./page-section";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TrustworthyPartner() {
  return (
    <PageSection id="trustworthy-partner">
      <div className="mx-auto grid gap-8 md:grid-cols-2 items-start">
        {/* Left: label, heading, copy, stats */}
        <div className="space-y-6">
          <p className="text-foreground text-2xl">02</p>
          <h2 className="text-3xl sm:text-6xl font-semibold leading-tight text-foreground mt-20">
            Meet Your Trustworthy Design Partner
          </h2>
          <p className="text-foreground/95 max-w-[40ch]">
            I’m Shobi, a designer based in Cebu. I focus on making design feel effortless and
            human — from branding to full product design that not only looks good but feels right.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-2 mt-50">
            <div>
              <p className="text-3xl sm:text-5xl mb-6 text-center font-semibold text-foreground">10+</p>
              <p className="text-muted-foreground text-lg text-center">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl sm:text-5xl mb-6 text-center font-semibold text-foreground">2+</p>
              <p className="text-muted-foreground text-lg text-center">Year of Experience</p>
            </div>
            <div>
              <p className="text-3xl sm:text-5xl mb-6 text-center font-semibold text-foreground">5+</p>
              <p className="text-muted-foreground text-lg text-center">Industries Served</p>
            </div>
          </div>
        </div>

        {/* Right: portrait image in card */}
        <Card className="border-0 overflow-hidden p-0 bg-transparent">
          <CardContent className="h-[90dvh]">
            <Image
              src="/full-body-portrait.svg"
              alt="Full body portrait"
              width={4000}
              height={4000}
              className="h-full w-full"
            />
          </CardContent>
        </Card>
      </div>
    </PageSection >
  );
}