//recat silk
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//css slider
import "./slider.css";

function ServiceSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
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
      <div className="serviceSlider-header">
        <p className="serviseSlider-title">SPECIAL SERVICE</p>
        <p className="serviceSlider-name">
          What Special services we are offering now
        </p>
      </div>
      <div className="serviceSlider-body">
        <Slider {...settings}>
          <div className="serviceSlider-box">
            <p className="serviceSlider-box-title">Birthday Party</p>
            <p className="serviceSlider-box-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div className="serviceSlider-box">
            <p className="serviceSlider-box-title">Wedding Party</p>
            <p className="serviceSlider-box-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div className="serviceSlider-box">
            <p className="serviceSlider-box-title">Birthday Party</p>
            <p className="serviceSlider-box-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div className="serviceSlider-box">
            <p className="serviceSlider-box-title">Wedding Party</p>
            <p className="serviceSlider-box-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ServiceSlider;
