import React from "react";

export default function Item({ id, price, title, pictureUrl }) {
  return (
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/4 p-4 flex-none">
        <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-400/40 dark:border-gray-700 m-8">
          <div className="p-8 rounded-t-lg">
            <img src={pictureUrl} alt={title} />
          </div>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </div>
          <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${price}
              </span>
          </div>
        </div>
        </div>   
  );
}
