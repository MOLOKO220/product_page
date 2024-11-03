"use client";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as Tooltip from "@radix-ui/react-tooltip";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setStyle } from "../../store/styleSlice";
import { RootState } from "../../store/store";

function StyleSwitcher() {
  // Redux
  const dispatch = useDispatch();
  const { colorClass } = useSelector((state: RootState) => state.style);

  function handleStyleChange(value: string) {
    dispatch(setStyle(value)); // switching style
  }

  return (
    <ToggleGroup.Root
      className="StyleSwitcher"
      type="single"
      onValueChange={handleStyleChange}
      aria-label="Switching stylish page"
      style={{ display: "flex", gap: "1rem" }}
    >
      <Tooltip.Provider>
        {/* style button  1 */}
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <ToggleGroup.Item
              className="StyleSwitcher__amber"
              value={JSON.stringify({
                selectStyle: "amberSelect",
                backgroundClass: "amberThemeBackground",
                backgroundClass2: "amberThemeBackground2",
                colorClass: "amberThemeColor",
                accentClass: "amberBack",
                buttonClass: "amberButton",
                buttonClass2: "amberButton2",
                currentStyle: "amber",
              })}
              aria-label="Amber theme"
              style={{
                padding: "0.5rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            />
          </Tooltip.Trigger>
          <Tooltip.Content side="top" align="center" className={colorClass}>
            Amber theme
          </Tooltip.Content>
        </Tooltip.Root>

        {/* style button 2 */}
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <ToggleGroup.Item
              className="StyleSwitcher__dark"
              value={JSON.stringify({
                selectStyle: "darkBlueSelect",
                backgroundClass: "darkBlueThemeBackground",
                backgroundClass2: "darkBlueThemeBackground2",
                colorClass: "darkBlueThemeColor",
                accentClass: "darkBlueAccent",
                buttonClass: "darkBlueButton",
                buttonClass2: "darkBlueButton2",
                currentStyle: "blue",
              })}
              aria-label="Dark theme"
              style={{
                padding: "0.5rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            />
          </Tooltip.Trigger>
          <Tooltip.Content side="top" align="center" className={colorClass}>
            Dark theme
          </Tooltip.Content>
        </Tooltip.Root>

        {/* style button 3 */}
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <ToggleGroup.Item
              className="StyleSwitcher__red"
              value={JSON.stringify({
                selectStyle: "redAccentSelect",
                backgroundClass: "redAccentThemeBackground",
                backgroundClass2: "redAccentThemeBackground2",
                colorClass: "redAccentThemeColor",
                accentClass: "redAccent",
                buttonClass: "redAccentButton",
                buttonClass2: "redAccentButton2",
                currentStyle: "red",
              })}
              aria-label="Red theme"
              style={{
                padding: "0.5rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            />
          </Tooltip.Trigger>
          <Tooltip.Content side="top" align="center" className={colorClass}>
            Red theme
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    </ToggleGroup.Root>
  );
}

export default StyleSwitcher;
