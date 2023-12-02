import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
 
  const { title,img, price} = service;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-orange-500">Price: ${price}</p>
          <div className="card-actions flex justify-end">
            <FaArrowRight className="text-2xl text-orange-500"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
