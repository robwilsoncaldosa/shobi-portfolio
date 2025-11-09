import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-muted bg-transparent pt-24 pb-12">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        {/* Left: name, tagline, CTA, contacts */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-5xl font-semibold leading-tight text-foreground">
            Shobi Ortiz Umaran
          </h2>
          <p className="text-foreground/80 max-w-prose">
            Let’s make design simple — graphics and UI/UX that feel clear, trustworthy, and effortless.
          </p>
          <Button variant="outline" className="rounded-full px-5 py-3 text-base sm:text-lg leading-tight tracking-tight">
            BOOK A CALL
            <Image src="/phone.svg" alt="call" width={20} height={20} className="inline-block ml-2 size-5 sm:size-6" />
          </Button>

          <div className="space-y-4 pt-2">
            <p className="text-foreground text-lg">u.shobiortiz@gmail.com</p>
            <p className="text-foreground text-2xl">+63 961 759 0889</p>
          </div>
        </div>

        {/* Right: portrait image */}
        <Card className="border-0 overflow-hidden p-0 bg-transparent">
          <CardContent className="flex items-center justify-center">
            <Image
              src="/full-body-portrait.png"
              alt="Shobi portrait"
              width={600}
              height={600}
              className="rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover"
            />
          </CardContent>
        </Card>
      </div>

      {/* Bottom links row */}
      <div className="mt-12 flex justify-center gap-8">
        <FooterLink href="#">Gmail</FooterLink>
        <FooterLink href="#">Whatapps</FooterLink>
        <FooterLink href="#">Tiktok</FooterLink>
        <FooterLink href="#">Facebook</FooterLink>
      </div>

      <p className="text-muted-foreground text-sm text-center mt-10">
        @ 2025 All right reserved Designed by Shobi
      </p>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-foreground opacity-90 hover:opacity-100 leading-none">
      {children}
    </Link>
  );
}