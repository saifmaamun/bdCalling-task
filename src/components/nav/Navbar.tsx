import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import whiteLogo from "../../assets/nav/logo-white.png";
// import blackLogo from "../../assets/nav/logo-black.png"
import { cn } from "@/lib/utils";
import type { NavLink as NavLinkType } from "@/types";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

const navLinks: NavLinkType[] = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/work", label: "WORK" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT" },
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
        <div className=" mx-auto px-12 py-2 sticky">
          <nav className="flex items-center justify-between py-5">
            <Link to="/" className="">
              <img src={whiteLogo} alt="" />
            </Link>

            {/* <div className="hidden md:flex items-center  space-x-10"> */}
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </div>
            <div className="flex items-center">
              <svg
                className="me-12"
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <button
                onClick={() => setIsOpen(true)}
                className="border-s-2 text-white p-2"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
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
