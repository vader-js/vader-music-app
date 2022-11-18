import Rectangle1 from "../images/Rectangle1.jpg";
import Rectangle2 from "../images/Rectangle2.jpg";
import Rectangle3 from "../images/Rectangle3.jpg";
import Rectangle11 from "../images/Rectangle11.png";
import Rectangle12 from "../images/Rectangle12.png";
import Rectangle13 from "../images/Rectangle13.png";
import Rectangle4 from "../images/Rectangle4.png";
import Rectangle5 from "../images/Rectangle5.png";
import Rectangle18 from "../images/Rectangle18.png";
import Rectangle7 from "../images/Rectangle7.png";
import soweto from "../Audio/soweto.mp3";
import Babydoll from "../Audio/Babydoll.mp3";
import formyhand from "../Audio/formyhand.mp3";
import hotel from "../Audio/hotel.mp3";


export const topchats = [
  {
    id: 1,
    image: Rectangle1,
    about: ["Golden age of 80s", "Sean swadder", "2:34:45"],
  },

  {
    id: 2,
    image: Rectangle2,
    about: ["Reggae 'n' blues", "Dj YK mule", "1:04:45"],
  },

  {
    id: 3,
    image: Rectangle3,
    about: ["Tomorrow's Tunes", "Obi datti", "2:01:25"],
  },
];

export const releases = [
  {
    id: 1,
    image: Rectangle11,
    about: [{ name: "Life in a bubble", artist: "The van" }],
  },

  {
    id: 2,
    image: Rectangle12,
    about: [{ name: "Mountain", artist: "Kristz" }],
  },

  {
    id: 3,
    image: Rectangle7,
    about: [{ name: "Limmit", artist: "John Dillion" }],
  },

  {
    id: 4,
    image: Rectangle13,
    about: [{ name: "Everything Black", artist: "Ahmeed" }],
  },

  {
    id: 5,
    image: Rectangle4,
    about: [{ name: "Cancelled", artist: "Eminem" }],
  },

  {
    id: 6,
    image: Rectangle5,
    about: [{ name: "Normad", artist: "Macral eli" }],
  },

  {
    id: 7,
    image: Rectangle18,
    about: [{ name: "Wild'n'out", artist: "Vader" }],
  },
];
export const songinfo = [
  {
    id: 1,
    name: "BabyDoll- ari abdul",
    image: Rectangle11,
    time: "3.16",
    genre: "single",
    source: Babydoll
  },
  {
    id: 2,
    name: "For my hand- burna and edsheeran",
    image: Rectangle12,
    time: "2.39",
    genre: "Afro beatz",
    source: formyhand
  },
  {
    id: 3,
    name: "Hotel- montell fish",
    image: Rectangle18,
    time: "3.17",
    genre: "machine",
    source: hotel
  },
  {
    id: 4,
    name: "soweto- victony ft Tempoe",
    image: Rectangle5,
    time: "2.28",
    genre: "Afro beatz",
    source: soweto
  }
];
