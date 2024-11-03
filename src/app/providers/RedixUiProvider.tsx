"use client";

// Radix UI
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
// Redux
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type AccentColor =
  | "amber"
  | "blue"
  | "gray"
  | "gold"
  | "brown"
  | "yellow"
  | "orange"
  | "red"
  | "purple"
  | "violet"
  | "green";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get color from Redux
  const { currentStyle, backgroundClass2 } = useSelector(
    (state: RootState) => state.style
  );

  // Check that accentColor to be valid
  const validAccentColor: AccentColor = [
    "amber",
    "blue",
    "gray",
    "gold",
    "brown",
    "yellow",
    "orange",
    "red",
    "purple",
    "violet",
    "green",
  ].includes(currentStyle)
    ? (currentStyle as AccentColor)
    : "amber"; // default color

  return (
    <Theme
      accentColor={validAccentColor}
      className={backgroundClass2}
      grayColor="mauve"
      radius="large"
      scaling="95%"
    >
      {children}
    </Theme>
  );
}
