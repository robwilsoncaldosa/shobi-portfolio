"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader } from "@/components/ui/card";

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
        // sticky header, layered above content
        "sticky top-0 z-50 border-0 shadow-none rounded-none",
        // glassy background when scrolled, transparent at top
        isScrolled ? "bg-background/70 backdrop-blur-md" : "bg-transparent",
        // smooth transition for background changes
        "transition-colors"
      )}
    >
      <CardHeader className="w-full px-4 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-0">
        {/* Left: logo and titles */}
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

        {/* Right: links */}
        <nav className="order-last sm:order-none flex w-full flex-wrap items-center justify-center gap-3 text-sm sm:w-auto sm:ml-auto sm:justify-end sm:gap-5 sm:text-base">
          <HeaderLink href="https://linkedin.com">LinkedIn</HeaderLink>
          <HeaderLink href="https://facebook.com">Facebook</HeaderLink>
          <HeaderLink href="https://instagram.com">Instagram</HeaderLink>
        </nav>
      </CardHeader>
    </Card>
  );
}

function HeaderTitle({ className, href, children }: {
  className?: string;
  href?: string;
  children: React.ReactNode;
}) {
  // If href provided, render as link; else as span
  if (href) {
    return (
      <HeaderLink href={href} className={cn("leading-none", className)}>
        {children}
      </HeaderLink>
    );
  }
  return <span className={cn("leading-none", className)}>{children}</span>;
}

function HeaderLink({ href, className, children }: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isExternal = /^https?:\/\//.test(href);
  const isActive = !isExternal && pathname === href;

  const base = cn(
    "inline-flex items-center justify-center px-4 min-h-12 rounded-full leading-none",
    "text-foreground",
    isActive ? "text-primary" : "opacity-90 hover:opacity-100",
    className
  );

  if (isExternal) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} aria-current={isActive ? "page" : undefined} className={base}>
      {children}
    </Link>
  );
}
