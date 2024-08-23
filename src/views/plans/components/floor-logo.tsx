"use client";

import { useFloorStore } from "@/store/useFloor.store";

export default function FloorLogo() {
  const floor = useFloorStore((state) => state.floor);

  return (
    <div className="absolute flex items-center justify-center top-0 left-0 px-4">
      <div className="text-center align-middle h-full w-full">
        <p className="text-[80px] font-semibold">{floor.floor}</p>
        <p className=" font-semibold">{floor.floor} Floor</p>
      </div>
    </div>
  );
}
