"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import Image1 from "@/public/hero/app1.jpg";
import Image2 from "@/public/hero/web1.png";

const Hero = () => {
  return (
    <div className="relative">
      {/* Custom Buttons */}
      <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        <button className="custom-swiper-prev cursor-pointer hover:bg-black/80 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center">
          <IoIosArrowBack size={20} />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        <button className="custom-swiper-next cursor-pointer hover:bg-black/80 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center">
          <IoIosArrowForward size={20} />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full md:aspect-[7/2] aspect-[5/2]"
      >
        <SwiperSlide>
          <div className="w-full h-full relative">
            <Image
              src={Image1}
              alt="App Development"
              fill
              className="object-fill"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full relative">
            <Image
              src={Image2}
              alt="Web Development"
              fill
              className="object-fill"
              priority
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
