"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const menus = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "project concept",
      path: "/concept",
    },
    {
      title: "location",
      path: "/location",
    },
    {
      title: "project info",
      path: "/info",
    },
    {
      title: "gallery",
      path: "/gallery",
    },
    {
      title: "unit",
      path: "/unit",
    },
    {
      title: "plans",
      path: "/plans",
    },
    {
      title: "animation",
      path: "/animation",
    },
    {
      title: "virtual tours",
      path: "/virtual",
    },
    {
      title: "contact",
      path: "/contact",
    },
  ];

  return (
    <div className="h-[8vh] fixed bottom-0 w-full text-white">
      <div className="flex w-full gap-1 items-center justify-center h-full bg-[#382519] uppercase font-bold">
        {menus.map((item, key) => {
          return (
            <Link className="h-full  " key={key} href={item.path}>
              <div
                className={`${
                  item.path == pathname
                    ? "bg-red-400 flex items-center px-2 h-full text-center"
                    : " px-2 h-full text-center"
                }`}
                key={key}
              >
                {item.title}{" "}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
