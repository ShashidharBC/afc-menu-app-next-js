import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  { src: "/alu-chilli.jpg", alt: "alu-chilli", title: "AFC Alu Chilli" },
  { src: "/gobi_65.jpeg", alt: "gobi-65-img", title: "AFC Gobi 65" },
  { src: "/sangam_vada.jpg", alt: "sangam-vada", title: "AFC Sangam Vada" },
  {
    src: "/gobi_noodles_2.png",
    alt: "gobi-noodles",
    title: "AFC Gobi Noodles",
  },
  { src: "/kachori.jpg", alt: "Kachori", title: "AFC Kachori" },
  // { src: "/samosa.jpg", alt: "Samosa", title: "AFC Samosa" },
  // { src: "/patties_2.jpg", alt: "Patties", title: "AFC Patties" },
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[75%] max-w-sm mb-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-2 h-full flex flex-col">
              <Card className="h-full overflow-hidden rounded-3xl border border-white/70 bg-white/60 shadow-xl shadow-sky-200/60 backdrop-blur-md">
                <CardContent className="relative p-2 h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={320}
                    className="object-cover h-full w-full rounded-2xl"
                  />
                  <div className="absolute inset-x-2 bottom-2 rounded-b-2xl bg-gradient-to-t from-sky-900/70 to-transparent px-4 pb-3 pt-10">
                    <span className="text-sm font-semibold text-white drop-shadow">
                      {image.title}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-white/70 bg-white/80 text-sky-700 shadow-md backdrop-blur hover:bg-sky-100" />
      <CarouselNext className="border-white/70 bg-white/80 text-sky-700 shadow-md backdrop-blur hover:bg-sky-100" />
    </Carousel>
  );
}
