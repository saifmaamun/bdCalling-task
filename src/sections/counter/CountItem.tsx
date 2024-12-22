import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { CountItem } from "@/types";

interface CountItemProps extends CountItem {
  inView: boolean;
}

export default function CountItem({ number, label, inView }: CountItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = number;
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 16));

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">
        {count}+
      </div>
      <p className="text-gray-400">{label}</p>
    </motion.div>
  );
}
