import homeDesktop from "../assets/images/home/background-home-desktop.jpg";
import homeTablet from "../assets/images/home/background-home-tablet.jpg";
import homeMobile from "../assets/images/home/background-home-mobile.jpg";

import destinationDesktop from "../assets/images/destination/background-destination-desktop.jpg";
import destinationTablet from "../assets/images/destination/background-destination-tablet.jpg";
import destinationMobile from "../assets/images/destination/background-destination-mobile.jpg";

import crewDesktop from "../assets/images/crew/background-crew-desktop.jpg";
import crewTablet from "../assets/images/crew/background-crew-tablet.jpg";
import crewMobile from "../assets/images/crew/background-crew-mobile.jpg";

import technologyDesktop from "../assets/images/technology/background-technology-desktop.jpg";
import technologyTablet from "../assets/images/technology/background-technology-tablet.jpg";
import technologyMobile from "../assets/images/technology/background-technology-mobile.jpg";

export const pageBackgrounds = {
  "/": {
    desktop: homeDesktop,
    tablet: homeTablet,
    mobile: homeMobile,
  },
  "/destination": {
    desktop: destinationDesktop,
    tablet: destinationTablet,
    mobile: destinationMobile,
  },
  "/crew": {
    desktop: crewDesktop,
    tablet: crewTablet,
    mobile: crewMobile,
  },
  "/technology": {
    desktop: technologyDesktop,
    tablet: technologyTablet,
    mobile: technologyMobile,
  },
};