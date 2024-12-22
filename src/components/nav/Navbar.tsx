import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import type { NavLink as NavLinkType } from "@/types";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

const navLinks: NavLinkType[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-5">
            <Link to="/" className="text-2xl font-heading font-bold">
              AXTRA
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-white p-2"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu onClose={() => setIsOpen(false)} links={navLinks} />
        )}
      </AnimatePresence>
    </>
  );
}
