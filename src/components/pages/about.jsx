import { texts } from "../../lib/texts";
import ImagesCarousel from "../common/imagesCarousel";
import PageTitle from "../common/pageTitle";

const About = () => {
   return (
      <section>
         <PageTitle title={texts.routesTitles.about} />
         <div className="grid grid-cols-2 gap-4">
            <ImagesCarousel />
            <p>{texts.about.description}</p>
         </div>
      </section>
   );
};

export default About;
