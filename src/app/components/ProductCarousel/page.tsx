"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import ProductCard from "../ProductCard/page";
// data
import otherProducts from "@/app/data/otherProducts";

export default function ProductCarousel() {
  return (
    <Swiper
      className="ProductCarousel container"
      spaceBetween={10}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 9000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay]}
      breakpoints={{
        800: {
          slidesPerView: 3,
        },
        600: {
          slidesPerView: 2,
        },
        300: {
          slidesPerView: 1,
        },
      }}
    >
      {otherProducts.map((product) => {
        return (
          <SwiperSlide key={product.id}>
            <ProductCard
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
              oldPrice={product.oldPrice}
              type={product.type}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
