//common
import NavLinks from "./NavLinks";

//ri
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

//rrd
import { Link } from "react-router-dom";
import { useState } from "react";

//css
import "./style.css";

//components
import NavbarModal from "../NavbarModal";
import { CgClose } from "react-icons/cg";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const handleModalToggle = () => setShowModal(!showModal);

  return (
    <>
      {showModal && <NavbarModal showModal={showModal} />}
      <div className="navbar ">
        <div className="navbar-header ">
          <div className="container  navbar-header-content">
            <div className="navbar-header-details">
              <div className="d-flex">
                <FaClock />
                <p>7.30 AM - 9.30 PM</p>
              </div>

              <div className="d-flex">
                <FaPhoneAlt />
                <p>+880 1630 225 015</p>
              </div>
            </div>

            <Link className="navbar-header-link" to={"/"}>
              Register
            </Link>
          </div>
        </div>

        <div className="navbar-body">
          <div className="container ">
            <div className="navbar-body-container">
              <figure className="navbar-body-logo">
                <img src="./image/logo (3).png" alt="logo" />
              </figure>

              <ul className="navbar-body-pages">
                <NavLinks />
              </ul>

              <div className="navbar-body-cart">
                <IoMdCart />

                <span>0</span>
              </div>

              <div className="navbar-body-delivery">
                <div>
                  <p>Delivery Order</p>
                  <p>+880 1630 225 015</p>
                </div>
                <figure>
                  <img src="./image/food 1.png" alt="food" />
                </figure>
              </div>

              <Link to={"/login"} className="navbar-body-btn">
                login
              </Link>

              {showModal ? (
                <CgClose className="navbar-bars" onClick={handleModalToggle} />
              ) : (
                <FaBars className="navbar-bars" onClick={handleModalToggle} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
