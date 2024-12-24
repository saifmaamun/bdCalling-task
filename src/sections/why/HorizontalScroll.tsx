import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Cards from "./Card";
import { Card } from "@/types";
import first from "../../assets/work/1.png";
import second from "../../assets/work/2.png";
import third from "../../assets/work/3.png";
import fourth from "../../assets/work/4.png";

const HorizontalScroll = () => {
  const cards: Card[] = [
    {
      url: first,
      title: "Title 1",
      id: 1,
    },
    {
      url: second,
      title: "Title 2",
      id: 2,
    },
    {
      url: third,
      title: "Title 3",
      id: 3,
    },
    {
      url: fourth,
      title: "Title 4",
      id: 4,
    },
    {
      url: "/imgs/abstract/5.jpg",
      title: "Title 5",
      id: 5,
    },
    {
      url: "/imgs/abstract/6.jpg",
      title: "Title 6",
      id: 6,
    },
    {
      url: "/imgs/abstract/7.jpg",
      title: "Title 7",
      id: 7,
    },
  ];
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Cards card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
