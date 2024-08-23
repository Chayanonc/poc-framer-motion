"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { forwardRef } from "react";
import PageTransitionEffect from "./PageTransactionEffect";

export default function Home() {
  return (
    <PageTransitionEffect>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -200,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className="bg-[url('https://sereneproperty.com/2019/plusudon/images/bannerhero.png')] h-[92vh] bg-cover bg-center bg-no-repeat"></div>
        {/* <Image
          src="https://sereneproperty.com/2019/plusudon/images/bannerhero.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }} // optional
          alt=""
        /> */}
      </motion.div>
    </PageTransitionEffect>
  );
}

