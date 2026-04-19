import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ClassNameProps = {
    className?: string;
    children: ReactNode;
};

type SectionIntroProps = {
    eyebrow?: string;
    index?: string;
    title: string;
    description?: string;
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
};

export function SectionPanel({ className, children }: ClassNameProps) {
    return (
        <div
            className={cn(
                "w-full",
                className,
            )}
        >
            {children}
        </div>
    );
}

export function SectionPanelContent({ className, children }: ClassNameProps) {
    return (
        <div
            className={cn(
                "relative grid gap-8 p-5 sm:p-7 lg:gap-10 lg:p-10",
                className,
            )}
        >
            {children}
        </div>
    );
}

export function SectionGlow({ className }: { className?: string }) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                "absolute inset-x-0 top-0 h-40 rounded-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_65%)] blur-3xl",
                className,
            )}
        />
    );
}

export function SectionIntro({
    eyebrow,
    index,
    title,
    description,
    className,
    titleClassName,
    descriptionClassName,
}: SectionIntroProps) {
    return (
        <div className={cn("relative space-y-4", className)}>
            {eyebrow ? (
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary/80">
                    {eyebrow}
                </p>
            ) : null}
            {index ? <p className="text-foreground text-2xl">{index}</p> : null}
            <h2
                className={cn(
                    "text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl",
                    titleClassName,
                )}
            >
                {title}
            </h2>
            {description ? (
                <p
                    className={cn(
                        "max-w-2xl text-sm leading-6 text-foreground/75 sm:text-base",
                        descriptionClassName,
                    )}
                >
                    {description}
                </p>
            ) : null}
        </div>
    );
}

export function SurfaceCard({
    className,
    children,
}: ClassNameProps) {
    return (
        <Card
            className={cn(
                "group overflow-hidden border-white/20 bg-white/10 py-0 shadow-[0_16px_40px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:bg-white/14 hover:shadow-[0_22px_50px_-26px_rgba(112,94,188,0.35)]",
                className,
            )}
        >
            {children}
        </Card>
    );
}

export function EyebrowPill({
    className,
    children,
}: ClassNameProps) {
    return (
        <span
            className={cn(
                "inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary",
                className,
            )}
        >
            {children}
        </span>
    );
}

export function MediaFrame({ className, children }: ClassNameProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-background/90 via-background/70 to-primary/10 p-3",
                className,
            )}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(119,70,240,0.24),transparent_42%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-background/40 p-3 sm:p-4">
                {children}
            </div>
        </div>
    );
}

export function IconTile({ className, children }: ClassNameProps) {
    return (
        <div
            className={cn(
                "group flex aspect-square items-center justify-center rounded-2xl border border-white/20 bg-[#040031] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-[#0b0750]",
                className,
            )}
        >
            {children}
        </div>
    );
}
