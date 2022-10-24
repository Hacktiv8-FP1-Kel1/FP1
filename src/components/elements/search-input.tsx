import * as React from "react";
import { css, theme } from "../../styles/style";

interface Props {
  placeholder?: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
}

export default function SearchInput(props: Props) {
  const { placeholder = "", setSearch, type = "text" } = props;
  const handleChange = React.useCallback(
    (event: any) => {
      setSearch(event.target.value);
    },
    [setSearch]
  );

  return (
    <input
      type={type}
      className={styles.container()}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

const styles = {
  container: css({
    fontSize: "$body5",
    fontFamily: "Nunito",
    padding: "8px 16px 8px 16px",
    alignItems: "center",
    height: "70%",
    borderRadius: 8,
    border: "none",
  }),
};
