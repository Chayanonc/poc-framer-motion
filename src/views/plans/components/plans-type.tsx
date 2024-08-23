"use client";
import { useFloorStore } from "@/store/useFloor.store";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PlansType() {
  const type = useFloorStore((state) => state.planType);
  const setPlanType = useFloorStore((state) => state.setPlanType);

  const planType = [
    {
      title: "floor plans",
      key: "floor",
    },
    {
      title: "unit plans",
      key: "unit",
    },
  ];

  return (
    <div className=" justify-center w-full flex items-center gap-4 font-semibold uppercase ">
      {planType.map((item, key) => {
        return (
          <div
            key={key}
            onClick={() => {
              setPlanType(item.key);
            }}
          >
            <motion.div
              className={cn("cursor-pointer", type == item.key ? "text-red-300" : "")}
            >
              {item.title}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
