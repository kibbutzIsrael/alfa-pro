import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigation/navbar";
import { routes } from "./routes";
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
               {routes.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
               ))}
            </Routes>
         </main>
         <footer></footer>
      </>
   );
}

export default App;
