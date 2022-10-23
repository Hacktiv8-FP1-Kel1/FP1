import * as React from "react";
import { css, theme } from "../../styles/style";
import { Link } from "react-router-dom";
import { useGetHeaderList } from "./data-header";

interface Props {
  name: string;
  link: string;
  labelStyle?: any;
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
  return (
    <div className={styles.navContainer()}>
      <div className={styles.navItemContainer()}>
        <div className={styles.boldText()}>{"News"}</div>
        {headerLists.map((item) => (
          <ItemComponent name={item.name} link={item.link} key={item.name} />
        ))}
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
    color: "white",
    backgroundColor: theme.colors.primary0,
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
    color: "#DEDEDE",
    cursor: "pointer",
    marginLeft: 24,
  }),
};

export default Header;
