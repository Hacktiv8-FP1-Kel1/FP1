import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { News } from "../../api-hooks/news/news.model";

export enum StateType {
  en = "en",
  id = "id",
}

export interface NewsProps {
  query?: string;
  language: StateType;
  lastMonth?: boolean;
  country?: StateType;
  refetch?: boolean;
  everything?: boolean;
}

function fetchNews(props: NewsProps) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const {
    query = "",
    language,
    lastMonth = false,
    country = StateType.id,
    everything = false,
  } = props;
  const now = new Date();
  const nowDate = new Date().toISOString().slice(0, 10);
  const lastMonthDate = new Date(now.setMonth(now.getMonth() - 1))
    .toISOString()
    .slice(0, 10);

  let fetchQuery;

  if (everything) {
    fetchQuery = lastMonth
      ? `
    https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&language=${language}&sortBy=publishedAt
    &from=${lastMonthDate}&to=${nowDate}
    `
      : `
    https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&language=${language}&sortBy=publishedAt
    `;
  } else {
    fetchQuery = lastMonth
      ? `
    https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}&language=${language}&sortBy=publishedAt&country=${country}
    &from=${lastMonthDate}&to=${nowDate}
    `
      : `
    https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}&language=${language}&sortBy=publishedAt&country=${country}
    `;
  }

  return fetchQuery;
}

export const getNewsApi = createAsyncThunk("", async (props: NewsProps) => {
  try {
    const res = await fetch(fetchNews(props)).then((res) => {
      res.json().then((data) => data);
    });

    // return res;
  } catch (err) {
    return err;
  }
});

export interface NewsState {
  news?: News;
  loading: boolean;
  error: boolean;
}

const initialState: NewsState = {
  news: undefined,
  loading: false,
  error: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNewsApi.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(getNewsApi.fulfilled, (state, action) => {
      const data = action.payload as News;
      return { news: data, loading: false, error: false };
    });
    builder.addCase(getNewsApi.rejected, (state, action) => {
      return { ...state, loading: false, error: true };
    });
  },
});

export default newsSlice.reducer;
