import { texts } from "../../lib/texts";
import ImagesCarousel from "../common/imagesCarousel";
import PageTitle from "../common/pageTitle";
import logoLG from "../../images/logo-lg.png";

const About = () => {
   return (
      <section>
         <PageTitle title={texts.routesTitles.about} />
         <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-2 gap-4">
            <div className="h-[300px] w-full order-last sm:order-first">
               <ImagesCarousel />
            </div>
            <div className="flex flex-col">
               <img
                  src={logoLG}
                  alt="log"
                  className="h-[120px] object-contain"
               />
               <p className="p-1">{texts.about.description}</p>
               <div className="btn btn-primary">{texts.common.join}</div>
            </div>
         </div>
      </section>
   );
};

export default About;
