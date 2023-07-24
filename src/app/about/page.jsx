import React from "react";
import { BsTelephoneForward } from "react-icons/bs";
import { BiPackage } from "react-icons/bi";
import { GiPaintedPottery } from "react-icons/gi";

const About = () => {
  return (
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
        <div className="rounded-lg md:flex font-semibold items-center justify-center gap-20">
          <div className="  h-80 w-72 m-10 rounded-3xl my-8 flex justify-center items-center flex-col hover:shadow-xl hover:shadow-[#C1DCDC]">
            <div className="bg-[#C1DCDC] rounded-full ">
              <GiPaintedPottery className="flex items-center h-24 w-24 p-2 " />
            </div>
            <div className="font-bold mt-4 text-center">Large Assortment</div>
            <div className="text-gray-500 flex justify-center text-center	mt-3">
              we offer many different types of products with lot of variation in
              each category.
            </div>
          </div>

          <div className="  h-80 w-72 m-10 rounded-3xl my-8 flex justify-center items-center flex-col hover:shadow-xl hover:shadow-[#C1DCDC]">
            <div className="bg-[#C1DCDC] rounded-full ">
              <BiPackage className="flex items-center h-24 w-24 p-2" />
            </div>
            <div className="font-bold mt-4 text-center">
              Fast & Free Shiping
            </div>
            <div className="text-gray-500 flex justify-center text-center	mt-3 p-1">
              4-day or less delivery time, free shiping and an expedited
              delivery option.
            </div>
          </div>

          <div className="  h-80 w-72 m-10 rounded-3xl my-8 flex justify-center items-center flex-col hover:shadow-xl hover:shadow-[#C1DCDC]">
            <div className="bg-[#C1DCDC] rounded-full ">
              <BsTelephoneForward className="flex items-center h-24 w-24 p-4" />
            </div>
            <div className="font-bold mt-4 text-center">
              Fast & Free Shiping
            </div>
            <div className="text-gray-500 flex justify-center text-center	mt-3 p-1">
              answer to any bussiness related inquiry 24/7 and in real-time.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
