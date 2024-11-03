"use client";
import React from "react";
import { Flex, Tabs } from "@radix-ui/themes";
import CartAndFavourite from "../CartAndFavourite/page";
import StyleSwitcher from "../StyleSwitcher/page";
import BergerMenu from "../BergerMenu/page";
// redux
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Header() {
  // redux
  const { backgroundClass, colorClass, currentStyle } = useSelector(
    (state: RootState) => state.style
  );

  return (
    <header className={`Header ${backgroundClass}`}>
      <Flex className="container" justify={"between"}>
        {/* logo */}
        <svg
          aria-hidden="true"
          className={`header_logo ${colorClass}`}
          focusable="false"
          viewBox="0 0 24 24"
          role="img"
          width="54px"
          height="54px"
          fill="none"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
            clipRule="evenodd"
          ></path>
        </svg>
        <nav>
          <Tabs.Root
            defaultValue="New"
            style={
              currentStyle === "blue"
                ? { borderBottom: "1px solid rgb(148, 148, 148)" }
                : {}
            }
          >
            <Tabs.List style={{ display: "flex", gap: "2rem" }}>
              <Tabs.Trigger className={colorClass} value="New">
                New
              </Tabs.Trigger>
              <Tabs.Trigger className={colorClass} value="Men">
                Men
              </Tabs.Trigger>
              <Tabs.Trigger className={colorClass} value="Women">
                Women
              </Tabs.Trigger>
              <Tabs.Trigger className={colorClass} value="Kids">
                Kids
              </Tabs.Trigger>
              <Tabs.Trigger className={colorClass} value="Jordan">
                Jordan
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </nav>
        <div className="Header__btn-wrap">
          <StyleSwitcher />
          <CartAndFavourite />
          <BergerMenu />
        </div>
      </Flex>
    </header>
  );
}
