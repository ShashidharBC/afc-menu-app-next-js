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

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[70%] max-w-xs mb-12"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {[
          {
            src: "/gobi_noodles.jpg",
            alt: "gobi-noodles",
            title: "AFC Gobi Noodles",
          },
          {
            src: "/sangam_vada.jpg",
            alt: "sangam-vada",
            title: "AFC Sangam Vada",
          },
          { src: "/kachori.jpg", alt: "Kachori", title: "AFC Kachori" },
          { src: "/samosa.jpg", alt: "Samosa", title: "AFC Samosa" },
          { src: "/patties.jpeg", alt: "Patties", title: "AFC Patties" },
          { src: "/gobi.jpeg", alt: "Gobi", title: "AFC Gobi's" },
          { src: "/chips.jpg", alt: "Chips", title: "AFC French Fries" },
        ].map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1 h-full flex flex-col">
              <Card className="h-full">
                <CardContent className="p-2 h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={320}
                    className="object-cover h-full w-full rounded-lg shadow-lg"
                  />
                </CardContent>
              </Card>
              <div className="text-center mt-4 font-medium text-gray-800">
                {image.title}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
