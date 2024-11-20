//css
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import "./style.css";
function Footer() {
  return (
    <footer>
      <p className="ourBranch">Our Branch</p>
      <div className="footer-up ">
        <div className="container">
          <div className="footer-boxes">
            <div className="footer-box">
              <p className="footer-name">Robert Food</p>
              <p className="address">1986 Hilltop DriveBorger, TX 79007</p>
              <div className="footer-details">
                <div>
                  <FaClock />
                  <p className="footer-time">7.30 AM - 9.30 PM</p>
                </div>
                <div>
                  <FaPhoneAlt />
                  <p className="footer-num">+880 1630-225015</p>
                </div>
              </div>
              <p className="footer-map">Click to View Google Map</p>
            </div>
            <div className="footer-box">
              <p className="footer-name">Mark A. Reed Food</p>
              <p className="address">4877 Rose AvenueNew Orleans, LA 70112</p>
              <div className="footer-details">
                <div>
                  <FaClock />
                  <p className="footer-time">7.30 AM - 9.30 PM</p>
                </div>
                <div>
                  <FaPhoneAlt />
                  <p className="footer-num">+880 1630-225015</p>
                </div>
              </div>
              <p className="footer-map">Click to View Google Map</p>
            </div>
            <div className="footer-box">
              <p className="footer-name">Karie K. Hill Food</p>
              <p className="address">1509 Peaceful LaneCleveland, OH 44115</p>
              <div className="footer-details">
                <div>
                  <FaClock />
                  <p className="footer-time">7.30 AM - 9.30 PM</p>
                </div>
                <div>
                  <FaPhoneAlt />
                  <p className="footer-num">+880 1630-225015</p>
                </div>
              </div>
              <p className="footer-map">Click to View Google Map</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bot">
        <p>Copyright © 2022 | Shaheen Uddin Ahmad(by me)</p>
      </div>
    </footer>
  );
}

export default Footer;
