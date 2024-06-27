import { cn } from "../../lib/cn";

const SelectInput = ({
   children,
   label,
   labelPosition = "topStart",
   placeholder = "",
   className = "",
   required = false,
   ...rest
}) => {
   const labelTopStart = labelPosition === "topStart";
   const labelTopEnd = labelPosition === "topEnd";
   const labelBottomStart = labelPosition === "bottomStart";
   const labelBottomEnd = labelPosition === "bottomEnd";
   const labelTop = labelTopStart || labelTopEnd;
   const labelBottom = labelBottomStart || labelBottomEnd;

   label = required ? (
      <>
         {label}
         <span className="text-error">*</span>
      </>
   ) : (
      <>{label}</>
   );
   return (
      <label className={cn("form-control", className)}>
         {labelTop && (
            <div className="label *:font-semibold">
               {labelTopStart && <span className="label-text">{label}</span>}
               {labelTopEnd && <span className="label-text-alt">{label}</span>}
            </div>
         )}
         <select className="select select-bordered" {...rest}>
            <option value="">בחרו...</option>
            {children}
         </select>
         {labelBottom && (
            <div className="label *:font-semibold">
               {labelBottomStart && (
                  <span className="label-text-alt">{label}</span>
               )}
               {labelBottomEnd && (
                  <span className="label-text-alt">{label}</span>
               )}
            </div>
         )}
      </label>
   );
};

export default SelectInput;
