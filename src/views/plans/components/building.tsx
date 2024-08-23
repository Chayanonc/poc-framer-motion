"use client";

import { motion } from "framer-motion";

export default function Building() {
  return (
    <div>
      <motion.img
        width={0}
        height={0}
        sizes="500px"
        className="w-[500px]"
        src="https://space.3dojmedia.com/escent-rayong2/plans/floors/tower.png"
      ></motion.img>
    </div>
  );
}
