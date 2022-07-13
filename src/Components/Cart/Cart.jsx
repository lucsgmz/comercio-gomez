import React from "react";
import { useContext } from "react";
import { DataContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, clearCart,  removeProduct} = useContext(DataContext);
  return (
    <>
      <div className="container mx-auto mt-10">
        {cart.map((row) => (
          <div class="flex shadow-md my-10" key={row.id}>
            <div class="w-3/4 bg-white px-10 py-10" >
              <div class="flex justify-between border-b pb-8">
                <h1 class="font-semibold text-2xl">Finalizando compra</h1>
              </div>
              <div class="flex mt-10 mb-5">
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Productos
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Cantidad
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Precio
                </h3>
              </div>
              <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" >
                <div class="flex w-2/5" >
                  <div class="w-20" >
                    <img class="h-29" src={row.pictureUrl} alt="" />
                  </div>
                  <div class="flex flex-col justify-between ml-4 flex-grow" >
                    <span class="font-bold text-sm">{row.title}</span>
                    <span class="text-red-500 text-xs">{row.status}</span>
                    <button
                      onClick={removeProduct}
                      class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div class="flex justify-center w-1/5">
                  <span class="text-center w-1/5 font-semibold text-sm">
                    {row.count}
                  </span>
                </div>
                <span class="text-center w-1/5 font-semibold text-sm">
                  ${row.price}
                </span>
                <span class="text-center w-1/5 font-semibold text-sm">
                 
                </span>
              </div>

              <Link to={`/`}
              class="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  class="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            <div id="summary" class="w-1/4 px-8 py-10">
              <h1 class="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div class="flex justify-between mt-10 mb-5">
                <span class="font-semibold text-sm uppercase">{row.title}</span>
                <span class="font-semibold text-sm">x {row.count}</span>
              </div>
              <div class="border-t mt-8">
                <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span> ${row.price * row.count}</span>
                </div>
                <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
