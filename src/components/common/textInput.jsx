const TextInput = ({ label, labelPosition = "topStart", placeholder = "" }) => {
   const labelTopStart = labelPosition === "topStart";
   const labelTopEnd = labelPosition === "topEnd";
   const labelBottomStart = labelPosition === "bottomStart";
   const labelBottomEnd = labelPosition === "bottomEnd";

   return (
      <label className="form-control w-full">
         <div className="label *:font-semibold">
            {labelTopStart && (
               <span className="label-text">What is your name?</span>
            )}
            {labelTopEnd && (
               <span className="label-text-alt">Top Right label</span>
            )}
         </div>
         <input
            type="text"
            placeholder={placeholder}
            className="input input-bordered w-full"
         />
         <div className="label *:font-semibold">
            {labelBottomStart && (
               <span className="label-text-alt">Bottom Left label</span>
            )}
            {labelBottomEnd && (
               <span className="label-text-alt">Bottom Right label</span>
            )}
         </div>
      </label>
   );
};

export default TextInput;
