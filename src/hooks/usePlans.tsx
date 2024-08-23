"use client";

import { useFloorStore } from "@/store/useFloor.store";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function usePlans() {
  const plan = useFloorStore((state) => state.floor);

  const varients: Variants = {
    hidden: {
      x: 0,
      opacity: 0,
      scale: 1,
    },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        ease: "linear",
        duration: Math.floor(Math.random() * 8) * 0.5,
        delay: Math.floor(Math.random() * 5),
      },
    },
  };
  console.log(Math.floor(Math.random() * 8) * 0.5);

  const areas = [
    {
      fill: "rgba(0,0,0,0.4)",
      x: "439.5441595441595",
      y: "762.9230769230769",
      width: "178.95726495726495",
      height: "226.0512820512821",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "2671.80056980057",
      y: "1318.6324786324785",
      width: "320.23931623931594",
      height: "204.07407407407413",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "430.1253561253561",
      y: "1328.051282051282",
      width: "263.7264957264957",
      height: "144.42165242165242",
      className: "",
    },

    {
      fill: "rgba(0,0,0,0.4)",
      x: "715.8290598290598",
      y: "1321.7720797720797",
      width: "216.63247863247864",
      height: "150.70085470085473",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "951.2991452991453",
      y: "1328.051282051282",
      width: "219.7720797720799",
      height: "131.86324786324803",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "1205.6068376068376",
      y: "1324.9116809116808",
      width: "226.051282051282",
      height: "138.14245014245012",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "1444.2165242165242",
      y: "1315.4928774928776",
      width: "232.3304843304843",
      height: "147.56125356125335",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "1698.5242165242166",
      y: "1321.7720797720797",
      width: "222.91168091168083",
      height: "144.42165242165242",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "1946.5527065527065",
      y: "1321.7720797720797",
      width: "226.051282051282",
      height: "141.28205128205127",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "2185.162393162393",
      y: "1321.7720797720797",
      width: "238.60968660968683",
      height: "138.14245014245034",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "2426.911680911681",
      y: "1324.9116809116808",
      width: "238.60968660968683",
      height: "135.0028490028492",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "1180.4900284900284",
      y: "1095.7207977207977",
      width: "175.81766381766397",
      height: "160.1196581196582",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "1359.4472934472935",
      y: "1089.4415954415954",
      width: "166.39886039886028",
      height: "169.53846153846166",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "1528.985754985755",
      y: "1092.5811965811965",
      width: "169.53846153846166",
      height: "166.3988603988605",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "1701.6638176638176",
      y: "1086.3019943019942",
      width: "172.67806267806282",
      height: "169.53846153846166",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "1877.4814814814815",
      y: "1092.5811965811965",
      width: "172.6780626780626",
      height: "163.25925925925935",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "2050.159544159544",
      y: "1089.4415954415954",
      width: "175.81766381766374",
      height: "169.53846153846166",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "2225.977207977208",
      y: "1095.7207977207977",
      width: "169.5384615384619",
      height: "163.25925925925935",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "2508.5413105413104",
      y: "1095.7207977207977",
      width: "156.98005698005727",
      height: "166.3988603988605",
      className: "",
    },
    {
      fill: "rgba(0,0,0,0.4)",
      x: "2678.0797720797723",
      y: "1061.1851851851852",
      width: "313.96011396011363",
      height: "197.79487179487182",
      className: "",
    },
  ];

  const planFloor = () => {
    return (
      <div className="relative">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            className=""
            key={plan.floor}
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              ease: "linear",
              duration: 0.75,
              delay: 1,
            }}
            exit={{ opacity: 0, scale: 1.2, x: 10 }}
          >
            <svg
              className="w-[800px]"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 3306 2480"
            >
              <image href={plan.image} />
              {/* fill="rgba(0,0,0,0.4)"
                x="2225.977207977208"
                y="1095.7207977207977"
                width="169.5384615384619"
                height="163.25925925925935"
                className=""
                 */}
              {areas.map((item, key) => {
                return (
                  <motion.rect
                    key={key}
                    onClick={() => {
                      console.log(item);
                    }}
                    // variants={varients}
                    initial={{
                      x: 0,
                      opacity: 0,
                      scale: 1,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      ease: "linear",
                      duration: 0.2,
                      //   delay: Math.floor(Math.random() * 2),
                      delay: key / 5,
                    }}
                    {...item}
                  />
                );
              })}
            </svg>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  useEffect(() => {
    if (plan.floor) {
      planFloor();
    }
  }, [plan.floor]);

  return { planFloor };
}
