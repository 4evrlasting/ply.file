import GenresMusicPopImage from "assets/pop.png";
import GenresMusicIndieImage from "assets/indie.png";
import GenresMusicHipHopImage from "assets/hipHop.png";
import GenresMusicRockImage from "assets/rock.png";
import GenresMusicPunkImage from "assets/punk.png";
import { EnumGenere } from "constants/enumGenere";

export const fileGenere = [
  {
    src: GenresMusicPopImage,
    id: EnumGenere.pop,
    alt: "Genres Music Pop",
    typeGenere: "Pop",
    route: `/genere/${EnumGenere.pop}`,
  },
  {
    src: GenresMusicRockImage,
    id: EnumGenere.rock,
    alt: "Genres Music Rock",
    typeGenere: "Rock",
    route: `/genere/${EnumGenere.rock}`,
  },
  {
    src: GenresMusicIndieImage,
    id: EnumGenere.indie,
    alt: "Genres Music Indie",
    typeGenere: "Indie",
    route: `/genere/${EnumGenere.indie}`,
  },
  {
    src: GenresMusicPunkImage,
    id: EnumGenere.punk,
    alt: "Genres Music Punk",
    typeGenere: "Punk",
    route: `/genere/${EnumGenere.punk}`,
  },
  {
    src: GenresMusicHipHopImage,
    id: EnumGenere.hipHop,
    alt: "Genres Music Hip Hop",
    typeGenere: "Hip Hop",
    route: `/genere/${EnumGenere.hipHop}`,
  },
];
