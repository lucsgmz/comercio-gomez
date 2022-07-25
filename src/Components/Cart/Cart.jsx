import React from "react";
import { useContext } from "react";
import { DataContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeProduct, totalItems } = useContext(DataContext);
  return cart.length === 0 ? (
    <>
      {" "}
      <h1 className="text-center text-5xl font-semibold text-indigo-600 font-serif">
        SU CARRO ESTA VACIO
      </h1>
      <div className="flex justify-center">
        <Link
          to={`/`}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5 mr-2 -ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>{" "}
          COMPRAR
        </Link>
      </div>
    </>
  ) : (
    <>
      <div className="container mx-auto mt-10 mb-8">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Finalizando compra</h1>
        </div>
        {cart.map((row) => (
          <div className="flex " key={row.id}>
            <div className="w-full bg-white px-10 py-10">
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5"></h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Cantidad
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Precio
                </h3>
              </div>
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-29" src={row.pictureUrl} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{row.title}</span>
                    <span className="text-red-500 text-xs">{row.status}</span>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {row.cantidad}
                  </span>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  $ {row.precio}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  <button
                    onClick={() => removeProduct(row.id)}
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >
                    Remove
                  </button>
                </span>
              </div>
            </div>
          </div>
        ))}
        <div id="summary" className="w-1/4 px-8 py-10 bg-white w-full">
          <h1 className="font-semibold text-2xl border-b pb-8"></h1>

          <div className="border-t border-b  mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total product</span>
              <span> {totalItems(cart)}</span>
            </div>
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span> $ {cart.reduce((p, c) => p + c.precio, 0)}</span>
            </div>
            <Link to={`/`}>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                CheckOut
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
