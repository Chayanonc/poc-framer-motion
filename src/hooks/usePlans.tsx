"use client";

import { useFloorStore } from "@/store/useFloor.store";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export default function usePlans() {
  const plan = useFloorStore((state) => state.floor);

  const planFloor = () => {
    return (
      <div>
        <AnimatePresence initial={false} mode="popLayout">
          <motion.img
            key={plan.floor}
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              ease: "linear",
              duration: 0.75,
              delay: 1,
            }}
            exit={{ opacity: 0, scale: 1.2, x: 10 }}
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
