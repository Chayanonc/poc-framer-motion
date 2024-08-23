"use client";

import { floor } from "@/constants/floor";
import MainFloor from "./components/main-floor";
import Building from "./components/building";
import { useFloorStore } from "@/store/useFloor.store";
import FloorLogo from "./components/floor-logo";

export default function PlansView() {
  const type = useFloorStore((state) => state.planType);
  return (
    <div className="flex justify-center h-full items-center relative">
      <div className="flex justify-center h-full items-center">
        <FloorLogo />
        <MainFloor />
        <Building />
      </div>
    </div>
  );
}
