//recat silk
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//css slider
import "./slider.css";

//ri
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div key={item.id} className="main-slider">
              <div className="main-slider-body">
                <div className="main-slider-text">
                  <div>
                    <p className="main-slider-adj">{item.text}</p>
                    <p className="main-slider-title">
                      ENJOY OUR CHICKEN <br /> <span>BURGER</span> FAST FOOD
                    </p>
                  </div>

                  <div>
                    <button>Order Now</button>
                    <p className="main-slider-price">{item.price}</p>
                  </div>
                </div>

                <div>
                  <figure className="main-slider-img">
                    <img src={item.image} alt="Product" />
                  </figure>
                </div>
              </div>
              <div className="main-slider-bottom">
                <div>
                  <FaTwitter />

                  <FaFacebookSquare />

                  <FaInstagram />

                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

const data = [
  {
    id: 1,
    text: "Best In Town",
    price: "$10.50",
    image: "./image/image1.png",
  },
  {
    id: 2,
    text: "Best In Town",
    price: "$10.50",
    image: "./image/image1.png",
  },
  {
    id: 3,
    text: "Best In Town",
    price: "$10.50",
    image: "./image/image1.png",
  },
  {
    id: 4,
    text: "Best In Town",
    price: "$10.50",
    image: "./image/image1.png",
  },
];

export default MainSlider;
