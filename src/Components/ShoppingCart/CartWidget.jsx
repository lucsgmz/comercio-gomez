
import carrito from "../Img/carrito.png";
import React from "react";
import { useContext } from "react";
import { DataContext } from "../../Context/CartContext";



const CartWidget = () => {
const {totalItems, cart} =useContext(DataContext);
  return (
    cart.length >= 1 ?(
    <div className="flex flex-col lg:flex-row text-center">
      <button href="#">
        <img src={carrito} alt="ALGO" />
        <p className="bg-red-600">{totalItems(cart)}</p>
       </button>
    </div> ) :( 
       <div className="flex flex-col lg:flex-row text-center">
       <button href="#">
         <img src={carrito} alt="ALGO" />
        </button>
     </div>
    )
  )
}
export default CartWidget