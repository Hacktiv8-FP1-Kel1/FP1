import { Article } from "../../api-hooks/news/news.model";
import { css } from "../../styles/style";

interface Props {
  data: Article;
}

export function Card(props: Props) {
  const { data } = props;
  return <></>;
}

const styles = {
  container: css({}),
};
