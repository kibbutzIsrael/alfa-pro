import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import Join from "./components/pages/join";
import { routesTitles } from "./lib/texts";

export const routes = [
   { title: routesTitles.home, path: "/", element: <Home /> },
   { title: routesTitles.about, path: "/about", element: <About /> },
   { title: routesTitles.contact, path: "/contact", element: <Contact /> },
   { title: routesTitles.join, path: "/join", element: <Join /> },
];
