import { floor } from "@/constants/floor";
import { cn } from "@/utils/cn";
import {
  motion,
  useAnimate,
  useAnimationControls,
  usePresence,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Floor() {
  const [selectFloor, setSelectFloor] = useState(1);
  const [selectFloorImg, setSelectFloorImg] = useState(
    "https://space.3dojmedia.com/escent-rayong2/plans/floors/15.png"
  );

  const handleSelectFloor = (f: number, img: string) => {
    setSelectFloor(f);
    setSelectFloorImg(img);
  };

  return (
    <div className="mb-2">
      <motion.img
        initial={{
          x: 0,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          ease: "linear",
          duration: 1,
          delay: 0.4,
          repeat: 2,
        }}
        src={selectFloorImg}
        width={0}
        height={0}
        sizes="500px"
        className="w-[500px]"
      />

      <div className="flex  gap-2 justify-center w-full ">
        {floor.map((item, key) => {
          return (
            <motion.div
              className={cn(
                "rounded-full cursor-pointer h-[30px] w-[30px] justify-center items-center flex",
                selectFloor == item.number
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
