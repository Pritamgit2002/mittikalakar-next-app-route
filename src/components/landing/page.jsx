"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import "./landing.module.css";
import { useScroll, useTransform } from "framer-motion";
import { Title, Header } from "./style.js";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");


const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.55], [0, -2000]);

  return (
    <div>
      <div className=" flex h-[715px] 	"></div>
      <Header>
        <div className="flex gap-x-[530px]">
          <Title style={{ x }} className=" ">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Shaping Dream On Wheel
          </Title>
          <Title style={{ x }} className=" ">
            &nbsp; &nbsp;Shaping Dream On Wheel
          </Title>
        </div>
      </Header>
    </div>
  );
};

export default LandingPage;
