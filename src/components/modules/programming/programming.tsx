import * as React from "react";
import {
  useGetNews,
  StateType,
  useGetEverythingNews,
} from "../../../api-hooks/news/news.query";
import { css } from "../../../styles/style";
import { Card, CardLoading } from "../../elements/card";
import CardList from "../../elements/card-list";
import Container from "../../elements/container";
import Title from "../../elements/title";

interface Props {}

export const PROGRAMMING_PAGE_ROUTE = "/programming";
export default function Programming(props: Props) {
  const { loading, news } = useGetEverythingNews({
    query: "programming",
    lastMonth: true,
    language: StateType.en,
  });

  return (
    <Container>
      <div className={styles.container()}>
        <div className={styles.titleStyle()}>
          <Title title="Programming News" />
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
