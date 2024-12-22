import { motion } from "framer-motion";

interface WorkFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function WorkFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: WorkFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 text-sm capitalize transition-colors ${
            activeCategory === category
              ? "bg-white text-black"
              : "text-white hover:text-gray-300"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
