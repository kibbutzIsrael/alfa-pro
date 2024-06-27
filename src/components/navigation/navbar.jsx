import { NavLink } from "react-router-dom";
import { routesArray } from "../../routes";
import logo from "../../images/logo.png";
import { cn } from "../../lib/cn";

const Navbar = () => {
   return (
      <nav className="navbar bg-base-100 gap-3">
         <div className="shrink sm:navbar-start">
            <img src={logo} alt="Logo" />
         </div>
         <div className="navbar-center">
            <ul className="grid grid-cols-3 place-items-center gap-3">
               {routesArray.map(({ title, path }) => (
                  <li className="w-full" key={path}>
                     <NavLink
                        className={({ isActive }) =>
                           cn(
                              "btn w-full",
                              isActive
                                 ? "btn-primary btn-active w-full"
                                 : "btn-ghost"
                           )
                        }
                        to={path}
                     >
                        {title}
                     </NavLink>
                  </li>
               ))}
            </ul>
         </div>
         <div className="navbar-end justify-center hidden sm:flex">
            <div className="flex  gap-5 *:text-2xl">
               <i className="bi bi-facebook"></i>
               <i className="bi bi-whatsapp"></i>
               <i className="bi bi-instagram"></i>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
