import { motion } from "framer-motion";
import type { ServiceItem } from "@/types";

interface ServiceCardProps extends ServiceItem {
  index: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group p-8 bg-[#1A1A1A] hover:bg-white hover:text-black transition-colors duration-300"
    >
      <div className="text-4xl mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4 font-heading">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-600 transition-colors">
        {description}
      </p>
    </motion.div>
  );
}
