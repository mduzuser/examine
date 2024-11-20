//css
import "./slider.css";

//recat silk
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function PopularSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
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
    <div className="container  ">
      <div className="popular-slider-text">
        <p>Food Items</p>
        <p>Popular Dishes</p>
      </div>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <figure key={item.id}>
              <img src={item.img} alt="" />
            </figure>
          );
        })}
      </Slider>
    </div>
  );
}

const data = [
  { id: 1, img: "./image/image_Dishes_1.png" },
  { id: 2, img: "./image/image_Dishes_2.png" },
  { id: 3, img: "./image/image_Dishes_3.png" },
  { id: 4, img: "./image/image_Dishes_4.png" },
  { id: 5, img: "./image/image_Dishes_5.png" },
  { id: 3, img: "./image/image_Dishes_3.png" },
];

export default PopularSlider;
