"use client";
import React, { useState } from "react";
import ImageDisplay from "../ImageDisplay/page";
import ProductInfo from "../ProductInfo/page";
// data
import products from "../../data/products";

export default function MainWrap() {
  const [currentProductIndex, setCurrentProductIndex] = useState<number>(0);
  const currentProduct = products[currentProductIndex];

  const text1 = JSON.stringify(currentProduct.images);

  function switchProduct(index: number) {
    setCurrentProductIndex(index);
  }

  return (
    <main className="MainWrap container">
      <ImageDisplay images={'["1","2","3"]'} />
      <ProductInfo product={currentProduct} onSwitchProduct={switchProduct} />
    </main>
  );
}
