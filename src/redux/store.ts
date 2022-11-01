import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import savedReducer, { SavedState } from "../redux/reducers/savedSlice";
import newsReducer, { NewsState } from "../redux/reducers/newsSlice";

export interface ListReducers {
  saved: SavedState;
  news: NewsState;
}

export const store = configureStore({
  reducer: {
    saved: savedReducer,
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
