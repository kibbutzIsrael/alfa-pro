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

               <div className="timeline-box timeline-end text-xs sm:text-sm">
                  {title}
               </div>
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
      </ul>
   );
};

export default TimeLine;
