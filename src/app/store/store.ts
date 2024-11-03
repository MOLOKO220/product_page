import { configureStore } from "@reduxjs/toolkit";
import styleReducer from "./styleSlice";

const store = configureStore({
  reducer: {
    style: styleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
