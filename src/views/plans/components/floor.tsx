"use client";

import { floor } from "@/constants/floor";
import { useFloorStore } from "@/store/useFloor.store";
import { cn } from "@/utils/cn";
import {
  motion,
  useAnimate,
  useAnimationControls,
  usePresence,
  Variants,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Floor() {
  const setFloor = useFloorStore((state) => state.setFloor);
  const floorState = useFloorStore((state) => state.floor);

  const handleSelectFloor = (f: number, img: string) => {
    setFloor({
      floor: f,
      image: img,
    });
  };

  const varients: Variants = {
    hidden: {
      x: 0,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 5,
        delay: 0.4,
      },
    },
  };

  return (
    <div className="mb-2">
      <div className="flex  gap-2 justify-center w-full ">
        {floor.map((item, key) => {
          return (
            <motion.div
              // variants={varients}
              initial={{
                x: 0,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  ease: "linear",
                  // duration: key * 0.5,
                  delay: 0.2 * key,
                },
              }}
              className={cn(
                "rounded-full cursor-pointer h-[30px] w-[35px] justify-center items-center flex",
                floorState.floor == item.number
                  ? "bg-black text-white"
                  : "text-black"
              )}
              onClick={() => {
                handleSelectFloor(item.number, item.image);
              }}
              key={key}
            >
              {item.number}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
