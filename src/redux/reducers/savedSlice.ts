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
    saveArticle: (state, action: PayloadAction<Article>) => {
      state.savedArticles.push(action.payload);
    },
    deleteArticle: (state, action: PayloadAction<Article>) => {
      const findArrayIndex = state.savedArticles.findIndex(
        (item) => item.url === action.payload.url
      );
      if (findArrayIndex > -1) {
        state.savedArticles.splice(findArrayIndex, 1);
      }
    },
  },
});

export const { saveArticle, deleteArticle } = savedSlice.actions;

export default savedSlice.reducer;
