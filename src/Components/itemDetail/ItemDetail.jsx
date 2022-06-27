import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ details }) => {
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/4 p-4 flex-none">
        <div className="backgroundCard max-w-sm rounded-lg shadow-md m-8 ">
          <div className="p-8 rounded-t-lg">
            <img src={details.img} alt={details.name} />
          </div>
          <div className="px-5 pb-5">
            <div>
              <h5 className="textCard text-xl font-semibold tracking-tight">
                {details.name}
              </h5>
            </div>

            <div className="flex justify-between items-center pt-4">
              <span className="priceCard text-3xl font-bold">
                ${details.price}
              </span>
              <ItemCount stock={5} initial={1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
