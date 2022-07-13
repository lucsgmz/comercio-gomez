import React from "react";
import Swal from "sweetalert2";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DataContext } from "../../Context/CartContext";
import { useContext } from "react";


const ItemDetail = ({ id, price, title, status, pictureUrl}) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useContext(DataContext);
  
  const onAdd = (count) => {
    setGoToCart(true);
    addProduct({ id, price, title, status, pictureUrl}, count)

    let total = price * count;
    return Swal.fire({
      title: `Agregaste al carrito: ${count} ${title}|| Por un total de: $${total}`,
      text: ` Estado: ${status} `,
      imageUrl: pictureUrl,
      imageWidth: 200,
      imageHeight: 150,
      imageAlt: `${title}`,
    });
  };

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
           {
            goToCart
            
            ?           <Link to={`/Cart`}>
            <button class="relative w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Finalizar compra
              </span>
            </button>
          </Link>
            : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
           }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
