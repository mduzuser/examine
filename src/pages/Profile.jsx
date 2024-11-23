//css
import { Form } from "react-router-dom";
import "./pages.css";

function Profile() {
  return (
    <div className="container">
      <div className="profile-container">
        <div className="profile-box">
          <div className="profile">
            <div className="profile-img">
              <figure>
                <img src="./image/profile_image.png" />
              </figure>

              <p className="user-name">David Matin</p>
              <p className="user-sub">Web Developer</p>
            </div>
          </div>

          <div className="profile-boxes  ">
            <div className="profile-parts profile-active">
              <p>Profile</p>
            </div>
            <div className="profile-parts">
              <p>My Cart</p>
            </div>
            <div className="profile-parts">
              <p>Wishlist</p>
            </div>
            <div className="profile-parts">
              <p>Shop</p>
            </div>
            <div className="profile-parts">
              <p>Help Desk</p>
            </div>
            <div className="profile-parts">
              <p>Logout</p>
            </div>
          </div>
        </div>

        <div className="settings">
          <div className="setting-title">
            <p>BASIC INFORMATION</p>
          </div>

          <Form className="settings-form">
            <div>
              <span>User Full Name*</span>
              <input
                type="text"
                placeholder="Full name"
                className="input-name"
              />
            </div>

            <div className="subAge">
              <div className="subAge-box">
                <span>Professional title*</span>
                <input
                  type="text"
                  placeholder="Professional title"
                  className="input-sub"
                />
              </div>

              <div className="subAge-box">
                <span>Age*</span>
                <input type="number" placeholder="Age" className="input-age" />
              </div>
            </div>

            <div>
              <span>About</span>
              <textarea
                rows="4"
                class="input-area"
                placeholder="Write your message"
              ></textarea>
            </div>

            <div className="setting-title">
              <p>CONTACT INFORMATION</p>
            </div>

            <div className="other-info">
              <div>
                <span>Contact Number</span>
                <input
                  type="phone"
                  placeholder="Contact Number"
                  className="input-num"
                />
              </div>

              <div>
                <span>Email Address</span>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input-email"
                />
              </div>

              <div>
                <span>Country</span>
                <input
                  type="text"
                  placeholder="Country"
                  className="input-country"
                />
              </div>

              <div>
                <span>Postcode</span>
                <input
                  type="code"
                  placeholder="Postcode"
                  className="input-code"
                />
              </div>

              <div>
                <span>City</span>
                <input type="text" placeholder="City" className="input-city" />
              </div>

              <div>
                <span>Full Address</span>
                <input
                  type="text"
                  placeholder="Full Address"
                  className="input-address"
                />
              </div>
            </div>

            <div className="form-btn">
              <button>Save Setting</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
