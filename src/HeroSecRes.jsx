import "./index.css";
import bgSec from "./assets/bgHeroSec.webp";
import Zinuxienne from "./assets/Zinuxienne.webp";
import AnchorBtn from "./component/anchorBtn";

function HeroSecRes() {
  return (
    <section className="HeroSec">
      <div className="container--padding HeroSec-container">
        <div className="container-hero">
          <div className="box-hero">
            <h1>Du design et du code. Sur mesure. Pour vous.</h1>
          </div>
          <div className="bg-heroSec cover-img">
            <p>
              Un duo créatif qui construit ton site, ton identité visuelle et
              tes contenus — avec style.
            </p>
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
export default HeroSecRes;
