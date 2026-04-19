'use client';

import Image from "next/image";
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
  MorphingDialogTrigger,
} from "@/components/motion-primitives/morphing-dialog";
import { cn } from "@/lib/utils";

type ExpandableImageDialogProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
  subtitle?: string;
  description?: string;
  triggerClassName?: string;
  previewClassName?: string;
  dialogClassName?: string;
  dialogImageClassName?: string;
  dialogMediaClassName?: string;
  sizes?: string;
  dialogSizes?: string;
  priority?: boolean;
};

const IMAGE_DIALOG_TRANSITION = {
  type: "spring" as const,
  bounce: 0.14,
  duration: 0.45,
};

export default function ExpandableImageDialog({
  src,
  alt,
  width,
  height,
  title,
  subtitle,
  description,
  triggerClassName,
  previewClassName,
  dialogClassName,
  dialogImageClassName,
  dialogMediaClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  dialogSizes = "(max-width: 768px) 92vw, 82vw",
  priority = false,
}: ExpandableImageDialogProps) {
  const resolvedTitle = title || alt;
  const resolvedDescription =
    description || "Expanded image preview in dialog view.";

  return (
    <MorphingDialog transition={IMAGE_DIALOG_TRANSITION}>
      <MorphingDialogTrigger
        ariaLabel={`Expand ${resolvedTitle}`}
        className={cn(
          "block h-full w-full overflow-hidden rounded-[inherit] text-left outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          triggerClassName,
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={cn(
            "h-full w-full object-contain",
            previewClassName,
          )}
        />
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent
          className={cn(
            "relative mx-4 w-[min(92vw,72rem)] overflow-hidden rounded-4xl border border-white/15 bg-background/90 shadow-[0_30px_90px_-35px_rgba(0,0,0,0.85)] backdrop-blur-xl",
            dialogClassName,
          )}
        >
          <div className="flex max-h-[88vh] flex-col">
            <div className="p-4 sm:p-5">
              <div
                className={cn(
                  "flex min-h-72 items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br from-background/95 via-background/80 to-primary/10 p-4 sm:min-h-96 sm:p-6",
                  dialogMediaClassName,
                )}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={Math.max(width, 1600)}
                  height={Math.max(height, 1200)}
                  sizes={dialogSizes}
                  className={cn(
                    "h-full max-h-[72vh] w-full object-contain",
                    dialogImageClassName,
                  )}
                />
              </div>
            </div>

            <div className="space-y-1 border-t border-white/10 px-5 pb-5 pt-4 sm:px-6">
              <MorphingDialogTitle className="text-lg font-semibold text-foreground sm:text-xl">
                {resolvedTitle}
              </MorphingDialogTitle>
              {subtitle ? (
                <MorphingDialogSubtitle className="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">
                  {subtitle}
                </MorphingDialogSubtitle>
              ) : null}
              <MorphingDialogDescription className="text-sm leading-6 text-foreground/72">
                {resolvedDescription}
              </MorphingDialogDescription>
            </div>

            <MorphingDialogClose className="right-4 top-4 rounded-full border border-white/15 bg-background/70 p-2 text-foreground shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-primary/35 hover:text-primary" />
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
