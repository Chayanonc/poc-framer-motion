import PageTransitionEffect from "@/app/PageTransactionEffect";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IProps) {
  return (
    <div className="">
      {/* <Nav /> */}
      <PageTransitionEffect>
        <div className="">{children}</div>
      </PageTransitionEffect>
      <Footer />
    </div>
  );
}
