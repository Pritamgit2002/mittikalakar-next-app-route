"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import Link from "next/link";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import Image from "next/image";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let fetchData = await axios.get("https://fakestoreapi.com/products");

      fetchData = fetchData.data;
      setProducts(fetchData);
      console.log(fetchData);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-4 md:grid-rows-2 md:gap-x-24 mt-16 relative" >
      {/* itemValue having all api data  */}
      {products.map((itemValue) => (
        <div className=" my-5 " key={itemValue.id}>
          <div className="border border-sky-500 bottom-[#e4e4e4] h-[300px] m-auto relative overflow-hidden group transition w-7/12  rounded-3xl hover:bg-gray-100/50">
            <div className="w-full h-full flex justify-center items-center">
              {/* image */}
              <div className="w-[200px] mx-auto flex justify-center items-center">
                <Image
                  className="max-h-[160px] group-hover:scale-110 transition duration-300"
                  src={itemValue.image}
                  alt="product"
                  width={130}
                  height={130}
                />
              </div>
            </div>
            {/* button */}

            <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-3 opacity-0 group-hover:opacity-100 transition-all ease-out duration-300">
              <button>
                <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500 shadow-xl shadow-red-500 rounded-xl">
                  <div>
                    <BsPlus className="text-3xl" />
                  </div>
                </div>
              </button>
              <Link
                href={`/product/${itemValue.id}`}
                className="w-12 h-12 bg-gray-200 flex justify-center items-center text-primary shadow-xl shadow-gray-500 rounded-xl"
              >
                <BsEyeFill />
              </Link>
            </div>
          </div>

          {/* category & title & price */}
          <div className=" m-auto relative overflow-hidden group transition w-7/12 px-4 py-3">
            <div className="text-sm capitalize text-gray-500 mb-1 text-start">
              {itemValue.category}
            </div>

            <Link href={`/Product/${itemValue.id}`}>
              <h2 className="font-semibold mb-1 text-start">
                {itemValue.title}
              </h2>
            </Link>
            <div className="font-semibold text-2xl text-start">
              ₹ {itemValue.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
