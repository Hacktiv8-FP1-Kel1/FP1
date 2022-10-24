import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../../api-hooks/news/news.model";

export interface SavedState {
  savedArticles: Article[];
}
const initialState: SavedState = {
  savedArticles: [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    save: (state, action: PayloadAction<Article>) => {
      state.savedArticles.push(action.payload);
    },
    delete: (state, action: PayloadAction<Article>) => {
      const findArrayIndex = state.savedArticles.findIndex(
        (item) => item.title === action.payload.title
      );
      if (findArrayIndex > -1) {
        state.savedArticles.splice(findArrayIndex, 1);
      }
    },
  },
});

export default savedSlice.reducer;
