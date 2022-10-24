import { Article } from "../../api-hooks/news/news.model";
import { css } from "../../styles/style";

interface Props {
  data: Article;
}

export function Card(props: Props) {
  const { data } = props;
  return (
    <div className={styles.cardContainer()}>
      <div className={styles.sourceStyle()}>{data.source.name}</div>
    </div>
  );
}

const styles = {
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
