import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigation/navbar";
import { routesArray } from "./routes";
import Strip from "./components/common/strip";

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
            </Routes>
         </main>
         <footer></footer>
      </>
   );
}

export default App;
