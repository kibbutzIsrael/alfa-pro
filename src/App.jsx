import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigation/navbar";
import { adminRoutes, adminRoutesArray, notFound, routesArray } from "./routes";
import Strip from "./components/common/strip";
import NotFound from "./components/pages/404";

function App() {
   return (
      <>
         <header>
            <Navbar />
            <Strip />
         </header>
         <main className="container mx-auto p-3">
            <Routes>
               {routesArray.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
               ))}

               {adminRoutesArray.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
               ))}

               <Route path={notFound.path} element={<NotFound />} />
            </Routes>
         </main>
         <footer></footer>
      </>
   );
}

export default App;
