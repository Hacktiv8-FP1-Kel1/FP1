import * as React from "react";
import { News } from "../../api-hooks/news/news.model";
import { css } from "../../styles/style";
import { Card, CardLoading } from "./card";
interface Props {
  loading: boolean;
  news?: News;
}

export default function CardList(props: Props) {
  const { loading, news } = props;
  return (
    <div className={styles.cardContainer()}>
      {loading ? (
        <>
          <div className={styles.cardSpace()}>
            <CardLoading />
          </div>
          <div className={styles.cardSpace()}>
            <CardLoading />
          </div>
          <div className={styles.cardSpace()}>
            <CardLoading />
          </div>
        </>
      ) : (
        news?.articles.map((item, idx) => {
          return (
            <div className={styles.cardSpace()}>
              <Card data={item} key={idx} />
            </div>
          );
        })
      )}
    </div>
  );
}

const styles = {
  cardSpace: css({
    paddingLeft: 20,
    paddingRight: 20,
    width: "33%",
    marginBottom: 50,
  }),
  cardContainer: css({
    flexDirection: "row",
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    width: "100%",
  }),
};
