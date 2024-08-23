"use client";
import Image from "next/image";
export default function InfoPage() {
  return (
    <div className="flex flex-col items-center py-8">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 3306 2480"
        className="min-w-[600px] max-w-[800px] h-auto"
      >
        <image className="w-full h-auto" xlinkHref="https://space.3dojmedia.com/escent-rayong2/plans/floors/12A.png" />
        <a href="/">
          <rect
            x="435"
            y="990"
            fill="#fff"
            opacity="0"
            width="236"
            height="273"
          />
        </a>
        <a href="/">
          <rect
            x="444"
            y="775"
            fill="#fff"
            opacity="0"
            width="180"
            height="213"
          />
        </a>
      </svg>
    </div>
  );
}
