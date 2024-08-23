"use client";

import { useFloorStore } from "@/store/useFloor.store";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function usePlans() {
  const plan = useFloorStore((state) => state.floor);

  const planFloor = () => {
    return (
      <div className="relative">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            className=""
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
          >
            <svg
              className="w-[800px]"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 3306 2480"
            >
              <image xlinkHref={plan.image} />
              <a href="#" target="_blank" title="">
                <motion.rect
                  initial={{
                    x: 0,
                    opacity: 0,
                    scale: 1,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    ease: "linear",
                    duration: 0.75,
                    delay: 2,
                  }}
                  x="439.5441595441595"
                  y="762.9230769230769"
                  width="178.95726495726495"
                  height="226.0512820512821"
                  fill="rgba(0,250,0,0.2)"
                  data-index="1"
                />
              </a>

              <a href="#" target="_blank" title="">
                <g>
                  <motion.rect
                    initial={{
                      x: 0,
                      opacity: 0,
                      scale: 1,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      ease: "linear",
                      duration: 0.75,
                      delay: 2,
                    }}
                    x="2671.80056980057"
                    y="1318.6324786324785"
                    width="320.23931623931594"
                    height="204.07407407407413"
                    fill="rgba(250,0,0,0.2)"
                    data-index="5"
                  />
                </g>
              </a>
            </svg>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  useEffect(() => {
    if (plan.floor) {
      planFloor();
    }
  }, [plan.floor]);

  return { planFloor };
}
