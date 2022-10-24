import * as React from "react";
import { css, theme } from "../../styles/style";
interface Props {
  onSubmit: () => void;
  title: string;
  style?: React.CSSProperties;
}

export default function Button(props: Props) {
  const { onSubmit, title, style } = props;
  return (
    <button onClick={onSubmit} className={styles.button()} style={style}>
      {title}
    </button>
  );
}

const styles = {
  button: css({
    backgroundColor: "$primary1",
    color: "$white1",
    fontSize: "$body5",
    padding: "8px 16px 8px 16px",
    borderRadius: 8,
    border: "0.5px solid white",
    cursor: "pointer",
    fontFamily: "Nunito",
    fontWeight: "$semiBold",
    "&:hover": {
      backgroundColor: theme.colors.primary2,
    },
  }),
};
