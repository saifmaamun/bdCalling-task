import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Why1 from "./Why1";
import Why2 from "./Why2";
import Why3 from "./Why3";
import Why4 from "./Why4";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex  items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          <Why1 />
          <Why2 />
          <Why3 />
          <Why4 />
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
