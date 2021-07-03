import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./favourite-slice";
const store = configureStore({
  reducer: {
    favourite: favouriteSlice.reducer,
  },
});

export default store;
