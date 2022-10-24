import * as React from "react";
import { useGetNews, StateType } from "../../../api-hooks/news/news.query";
import { css } from "../../../styles/style";
import Container from "../../elements/container";
import Title from "../../elements/title";

interface Props {}

export const HOME_PAGE_ROUTE = "/";
export default function Home(props: Props) {
  const { loading, news } = useGetNews({
    query: "indonesia",
    language: StateType.id,
  });

  return (
    <Container>
      <div className={styles.container()}>
        <div style={{ width: "100%", marginBottom: 20 }}>
          <Title title="News" />
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
          {news?.articles.map((item) => {
            return (
              <div className={styles.cardContainer()}>
                <div className={styles.sourceStyle()}>{item.source.name}</div>
              </div>
            );
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
