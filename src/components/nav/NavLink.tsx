import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link to={href} className="relative group">
      <span className="text-sm font-medium">{children}</span>
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
        whileHover={{ width: "100%" }}
      />
    </Link>
  );
}
