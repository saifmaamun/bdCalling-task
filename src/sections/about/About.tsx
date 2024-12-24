import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import about from "../../assets/about/about.png";
import { variant } from "@/utils/variants";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div className="bg-dark text-white py-20 container flex justify-center uppercase items-center">
      <div ref={ref} className="hidden md:flex md:flex-col md:flex-1 flex-row">
        <motion.img
          viewport={{ once: true }}
          style={{ y }}
          className=""
          src={about}
          alt=""
        />
      </div>
      <motion.div className="flex-1" viewport={{ once: true }}>
        <motion.h1
          viewport={{ once: true }}
          variants={variant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg  ms-4 ps-4"
        >
          Who We Are
        </motion.h1>
        <motion.h1
          viewport={{ once: true }}
          variants={variant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:text-6xl text-3xl font-medium ms-4 ps-4"
        >
          We are leading digital marketing agency.
        </motion.h1>
        <div className=" my-10 lg:ms-48 ms-4 ps-4 lg:ps-8 border-s-2">
          <motion.p
            viewport={{ once: true }}
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 "
          >
            We’re a team of strategic mdigital marketing working globally with
            largest brands, We believe that progress only happens when you
            refused to play things safe. We combine ideas and behaviors, and
            insights with design, technological data to produce brand
            experiences that customers love our services.
          </motion.p>
          <motion.button
            viewport={{ once: true }}
            variants={variant}
            initial="hidden"
            whileInView="visible"
            className=" mt-12 bg-white text-black rounded-full w-32 h-32 flex items-center justify-center"
          >
            Explore Us
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
