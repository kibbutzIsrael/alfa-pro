import { Link } from "react-router-dom";
import { adminRoutes } from "../../routes";
import { useInterested } from "../../hooks/swr/useInterested";

const Admin = () => {
   const { numOfInterested } = useInterested();

   return (
      <section>
         <div className="grid grid-cols-2 gap-4">
            <Link
               to={adminRoutes.interested.path}
               className="bg-base-200 rounded-box h-[100px] grid place-items-center"
            >
               <div className="flex flex-col items-center">
                  <div className="relative">
                     <div className="flex items-center">
                        <span className="text-2xl text-warning">•</span>
                        {adminRoutes.interested.title}
                     </div>
                  </div>
                  <span className="text-2xl text-warning">
                     {numOfInterested}
                  </span>
               </div>
            </Link>
            <Link
               to={adminRoutes.volunteers.path}
               className="bg-base-200 rounded-box h-[100px] grid place-items-center"
            >
               <div className="flex flex-col items-center">
                  <div className="relative">
                     <div className="flex items-center">
                        <span className="text-2xl text-success">•</span>
                        {adminRoutes.volunteers.title}
                     </div>
                  </div>
                  <span className="text-2xl text-success">12</span>
               </div>
            </Link>
         </div>
      </section>
   );
};

export default Admin;
