import { configureStore } from "@reduxjs/toolkit";
import savedReducer, { SavedState } from "../redux/reducers/savedSlice";

export interface ListReducers {
  saved: SavedState;
}

export const store = configureStore({
  reducer: {
    saved: savedReducer,
  },
});
