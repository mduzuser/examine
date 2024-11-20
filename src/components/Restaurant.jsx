import { BsArrowRightCircle } from "react-icons/bs";

function Restaurant() {
  return (
    <div className="container">
      <div className="restaurant-container">
        <p className="restaurant-title">OUR RESTAURANT</p>
        <div className="restaurant">
          <div className="restaurant-imgs">
            <div className="restaurant-imgs-top">
              <figure>
                <img src="./image/image_ourResturant_1.png" />
              </figure>
              <figure>
                <img src="./image/image_ourResturant_2.png" />
              </figure>
            </div>
            <figure>
              <img src="./image/image_ourResturant_3.png" />
            </figure>
          </div>

          <div className="restaurant-texts">
            <p className="restaurant-texts-title">
              For every specialoccasion there’s heritaste
            </p>
            <p className="restaurant-texts-info">
              Indignation and dislike men who are so beguiled demoralized by the
              charms of pleasure of the moment. Success Story.
            </p>

            <div className="restaurant-more-info">
              <div className="restaurant-more-img">
                <img src="./image/growth 1.png" />
              </div>

              <div className="restaurant-info-box">
                <p className="restaurant-more-title">Success Story</p>
                <p className="restaurant-more-text">
                  Certain circumstances and owing to the claims of duty
                  obligations of business it will frequently.
                </p>
                <button className="restaurant-more-btn">
                  Read More <BsArrowRightCircle />
                </button>
              </div>
            </div>

            <div className="restaurant-more-info">
              <div className="restaurant-more-img">
                <img src="./image/cooking 1.png" />
              </div>

              <div className="restaurant-info-box">
                <p className="restaurant-more-title">Passionate Chefs</p>
                <p className="restaurant-more-text">
                  Duty or the obligations of business it frequently occur
                  pleasures have to be repudiated.
                </p>
                <button className="restaurant-more-btn">
                  Read More <BsArrowRightCircle />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
