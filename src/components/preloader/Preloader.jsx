"use client"

import React, { useEffect } from "react";
import './preloader.css'
import { preLoaderAnim } from "@/animations";

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim()
    },[])

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Welcome</span>
        <span>to</span>
        <span>Mittikalakar</span>
      </div>
    </div>
  );
};

export default Preloader;