import { useState } from "react";
import { useInterested } from "../../hooks/swr/useInterested";
import { texts } from "../../lib/texts";
import Modal from "../common/modal";
import PageTitle from "../common/pageTitle";
import { openModal } from "../../lib/modalFns";
import InterestedDetails from "../interestedDetails";

const Interested = () => {
   const { interested, isLoading, isError } = useInterested();
   const [currentInterested, setCurrentInterested] = useState(null);
   if (isError) return <div>Error</div>;
   if (isLoading) return;
   const modalId = "interested-details";

   function handleClick(interested) {
      setCurrentInterested(interested);
      openModal(modalId);
   }

   const { userFields } = texts;
   const tableFields = [userFields.name, userFields.phone, userFields.status];
   return (
      <section>
         <PageTitle title={texts.routesTitles.interested} />
         <div className="overflow-x-auto">
            <table className="table table-sm table-zebra">
               {/* head */}
               <thead>
                  <tr>
                     <th>#</th>
                     {tableFields.map((field) => (
                        <th key={field}>{field}</th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {interested.map((interested, index) => (
                     <tr
                        onClick={() => handleClick(interested)}
                        key={interested.email}
                     >
                        <th>{index + 1}</th>
                        <td>{interested.fullName}</td>
                        <td>{interested.phoneNumber}</td>
                        <td>
                           <div className="size-3 rounded-full bg-warning"></div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         <Modal modalId={modalId}>
            <InterestedDetails interested={currentInterested} />
         </Modal>
      </section>
   );
};

export default Interested;
