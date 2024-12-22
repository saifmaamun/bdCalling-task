import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { WorkItem } from "@/types";
import WorkFilters from "./WorkFilters";
import WorkCard from "./WorkCard";

const works: WorkItem[] = [
  {
    title: "Digital Campaign",
    category: "marketing",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Brand Strategy",
    category: "branding",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Social Media",
    category: "social",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "SEO Optimization",
    category: "seo",
    image: "/placeholder.svg?height=600&width=800",
  },
];

const categories = ["all", "marketing", "branding", "social", "seo"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredWorks = works.filter(
    (work) => activeCategory === "all" || work.category === activeCategory
  );

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Our Work
          </h2>
          <p className="text-gray-400">
            Check out some of our recent projects and success stories
          </p>
        </motion.div>

        <WorkFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <AnimatePresence mode="wait">
            {filteredWorks.map((work) => (
              <WorkCard key={work.title} {...work} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
