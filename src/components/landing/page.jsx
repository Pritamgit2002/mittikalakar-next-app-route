"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import "./landing.module.css";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

const LandingPage = () => {
  const heroInfiniteRef = useRef(null);
  useEffect(() => {
    const titles = document.querySelectorAll(".h_title");
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll("span span");
      const delay = index * 0.8;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: "cubic-text",
        },
        delay
      );
    });
    tl.to(
      heroInfiniteRef?.current,
      {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: "power1.out",
      },
      1.2
    );

    return () => {};
  }, []);
  return (
    <div className=" flex min-h-screen items-center pt-[20px] pb-[90px] tracking-widest text-white Playfair-Display">
      <div className="h_container flex flex-col items-center px-2 pb-[20vw] lg:pb-[4vw]">
        <h1 className="h_title  relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw]">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom py-3">
            <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Shaping&nbsp;
            </span>
          </span>
          <span className="align- -mb-1.5 -mt-6 inline-block overflow-hidden font-medium text-purple py-3">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Artistry&nbsp;
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom py-3">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              &nbsp;One
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom py-3">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              &nbsp;Clay&nbsp;
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom leading-[90%] lg:text-[8.7vw] py-3">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 leading-[81%] text-green will-change-transform">
              at a&nbsp;
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block flex-col justify-center overflow-hidden align-bottom py-3">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Time&nbsp;
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
