import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import logo from "../../images/logo.png";

const Navbar = () => {
   return (
      <nav className="navbar bg-base-100">
         <div className="flex-1">
            <img src={logo} alt="Logo" />
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
               {routes.map(({ title, path }) => (
                  <li key={path}>
                     <NavLink to={path}>{title}</NavLink>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
