import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favorites";
const store = configureStore({
  reducer: {
    favorite: favoriteSlice,
  },
});
export default store;
