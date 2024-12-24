import { motion } from "framer-motion";

import type { ServiceItem } from "@/types";
import ServiceCard from "./ServiceCard";
import { variant } from "@/utils/variants";

const services: ServiceItem[] = [
  {
    title: "Search Engine Optimization",
    description:
      "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
  },
  {
    title: "Email Marketing",
    description:
      "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
  },
  {
    title: "Content Marketing",
    description:
      "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
  },
  {
    title: "Social marketing",
    description:
      "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-[#151515] ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-start mb-16 "
        >
          <motion.h2
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="uppercase text-lg  font-normal font-heading"
          >
            Services
          </motion.h2>
          <motion.h2
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="uppercase text-6xl  font-medium mb-6 font-heading"
          >
            Our marketing Services
          </motion.h2>
          <motion.p
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mt-10 ms-48 border-s px-10 py-20 text-gray-400"
          >
            Consumers today rely heavily on digital means to research products.
            We research a brand of bldend engaging with it, according to the
            meanwhile, 51% of consumers say they use Google to research products
            before buying.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-1 ">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
