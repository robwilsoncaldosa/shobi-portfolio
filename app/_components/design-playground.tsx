import PageSection from "./page-section";
import { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import {
  IconTile,
  SectionIntro,
  SectionPanel,
  SectionPanelContent,
  SurfaceCard,
} from "./design-system";

type PlaygroundItem = {
  title: string;
  description: string;
  icon?: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
};

export default function DesignPlayground() {
  const items: PlaygroundItem[] = [
    {
      title: "Basic Video Editing",
      description:
        "Edited and assembled video footage, added effects, and ensured smooth transitions to produce engaging content.",
      icon: "/basic-video-editing.svg",
      iconAlt: "Basic video editing icon",
      iconWidth: 63,
      iconHeight: 63,
    },
    {
      title: "Graphics",
      description:
        "Created visual content and designs for digital platforms, including banners, social media posts, and promotional materials.",
      icon: "/graphics.svg",
      iconAlt: "Graphics icon",
      iconWidth: 65,
      iconHeight: 63,
    },
    {
      title: "Virtual Assistant",
      description:
        "Provided remote support through task management, research, customer service, and administrative assistance to streamline operations.",
      icon: "/virtual-assistant.svg",
      iconAlt: "Virtual assistant icon",
      iconWidth: 63,
      iconHeight: 63,
    },
  ];

  const tools = [
    { src: "/ai.svg", alt: "AI" },
    { src: "/arrow-something.svg", alt: "Arrow" },
    { src: "/b-something.svg", alt: "B Something" },
    { src: "/chatgpt.svg", alt: "ChatGPT" },
    { src: "/figma.svg", alt: "Figma" },
    { src: "/notion.svg", alt: "Notion" },
  ];

  return (
    <PageSection id="design-playground">
      <SectionPanel>
        <SectionPanelContent className="lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <SectionIntro
              eyebrow="Design Skills"
              index="03"
              title="My Design Playground"
              description="A lighter, more flexible workspace for the tools and services I use to shape visual systems, content, and everyday support workflows."
              titleClassName="max-w-[12ch]"
              descriptionClassName="max-w-xl"
            />

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
              {tools.map((tool, i) => (
                <IconTile key={i}>
                  <Image
                    src={tool.src}
                    alt={tool.alt}
                    width={40}
                    height={40}
                    className="size-10 object-contain opacity-90 transition-transform duration-300 group-hover:scale-105 sm:size-12"
                  />
                </IconTile>
              ))}
            </div>
          </div>

          <ul className="grid gap-4 sm:gap-5" aria-label="Design playground capabilities">
            {items.map((item, i) => (
              <li key={i}>
                <SurfaceCard>
                  <CardHeader className="gap-0 px-0 py-0">
                    <CardContent className="flex flex-col gap-5 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
                      {item.icon ? (
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-[#040031] shadow-sm shadow-black/10">
                          <Image
                            src={item.icon}
                            alt={item.iconAlt}
                            width={item.iconWidth}
                            height={item.iconHeight}
                            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-10"
                          />
                        </div>
                      ) : null}
                      <div className="flex-1 space-y-2">
                        <CardTitle className="text-foreground text-lg sm:text-xl">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-6 text-foreground/72 sm:text-base">
                          {item.description}
                        </CardDescription>
                      </div>
                    </CardContent>
                  </CardHeader>
                </SurfaceCard>
              </li>
            ))}
          </ul>
        </SectionPanelContent>
      </SectionPanel>
    </PageSection>
  );
}
