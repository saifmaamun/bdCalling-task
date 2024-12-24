import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { NavLink } from "@/types";
import SubMenu from "./SubMenu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function NavLink({ href, label, sub }: NavLink) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          to={href}
          className="relative overflow-hidden px-10 py-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Original text */}
          <motion.span
            viewport={{ once: true }}
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
                  viewport={{ once: true }}
                  className="absolute px-10 inset-0 "
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
            </div>
          )}
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto">
        <div className="grid  grid-cols-1  space-x-4">
          {sub.map((link) => (
            <SubMenu key={link.href} {...link} />
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
