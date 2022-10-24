import * as React from "react";
import { css } from "../../styles/style";
interface Props {
  title: string;
}
export default function Title(props: Props) {
  return <div className={styles.title()}>{props.title}</div>;
}

const styles = {
  title: css({
    fontSize: "$body1",
    fontWeight: "bold",
    justifyContent: "center",
    display: "flex",
    flex: 1,
    borderBottom: "1px solid",
    borderColor: "$gray4",
    paddingBottom: 20,
  }),
};
