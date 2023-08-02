import Image from "next/image";
import Link from "next/link";
import { FcRight } from "react-icons/fc";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const BestSelling = () => {
  return (
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

<<<<<<< HEAD

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
=======
      <div className="my-8 cursor-pointer">
        <Image
          src="https://images.unsplash.com/photo-1630543378528-10043e324452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          height={400}
          width={400}
          alt="htf"
          className="w-full h-auto hover:shadow-xl shadow-red-500 duration-300"
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
        <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
          Ceramic Tea Set
>>>>>>> 5c48fbc42ce6f5a5570fb703cc817cf952679cda
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
<<<<<<< HEAD


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
=======
      <div className="my-8 hidden lg:block cursor-pointer">
        <Image
          src="https://images.unsplash.com/photo-1602578585199-cfdb786ecf32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          height={400}
          width={400}
          alt="htf"
          className="w-full h-auto hover:shadow-xl shadow-red-500 duration-300"
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
        <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
          Black Classy Tea Set
>>>>>>> 5c48fbc42ce6f5a5570fb703cc817cf952679cda
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
<<<<<<< HEAD


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
=======
      <div className="hidden lg:block my-8 cursor-pointer">
        <Image
          src="https://images.pexels.com/photos/11098764/pexels-photo-11098764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height={400}
          width={400}
          alt="htf"
          className="w-full h-auto hover:shadow-xl hover:shadow-grey-600 duration-300"
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
        <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
          Glass Lamp
>>>>>>> 5c48fbc42ce6f5a5570fb703cc817cf952679cda
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
<<<<<<< HEAD


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
=======
      <div className="hidden lg:block my-8 cursor-pointer">
        <Image
          src="https://images.pexels.com/photos/11098764/pexels-photo-11098764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height={400}
          width={400}
          alt="htf"
          className="w-full h-auto hover:shadow-xl hover:shadow-grey-600 duration-300"
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
        <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
          Glass Lamp
>>>>>>> 5c48fbc42ce6f5a5570fb703cc817cf952679cda
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
      </div><div className="my-8 ">
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

      
    </div>
  );
};

export default BestSelling;