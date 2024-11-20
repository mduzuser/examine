import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { ServiceSlider } from "../components";

function About() {
  return (
    <div>
      {/* img bg abs */}
      <figure className="aHeader">
        <img src="./image/image_about-bg.png" />
        <div className="aHeader-content">
          <p className="aHeader-title">About US</p>
          <p className="aHeader-text">
            Read our Story, How we started and about the Team
          </p>
        </div>
      </figure>

      {/* img bg abs */}

      {/* story page */}
      <div className="container">
        <div className="aStory">
          <div className="aStory-a">
            <figure className="aStory-a-img">
              <img src="./image/image_about_1.png" />
            </figure>

            <div className="aStory-a-texts">
              <p className="aStory-a-textBold">
                Opaleye yellowtail snapper, velvet catfish, graveldiver banded
                killifish, Old World rivuline catalufa eagle ray Moorish idol.
                Herring smelt barbeled dragonfish, tommy ruff.
              </p>

              <p className="aStory-a-textTh">
                Queen danio velvet catfish Sacramento blackfish, bullhead shark,
                Colorado squawfish Russian sturgeon clown triggerfish swamp-eel
                paradise fish. Hake cookie-cutter shark silver carp hawkfish
                snipe eel armorhead catfish, moray eel silverside! Bluegill
                toadfish, orangespine unicorn fish. Manta Ray Moorish idol
              </p>
            </div>
          </div>
        </div>

        <p className="aStory-title">OUR STORY</p>

        <div className="aStory-b">
          <div className="aStory-b-textBox">
            <p className="aStory-b-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passage
            </p>
          </div>

          <figure className="aStory-b-img">
            <img src="./image/image_ourStory_1.png" />
          </figure>
        </div>
      </div>
      {/* story page */}

      {/* all menu */}
      <div className="viewAll">
        <div className="container">
          <div className="viewAll-menu">
            <p className="viewAll-menu-name">TASTY AND CRUNCHY</p>
            <p className="viewAll-menu-title">Our Chef</p>
            <p className="viewAll-menu-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea
              commodo condor consectetur adipiscing elit, sed do eiusmod tempor
              incidition ullam.
            </p>

            <div className="viewAll-menu-btn">
              <button>VIEW OUR ALL MANU</button>
            </div>
          </div>
        </div>
      </div>
      {/* all menu */}

      {/* about slider */}
      <div>
        <ServiceSlider />
      </div>
      {/* about slider */}

      {/* our team */}
      <div className="container">
        <div className="ourTeam-header">
          <p className="ourTeam-header-title">OUR TEAM</p>
          <p className="ourTeam-header-info">
            The Hardworking Team behind the restaurant
          </p>
        </div>

        <div className="ourTeam-body">
          <div className="ourTeam-body-box">
            <div className="ourTeam-rounded">
              <figure>
                <img src="./image/image_ourTeam_1.png" />
              </figure>
              <p className="ourTeam-leader">Brain Adams</p>
              <p className="ourTeam-texts">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>

            <div className="ourTeam-social">
              <FaTwitter />

              <FaFacebookSquare />

              <FaInstagram />

              <FaLinkedinIn />
            </div>
          </div>

          <div className="ourTeam-body-box">
            <div className="ourTeam-rounded">
              <figure>
                <img src="./image/image_ourTeam_2.png" />
              </figure>
              <p className="ourTeam-leader">Jhon Khan</p>
              <p className="ourTeam-texts">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>

            <div className="ourTeam-social">
              <FaTwitter />

              <FaFacebookSquare />

              <FaInstagram />

              <FaLinkedinIn />
            </div>
          </div>

          <div className="ourTeam-body-box">
            <div className="ourTeam-rounded">
              <figure>
                <img src="./image/image_ourTeam_3.png" />
              </figure>
              <p className="ourTeam-leader">Jessica biel</p>
              <p className="ourTeam-texts">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>

            <div className="ourTeam-social">
              <FaTwitter />

              <FaFacebookSquare />

              <FaInstagram />

              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
      {/* our team */}
    </div>
  );
}

export default About;
