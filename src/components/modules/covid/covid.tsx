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

interface Props {}

export const COVID_PAGE_ROUTE = "/covid";
export default function Covid(props: Props) {
  const { loading, news } = useGetEverythingNews({
    query: "covid-19",
    lastMonth: true,
    language: StateType.en,
  });

  return (
    <Container>
      <div className={styles.container()}>
        <div style={{ width: "100%", marginBottom: 20 }}>
          <Title title="Covid-19 News" />
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            flex: 1,
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
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
};
