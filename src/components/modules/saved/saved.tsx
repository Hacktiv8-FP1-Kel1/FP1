import { css } from "../../../styles/style";
import Container from "../../elements/container";
import Title from "../../elements/title";
import { useSelector } from "react-redux";
import CardList from "../../elements/card-list";
import { ListReducers } from "../../../redux/store";
import { Card } from "../../elements/card";
import EmptyView from "../../../assets/empty-view.jpeg";

interface Props {}

export const SAVED_PAGE_ROUTE = "/saved";
export default function Saved(props: Props) {
  const savedState = useSelector((state: ListReducers) => state.saved);
  return (
    <Container>
      <div className={styles.container()}>
        <div className={styles.titleStyle()}>
          <Title title={`Saved News`} />
        </div>
        {savedState.savedArticles.length > 0 ? (
          <div className={styles.cardContainer()}>
            {savedState?.savedArticles.map((item, idx) => {
              return (
                <div className={styles.cardSpace()}>
                  <Card data={item} key={idx} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyContainer()}>
            <img
              src={EmptyView}
              alt="empty"
              className={styles.emptyImageStyle()}
            />
            {"Empty Saved News Here, Go Save Some Article"}
          </div>
        )}
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
  emptyImageStyle: css({
    width: "60%",
    height: "100%",
    marginBottom: 20,
  }),
  emptyContainer: css({
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  }),
};
