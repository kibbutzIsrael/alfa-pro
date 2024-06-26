import PageTitle from "../common/pageTitle";
import { routesTitles } from "../../lib/texts";

const Home = () => {
   return (
      <section>
         <PageTitle title={routesTitles.home} />
      </section>
   );
};

export default Home;
