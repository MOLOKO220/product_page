import React, { useRef, useState } from "react";
import { Tabs } from "@radix-ui/themes";
import StyleSwitcher from "../StyleSwitcher/page";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function BergerMenu() {
  // redux
  const { backgroundClass, colorClass } = useSelector(
    (state: RootState) => state.style
  );

  // Toggle menu
  const [activeMenu, setActiveMenu] = useState(false);
  const [displayNone, setDisplayNone] = useState(false);
  const BergerMenuMainRef = useRef(null);
  const CLoseBtnRef = useRef(null);
  const CLoseBtnRef2 = useRef(null);

  function showMenu() {
    setDisplayNone(!displayNone);
    setTimeout(() => {
      setActiveMenu(!activeMenu);
    }, 100);
  }

  function closeMenu(event: React.MouseEvent) {
    event.stopPropagation();
    const closeTargets = [
      CLoseBtnRef.current,
      CLoseBtnRef2.current,
      BergerMenuMainRef.current,
    ];
    const target = event.target as HTMLElement; // Приведение типа

    if (closeTargets.some((ref) => ref === target)) {
      setActiveMenu((prev) => !prev);
      setTimeout(() => {
        setDisplayNone((prev) => !prev);
      }, 100);
    }
  }

  return (
    <div className="BergerMenu">
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        role="img"
        width="24px"
        height="24px"
        fill="none"
        className={`BergerMenu__btn ${colorClass}`}
        onClick={showMenu}
      >
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          d="M21 5.25H3M21 12H3m18 6.75H3"
        ></path>
      </svg>
      <main
        onClick={closeMenu}
        ref={BergerMenuMainRef}
        className={`BergerMenu__main ${
          activeMenu ? "BergerMenu--active" : ""
        } ${displayNone ? "" : "display__none"}`}
      >
        <nav className={backgroundClass}>
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none"
            className={`BergerMenu__main__close-btn ${colorClass}`}
            onClick={closeMenu}
            ref={CLoseBtnRef}
          >
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"
              onClick={closeMenu}
              ref={CLoseBtnRef2}
            ></path>
          </svg>
          <Tabs.Root defaultValue="New">
            <Tabs.List className="TabsList">
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
          <StyleSwitcher />
        </nav>
      </main>
    </div>
  );
}
