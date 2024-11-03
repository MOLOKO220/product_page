"use client";
import React, { useState } from "react";
import { Tabs, Button } from "@radix-ui/themes";

interface ImageGalleryProps {
  images: string;
}

const ImageDisplay: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const img = JSON.parse(images);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + img.length) % img.length);
  };

  const mainImage = img[currentIndex];

  return (
    <div className="ImageDisplay">
      <Tabs.Root orientation="vertical" className="ImageDisplay__btns">
        <Tabs.List>
          {img.map((image, index) => (
            <Tabs.Trigger
              key={index}
              value={`tab-${index}`}
              onMouseEnter={() => setCurrentIndex(index)}
            >
              <img
                src={`/imgs/product/${image}`}
                alt={`Thumbnail ${index + 1}`}
              />
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>

      <div className="ImageDisplay__main-image">
        <img src={`/imgs/product/${mainImage}`} alt="Main view" />
        <Button onClick={prevImage} disabled={img.length <= 1}>
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
              d="M15.525 18.966L8.558 12l6.967-6.967"
            ></path>
          </svg>
        </Button>
        <Button onClick={nextImage} disabled={img.length <= 1}>
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
              d="M8.474 18.966L15.44 12 8.474 5.033"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};
export default ImageDisplay;
