import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import type { NavLink } from "@/types";

interface MobileMenuProps {
  onClose: () => void;
  links: NavLink[];
}

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const linkVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  }),
};

export default function MobileMenu({ onClose, links }: MobileMenuProps) {
  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="exit"
      variants={menuVariants}
      className="fixed inset-0 z-50 bg-black"
    >
      <div className="container mx-auto px-4 py-5 h-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="p-2" aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center h-[calc(100%-4rem)] space-y-8">
          {links.map((link, index) => (
            <motion.div key={link.href} custom={index} variants={linkVariants}>
              <Link
                to={link.href}
                className="text-4xl font-heading font-bold hover:text-primary transition-colors"
                onClick={onClose}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
