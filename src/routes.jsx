import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import Join from "./components/pages/join";
import { texts } from "./lib/texts";

export const routes = {
   home: { title: texts.routesTitles.home, path: "/", element: <Home /> },
   join: { title: texts.routesTitles.join, path: "/join", element: <Join /> },
   about: {
      title: texts.routesTitles.about,
      path: "/about",
      element: <About />,
   },
   contact: {
      title: texts.routesTitles.contact,
      path: "/contact",
      element: <Contact />,
   },
};

export const routesArray = Object.values(routes);
