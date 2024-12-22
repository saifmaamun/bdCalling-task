import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  onClose: () => void;
  links: Array<{ href: string; label: string }>;
}

export default function MobileMenu({ onClose, links }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black"
    >
      <div className="container mx-auto px-4 py-5 h-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="p-2" aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <motion.nav
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center justify-center h-[calc(100%-4rem)] space-y-8"
        >
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                to={link.href}
                className="text-4xl font-bold hover:text-primary transition-colors"
                onClick={onClose}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </motion.div>
  );
}
