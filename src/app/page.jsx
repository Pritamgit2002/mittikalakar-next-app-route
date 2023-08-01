"use client";
// import pic2 from "../public/pic2.jpg";
import React, { useEffect } from "react";
import Motion from "./motions/page";
import About from "./about/page";
import Carousel from "@/components/swiper/page";
import BestSelling from "@/components/bestSelling/page";
import Category from "@/components/categories/page";
import LandingPage from "@/components/landing/page";

// import Preloader from "@/components/preloader/Preloader";

const Main = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <div className="mx-5 lg:mx-52 flex-col justify-center lg:mt-8 relative">
        {/* <Carousel /> */}
        <LandingPage />
        <BestSelling />
        <About />
        <Category />
        <Motion />
      </div>
    </>
  );
};

export default Main;
