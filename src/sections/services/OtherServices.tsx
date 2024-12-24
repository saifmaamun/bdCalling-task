import { variant } from "@/utils/variants";
import { motion } from "framer-motion";

const OtherServices = () => {
  return (
    <div>
      <motion.p
        variants={variant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg font-medium pe-20"
      >
        + Logo Design
      </motion.p>
      <motion.p
        variants={variant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg font-medium pe-20"
      >
        + Advertisement
      </motion.p>
      <motion.p
        variants={variant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg font-medium pe-20"
      >
        + Promotion
      </motion.p>
    </div>
  );
};

export default OtherServices;
