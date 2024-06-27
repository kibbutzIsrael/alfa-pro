import React, { useState, useEffect } from "react";
import carouselImage1 from "../../images/homeCarousel/homeCarousel1.jpg";
import carouselImage2 from "../../images/homeCarousel/homeCarousel2.jpg";
import carouselImage3 from "../../images/homeCarousel/homeCarousel3.jpg";
import carouselImage4 from "../../images/homeCarousel/homeCarousel4.jpg";
import { cn } from "../../lib/cn";

const carouselImages = [
   carouselImage1,
   carouselImage2,
   carouselImage3,
   carouselImage4,
];

const ImagesCarousel = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentSlide(
            (currentSlide) => (currentSlide + 1) % carouselImages.length
         );
      }, 4000);

      return () => clearInterval(interval);
   }, []);

   function nextSlide() {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
   }

   function prevSlide() {
      setCurrentSlide(
         (prevSlide) =>
            (prevSlide - 1 + carouselImages.length) % carouselImages.length
      );
   }

   return (
      <div className="carousel rounded-box size-full relative overflow-hidden">
         {carouselImages.map((image, index) => (
            <div
               key={image}
               className={cn(
                  "carousel-item absolute size-full transition-opacity duration-1000 ease-in-out",
                  currentSlide === index ? "opacity-100" : "opacity-0"
               )}
            >
               <img
                  src={image}
                  className="w-full object-cover"
                  alt={`Slide ${index}`}
               />
               <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <button className="btn btn-circle" onClick={prevSlide}>
                     ❮
                  </button>
                  <button className="btn btn-circle" onClick={nextSlide}>
                     ❯
                  </button>
               </div>
            </div>
         ))}
      </div>
   );
};

export default ImagesCarousel;
