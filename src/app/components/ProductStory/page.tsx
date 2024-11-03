"use client";
import React from "react";
// redux
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function ProductStory() {
  // redux
  const { colorClass } = useSelector((state: RootState) => state.style);
  return (
    <div className="Product-story container">
      <section className={`Product-story__section ${colorClass}`}>
        <img
          src="/imgs/ProductStory/ProductStory1.jfif"
          alt="Nike C1TY Shoes"
          className="Product-story__image"
        />
        <h6 className="Product-story__h6">NOTHING BEATS THE C1TY</h6>
        <p className="Product-story__text">
          We’re bringing sport innovation to the streets with Nike C1TY—built to
          handle anything and everything the city throws your way.
        </p>
      </section>

      <section className={`Product-story__section ${colorClass}`}>
        <img
          src="/imgs/ProductStory/ProductStory2.jfif"
          alt="Nike C1TY Shoes"
          className="Product-story__image"
        />
        <h6 className="Product-story__h6">Cool Under Pressure</h6>
        <p className="Product-story__text">
          Breathable mesh up top allows air flow on hot days, while the tough
          suede and reinforced rubber outsole provide extra durability.
        </p>
      </section>

      <section className={`Product-story__section ${colorClass}`}>
        <img
          src="/imgs/ProductStory/ProductStory3.jfif"
          alt="Nike C1TY Shoes"
          className="Product-story__image"
        />
        <h6 className="Product-story__h6">Comfort for Miles</h6>
        <p className="Product-story__text">
          Soft foam underfoot and a thick sockliner give you all-around support
          for long stretches on your feet.
        </p>
      </section>

      <section className={`Product-story__section ${colorClass}`}>
        <img
          src="/imgs/ProductStory/ProductStory4.jfif"
          alt="Nike C1TY Shoes"
          className="Product-story__image"
        />
        <h6 className="Product-story__h6">All Grip, Less Slip</h6>
        <p className="Product-story__text">
          A newly designed waffle tread provides extra grip for all city
          surfaces, with a dual stiffness rubber outsole that helps you navigate
          tricky terrain with ease.
        </p>

        <svg
          version="1.0"
          viewBox="0 0 300.000000 145.000000"
          preserveAspectRatio="xMidYMid meet"
          className={`Product-story__image--logo ${colorClass}`}
          fill="currentColor"
        >
          <g
            transform="translate(0.000000,145.000000) scale(0.050000,-0.050000)"
            stroke="none"
          >
            <path d="M2687 1811 c-305 -95 -373 -539 -104 -676 305 -155 853 -4 771 212 -19 49 -309 16 -322 -36 -45 -181 -292 -67 -292 134 0 216 234 348 273 154 l12 -59 160 0 160 0 -11 85 c-24 180 -359 277 -647 186z" />
            <path d="M3420 1730 c0 -83 4 -90 51 -90 l52 0 -5 -275 -4 -275 153 -6 153 -6 0 371 0 371 -200 0 -200 0 0 -90z" />
            <path d="M3900 1730 l0 -90 120 0 120 0 0 -281 0 -281 155 6 155 6 -7 275 -8 275 129 0 129 0 113 -166 c106 -153 114 -173 114 -280 l0 -114 162 0 163 0 -9 112 -10 113 177 248 c97 137 177 253 177 258 0 5 -72 9 -160 9 l-160 0 -75 -150 c-90 -183 -80 -183 -162 0 l-68 150 -527 0 -528 0 0 -90z" />
            <path d="M2210 1760 c-523 -154 -1321 -360 -1399 -360 -173 0 -231 116 -151 300 l40 90 -80 -88 c-339 -371 -200 -699 230 -545 175 63 1459 605 1479 625 10 10 15 17 10 16 -5 -2 -63 -18 -129 -38z" />
          </g>
        </svg>
      </section>
    </div>
  );
}
