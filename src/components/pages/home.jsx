import { routesTitles } from "../../routes";
import PageTitle from "../common/pageTitle";

const Home = () => {
   return (
      <section>
         <PageTitle title={routesTitles.home} />
      </section>
   );
};

export default Home;
