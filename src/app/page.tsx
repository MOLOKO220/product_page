import React from "react";
import Header from "./components/Header/page";
import MainWrap from "./components/MainWrap/page";
import ProductCarousel from "./components/ProductCarousel/page";
import Footer from "./components/Footer/page";
import ProductStory from "./components/ProductStory/page";

export default function page() {
  return (
    <>
      <Header />
      <MainWrap />
      <ProductStory />
      <ProductCarousel />
      <Footer />
    </>
  );
}
