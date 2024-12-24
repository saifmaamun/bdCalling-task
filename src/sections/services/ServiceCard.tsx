import { motion } from "framer-motion";
import type { ServiceItem } from "@/types";
import { variant } from "@/utils/variants";
import OtherServices from "./OtherServices";

interface ServiceCardProps extends ServiceItem {
  index: number;
}

export default function ServiceCard({
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      variants={variant}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group p-8  "
    >
      <div className="grid lg:grid-cols-6 gap-8 py-10 grid-cols-1  justify-between items-center ">
        <div className="col-span-2">
          <motion.h1
            viewport={{ once: true }}
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-medium uppercase"
          >
            {title.split(" ").slice(0, -1).join(" ")}
            <br />
            {title.split(" ").pop()}
          </motion.h1>
        </div>
        <div className="col-span-2 space-y-10">
          <motion.p
            viewport={{ once: true }}
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-medium pe-20"
          >
            {description}
          </motion.p>
          <OtherServices />
        </div>
        <div className="col-span-2 flex justify-start lg:justify-end">
          <motion.button
            viewport={{ once: true }}
            variants={variant}
            initial="hidden"
            whileInView="visible"
            className=" mt-12  bg-white text-base text-black rounded-full w-32 h-32 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
          >
            Explore Us
          </motion.button>
        </div>
      </div>
      <hr />
    </motion.div>
  );
}
