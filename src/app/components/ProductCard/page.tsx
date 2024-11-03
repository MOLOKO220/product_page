"use client";
import React from "react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Button } from "@radix-ui/themes";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface ProductProps {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  type: string;
}

export default function ProductCard({
  id,
  title,
  image,
  price,
  oldPrice,
  type,
}: ProductProps) {
  // redux
  const { colorClass } = useSelector((state: RootState) => state.style);

  return (
    <div className="ProductCard" key={id}>
      <AspectRatio ratio={1} className="ProductCard__image-wrapper">
        <img
          src={`/imgs/other/${image}`}
          alt={title}
          className="ProductCard__image"
        />
      </AspectRatio>
      <div className="ProductCard__info">
        <h3 className={colorClass}>{title}</h3>
        <p>{type}</p>
        <div className={colorClass}>
          {oldPrice && (
            <span className="ProductCard__old-price">${oldPrice}</span>
          )}
          <span className="ProductCard__price">${price}</span>
        </div>
        <Button className="ProductCard__button" variant="solid">
          Show product
        </Button>
      </div>
    </div>
  );
}
