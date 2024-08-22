"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Concept() {
  return (
    <div>
      <div>
        <Image
          src="https://space.3dojmedia.com/escent-rayong2/images/BIRD_EYE_VIEW_FINAL.jpg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          alt=""
        />
      </div>
      {/* <motion.div
        // initial={{ opacity: 0, y: -100 }}
        // animate={{
        //   opacity: 1,
        //   y: 0,
        // }}
        // exit={{
        //   opacity: 0,
        //   y: 100,
        // }}
        // transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Image
          src="https://space.3dojmedia.com/escent-rayong2/images/BIRD_EYE_VIEW_FINAL.jpg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          alt=""
        />
      </motion.div> */}
    </div>
  );
}
