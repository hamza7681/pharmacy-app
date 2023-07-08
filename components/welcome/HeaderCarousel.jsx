"use client";

import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "@/public/assets/slider/pic1.jpg";
import pic2 from "@/public/assets/slider/pic2.jpg";
import Image from "next/image";

const HeaderCarousel = () => {
  const images = [pic1, pic2];
  return (
    <div className="w-full max-h-[350px] md:max-h-[550px] overflow-hidden">
      <Swiper spaceBetween={50} slidesPerView={1} style={{ zIndex: "-9999" }}>
        {images.map((val, index) => {
          return (
            <SwiperSlide>
              <Image key={index} src={val} alt="slider" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeaderCarousel;
