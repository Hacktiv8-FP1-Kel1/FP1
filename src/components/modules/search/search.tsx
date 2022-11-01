import useGetNews from "../../../api-hooks/news/news.query";
import { css } from "../../../styles/style";
import Container from "../../elements/container";
import Title from "../../elements/title";
import { useParams } from "react-router-dom";
import CardList from "../../elements/card-list";
import { StateType } from "../../../redux/reducers/newsSlice";

interface Props {}

export const SEARCH_PAGE_ROUTE = "/search/:q";
export default function Search(props: Props) {
  const { q } = useParams();
  const { loading, news } = useGetNews({
    query: "covid-19",
    lastMonth: true,
    language: StateType.en,
    everything: true,
  });
  return (
    <Container>
      <div className={styles.container()}>
        <div className={styles.titleStyle()}>
          <Title title={`${q} News`} />
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
