import PageSection from "./page-section";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

type PlaygroundItem = {
  title: string;
  description: string;
  icon?: string;
};

export default function DesignPlayground() {
  const items: PlaygroundItem[] = [
    {
      title: "Basic Video Editing",
      description:
        "Edited and assembled video footage, added effects, and ensured smooth transitions to produce engaging content.",
      icon: "/file.svg",
    },
    {
      title: "Graphics",
      description:
        "Created visual content and designs for digital platforms, including banners, social media posts, and promotional materials.",
      icon: "/paint.svg",
    },
    {
      title: "Virtual Assistant",
      description:
        "Provided remote support through task management, research, customer service, and administrative assistance to streamline operations.",
      icon: "/phone.svg",
    },
  ];

  const tools = [
    { src: "/logo.svg", alt: "Logo" },
    { src: "/next.svg", alt: "Next" },
    { src: "/vercel.svg", alt: "Vercel" },
    { src: "/globe.svg", alt: "Globe" },
    { src: "/window.svg", alt: "Window" },
    { src: "/paint.svg", alt: "Paint" },
  ];

  return (
    <PageSection id="design-playground">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        {/* Left: heading and tool icons */}
        <div className="space-y-6">
          <p className="text-foreground text-2xl">03</p>
          <h2 className="text-3xl sm:text-5xl font-semibold leading-tight text-foreground">
            My Design Playground
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            {tools.map((tool, i) => (
              <Image
                key={i}
                src={tool.src}
                alt={tool.alt}
                width={40}
                height={40}
                className="size-10 sm:size-12"
              />
            ))}
          </div>
        </div>

        {/* Right: capability cards */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <Card key={i} className="">
              <CardHeader className="flex-row items-start gap-4 px-6">
                {item.icon ? (
                  <Image src={item.icon} alt="" width={36} height={36} className="size-10" />
                ) : null}
                <div className="flex-1">
                  <CardTitle className="text-foreground text-base sm:text-lg">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </PageSection>
  );
}