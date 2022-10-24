import { News } from "./news.model";
import * as React from "react";
export enum StateType {
  en = "en",
  id = "id",
}

interface Props {
  query?: string;
  language: StateType;
  lastMonth?: boolean;
  country?: StateType;
}

export const useGetNews = (props: Props) => {
  const apiKey = "a9225c8873af4994b674911be605fc3c";
  const {
    query = "",
    language,
    lastMonth = false,
    country = StateType.id,
  } = props;
  const [news, setNews] = React.useState<News>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const now = new Date();
  const nowDate = new Date().toISOString().slice(0, 10);
  const lastMonthDate = new Date(now.setMonth(now.getMonth() - 1))
    .toISOString()
    .slice(0, 10);

  const fetchQuery = lastMonth
    ? `
    https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}&language=${language}&sortBy=publishedAt&country=${country}
    &from=${lastMonthDate}&to=${nowDate}
    `
    : `
    https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}&language=${language}&sortBy=publishedAt&country=${country}
    `;

  React.useEffect(() => {
    if (!news) {
      setLoading(true);
      fetch(fetchQuery)
        .then((res) => {
          res.json().then((data) => setNews(data));
        })
        .finally(() => setLoading(false))
        .catch((err) => {
          console.log(err);
        });
    }
  }, [fetchQuery, news]);

  return { news, loading };
};