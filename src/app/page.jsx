"use client";
import Image from "next/image";
import { FcRight } from "react-icons/fc";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import pic2 from "../public/pic2.jpg";
import React, { useEffect } from "react";
import { BsPlus,BsEyeFill } from "react-icons/bs";
import Motion from "./motions/page";
import About from "./about/page";

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
      <div className="mx-5 lg:mx-52 flex-col justify-center lg:mt-8">
        <div className="swiper-container">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3000,
            }}
            loop={true}
            className="cursor-pointer h-[450px] lg:h-[580px] rounded-[35px] bg-red-200 shadow-xl shadow-gray-400"
            pagination={{ clickable: true }}
          >
            <div className="flex items-center justify-center ">

              <SwiperSlide>
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1488977678660-dca8681ca872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    height={400}
                    width={800}
                    alt="htf"
                    className="w-full h-full shadow-xl shadow-gray-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-5xl font-bold">Timeless Treasures</h2>
                      <p className="text-lg mt-2">
                        Discover the Beauty of Handcrafted Pottery.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="relative h-full">
                  <Image
                    src="https://images.pexels.com/photos/4992831/pexels-photo-4992831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    height={400}
                    width={800}
                    alt="htf"
                    className="h-full w-full shadow-2xl shadow-gray-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-5xl font-bold">Elevate Every Dish</h2>
                      <p className="text-lg mt-2">
                        Unleash Elegance with Our Dining Pottery Collection.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1269&q=80"
                    height={400}
                    width={800}
                    alt="htf"
                    className="h-full w-full shadow-2xl shadow-gray-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-5xl font-bold">
                        Go Green, Spend Smart
                      </h2>
                      <p className="text-lg mt-2">
                        Embrace Earth-Friendly Pottery Delight.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src="https://images.unsplash.com/photo-1632819506620-cc0f984af43a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  height={400}
                  width={800}
                  alt="trfdtrd"
                  className="h-full w-full shadow-2xl shadow-gray-500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1628281321655-060c5fb662a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
                    height={400}
                    width={800}
                    alt="trfdtrd"
                    className="h-full w-full shadow-2xl shadow-gray-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-5xl font-bold">Crafted with Love</h2>
                      <p className="text-lg mt-2 text-green-200">
                        Own a Piece of Artistry with Our Handmade Pottery.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1481401908818-600b7a676c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    height={400}
                    width={800}
                    alt="trfdtrd"
                    className="h-full w-full shadow-2xl shadow-gray-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-5xl font-bold">
                        The Ceramic Beauty!
                      </h2>
                      <p className="text-lg mt-2 text-slate-200">
                        Embrace Elegance: Elevate Your Space with Exquisite
                        Ceramic Creations.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>

        {/* Best Selling */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 md:gap-x-12 mt-16">
          <div className=" bg-slate-000 md:w-72 rounded-3xl text-start flex-col mt-9">
            <div className="font-bold text-[30px] pb-2 text-[#1e1e1ed6]">
              Best Selling Products
            </div>

            <div className="text-[#1e1e1e80] font-semibold pb-6">
              Easiest way to convert you home by buying your favorite items
            </div>

            <button className="bg-blue-200 rounded-lg p-4 flex font-semibold items-center justify-between cursor-pointer">
              <Link href="/Product">
                <div>See More</div>
              </Link>
              <div>
                <FcRight />
              </div>
            </button>
          </div>

          <div className="my-8 ">
            <div>
              <div className="relative flex justify-center items-center container">
                <Image
                  src="https://images.pexels.com/photos/15211604/pexels-photo-15211604/free-photo-of-snail-climbing-novelty-flower-pot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  height={400}
                  width={400}
                  alt="htf"
                  className="w-full h-auto hover:shadow-xl hover:shadow-red-500 transform-gpu transition-opacity duration-400 ease-in backface-hidden "
                />
                <div className="absolute flex gap-5 transform h-full w-full opacity-0 transition-opacity duration-500 justify-center items-center hover:opacity-100  hover:bg-opacity-50 bg-black  hover:shadow-xl ">
                  <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500 shadow-xl shadow-red-500 rounded-xl">
                      <BsPlus className="text-3xl cursor-pointer" />
                  </div>
                  <div className="w-12 h-12 bg-gray-100 flex justify-center items-center text-primary shadow-xl shadow-gray-500 rounded-xl">
                      <BsEyeFill className="text-3xl cursor-pointer" />
                    {/* <Link href="/Product"/> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-3 flex justify-between items-center">
              <div>
                <div className="text-start text-[16px] font-medium font-poppins">
                  Snail Flower Pot
                </div>
                <div className="text-[14px] font-medium text-black text-opacity-60 text-start font-poppins">
                  ₹ 4545.00
                </div>
              </div>
              <button className="px-6 bg-slate-500 py-2 rounded text-white">
                BRO
              </button>
            </div>
          </div>


          <div className="my-8 ">
            <div>
              <div className="relative flex justify-center items-center container">
                <Image
                  src="https://images.pexels.com/photos/14782252/pexels-photo-14782252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  height={400}
                  width={400}
                  alt="htf"
                  className="w-full h-auto hover:shadow-xl hover:shadow-red-500 transform-gpu transition-opacity duration-400 ease-in backface-hidden "
                />
                <div className="absolute flex gap-5 transform h-full w-full opacity-0 transition-opacity duration-500 ease-in justify-center items-center hover:opacity-100  hover:bg-opacity-40 bg-black  hover:shadow-xl ">
                  <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500 shadow-xl shadow-red-500 rounded-xl">
                    <BsPlus className="text-3xl cursor-pointer" />
                  </div>
                  <div className="w-12 h-12 bg-gray-100 flex justify-center items-center text-primary shadow-xl shadow-gray-500 rounded-xl">
                    <BsEyeFill className="text-3xl cursor-pointer" />
                    {/* <Link href="/Product"/> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-3 flex justify-between items-center">
              <div>
                <div className="text-start text-[16px] font-medium font-poppins">
                  Snail Flower Pot
                </div>
                <div className="text-[14px] font-medium text-black text-opacity-60 text-start font-poppins">
                  ₹ 4545.00
                </div>
              </div>
              <button className="px-6 bg-slate-500 py-2 rounded text-white">
                BRO
              </button>
            </div>
          </div>
          
          <div className="my-8 cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1630543378528-10043e324452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              height={400}
              width={400}
              alt="htf"
              className="w-full h-auto hover:shadow-xl shadow-red-500 duration-300"
            />
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Ceramic Tea Set
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              ₹ 323.00
            </div>
          </div>
          <div className="my-8 hidden lg:block cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1602578585199-cfdb786ecf32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              height={400}
              width={400}
              alt="htf"
              className="w-full h-auto hover:shadow-xl shadow-red-500 duration-300"
            />
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Black Classy Tea Set
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              ₹ 1623.00
            </div>
          </div>
          <div className="hidden lg:block my-8 cursor-pointer">
            <Image
              src="https://images.pexels.com/photos/11098764/pexels-photo-11098764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={400}
              width={400}
              alt="htf"
              className="w-full h-auto hover:shadow-xl hover:shadow-grey-600 duration-300"
            />
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Glass Lamp
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              ₹ 3600.00
            </div>
          </div>
          <div className="hidden lg:block my-8 cursor-pointer">
            <Image
              src="https://images.pexels.com/photos/11098764/pexels-photo-11098764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={400}
              width={400}
              alt="htf"
              className="w-full h-auto hover:shadow-xl hover:shadow-grey-600 duration-300"
            />
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Glass Lamp
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              ₹ 3600.00
            </div>
          </div>
          <div className="hidden lg:block my-8 cursor-pointer">
            <Image
              src="https://images.pexels.com/photos/11098764/pexels-photo-11098764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={400}
              width={400}
              alt="htf"
              className="w-full h-auto hover:shadow-xl hover:shadow-grey-600 duration-300"
            />
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Glass Lamp
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              ₹ 3600.00
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <About />

        <div>
          <div className="">
            <div className="text-[40px] font-semibold flex justify-center">
              Category
            </div>
            <p className="flex justify-center font-semibold text-gray-500 mt-2">
              Find What You Are Looking For
            </p>
          </div>

          <div className=" my-14">
            {/* <div className="bg-blue-300 h-96"></div> */}
            <div className=" md:grid grid-rows-3 grid-flow-col gap-28 justify-center pb-5  ">
              <div className="row-end-3 row-span-2 flex  items-center justify-center pb-10 flex-col cursor-pointer">
                <Image
                  src="/pic4.jpg"
                  height={300}
                  width={300}
                  className="object-fill rounded-xl shadow-xl shadow-amber-600 "
                  alt="alt"
                />
                <div className="mt-5 font-bold text-xl">Rajasthani Design</div>
              </div>

              <div className="row-start-2 row-end-4 flex items-center justify-center pb-10 flex-col cursor-pointer">
                <Image
                  src="/pic2.jpg"
                  height={300}
                  width={300}
                  className="object-fill rounded-xl shadow-xl shadow-yellow-600"
                  alt="alt"
                />
                <div className="mt-5 font-bold text-xl">Ceramic Potery</div>
              </div>

              <div className="row-end-3 row-span-2 flex items-center justify-center pb-10 flex-col cursor-pointer">
                <Image
                  src="/pic3.jpg"
                  height={300}
                  width={300}
                  className="object-fill rounded-xl shadow-xl shadow-blue-600"
                  alt="alt"
                />
                <div className="mt-5 font-bold text-xl">Home accessories</div>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col pb-8">
              <div className="my-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
              <Link href="/product">
                <button className="bg-white rounded-xl p-4 px-6 flex font-semibold items-center justify-between gap-2 cursor-pointer border-2 border-blue-200 hover:bg-blue-200 transition-colors hover:shadow-2xl shadow-blue-900">
                  <div className="font-bold">Explore</div>
                  <div>
                    <FcRight className="text-black" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Motion />
    </>
  );
};

export default Main;
