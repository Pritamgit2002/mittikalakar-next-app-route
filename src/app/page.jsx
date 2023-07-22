"use client";
import Image from "next/image";
import { FcRight } from "react-icons/fc";
import Link from "next/link";
import BsPlus from "react-icons/bs";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slide_1 from "../../public/assets/slide_1.jpg";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import pic2 from "../public/pic2.jpg";
import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import {BsTelephoneForward} from "react-icons/bs"
import {BiPackage} from "react-icons/bi"
import {GiPaintedPottery} from "react-icons/gi"

const DynamicIcon = dynamic(
  () => import("react-icons/bs").then((mod) => mod.BsPlus),
  {
    ssr: false,
  }
);

const Main = ({ nav }) => {
  // const [pro, setPro] = useState(false);
  // const handleNav = () => {
  //   setPro(!pro);
  // };
  console.log(nav);
  return (
    <div className="mx-5 lg:mx-52 flex-col justify-center lg:mt-8">
      <div className={nav ? "hidden" : ""}>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          className="cursor-pointer h-[450px] lg:h-[580px] rounded-[35px] bg-red-200 shadow-xl shadow-gray-400 "
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
                    <h2 className="text-5xl font-bold">Go Green, Spend Smart</h2>
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
                    <h2 className="text-5xl font-bold">The Ceramic Beauty!</h2>
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

      {/* <div className=" lg:flex md:flex-2 gap-14 justify-center">
          <div className=" bg-cyan-200 h-80 w-72 ml-10 rounded-3xl my-8"></div>
          <div className=" bg-green-200 h-80 w-72 ml-10 rounded-3xl my-8"></div>
          <div className=" bg-red-300 h-80 w-72 ml-10 rounded-3xl my-8"></div>
          <div className=" bg-blue-400 h-80 w-72 ml-10 rounded-3xl my-8"></div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-4 md:grid-rows-2 md:gap-x-24 mt-8">
        <div className=" bg-slate-000 md:w-72 rounded-3xl text-start flex-col mt-8 ">
          <div className="font-bold text-[30px] pb-2 text-[#1e1e1ed6] pt-28">
            Best Selling Products
          </div>

          <div className="text-[#1e1e1e80] font-semibold pb-6">
            Easiest way to convert you home by buying your favorite items
          </div>

          <Link href="/Product">
            <button
              className="bg-blue-200 rounded-lg p-4 flex font-semibold items-center justify-between cursor-pointer"
              href="/Product"
            >
              <div>See More</div>

              <div className="mx-2">
                <FcRight />
              </div>
            </button>
          </Link>
        </div>

        <div>
          <div className=" cursor-pointer  rounded-3xl my-8">
            <Image
              src="https://images.unsplash.com/photo-1607448885122-b3d4cf451587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              height={100}
              width={200}
              alt="htf"
              className="w-full h-auto rounded-xl shadow-xl shadow-green-200"
            />
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Ceramic Tea Set
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              $45.45
            </div>
          </div>
        </div>

        <div>
          <div className="cursor-pointer  rounded-3xl my-8">
            <Image
              src="https://images.unsplash.com/photo-1607448885122-b3d4cf451587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              height={100}
              width={200}
              alt="htf"
              className="w-full h-auto rounded-xl shadow-xl shadow-green-200"
            />
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Ceramic Tea Set
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              $45.45
            </div>
          </div>
        </div>

        <div>
          <div className="cursor-pointer  rounded-3xl my-8">
            <Image
              src="https://images.unsplash.com/photo-1607448885122-b3d4cf451587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              height={100}
              width={200}
              alt="htf"
              className="w-full h-auto rounded-xl shadow-xl shadow-green-200"
            />
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Ceramic Tea Set
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              $45.45
            </div>
          </div>
        </div>

        <div className="cursor-pointer hidden lg:block">
          <div className="  rounded-3xl my-8">
            <Image
              src="https://images.unsplash.com/photo-1607448885122-b3d4cf451587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              height={100}
              width={200}
              alt="htf"
              className="w-full h-auto rounded-xl shadow-xl shadow-green-200"
            />
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Ceramic Tea Set
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              $45.45
            </div>
          </div>
        </div>

        <div className="cursor-pointer hidden lg:block">
          <div className="  rounded-3xl my-8">
            <Image
              src="https://images.unsplash.com/photo-1607448885122-b3d4cf451587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              height={100}
              width={200}
              alt="htf"
              className="w-full h-auto rounded-xl shadow-xl shadow-green-200"
            />
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Ceramic Tea Set
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              $45.45
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="mt-5">
        <div className="text-[40px] font-semibold flex justify-center">
          Who Are We
        </div>
        <p className="flex justify-center font-semibold text-gray-500 mt-2">
          Order now and appricate thy beauty of nature.
        </p>
      </div>

      <div className="">
        <div className="bg-blue- rounded-lg p-4 md:flex  font-semibold items-center justify-center gap-20">
          <div className="  h-80 w-72 ml-10 rounded-3xl my-8 flex justify-center items-center flex-col hover:shadow-xl hover:shadow-[#C1DCDC]">
            <div className="bg-[#C1DCDC] rounded-full ">
              <GiPaintedPottery className="flex items-center h-24 w-24 p-2 "/>
            </div>
            <div className="font-bold mt-4 text-center">Large Assortment</div>
            <div className="text-gray-500 flex justify-center text-center	mt-3">
              we offer many different types of products with lot of variation in
              each category.
            </div>
          </div>

          <div className="  h-80 w-72 ml-10 rounded-3xl my-8 flex justify-center items-center flex-col hover:shadow-xl hover:shadow-[#C1DCDC]">
            <div className="bg-[#C1DCDC] rounded-full ">
              <BiPackage className="flex items-center h-24 w-24 p-2" />
            </div>
            <div className="font-bold mt-4 text-center">Fast & Free Shiping</div>
            <div className="text-gray-500 flex justify-center text-center	mt-3 p-1">
              4-day or less delivery time, free shiping and an expedited
              delivery option.
            </div>
          </div>

          <div className="  h-80 w-72 ml-10 rounded-3xl my-8 flex justify-center items-center flex-col hover:shadow-xl hover:shadow-[#C1DCDC]">
            <div className="bg-[#C1DCDC] rounded-full ">
              <BsTelephoneForward className="flex items-center h-24 w-24 p-4" />
            </div>
            <div className="font-bold mt-4 text-center">Fast & Free Shiping</div>
            <div className="text-gray-500 flex justify-center text-center	mt-3 p-1">
              answer to any bussiness related inquiry 24/7 and in real-time.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
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
  );
};

export default Main;
