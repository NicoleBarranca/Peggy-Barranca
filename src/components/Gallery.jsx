import GalleryContent from "./GalleryContent";
import "./gallery.css";
import A from "../img/A.jpeg";
import B from "../img/B.jpg";
import C from "../img/C.jpg";
import D from "../img/D.jpg";
import E from "../img/E.jpg";
import F from "../img/F.jpg";
import G from "../img/G.jpg";
import H from "../img/H.jpg";
import I from "../img/I.jpg";
import J from "../img/J.jpg";
import K from "../img/K.jpg";
import L from "../img/L.jpg";
import M from "../img/M.jpg";
import N from "../img/N.jpg";
import O from "../img/O.jpg";
import P from "../img/P.jpg";
import Q from "../img/Q.jpg";
import R from "../img/R.jpg";
import S from "../img/S.jpg";
import T from "../img/T.jpg";
import U from "../img/U.jpg";

function Gallery() {
  const galleryImages = [
    {
      photo: A,
      name: "Peaceful Meadow",
      size: "8 x 10",
      desc: "This pice was painted with acrylic, on a wooden background. Paper and string are intertwined in the grass.",
    },
    {
      photo: B,
      name: "this is the name of B",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: C,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: D,
      name: "this is the name of D",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: E,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: F,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: G,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: H,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: I,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: J,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: K,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: L,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: M,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: N,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: O,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: P,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: Q,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: R,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: S,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: T,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
    {
      photo: U,
      name: "this is the name",
      size: "8 X 10",
      desc: "this is the description",
    },
  ];
  return (
    <div>
      <GalleryContent galleryImages={galleryImages} />
    </div>
  );
}

export default Gallery;
