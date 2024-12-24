import { motion } from "framer-motion";
import { variant } from "@/utils/variants";
import WorkCard from "./WorkCard";

// const works: WorkItem[] = [
//   {
//     title: "Digital Campaign",
//     category: "marketing",
//     image: "/placeholder.svg?height=600&width=800",
//   },
//   {
//     title: "Brand Strategy",
//     category: "branding",
//     image: "/placeholder.svg?height=600&width=800",
//   },
//   {
//     title: "Social Media",
//     category: "social",
//     image: "/placeholder.svg?height=600&width=800",
//   },
//   {
//     title: "SEO Optimization",
//     category: "seo",
//     image: "/placeholder.svg?height=600&width=800",
//   },
// ];

export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto text-center mb-16"
        >
          <motion.h2
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="uppercase text-lg  font-normal text-start font-heading"
          >
            Featured
            <br />
            Work
          </motion.h2>
        </motion.div>
        <WorkCard />
      </div>
    </section>
  );
}
