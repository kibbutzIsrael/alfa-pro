import PageTitle from "../common/pageTitle";
import { texts } from "../../lib/texts";
import Card from "../common/Card";
import carouselImage1 from "../../images/homeCarousel/homeCarousel1.jpg";
import carouselImage2 from "../../images/homeCarousel/homeCarousel2.jpg";
import carouselImage3 from "../../images/homeCarousel/homeCarousel3.jpg";
import { routes } from "../../routes";

const activities = Object.values(texts.activities);
const images = [carouselImage3, carouselImage2, carouselImage1];

const Home = () => {
   return (
      <section>
         <PageTitle title={texts.routesTitles.home} />
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {activities.map((activity, index) => (
               <Card
                  key={activity.title}
                  image={images[index]}
                  title={activity.title}
                  description={activity.description}
                  button={texts.common.join}
                  btnRedirect={routes.join.path}
               />
            ))}
         </div>
      </section>
   );
};

export default Home;
