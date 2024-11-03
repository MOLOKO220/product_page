"use client";
import React, { useState } from "react";
import ImageDisplay from "../ImageDisplay/page";
import ProductInfo from "../ProductInfo/page";
// data
import products from "../../data/products";

export default function MainWrap() {
  const [currentProductIndex, setCurrentProductIndex] = useState<number>(0);
  const currentProduct = products[currentProductIndex];


  function switchProduct(index: number) {
    setCurrentProductIndex(index);
  }

  return (
    <main className="MainWrap container">
      <ImageDisplay images={currentProduct.imges} />
      <ProductInfo product={currentProduct} onSwitchProduct={switchProduct} />
    </main>
  );
}
