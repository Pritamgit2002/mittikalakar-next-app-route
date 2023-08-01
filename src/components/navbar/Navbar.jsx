"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

const navLinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Product",
    url: "/product",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
];
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative" style={{ zIndex: 10 }}>
      <div className="flex justify-between items-center mx-6 lg:mx-52 h-[100px]">
        <Link href="/" className="font-dancing-script text-[22px] text-white">
          Mittikalakar
        </Link>
        <div className="flex justify-between gap-[30px] md:gap-[50px] text-white">
          <div className="hidden md:flex items-center gap-[50px]">
            {navLinks.map((links) => (
              <Link key={links.id} href={links.url}>
                <div className="group overflow-hidden relative cursor-pointer text-normal uppercase  leading-6">
                  <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
                    {links.title}
                  </span>
                  <span className="absolute left-0 translate-y-[180%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                    {links.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-[26px]">
            <div className="group overflow-hidden relative cursor-pointer text-normal uppercase  leading-6 hover:border-b-4 border-black duration-150">
              <span className="inline-block p-1 pb-0 transition duration-500 ease-out group-hover:translate-x-[120%]">
                <LiaShoppingCartSolid size={35} />
              </span>
              <span className="absolute left-0 -translate-x-[180%]  p-1 pb-0 transition duration-500 ease-out group-hover:translate-x-0 group-hover:rotate-0">
                <LiaShoppingCartSolid size={35} className="text-blue-500" />
              </span>
            </div>
          </div>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden p-1">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[100%] h-screen bg-[#C1DCDC] p-10 ease-in duration-500 z-50"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link
                href="/"
                className="font-dancing-script text-[22px] "
                onClick={handleNav}
              >
                Mittikalakar
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-600 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Crafted with Passion, Celebrating Artistry
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            {navLinks.map((links) => (
              <Link
                key={links.id}
                href={links.url}
                className="py-8 text-[22px] font- flex"
                onClick={handleNav}
              >
                {links.title}
                <Image
                  src="/../public/doodle1.png"
                  width={30}
                  height={20}
                  alt="alt"
                />
              </Link>
            ))}
            <div className="pt-40">
              <p className="uppercase tracking-widest text-gray-600">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaFacebook />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineInstagram />
                  </div>
                </a>
                <Link href="/Contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="fixed left-0 top-0 w-full h-screen bg-yellow-500 text-black p-10">
        <div className="flex h-full flex-col">
          <div className="text-lg text-black font-dancing-script">Mittikalakar</div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
