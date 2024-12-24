import { variant } from "@/utils/variants";
import { motion } from "framer-motion";

const Why4 = () => {
  return (
    <div className="flex justify-center items-center flex-col w-screen space-y-10 px-20">
      <h1 className="text-3xl font-light text-slate-400">
        Have you project in mind?
      </h1>
      <h1 className="text-3xl lg:text-6xl xl:text-8xl font-light text-center">
        Let’s make something <br /> great together!
      </h1>
      <div className="col-span-2 flex justify-start md:justify-end">
        <motion.button
          viewport={{ once: true }}
          variants={variant}
          initial="hidden"
          whileInView="visible"
          className=" mt-12  bg-transparent border text-2xl font-light text-slate-300 rounded-full w-72 h-72 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
        >
          Contact With Us
        </motion.button>
      </div>
    </div>
  );
};

export default Why4;
