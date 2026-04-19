"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader } from "@/components/ui/card";
import SocialIconLinks from "./social-icon-links";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Card
      className={cn(
        "sticky top-3 z-50 overflow-hidden rounded-3xl border shadow-[0_18px_40px_-30px_rgba(0,0,0,0.75)] transition-all duration-300",
        isScrolled
          ? "border-white/15 bg-background/78 backdrop-blur-xl"
          : "border-white/10 bg-white/8 backdrop-blur-md",
      )}
    >
      <CardHeader className="w-full px-4 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6">
        <div className="flex items-center justify-center gap-3 sm:justify-start sm:gap-4">
          <Image
            src="/logo.svg"
            alt="Shobi logo"
            width={48}
            height={48}
            className="size-10 sm:size-16 mr-3 sm:mr-4"
          />
          <div className="flex flex-col items-center gap-1 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
            <HeaderTitle className="text-xs tracking-wide sm:text-sm">
              UI/UX DESIGNER
            </HeaderTitle>
            <div className="flex items-center gap-2">
              <HeaderTitle className="text-xs tracking-wide sm:text-sm">
                BASED IN PHILIPPINES
              </HeaderTitle>
              <Image
                src="/philipine-flag.png"
                alt="Philippines flag"
                width={24}
                height={16}
              />
            </div>
          </div>
        </div>

        <SocialIconLinks
          className="order-last w-full justify-center sm:order-0 sm:ml-auto sm:w-auto sm:justify-end"
        />
      </CardHeader>
    </Card>
  );
}

function HeaderTitle({ className, children }: {
  className?: string;
  children: React.ReactNode;
}) {
  return <span className={cn("leading-none", className)}>{children}</span>;
}
