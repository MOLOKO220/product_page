import React from "react";

interface ProductButtonProps {
  image: string;
  productId: number;
  onSelectProduct: (id: number) => void;
}

export default function ProductButton({
  image,
  productId,
  onSelectProduct,
}: ProductButtonProps) {
  return (
    <button
      className="ProductButton"
      onClick={() => onSelectProduct(productId)}
      aria-label={`Select product ${productId}`}
    >
      <img src={`/imgs/product/${image}`} alt={`Product ${productId}`} />
    </button>
  );
}
