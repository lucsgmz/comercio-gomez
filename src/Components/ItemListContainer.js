import React from "react";
import guantes from "../Img/guantes.webp";
function ItemListContainer({ title, price }) {
  return (
    <div className="itemListContainer">
      <div className="container mx-auto flex px-8">
        <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-400/40 dark:border-gray-700 m-8">
          <div className="p-8 rounded-t-lg">
            <img src={guantes} alt="guantes" />
          </div>
          <div className="px-5 pb-5">
            <div>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {price}
              </span>
              <button
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar a carrito{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
