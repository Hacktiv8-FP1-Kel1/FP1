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
    fontSize: "$body3",
    fontFamily: "Nunito",
    padding: "12px 16px 12px 16px",
    borderRadius: 8,
    border: "none",
  }),
};