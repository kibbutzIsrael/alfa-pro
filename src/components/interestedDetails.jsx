import { format } from "date-fns";
import { texts } from "../lib/texts";

const InterestedDetails = ({ interested }) => {
   if (!interested) return null;
   interested.createdAt = format(Date(interested.createdAt), "dd/MM/yyyy");
   const userFields = texts.userObject;
   const fieldsKeys = Object.keys(userFields);

   return (
      <div className="overflow-x-auto space-y-3">
         <table className="table table-sm table-zebra">
            <tbody>
               {fieldsKeys.map((fieldKey) => (
                  <tr key={fieldKey}>
                     <th>{userFields[fieldKey]}</th>
                     <td>{interested[fieldKey] || "-"}</td>
                  </tr>
               ))}
            </tbody>
         </table>
         <div className="grid grid-cols-2 gap-3">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-error">Decline</button>
         </div>
      </div>
   );
};

export default InterestedDetails;
