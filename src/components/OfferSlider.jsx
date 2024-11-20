//css
import "./slider.css";

//recat silk
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function OfferSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="offerSlider-container">
        <p className="offerSlider-title">Bigg Offer</p>
        <p className="offerSlider-text">
          For in this week, take your food, buy your best one.
        </p>

        <Slider {...settings}>
          {data.map((item) => {
            return (
              <figure className="offerSlider-img" key={item.id}>
                <img src={item.img} />
              </figure>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  { id: 1, img: "./image/image_bigOffer_1.png" },
  { id: 2, img: "./image/image_bigOffer_2.png" },
  { id: 3, img: "./image/image_bigOffer_3.png" },
  { id: 4, img: "./image/image_bigOffer_2.png" },
  { id: 5, img: "./image/image_bigOffer_1.png" },
  { id: 3, img: "./image/image_bigOffer_3.png" },
];

export default OfferSlider;
