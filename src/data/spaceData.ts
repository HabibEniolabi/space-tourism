import rawData from "../../data.json";

interface DestinationJson {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

interface CrewJson {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

interface TechnologyJson {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

interface SpaceDataJson {
  destinations: DestinationJson[];
  crew: CrewJson[];
  technology: TechnologyJson[];
}

const data = rawData as SpaceDataJson;

const assetUrls = import.meta.glob("../assets/images/**/*.{png,webp,jpg,jpeg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const resolveAsset = (path: string) => {
  const normalizedPath = path.replace("./assets", "../assets");
  return assetUrls[normalizedPath];
};

export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  distance: string;
  travelTime: string;
}

export interface CrewMember {
  id: string;
  name: string;
  image: string;
  role: string;
  bio: string;
}

export interface Technology {
  id: string;
  name: string;
  portraitImage: string;
  landscapeImage: string;
  description: string;
}

const createId = (value: string) => {
  return value.toLowerCase().replace(/\s+/g, "-");
};

export const destinations: Destination[] = data.destinations.map(
  (destination) => ({
    id: createId(destination.name),
    name: destination.name,
    image: resolveAsset(destination.images.webp),
    description: destination.description,
    distance: destination.distance.toUpperCase(),
    travelTime: destination.travel.toUpperCase(),
  })
);

export const crewMembers: CrewMember[] = data.crew.map((member) => ({
  id: createId(member.name),
  name: member.name,
  image: resolveAsset(member.images.webp),
  role: member.role,
  bio: member.bio,
}));

export const technologies: Technology[] = data.technology.map((technology) => ({
  id: createId(technology.name),
  name: technology.name,
  portraitImage: resolveAsset(technology.images.portrait),
  landscapeImage: resolveAsset(technology.images.landscape),
  description: technology.description,
}));