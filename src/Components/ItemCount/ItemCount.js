import React, { useState, useEffect } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count >= stock) {
      alert("maximo producto permitido");
      return;
    }
    setCount(count + 1);
  };
  const decrement = () => {
    if (count <= 1) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <div className="flex justify-around items-center">
        <div className="flex items-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 m-1 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
          onClick={decrement}
        >
          -
        </button>
        <p className="text-white bg-blue-700   font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 ">
          {count}
        </p>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 m-1 focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
          onClick={increment}
        >
          +
        </button>
        </div>
        <button
          onClick={() => onAdd(count)}
          className=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-800 dark:hover:bg-green-500 dark:focus:ring-blue-800"
        >
          {" "}
          COMPRAR
        </button>
      </div>
      
    </>
  );
}
