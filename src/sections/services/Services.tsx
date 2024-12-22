import { motion } from "framer-motion";

import type { ServiceItem } from "@/types";
import ServiceCard from "./ServiceCard";

const services: ServiceItem[] = [
  {
    title: "Digital Strategy",
    description:
      "We develop comprehensive digital strategies tailored to your business goals.",
    icon: "🎯",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and drive organic traffic.",
    icon: "🔍",
  },
  {
    title: "Content Marketing",
    description:
      "Create engaging content that resonates with your target audience.",
    icon: "📝",
  },
  {
    title: "Social Media",
    description:
      "Build and engage your community across social media platforms.",
    icon: "📱",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-[#151515]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Our Services
          </h2>
          <p className="text-gray-400">
            We offer a wide range of digital marketing services to help your
            business grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
