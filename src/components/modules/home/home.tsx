import * as React from "react";
import useGetNews from "../../../api-hooks/news/news.query";
import { StateType } from "../../../redux/reducers/newsSlice";
import { css } from "../../../styles/style";
import { Card, CardLoading } from "../../elements/card";
import CardList from "../../elements/card-list";
import Container from "../../elements/container";
import Title from "../../elements/title";

interface Props {}

export const HOME_PAGE_ROUTE = "/";
export default function Home(props: Props) {
  const { loading, news } = useGetNews({
    query: "",
    language: StateType.id,
    country: StateType.id,
  });

  return (
    <Container>
      <div className={styles.container()}>
        <div className={styles.titleStyle()}>
          <Title title="News" />
        </div>
        <CardList loading={loading} news={news} />
      </div>
    </Container>
  );
}
const styles = {
  container: css({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  }),
  titleStyle: css({
    width: "100%",
    marginBottom: 20,
  }),
};
