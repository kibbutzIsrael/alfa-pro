import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import Join from "./components/pages/join";
import Login from "./components/pages/login";
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

export const adminRoutes = {
   main: {
      title: texts.routesTitles.admin,
      path: "/admin",
      element: <div>admin</div>,
   },
   login: {
      title: texts.routesTitles.login,
      path: "/admin/login",
      element: <Login />,
   },
   volunteers: {
      title: texts.routesTitles.volunteers,
      path: "/admin/volunteers",
      element: <div>volunteers</div>,
   },
};
export const notFound = {
   title: texts.routesTitles.notFound,
   path: "*",
   element: <div>not found</div>,
};

export const routesArray = Object.values(routes);
export const adminRoutesArray = Object.values(adminRoutes);
