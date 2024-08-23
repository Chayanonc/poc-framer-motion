"use client";

import { useFloorStore } from "@/store/useFloor.store";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export default function usePlans() {
  const plan = useFloorStore((state) => state.floor);

  const planFloor = () => {
    return (
      <div>
        <AnimatePresence initial={false}>
          <motion.img
            key={plan.image}
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              ease: "linear",
              duration: 0.8,
              delay: 1,
            }}
            // exit={{
            //   x: 0,
            //   opacity: 0.5,
            //   scale: 0,
            //   y: 0,
            // }}
            src={plan.image}
            width={0}
            height={0}
            sizes="500px"
            className="w-[800px]"
          />
        </AnimatePresence>
      </div>
    );
  };

  useEffect(() => {
    if (plan.floor) {
      planFloor();
      console.log(plan);
    }
  }, [plan.floor]);

  return { planFloor };
}
