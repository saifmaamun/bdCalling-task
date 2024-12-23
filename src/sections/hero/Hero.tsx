import { motion } from "framer-motion";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-40 ">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${"/placeholder.svg?height=1080&width=1920"})`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl -mb-20 font-heading "
          >
            Digital
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 inline-block ms-10 "
            >
              <path
                d="M2 9.5C2 9.22386 2.22386 9 2.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H2.5C2.22386 10 2 9.77614 2 9.5Z"
                fill="#fff"
              />
            </svg>
          </motion.p>

          <HeroText />
        </div>
      </div>
    </section>
  );
}
