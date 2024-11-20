//css
import "./components.css";

//components common
import NavLinks from "./common/NavLinks";
function NavbarModal({ showModal }) {
  return (
    <div className={`navbarModal ${showModal ? "open" : ""}`}>
      <ul>
        <NavLinks />
      </ul>
    </div>
  );
}

export default NavbarModal;
