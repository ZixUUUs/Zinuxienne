import { useState, useEffect } from "react";
import LOGO from "./assets/LOGO.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [inactive, setActive] = useState(false);
  const [isMobile, setSize] = useState(false);
  const handleResClick = () => {
    setActive((prev) => !prev);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 990) {
        setSize();
      }
    });
  });
  return (
    <header>
      <div className="container--padding header--container">
        <div className="responsiv-nav">
          <button
            className={`Open ${inactive ? "inactive" : "active"}`}
            onClick={handleResClick}
          >
            <GiHamburgerMenu></GiHamburgerMenu>
          </button>
          <button
            className={`Close ${inactive ? "active" : "inactive"}`}
            onClick={handleResClick}
          >
            <IoMdClose></IoMdClose>
          </button>
        </div>
        <div className="container-logo contain-img">
          <img src={LOGO} alt="ZINUXS--LOGO" />
        </div>
        <nav className={`${!inactive && !isMobile ? "inactive" : "active"}`}>
          <ul>
            <li>
              <a href="#">Acceuil</a>
            </li>
            <li>
              <a href="#">Nos presentation</a>
            </li>
            <li>
              <a href="#">Nos realisations</a>
            </li>
            <li>
              <a href="#">A propos de nous</a>
            </li>
            <li>
              <a href="#">Nous contacter</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
