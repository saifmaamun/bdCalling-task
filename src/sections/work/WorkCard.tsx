import { motion } from "framer-motion";
import type { WorkItem } from "@/types";

export default function WorkCard({ title, category, image }: WorkItem) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden aspect-[4/3]"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <h3 className="text-2xl font-bold mb-2 font-heading">{title}</h3>
          <p className="text-gray-300 capitalize">{category}</p>
        </div>
      </div>
    </motion.div>
  );
}
