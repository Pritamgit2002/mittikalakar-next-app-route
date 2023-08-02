import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FcRight } from "react-icons/fc";
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";
import Shake from "react-reveal/Shake";

const page = () => {
  return (
    <div>
      <div className="">
        <div className="text-[40px] font-semibold flex justify-center font-dancing-script ">
          <Tada>Category</Tada>
        </div>
        <p className="flex justify-center font-semibold text-gray-500 mt-2">
          Find What You Are Looking For
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-4 md:grid-rows-2 gap-5">

        <Fade top>
          <div class="relative overflow-hidden inline-block group rounded-xl ">
            <Image
              src="https://images.pexels.com/photos/5975980/pexels-photo-5975980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={500}
              alt="Image"
              class="w-full h-auto"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-70 ">
              <span class="text-white text-[30px] font-semibold  transform -translate-x-full transition-transform duration-800 tracking-wider  group-hover:translate-x-0 uppercase">
                Your White Text
              </span>
            </div>
          </div>
        </Fade>


        <Fade top>
          <div class="relative overflow-hidden inline-block group rounded-xl ">
            <Image
              src="https://images.pexels.com/photos/5975980/pexels-photo-5975980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={500}
              alt="Image"
              class="w-full h-auto"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-70 ">
              <span class="text-white text-[30px] font-semibold  transform -translate-x-full transition-transform duration-800 tracking-wider  group-hover:translate-x-0 uppercase">
                Your White Text
              </span>
            </div>
          </div>
        </Fade>

        <Fade top>
          <div class="relative overflow-hidden inline-block group rounded-xl ">
            <Image
              src="https://images.pexels.com/photos/5975980/pexels-photo-5975980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={500}
              alt="Image"
              class="w-full h-auto"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-70 ">
              <span class="text-white text-[30px] font-semibold  transform -translate-x-full transition-transform duration-800 tracking-wider  group-hover:translate-x-0 uppercase">
                Your White Text
              </span>
            </div>
          </div>
        </Fade>

        
        <Fade top>
          <div class="relative overflow-hidden inline-block group rounded-xl">
            <Image
              src="https://images.pexels.com/photos/5975980/pexels-photo-5975980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={500}
              alt="Image"
              class="w-full h-auto"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-70">
              <span class="text-white text-[30px] font-semibold  transform -translate-x-full transition-transform duration-800 tracking-wider  group-hover:translate-x-0 uppercase">
                Your White Text
              </span>
            </div>
          </div>
        </Fade>
        <Fade top>
          <div class="relative overflow-hidden inline-block group rounded-xl ">
            <Image
              src="https://images.pexels.com/photos/5975980/pexels-photo-5975980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={500}
              alt="Image"
              class="w-full h-auto"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-70 ">
              <span class="text-white text-[30px] font-semibold  transform -translate-x-full transition-transform duration-800 tracking-wider  group-hover:translate-x-0 uppercase">
                Your White Text
              </span>
            </div>
          </div>
        </Fade>
{/* 
        <Fade top>
          <div class="relative overflow-hidden inline-block group rounded-xl">
            <Image
              src="https://images.pexels.com/photos/5975980/pexels-photo-5975980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={500}
              alt="Image"
              class="w-full h-auto"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-70">
              <span class="text-white text-[30px] font-semibold  transform -translate-x-full transition-transform duration-800 tracking-wider  group-hover:translate-x-0 uppercase">
                Your White Text
              </span>
            </div>
          </div>
        </Fade>
  */}

        <Fade top>
          <div class="relative overflow-hidden inline-block group rounded-xl">
            <Image
              src="https://images.pexels.com/photos/5975980/pexels-photo-5975980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={500}
              alt="Image"
              class="w-full h-auto"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-70">
              <span class="text-white text-[30px] font-semibold  transform -translate-x-full transition-transform duration-800 tracking-wider  group-hover:translate-x-0 uppercase">
                Your White Text
              </span>
            </div>
          </div>
        </Fade>
      </div>

      
      <div className="flex items-center justify-center flex-col pb-8">
        <div className="my-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <Shake>
          <Link href="/product">
            <button className=" rounded-xl p-4 px-6 flex font-semibold items-center justify-between gap-2 cursor-pointer border-2 border-blue-400 bg-blue-300 hover:bg-blue-200 transition-colors hover:shadow-2xl hover:shadow-blue-900">
              <div className="font-bold">Explore</div>
              <div>
                <FcRight className="text-black" />
              </div>
            </button>
          </Link>
        </Shake>
      </div>
    </div>
  );
};

export default page;
