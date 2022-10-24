import * as React from "react";
import { css, theme } from "../../styles/style";
import { Link } from "react-router-dom";
import { useGetHeaderList } from "./data-header";
import SearchInput from "../elements/search-input";
import Button from "../elements/button";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  link: string;
  labelStyle?: React.CSSProperties;
}

function ItemComponent(props: Props) {
  const { name, labelStyle, link } = props;
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <div className={styles.navItemStyle()} style={labelStyle}>
        {name}
      </div>
    </Link>
  );
}

export function Header() {
  const { headerLists } = useGetHeaderList();
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");
  const onHandleSearch = React.useCallback(() => {
    navigate(`search/${search}`);
  }, [navigate, search]);

  return (
    <div className={styles.navContainer()}>
      <div className={styles.navItemContainer()}>
        <div className={styles.boldText()}>{"News"}</div>
        {headerLists.map((item) => (
          <ItemComponent name={item.name} link={item.link} key={item.name} />
        ))}
      </div>
      <div className={styles.flexRow()}>
        <SearchInput placeholder={"Search..."} setSearch={setSearch} />
        <div className={styles.ml10()} />
        <Button onSubmit={onHandleSearch} title={"Find News"} />
      </div>
    </div>
  );
}

const styles = {
  boldText: css({
    fontWeight: "bold",
  }),
  navContainer: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    color: "$white0",
    backgroundColor: "$primary0",
    fontSize: "$body5",
    height: 60,
    position: "sticky",
    top: 0,
    zIndex: 1100,
  }),
  navItemContainer: css({
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  }),
  navItemStyle: css({
    color: "$white1",
    cursor: "pointer",
    marginLeft: 24,
  }),
  ml10: css({
    marginLeft: 10,
  }),
  flexRow: css({
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  }),
};

export default Header;
