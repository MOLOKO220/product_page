import { createSlice } from "@reduxjs/toolkit";

const styleSlice = createSlice({
  name: "style",
  initialState: {
    selectStyle: "amberSelect",
    backgroundClass: "amberThemeBackground",
    backgroundClass2: "amberThemeBackground2",
    colorClass: "amberThemeColor",
    accentClass: "amberBack",
    buttonClass: "amberButton",
    buttonClass2: "amberButton2",
    currentStyle: "amber",
  },
  reducers: {
    setStyle: (state, action) => {
      if (action.payload.length > 0) {
        const {
          selectStyle,
          backgroundClass,
          backgroundClass2,
          colorClass,
          accentClass,
          buttonClass,
          buttonClass2,
          currentStyle,
        } = JSON.parse(action.payload);
        state.selectStyle = selectStyle;
        state.backgroundClass = backgroundClass;
        state.backgroundClass2 = backgroundClass2;
        state.colorClass = colorClass;
        state.accentClass = accentClass;
        state.buttonClass = buttonClass;
        state.buttonClass2 = buttonClass2;
        state.currentStyle = currentStyle;
      }
    },
  },
});

export const { setStyle } = styleSlice.actions;
export default styleSlice.reducer;
