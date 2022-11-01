import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNewsApi, NewsProps } from "../../redux/reducers/newsSlice";
import { ListReducers, useAppDispatch } from "../../redux/store";

export default function useGetNews(props: NewsProps) {
  const { news, loading, error } = useSelector(
    (state: ListReducers) => state.news
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getNewsApi(props));
  }, [dispatch, props]);

  return { news, loading, error };
}
