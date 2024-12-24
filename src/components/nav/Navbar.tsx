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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Input } from "../ui/input";

const navLinks: NavLinkType[] = [
  {
    href: "/",
    label: "HOME",
    sub: [
      { href: "/", label: "HOME" },
      { href: "/", label: "HOME1" },
      { href: "/", label: "HOME2" },
      { href: "/", label: "HOME3" },
      { href: "/", label: "HOME4" },
      { href: "/", label: "HOME5" },
    ],
  },
  {
    href: "/about",
    label: "ABOUT",
    sub: [
      { href: "/", label: "ABOUT" },
      { href: "/", label: "ABOUT1" },
      { href: "/", label: "ABOUT2" },
      { href: "/", label: "ABOUT3" },
      { href: "/", label: "ABOUT4" },
      { href: "/", label: "ABOUT5" },
    ],
  },
  {
    href: "/services",
    label: "SERVICES",
    sub: [
      { href: "/", label: "SERVICES" },
      { href: "/", label: "SERVICES1" },
      { href: "/", label: "SERVICES2" },
      { href: "/", label: "SERVICES3" },
      { href: "/", label: "SERVICES4" },
      { href: "/", label: "SERVICES5" },
    ],
  },
  {
    href: "/work",
    label: "WORK",
    sub: [
      { href: "/", label: "WORK" },
      { href: "/", label: "WORK1" },
      { href: "/", label: "WORK2" },
      { href: "/", label: "WORK3" },
      { href: "/", label: "WORK4" },
      { href: "/", label: "WORK5" },
    ],
  },
  {
    href: "/blog",
    label: "BLOG",
    sub: [
      { href: "/", label: "BLOG" },
      { href: "/", label: "BLOG1" },
      { href: "/", label: "BLOG2" },
      { href: "/", label: "BLOG3" },
      { href: "/", label: "BLOG4" },
      { href: "/", label: "BLOG5" },
    ],
  },
  {
    href: "/contact",
    label: "CONTACT",
    sub: [
      { href: "/", label: "CONTACT" },
      { href: "/", label: "CONTACT1" },
      { href: "/", label: "CONTACT2" },
      { href: "/", label: "CONTACT3" },
      { href: "/", label: "CONTACT4" },
      { href: "/", label: "CONTACT5" },
    ],
  },
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
        viewport={{ once: true }}
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
            <div className="xl:flex hidden items-center space-x-10">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </div>
            <div className="flex items-center">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button>
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
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto">
                  <Input className="m-0 p-0" type="text" placeholder="Search" />
                </HoverCardContent>
              </HoverCard>
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
