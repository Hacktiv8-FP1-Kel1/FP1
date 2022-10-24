import * as React from "react";
import {
  useGetNews,
  StateType,
  useGetEverythingNews,
} from "../../../api-hooks/news/news.query";
import { css } from "../../../styles/style";
import { Card } from "../../elements/card";
import Container from "../../elements/container";
import Title from "../../elements/title";
import { useParams } from "react-router-dom";

interface Props {}

export const SEARCH_PAGE_ROUTE = "/search/:q";
export default function Search(props: Props) {
  const { q } = useParams();
  const { loading, news } = useGetEverythingNews({
    query: q,
    lastMonth: true,
    language: StateType.en,
    refetch: true,
  });

  return (
    <Container>
      <div className={styles.container()}>
        <div style={{ width: "100%", marginBottom: 20 }}>
          <Title title={`${q} News`} />
        </div>
        <div className={styles.flexWrapCard()}>
          {news?.articles.map((item, idx) => {
            return <Card data={item} key={idx} />;
          })}
        </div>
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
  cardContainer: css({
    marginBottom: 20,
    padding: "12px 12px 12px 12px",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: 12,
  }),
  sourceStyle: css({
    display: "flex",
    flex: 1,
    justifyContent: "center",
    color: "$gray2",
  }),
  flexWrapCard: css({
    flexDirection: "row",
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-between",
  }),
};
