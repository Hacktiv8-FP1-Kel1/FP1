import * as React from "react";
import { useSelector } from "react-redux";
import { getNewsApi, NewsProps } from "../../redux/reducers/newsSlice";
import { ListReducers, useAppDispatch } from "../../redux/store";

export default function useGetNews(props: NewsProps) {
  const { news, loading } = useSelector((state: ListReducers) => state.news);
  const dispatch = useAppDispatch();
  const { query, everything, language, lastMonth, country } = props;

  React.useEffect(() => {
    dispatch(getNewsApi({ query, everything, language, lastMonth, country }));
  }, [country, dispatch, everything, language, lastMonth, query]);

  return { news, loading };
}
