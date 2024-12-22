import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = ["Digital", "Marketing", "Solutions"];

export default function HeroText() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight font-heading">
      {words.map((word, index) => (
        <motion.span
          key={word}
          className="hero-text block"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
