//components
import { GiSevenPointedStar } from "react-icons/gi";
import {
  Delivery,
  MainSlider,
  OfferSlider,
  PopularSlider,
  Restaurant,
  Special,
  SpecialAll,
  TestimonialSlider,
  WeAreBest,
} from "../components";

//css
import "./pages.css";

function Home() {
  return (
    <section>
      <div>
        <MainSlider />
      </div>
      <div className="popular">
        <PopularSlider />
      </div>

      {/* restaurant */}
      <div className="container ">
        <div className="healthy">
          <p className="healthy-title">RICH & HEALTHY</p>
          <div className="wrapper ">
            <div className="box a">
              <figure className="a-img">
                <img src="./image/image_richHealthy_1.png" />
              </figure>
            </div>
            <div className="box b">
              <p className="box-b-title">
                Highest quality artisangrains, proteins & seasonal ingredients
              </p>

              <p className="box-b-info">
                Righteous indignation and dislike men who are so beguiled and
                demoralized by the charms of pleasure of the moment, so blinded
                by desires, that they cannot foresee.
              </p>
            </div>
            <div className="box c">
              <div className="c-box">
                <GiSevenPointedStar />
                <p>Simple and easy to distinguish</p>
              </div>
              <div className="c-box">
                <GiSevenPointedStar />
                <p>Pleasure of the momentblinded desire</p>
              </div>
              <div className="c-box">
                <GiSevenPointedStar />
                <p>Able to do what we like best</p>
              </div>

              <div className="c-btn">
                <button>Read More</button>
              </div>
            </div>
            <div className="box d">
              <figure className="d-img">
                <img src="./image/image_richHealthy_2.png" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* restaurant */}

      <div>
        <OfferSlider />
      </div>

      <div>
        <Special />
        <SpecialAll />
      </div>

      <div>
        <Restaurant />
      </div>

      <div>
        <Delivery />
      </div>

      <div>
        <WeAreBest />
      </div>

      {/* <div>
        <TestimonialSlider />
      </div> */}
    </section>
  );
}

export default Home;
