import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, price, title, status, pictureUrl, details }) => {
  function onAdd() {
    alert("Producto agregado correctamente: " + title);
    return;
  }
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/4 p-4 flex-none centrado">
        <div
          className={
            "m-5 max-w-sm bg-grey rounded-lg border border-gray-200 shadow-md dark:border-gray-900 bg-stone-400/20"
          }
        >
          <img className="imgCard " src={pictureUrl} alt="img" />
          <div className="p-5 text-center">
            <h2
              className={
                "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black"
              }
            >
              {title}
            </h2>
            <div className="text-center">
              {" "}
              <p>
                <strong>Estado: {status}</strong>
              </p>
              <h4>
                {" "}
                <strong>$ {price}</strong>
              </h4>
            </div>
            <div className="pt-5">
              <ItemCount
                stock={5}
                initial={1}
                onAdd={onAdd}
                details={details}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
