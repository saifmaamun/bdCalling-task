import { SubLink } from "@/types";
import { Link } from "react-router-dom";
// import { div } from "framer-motion/client";

// import { Link } from "react-router-dom";

const SubMenu = (section: SubLink) => {
  return (
    <div className="grid grid-cols-2 p-8 gap-8">
      <Link to={section.href}>{section.label}</Link>
    </div>
  );
};

export default SubMenu;
