//css
import "./pages.css";

// ri
import {
  FaClock,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
function Contact() {
  return (
    <div>
      {/* img abs */}
      <figure className="contact-bg-abs">
        <img src="./image/image_contact_bg.png" />
        <div className="contact-bg-texts">
          <p className="contact-bg-title">CONTACT US</p>
          <p className="contact-bg-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />{" "}
            do eius mod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </figure>
      {/* img abs */}

      {/* contact details */}
      <div className="contact-container">
        <div className="contact-details container">
          <div className="cDetails-texts">
            <div className="cDetails-address">
              <p className="cDetails-address-title">ADDRESS</p>

              <span>
                <FaLocationDot />
                <p className="cDetails-address-info">
                  28 Seventh Avenue, Neew York, 10014
                </p>
              </span>

              <span>
                <FaPhoneAlt />
                <p className="cDetails-address-info">+880 1630 225 015</p>
              </span>

              <span>
                <IoMdMail />
                <p className="cDetails-address-info">resturents@gmail.com</p>
              </span>
            </div>

            <div className="cDetails-wHours">
              <p className="cDetails-wHours-title">WORKING HOURS</p>
              <span>
                <FaClock />
                <p className="cDetails-wHours-info">
                  7:30 am to 9:30pm on Weekdays
                </p>
              </span>
            </div>

            <div className="cDetails-socials">
              <p className="cDetails-socials-title">FOLLOW US</p>
              <div className="cDetails-socials-icons">
                <FaTwitter />

                <FaFacebookSquare />

                <FaInstagram />

                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="cDeatils-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.99136123895678!2d-74.05565712600948!3d40.72105917347175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c251c718d0d555%3A0x467d46cdfb4d9d19!2sGigi%20Halal%20Food!5e0!3m2!1sen!2s!4v1731991175099!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      {/* contact details */}
    </div>
  );
}

export default Contact;
