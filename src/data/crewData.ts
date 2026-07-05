import douglasImage from "../assets/images/crew/image-douglas-hurley.webp";
import markImage from "../assets/images/crew/image-mark-shuttleworth.webp";
import victorImage from "../assets/images/crew/image-victor-glover.webp";
import anoushehImage from "../assets/images/crew/image-anousheh-ansari.webp";

export interface CrewMember {
  id: string;
  role: string;
  name: string;
  bio: string;
  image: string;
}

export const crewMembers: CrewMember[] = [
  {
    id: "douglas-hurley",
    role: "Commander",
    name: "Douglas Hurley",
    image: douglasImage,
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: "mark-shuttleworth",
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    image: markImage,
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. He became the first South African to travel to space as a space tourist.",
  },
  {
    id: "victor-glover",
    role: "Pilot",
    name: "Victor Glover",
    image: victorImage,
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    id: "anousheh-ansari",
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    image: anoushehImage,
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];