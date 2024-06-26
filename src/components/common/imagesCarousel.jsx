import carouselImage1 from "../../images/homeCarousel/homeCarousel1.jpg";
import carouselImage2 from "../../images/homeCarousel/homeCarousel2.jpg";
import carouselImage3 from "../../images/homeCarousel/homeCarousel3.jpg";
import carouselImage4 from "../../images/homeCarousel/homeCarousel4.jpg";

const carouselImages = [
   carouselImage1,
   carouselImage2,
   carouselImage3,
   carouselImage4,
];

const ImagesCarousel = () => {
   return (
      <div>
         <div className="carousel w-full h-[400px]">
            {carouselImages.map((image, index) => (
               <div
                  key={index}
                  id={`item${index + 1}`}
                  className="carousel-item w-full "
               >
                  <img
                     src={image}
                     className="w-full object-cover object-center"
                  />
               </div>
            ))}
         </div>
         <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
               1
            </a>
            <a href="#item2" className="btn btn-xs">
               2
            </a>
            <a href="#item3" className="btn btn-xs">
               3
            </a>
            <a href="#item4" className="btn btn-xs">
               4
            </a>
         </div>
      </div>
   );
};

export default ImagesCarousel;
