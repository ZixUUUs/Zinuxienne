import HeroSec from "./HeroSec";
import HeroSecRes from "./HeroSecRes";
import "./index.css";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";

function MainHero() {
  const isSmallScreen = useMediaQuery("only screen and (max-width: 990px)");
  return isSmallScreen ? <HeroSecRes /> : <HeroSec />;
}

export default MainHero;
