import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import about from "../../assets/about/about.png";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };
  return (
    <div className="bg-dark text-white py-20 container flex justify-center uppercase items-center">
      <div ref={ref} className="md:flex-col md:flex-1 flex-row">
        <motion.img style={{ y }} className="" src={about} alt="" />
      </div>
      <div className="flex-1">
        <motion.h1
          variants={variant}
          initial="hidden"
          whileInView="visible"
          className="text-lg"
        >
          Who We Are
        </motion.h1>
        <motion.h1
          variants={variant}
          initial="hidden"
          whileInView="visible"
          className="text-6xl font-medium"
        >
          We are leading digital marketing agency.
        </motion.h1>
        <div className=" my-10 ms-48 ps-8 border-s-2">
          <motion.p
            variants={variant}
            initial="hidden"
            whileInView="visible"
            className="text-gray-400 "
          >
            We’re a team of strategic mdigital marketing working globally with
            largest brands, We believe that progress only happens when you
            refused to play things safe. We combine ideas and behaviors, and
            insights with design, technological data to produce brand
            experiences that customers love our services.
          </motion.p>
          <motion.button
            variants={variant}
            initial="hidden"
            whileInView="visible"
            className=" mt-12 bg-white text-black rounded-full w-32 h-32 flex items-center justify-center"
          >
            Explore Us
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;
