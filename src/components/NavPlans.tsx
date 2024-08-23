"use client";

import Floor from "@/views/plans/components/floor";
import PlansType from "@/views/plans/components/plans-type";
import { motion } from "framer-motion";

export default function FloorPlan() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 100,
      }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: "easeInOut",
      }}
      className="w-full absolute bottom-5 flex flex-col justify-center"
    >
      <Floor />
      {/* <PlansType /> */}
    </motion.div>
  );
}
