import * as React from "react";
import { css } from "../../styles/style";
export default function Container(props: { children: React.ReactNode }) {
  return <div className={styles.container()}>{props.children}</div>;
}

const styles = {
  container: css({
    padding: "20px 20px 20px 20px",
  }),
};
