import { cn } from "../../lib/cn";

const TimeLine = ({ data = [{ title: "title", completed: true }] }) => {
   return (
      <ul className="timeline timeline-compact">
         {data.map(({ title, completed }, index, array) => (
            <li key={title} className="flex-1">
               {index >= 1 && (
                  <hr
                     className={cn(array[index - 1]?.completed && "bg-primary")}
                  />
               )}

               <div className="timeline-box timeline-end">{title}</div>
               <div className="timeline-middle">
                  {completed ? (
                     <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                  ) : (
                     <i className="bi bi-dash-circle-fill text-neutral-500 text-xl"></i>
                  )}
               </div>
               {index !== data.length - 1 && (
                  <hr className={cn(completed && "bg-primary")} />
               )}
            </li>
         ))}
         {/* <li>
            <div className="timeline-start timeline-box">{step}</div>
            <div className="timeline-middle">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-primary h-5 w-5"
               >
                  <path
                     fillRule="evenodd"
                     d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                     clipRule="evenodd"
                  />
               </svg>
            </div>
            <hr className="bg-primary" />
         </li> */}
         {/* <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-primary h-5 w-5"
               >
                  <path
                     fillRule="evenodd"
                     d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                     clipRule="evenodd"
                  />
               </svg>
            </div>
            <div className="timeline-end timeline-box">iMac</div>
            <hr className="bg-primary" />
         </li>
         <li>
            <hr className="bg-primary" />
            <div className="timeline-start timeline-box">iPod</div>
            <div className="timeline-middle">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-primary h-5 w-5"
               >
                  <path
                     fillRule="evenodd"
                     d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                     clipRule="evenodd"
                  />
               </svg>
            </div>
            <hr />
         </li>
         <li>
            <hr />
            <div className="timeline-middle">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
               >
                  <path
                     fillRule="evenodd"
                     d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                     clipRule="evenodd"
                  />
               </svg>
            </div>
            <div className="timeline-end timeline-box">iPhone</div>
            <hr />
         </li>
         <li>
            <hr />
            <div className="timeline-start timeline-box">Apple Watch</div>
            <div className="timeline-middle">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
               >
                  <path
                     fillRule="evenodd"
                     d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                     clipRule="evenodd"
                  />
               </svg>
            </div>
         </li> */}
      </ul>
   );
};

export default TimeLine;
