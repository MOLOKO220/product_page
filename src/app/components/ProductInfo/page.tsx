"use client";
import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import { Button } from "@radix-ui/themes";

// data
import products from "@/app/data/products";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductButton from "../ProductButton/page";

interface Product {
  id: number;
  title: string;
  images: string[];
}

interface ProductInfoProps {
  product: Product;
  onSwitchProduct: (productId: number) => void;
}

export default function ProductInfo(props: ProductInfoProps) {
  // Redux
  const { colorClass, selectStyle } = useSelector(
    (state: RootState) => state.style
  );

  const [selectedOption, setSelectedOption] = useState("M6.5W7.5");

  return (
    <div className="ProductInfo">
      <h1 className={`ProductInfo__name ${colorClass}`}>
        {props.product.title}
      </h1>
      <h2>Shoes</h2>
      <p className={`ProductInfo__description ${colorClass}`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
        officia mollitia id, cupiditate fuga aspernatur nam ducimus!
        Accusantium, optio impedit?
      </p>
      <div className="ProductInfo__select-wrap">
        <h6 className={colorClass}>Select Size</h6>
        <Select value={selectedOption} onValueChange={setSelectedOption}>
          <SelectTrigger className="ProductInfo__select-trigger">
            {selectedOption}
          </SelectTrigger>
          <SelectContent
            className={`ProductInfo__select-content ${selectStyle}`}
          >
            <SelectItem value="M6.5W7.5">M 6 / W 7.5</SelectItem>
            <SelectItem value="M6.5W8">M 6.5 / W 8</SelectItem>
            <SelectItem value="M7.5W8">M 7 / W 8</SelectItem>
            <SelectItem value="M7.5W8.5">M 7 / W 8.5</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="ProductInfo__ProductButton-wrap">
        {products.map((data) => {
          return (
            <ProductButton
              key={data.id}
              image={data.images[0]}
              productId={data.id}
              onSelectProduct={props.onSwitchProduct}
            />
          );
        })}
      </div>
      <div className="ProductInfo__buttons">
        <Button className="ProductInfo__add-to-cart">Add to cart</Button>
        <Button
          className="ProductInfo__add-to-favorites"
          aria-label="Добавить в избранное"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}
