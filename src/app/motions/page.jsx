import Image from "next/image";
import React from "react";

const page = () => {
  return (

    <div>
          <div className="">
            <div className="text-[40px] font-semibold flex justify-center font-dancing-script ">
              Category
            </div>
            <p className="flex justify-center font-semibold text-gray-500 mt-2">
              Find What You Are Looking For
            </p>
          </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-4 md:grid-rows-2 md:gap-[26px] my-20 mx-4 md:mx-56  gap-8  ">
      

      <div className="relative flex tracking-[-.025em] hover:tracking-[.75em] transition-all ease-out container  duration-300  overflow-hidden bg-fixed opacity-100 hover:opacity-70 text-white  hover:text-black hover:text-opacity-100">
        <div>
          <Image
            src="https://images.pexels.com/photos/15211604/pexels-photo-15211604/free-photo-of-snail-climbing-novelty-flower-pot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            height={500}
            width={500}
            alt="htf"
            className="w-[405px] h-60 "
          />
        </div>
        <div className="absolute mx-5 my-20 font-dancing-script ">
          <div className="text-[26px] md:text-[34px] font-bold uppercase hover:text-black">
            Lorem
          </div>
          <div className="text-[26px] md:text-[33px] uppercase hover:text-black">
            ipsum
          </div>
        </div>
      </div>

      <div className="relative flex tracking-[-.025em] hover:tracking-[.75em] transition-all ease-out container  duration-300  overflow-hidden bg-fixed opacity-100 hover:opacity-70 text-white  hover:text-black hover:text-opacity-100">
        <div>
          <Image
            src="https://images.pexels.com/photos/15211604/pexels-photo-15211604/free-photo-of-snail-climbing-novelty-flower-pot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            height={500}
            width={500}
            alt="htf"
            className="w-[405px] h-60 "
          />
        </div>
        <div className="absolute mx-5 my-20 ">
          <div className="text-[26px] md:text-[34px] font-bold uppercase hover:text-black">
            Lorem
          </div>
          <div className="text-[26px] md:text-[33px] uppercase hover:text-black">
            ipsum
          </div>
        </div>
      </div>

      <div className="relative flex tracking-[-.025em] hover:tracking-[.75em] transition-all ease-out container  duration-300  overflow-hidden bg-fixed opacity-100 hover:opacity-70 text-white  hover:text-black hover:text-opacity-100">
        <div>
          <Image
            src="https://images.pexels.com/photos/15211604/pexels-photo-15211604/free-photo-of-snail-climbing-novelty-flower-pot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            height={500}
            width={500}
            alt="htf"
            className="w-[405px] h-60 "
          />
        </div>
        <div className="absolute mx-5 my-20 ">
          <div className="text-[26px] md:text-[34px] font-bold uppercase hover:text-black">
            Lorem
          </div>
          <div className="text-[26px] md:text-[33px] uppercase hover:text-black">
            ipsum
          </div>
        </div>
      </div>



      

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


    </div>
    </div>
  );
};

export default page;
