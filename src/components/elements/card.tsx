import { Article } from "../../api-hooks/news/news.model";
import { css, theme } from "../../styles/style";
import { BsFillPersonFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import Button from "./button";
import { ListReducers } from "../../redux/store";
import placeholderImage from "../../assets/placeholder-image.jpeg";
import * as React from "react";
import { deleteArticle, saveArticle } from "../../redux/reducers/savedSlice";
import { toast } from "react-toastify";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

interface Props {
  data: Article;
}
export function CardLoading() {
  return (
    <div className={styles.cardLoadingContainer()}>
      <div className={styles.imageStyleLoading()} />
    </div>
  );
}
export function Card(props: Props) {
  const savedState = useSelector((state: ListReducers) => state.saved);
  const dispatch = useDispatch();
  const { data } = props;
  const handleOnClick = React.useCallback(
    (type: string) => {
      if (type === "saved") {
        dispatch(saveArticle(data));
        toast.success("Success Saved This Article", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch(deleteArticle(data));
        toast.info("Success Unsaved This Article", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    },
    [data, dispatch]
  );
  const isSaved =
    savedState.savedArticles.findIndex((item) => item.url === data.url) > -1
      ? true
      : false;

  return (
    <>
      <div className={styles.cardContainer()}>
        <div className={styles.columnFlex()}>
          <img
            src={data?.urlToImage || placeholderImage}
            className={styles.imageStyle()}
            alt="news"
          />
          <div style={{ flexDirection: "column", marginTop: 10 }}>
            <div className={styles.rowFlexBetween()}>
              <div className={styles.sourceStyle()}>{data.source.name}</div>
              {data.author !== "-" && data.author && (
                <div className={styles.sourceStyle()}>
                  <BsFillPersonFill style={{ marginRight: 4 }} />
                  {data.author}
                </div>
              )}
            </div>
            <div style={{ marginTop: 10 }} className={styles.titleStyle()}>
              {data.title}
            </div>
            <div style={{ marginTop: 10 }} className={styles.descStyle()}>
              {data.description}
            </div>
          </div>
        </div>
        <div className={styles.footerCard()}>
          <a
            style={{ display: "flex", alignSelf: "center" }}
            className={styles.buttonStyle()}
            href={data.url}
            target="_blank"
            rel="noreferrer"
          >
            {"Read News"}
            <BsFillArrowRightCircleFill style={{ marginLeft: 10 }} />
          </a>
          <div
            onClick={() => {
              isSaved ? handleOnClick("unsaved") : handleOnClick("saved");
            }}
          >
            {isSaved ? (
              <AiFillStar className={styles.styleStar()} color={"#3F0071"} />
            ) : (
              <AiOutlineStar className={styles.styleStar()} color={"#3F0071"} />
            )}
          </div>
          {/* <Button
            onSubmit={() => {
              isSaved ? handleOnClick("unsaved") : handleOnClick("saved");
            }}
            title={isSaved ? "Unsaved" : "Saved"}
          /> */}
        </div>
      </div>
    </>
  );
}

const styles = {
  imageStyle: css({
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 8,
    borderWidth: "1px solid black",
  }),
  cardContainer: css({
    padding: "12px 12px 20px 12px",
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    borderRadius: 8,
  }),
  sourceStyle: css({
    color: "$primary2",
    display: "flex",
    alignItems: "center",
  }),
  titleStyle: css({
    color: "$primary2",
    fontSize: "$body4",
    fontWeight: "$semiBold",
    textAlign: "justify",
  }),
  descStyle: css({
    color: "$gray1",
    fontSize: "$body5",
    fontWeight: "$regular",
    textAlign: "justify",
  }),
  dateStyle: css({
    color: "$gray3",
    fontSize: "$body5",
  }),
  buttonStyle: css({
    color: "$primary4",
    fontSize: "$body4",
    fontWeight: "$bold",
    alignSelf: "flex-start",
    textDecoration: "none",
  }),
  columnFlex: css({
    flexDirection: "column",
    display: "flex",
  }),
  rowFlexBetween: css({
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
  }),
  footerCard: css({
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  }),
  cardLoadingContainer: css({
    padding: "12px 12px 20px 12px",
    alignItems: "center",
    width: "100%",
    height: 300,
    backgroundColor: "$gray5",
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    borderRadius: 8,
  }),
  imageStyleLoading: css({
    width: "100%",
    height: 200,
    backgroundColor: "$gray4",
    objectFit: "cover",
    borderRadius: 8,
    borderWidth: "1px solid black",
  }),
  styleStar: css({
    width: 30,
    height: 30,
    "&:hover": {
      transform: "scale(1.5)",
    },
  }),
};
