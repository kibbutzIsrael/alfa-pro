import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
   return (
      <>
         <header></header>
         <main className="container mx-auto">
            <Routes>
               <Route path="/" element={<div>Hello</div>} />
            </Routes>
         </main>
         <footer></footer>
      </>
   );
}

export default App;
