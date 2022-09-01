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
    { photo: A, text: "this is the name" },
    { photo: B, text: "this is the name" },
    { photo: C, text: "this is the name" },
    { photo: D, text: "this is the name" },
    { photo: E, text: "this is the name" },
    { photo: F, text: "this is the name" },
    { photo: G, text: "this is the name" },
    { photo: H, text: "this is the name" },
    { photo: I, text: "this is the name" },
    { photo: J, text: "this is the name" },
    { photo: K, text: "this is the name" },
    { photo: L, text: "this is the name" },
    { photo: M, text: "this is the name" },
    { photo: N, text: "this is the name" },
    { photo: O, text: "this is the name" },
    { photo: P, text: "this is the name" },
    { photo: Q, text: "this is the name" },
    { photo: R, text: "this is the name" },
    { photo: S, text: "this is the name" },
    { photo: T, text: "this is the name" },
    { photo: U, text: "this is the name" },
  ];
  return (
    <div>
      <GalleryContent galleryImages={galleryImages} />
    </div>
  );
}

export default Gallery;
