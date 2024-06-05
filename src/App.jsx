import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigation/navigation";
import Home from "./components/pages/home";

function App() {
   return (
      <>
         <header>
            <Navbar />
         </header>
         <main className="container mx-auto p-3">
            <Routes>
               <Route path="/" element={<Home />} />
            </Routes>
         </main>
         <footer></footer>
      </>
   );
}

export default App;
