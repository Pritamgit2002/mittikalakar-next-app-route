import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Carousel = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        className="cursor-pointer h-[450px] lg:h-[580px] rounded-md bg-red-200 shadow-xl shadow-gray-400"
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
                className="w-full h-full shadow-xl shadow-gray-500 object-cover"
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
                className="h-full w-full shadow-2xl shadow-gray-500 object-cover"
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
                className="h-full w-full shadow-2xl shadow-gray-500 object-cover"
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
              className="h-full w-full shadow-2xl shadow-gray-500 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full">
              <Image
                src="https://images.unsplash.com/photo-1628281321655-060c5fb662a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
                height={400}
                width={800}
                alt="trfdtrd"
                className="h-full w-full shadow-2xl shadow-gray-500 object-cover"
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
                className="h-full w-full shadow-2xl shadow-gray-500 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-5xl font-bold">The Ceramic Beauty!</h2>
                  <p className="text-lg mt-2 text-slate-200">
                    Embrace Elegance: Elevate Your Space with Exquisite Ceramic
                    Creations.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;