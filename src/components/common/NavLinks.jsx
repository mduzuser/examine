//css
import "./style.css";

//rrd
import { Link } from "react-router-dom";

const data = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/items",
    text: "Items",
  },
  {
    path: "/pages",
    text: "Pages",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];
function NavLinks() {
  return (
    <>
      {data.map((item) => {
        return (
          <li key={item.path}>
            <Link className="navbar-body-links" to={item.path}>
              {item.text}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
