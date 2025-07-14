import "./index.css";
import bgSec from "./assets/bgHeroSec.webp";
import Zinuxienne from "./assets/Zinuxienne.webp";
import AnchorBtn from "./component/anchorBtn";

function HeroSec() {
  return (
    <section className="HeroSec">
      <div className="container--padding HeroSec-container">
        <div className="container-hero">
          <div className="box-hero">
            <h1>
              Du design et du code. <br /> Sur mesure. <br /> Pour vous.
            </h1>
            <p>
              Un duo créatif qui construit ton site, ton identité visuelle et
              tes contenus — avec style.
            </p>
          </div>
          <div className="bg-heroSec contain-img">
            <img src={bgSec} alt="Zinxuian Cover" />
            <div className="zinuxien--cartoon contain-img">
              <img src={Zinuxienne} alt="Zinuxiens" />
            </div>
            <AnchorBtn
              Text="Deocouvrez qui nous sommes"
              classPosition="HeroSec-btn"
            ></AnchorBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSec;
