import { Link } from "react-router-dom";

const Card = ({ image, title, description, button, btnRedirect }) => {
   return (
      <div className="card bg-base-100 w-full shadow-xl">
         <figure>
            <img src={image} alt="פרויקט אמץ סבא" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
               <Link to={btnRedirect} className="btn btn-primary">
                  {button}
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Card;
