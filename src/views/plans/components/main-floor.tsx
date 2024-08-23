"use client";
import usePlans from "@/hooks/usePlans";
import { useFloorStore } from "@/store/useFloor.store";
import { motion } from "framer-motion";

export default function MainFloor() {
  const floorState = useFloorStore((state) => state.floor);
  const { planFloor } = usePlans();

  return (
    // https://space.3dojmedia.com/escent-rayong2/plans/floors/15.png
    <div>
      {planFloor()}
      {/* <motion.img
        src={floorState.image}
        width={0}
        height={0}
        sizes="500px"
        className="w-[800px]"
      /> */}
    </div>
  );
}
