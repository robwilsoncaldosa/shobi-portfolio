import Link from "next/link";
import { cn } from "@/lib/utils";

type SocialIconLinksProps = {
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
};

type SocialSvgIconProps = {
  className?: string;
};

function FacebookSvg({ className }: SocialSvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.2 21v-8.2h2.8l.4-3.2h-3.2V7.6c0-.9.3-1.6 1.7-1.6h1.8V3.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.2v2.4H7.6v3.2h2.7V21h2.9Z" />
    </svg>
  );
}

function TwitterSvg({ className }: SocialSvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.9 3H21l-6.8 7.8L22 21h-6.1l-4.8-6.2L5.7 21H2.6l7.3-8.4L2.4 3h6.2l4.3 5.7L17.9 3Zm-1.1 16h1.7L7.7 4.9H5.8L16.8 19Z" />
    </svg>
  );
}

function InstagramSvg({ className }: SocialSvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinSvg({ className }: SocialSvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.4 8.3a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8ZM4.8 9.9H8V20H4.8V9.9Zm5.1 0H13v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.1 3.9 4.9V20h-3.2v-4.8c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V20H9.9V9.9Z" />
    </svg>
  );
}

function YoutubeSvg({ className }: SocialSvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2c.4-1.8.4-4.8.4-4.8s0-3-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    Icon: FacebookSvg,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    Icon: TwitterSvg,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    Icon: InstagramSvg,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    Icon: LinkedinSvg,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    Icon: YoutubeSvg,
  },
] as const;

export default function SocialIconLinks({
  className,
  itemClassName,
  iconClassName,
}: SocialIconLinksProps) {
  return (
    <nav
      aria-label="Social media links"
      className={cn("flex flex-wrap items-center justify-center gap-3 sm:gap-4", className)}
    >
      {SOCIAL_LINKS.map(({ name, href, Icon }) => (
        <Link
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${name}`}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-foreground/88 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-white/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:size-12",
            itemClassName,
          )}
        >
          <Icon className={cn("size-4 sm:size-5", iconClassName)} />
          <span className="sr-only">{name}</span>
        </Link>
      ))}
    </nav>
  );
}
