import PageSection from "./page-section";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

type Testimonial = {
  name: string;
  quote: string;
  avatarSrc: string;
};

export default function Testimonials() {
  const items: Testimonial[] = [
    {
      name: "OLIVIA COLE",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      avatarSrc: "/full-body-portrait.png",
    },
    {
      name: "OLIVIA COLE",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      avatarSrc: "/full-body-portrait.png",
    },
    {
      name: "OLIVIA COLE",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      avatarSrc: "/full-body-portrait.png",
    },
  ];

  return (
    <PageSection id="testimonials" className="py-16">
      <div className="space-y-6">
        <p className="text-muted-foreground text-sm">TESTIMONIALS</p>
        <h2 className="text-3xl sm:text-5xl font-semibold leading-tight text-foreground">
          Client Reviews
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Card key={i} className="border-0">
              <CardHeader className="items-center gap-4">
                <Image
                  src={item.avatarSrc}
                  alt={item.name}
                  width={160}
                  height={160}
                  className="size-24 sm:size-32 rounded-full object-cover"
                />
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <CardTitle className="text-base sm:text-lg text-foreground">
                  {item.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {item.quote}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageSection>
  );
}