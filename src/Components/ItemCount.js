import React, { useState, useEffect } from "react";
import awp from "./Img/awp.webp";
export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count >= stock) {
      alert('maximo producto permitido')
      return
    }
    setCount(count + 1);
  };
  const decrement = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };
  function onAdd() {
    if(count ===0){
      return
    }
    alert("Producto agregado correctamente")
    setCount(0)
  }

  return (
    <div className="container mx-auto flex px-8">
      <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-400/40 dark:border-gray-700 m-8">
        <div className="p-8 rounded-t-lg">
          <img src={awp} alt="guantes" />
        </div>
        <div className="px-5 pb-5">
          <div>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              StatTrak™ AWP | Hyper Beast (Well-Worn)
            </h5>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $10,000
            </span>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={decrement}>-</button>
            <p className="text-white bg-blue-700  focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 ">
              {count}
            </p>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={increment}>+</button>
            <button onClick={() => onAdd(count) }className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
