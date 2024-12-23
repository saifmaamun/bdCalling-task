import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { NavLink } from "@/types";
// import SubMenu from "./SubMenu";

export default function NavLink({ href, label, sub }: NavLink) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(sub);

  return (
    <Link
      to={href}
      className="relative overflow-hidden px-10 py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Original text */}
      <motion.span
        className="relative block"
        animate={{
          y: isHovered ? -20 : 0,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {label}
      </motion.span>

      {/* Animated text that appears on hover  */}
      {isHovered && (
        <div className="">
          <AnimatePresence>
            <motion.span
              className="absolute px-10 inset-0"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              {label}
            </motion.span>
          </AnimatePresence>
          <div className="absolute left-1/2 top-full z-50 mt-1 w-[600px] -translate-x-1/2 transform bg-white">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-8">
                {sub.map((section) => (
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-black">
                      {section.label}
                    </h3>
                    <ul className="space-y-2">
                      <li key={section.label}>
                        <a
                          href={section.href}
                          className="block text-sm text-zinc-400 transition-colors hover:text-black"
                        >
                          {section.label}
                        </a>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {isHovered && console.log(sub)} */}
    </Link>
  );
}

// {
//   sub.map((link) => <SubMenu key={link.href} {...link} />);
// }
