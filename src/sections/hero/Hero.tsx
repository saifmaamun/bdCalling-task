import { motion } from "framer-motion";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${"/placeholder.svg?height=1080&width=1920"})`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-6 font-heading"
          >
            Digital Marketing
          </motion.p>

          <HeroText />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-400 mt-8 max-w-2xl"
          >
            We help ambitious businesses like yours generate more profits by
            building awareness, driving web traffic, connecting with customers,
            and growing overall sales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <button className="px-8 py-4 border border-white hover:bg-white hover:text-black transition-colors duration-300">
              View Our Work
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
