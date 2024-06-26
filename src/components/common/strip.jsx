import strip from "../../images/Strip.jpg";

const Strip = () => {
   return (
      <div
         className="h-[100px] md:h-[140px] w-screen"
         style={{
            backgroundImage: `url(${strip})`,
            backgroundPosition: "center top",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
         }}
      ></div>
   );
};

export default Strip;
