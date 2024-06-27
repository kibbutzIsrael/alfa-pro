import { useEffect, useRef, useState } from "react";
import carouselImage1 from "../../images/homeCarousel/homeCarousel1.jpg";
import carouselImage2 from "../../images/homeCarousel/homeCarousel2.jpg";
import carouselImage3 from "../../images/homeCarousel/homeCarousel3.jpg";
import carouselImage4 from "../../images/homeCarousel/homeCarousel4.jpg";
import { useNavigate } from "react-router-dom";

const carouselImages = [
   carouselImage1,
   carouselImage2,
   carouselImage3,
   carouselImage4,
];

const ImagesCarousel = () => {
   const [imageIndex, setImageIndex] = useState(0);
   const [bgImageIndex, setBgImageIndex] = useState(0);
   const imageRef = useRef();

   let timeoutId;
   function nextImage() {
      setBgImageIndex((bgImageIndex) => ++bgImageIndex);
      imageRef.current.classList.add("fade-out");
      timeoutId = setTimeout(() => {
         setImageIndex((imageIndex) => ++imageIndex);
         imageRef.current.classList.remove("fade-out");
      }, 1200);
   }
   function previousImage() {
      setBgImageIndex((bgImageIndex) => --bgImageIndex);
      imageRef.current.classList.add("fade-out");
      timeoutId = setTimeout(() => {
         setImageIndex((imageIndex) => --imageIndex);
         imageRef.current.classList.remove("fade-out");
      }, 1200);
      clearTimeout(id);
   }

   useEffect(() => {
      clearTimeout(timeoutId);
      if (imageIndex !== bgImageIndex) {
         setImageIndex(bgImageIndex);
      }
   }, [bgImageIndex]);

   return (
      <div className="rounded-box overflow-hidden">
         <div
            className="carousel w-full h-[400px]"
            style={{
               backgroundImage: `url(${carouselImages[bgImageIndex]})`,
               backgroundSize: "cover",
               backgroundPositionX: "center",
            }}
         >
            <div
               // id={`image${imageIndex}`}
               className="carousel-item w-full relative "
            >
               <img
                  ref={imageRef}
                  src={carouselImages[imageIndex]}
                  className="w-full object-cover object-center"
               />
               <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <button
                     disabled={imageIndex === carouselImages.length - 1}
                     onClick={nextImage}
                     className="btn btn-circle"
                  >
                     ❮
                  </button>
                  <button
                     disabled={imageIndex === 0}
                     onClick={previousImage}
                     className="btn btn-circle"
                  >
                     ❯
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ImagesCarousel;
