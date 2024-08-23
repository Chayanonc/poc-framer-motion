"use client";
import { cn } from "@/utils/cn";
import { useState } from "react";

export default function PlansType() {
  const [planSelect, setPlanSelect] = useState("floor");

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
              setPlanSelect(item.key);
            }}
          >
            <div className={cn(planSelect == item.key ? "text-red-300" : "")}>
              {item.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}
