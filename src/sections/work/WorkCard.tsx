import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { WorkItem } from "@/types";
import { useEffect, useRef, useState } from "react";
import first from "../../assets/work/1.png";
import second from "../../assets/work/2.png";
import third from "../../assets/work/3.png";
import fourth from "../../assets/work/4.png";
import { variant } from "@/utils/variants";

export default function WorkCard() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [hovered, isHovered] = useState(false);
  const carouselItem: WorkItem[] = [
    {
      title: "Benjon Website 2012",

      image: first,
    },
    {
      title: "Benjon Website 2012",

      image: second,
    },
    {
      title: "Benjon Website 2012",

      image: third,
    },
    {
      title: "Benjon Website 2012",

      image: fourth,
    },
  ];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div
      className="mx-auto "
      onMouseEnter={() => isHovered(true)}
      onMouseLeave={() => isHovered(false)}
    >
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselItem.map((item) => (
            <CarouselItem key={item.image}>
              <div className="flex justify-around items-center">
                <div>
                  <div className="py-2 text-center text-sm flex justify-center text-white text-muted-foreground">
                    <span className="text-6xl">{current} / </span>
                    <span className="text-2xl ms-2"> {count}</span>
                  </div>
                  {item.title.split(" ").map((title) => (
                    <motion.h1
                      variants={variant}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-9xl font-medium uppercase"
                      style={{ fontSize: "180px" }}
                    >
                      {title}
                    </motion.h1>
                  ))}
                </div>
                <div>
                  <img src={item.image} alt="" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {hovered && <CarouselPrevious />}
        {hovered && <CarouselNext />}
      </Carousel>
    </div>
  );
}
