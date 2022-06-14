//@ts-check
import React from "react";
import carrito from "../Img/carrito.png";

function CartWidget() {
  return (
    <div className="flex flex-col lg:flex-row text-center">
      <a href="#">
        <img src={carrito} alt="ALGO" />
        <p className=" text-violet-700 font-mono">3</p>
      </a>
    </div>
  );
}
export default CartWidget