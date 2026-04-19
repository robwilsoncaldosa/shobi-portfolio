import PageSection from "./page-section";
import { CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import {
  EyebrowPill,
  SectionGlow,
  SectionIntro,
  SectionPanel,
  SectionPanelContent,
  SurfaceCard,
} from "./design-system";
import ExpandableImageDialog from "./expandable-image-dialog";

type Testimonial = {
  name: string;
  role?: string;
  company?: string;
  rating: number;
  quote: string;
  avatarSrc: string;
};

export default function Testimonials() {
  const items: Testimonial[] = [
    {
      name: "Bertology",
      company: "Bertology",
      role: "Brand Partner",
      rating: 5,
      quote:
        "Working with Shobi brought clarity to our product direction and visual presentation. The process felt thoughtful, collaborative, and incredibly smooth from concept to final output.",
      avatarSrc: "/full-body-portrait.png",
    },
    {
      name: "Ryan",
      company: "Independent Client",
      role: "Founder",
      rating: 5,
      quote:
        "She quickly translated rough ideas into polished interfaces that felt easy to trust and even easier to use.",
      avatarSrc: "/full-body-portrait.png",
    },
    {
      name: "Rob Wilson",
      company: "Product Team",
      role: "Operations Lead",
      rating: 5,
      quote:
        "The final work balanced usability and visual quality perfectly. Communication was clear and every detail felt intentional.",
      avatarSrc: "/full-body-portrait.png",
    },
  ];

  const [featured, ...secondary] = items;

  return (
    <PageSection id="testimonials" className="py-16">
      <SectionPanel>
        <SectionPanelContent>
          <div className="relative">
            <SectionGlow />
            <SectionIntro
              eyebrow="Testimonials"
              title="Client Reviews"
              description="Positive feedback presented in a featured editorial layout, with the strongest review highlighted first while supporting testimonials remain easy to scan."
              className="relative max-w-3xl"
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
            <SurfaceCard className="h-full">
              <CardContent className="flex h-full flex-col gap-6 p-5 sm:p-6 lg:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-4">
                    <ExpandableImageDialog
                      src={featured.avatarSrc}
                      alt={featured.name}
                      width={192}
                      height={192}
                      title={featured.name}
                      subtitle={featured.company || "Client Review"}
                      description={featured.quote}
                      sizes="(max-width: 768px) 6rem, 8rem"
                      triggerClassName="block rounded-full"
                      previewClassName="size-24 rounded-full object-cover sm:size-28"
                      dialogImageClassName="h-full max-h-[70vh] w-full rounded-[1.25rem] object-cover"
                      dialogMediaClassName="min-h-[20rem] sm:min-h-[26rem]"
                    />
                    <div className="space-y-2">
                      <EyebrowPill>Featured Review</EyebrowPill>
                      <div>
                        <CardTitle className="text-2xl text-foreground sm:text-3xl">
                          {featured.name}
                        </CardTitle>
                        {(featured.role || featured.company) ? (
                          <p className="mt-1 text-sm leading-6 text-foreground/72 sm:text-base">
                            {[featured.role, featured.company].filter(Boolean).join(" at ")}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <RatingStars rating={featured.rating} />
                </div>

                <blockquote className="max-w-3xl text-lg leading-8 text-foreground/88 sm:text-xl">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-background/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary/85">
                    Verified Feedback
                  </span>
                  <span className="text-sm text-foreground/65">
                    Rated {featured.rating} out of 5 for communication, clarity, and design quality.
                  </span>
                </div>
              </CardContent>
            </SurfaceCard>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {secondary.map((item, i) => (
                <SurfaceCard key={i} className="h-full">
                  <CardHeader className="flex-row items-center gap-4 space-y-0 px-5 pt-5 sm:px-6 sm:pt-6">
                    <ExpandableImageDialog
                      src={item.avatarSrc}
                      alt={item.name}
                      width={160}
                      height={160}
                      title={item.name}
                      subtitle={item.company || "Client Review"}
                      description={item.quote}
                      sizes="(max-width: 768px) 5rem, 6rem"
                      triggerClassName="block shrink-0 rounded-full"
                      previewClassName="size-20 rounded-full object-cover sm:size-24"
                      dialogImageClassName="h-full max-h-[70vh] w-full rounded-[1.25rem] object-cover"
                      dialogMediaClassName="min-h-[20rem] sm:min-h-[26rem]"
                    />
                    <div className="min-w-0 space-y-1">
                      <CardTitle className="text-lg text-foreground sm:text-xl">
                        {item.name}
                      </CardTitle>
                      {(item.role || item.company) ? (
                        <p className="text-sm leading-6 text-foreground/72">
                          {[item.role, item.company].filter(Boolean).join(" at ")}
                        </p>
                      ) : null}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                    <RatingStars rating={item.rating} compact />
                    <CardDescription className="text-sm leading-6 text-foreground/72 sm:text-base">
                      &ldquo;{item.quote}&rdquo;
                    </CardDescription>
                  </CardContent>
                </SurfaceCard>
              ))}
            </div>
          </div>
        </SectionPanelContent>
      </SectionPanel>
    </PageSection>
  );
}

function RatingStars({
  rating,
  compact = false,
}: {
  rating: number;
  compact?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={compact ? "size-4 text-primary" : "size-5 text-primary"}
          fill={index < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M10 1.9 12.5 7l5.6.8-4 3.9.9 5.5-5-2.6-5 2.6.9-5.5-4-3.9L7.5 7 10 1.9Z" />
        </svg>
      ))}
    </div>
  );
}
