import React from "react";
import Navbar from "../components/Navbar";
import "./Gallery.css";

function Gallery() {
  return (
    <>
      <Navbar />
      <div className="gallery-heading">Gallery</div>
      <div class="gallery-wrapper">
        <div class="gallery">
          <img src="/assets/img01.jpeg" alt="Image 1" />
          <img src="/assets/img02.jpeg" alt="Image 2" />
          <img src="/assets/img03.jpeg" alt="Image 3" />
          <img src="/assets/img04.jpeg" alt="Image 4" />
          <img src="/assets/img05.jpeg" alt="Image 5" />
          <img src="/assets/img06.jpeg" alt="Image 6" />
          <img src="/assets/img07.jpeg" alt="Image 7" />
          <img src="/assets/img11_L.jpeg" alt="Image 8" />
          <img src="/assets/img12_L.jpeg" alt="Image 9" />
        </div>
      </div>
    </>
  );
}

export default Gallery;




// * {
// padding: 0;
// margin: 0;
// box-sizing: border-box;
// }

// .gallery-heading {
// text-align: center;
// font-size: 50px;
// }

// .gallery-wrapper {
// padding: 0 100px; /* Adds space to left and right */
// }


// .gallery {
// display: grid;
// grid-template-columns: repeat(3, 1fr);
// grid-gap: 16px;
// padding: 16px;
// }

// /* Gallery images */
// .gallery img {
// width: 100%;
// height: auto;
// border-radius: 8px;
// object-fit: cover;
// }

// /* Responsive for tablets */
// @media (max-width: 768px) {
// .gallery {
//   grid-template-columns: repeat(2, 1fr);
// }
// }

// /* Responsive for mobile phones */
// @media (max-width: 480px) {
// .gallery {
//   grid-template-columns: 1fr;
// }
// }
