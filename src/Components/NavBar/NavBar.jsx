import React from "react";
import logo from "../Img/logo.png";
import menu from "../Img/menu.png"
import "../NavBar/NavBar.css"
import CartWidget from "../ShoppingCart/CartWidget";

function NavBar() {
  function openMenu(){
    let menu = document.getElementById('menu');
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else {
        menu.classList.add('hidden');
    }
}
  return (
    <div>
    <nav className="bg-black py-6 relative">
      <div className="container mx-auto flex px-8 xl:px-0">
        <div className="flex flex-grow items-center">
          <img src={logo} alt="" />
        </div>
        <div className="flex lg:hidden">
          <img src={menu} alt="menu" onClick={openMenu}/>
        </div>
        <div
          id="menu"
          className="lg:flex hidden flex-grow justify-between absolute lg:top-0  top-20 left-0 bg-gray-800 lg:bg-black lg:relative w-full lg:w-auto items-center py-10 lg:py-0 px-8 "
        >
          <div className="flex flex-col lg:flex-row mb-6 lg:mb-0">
            <a
              href="#"
              className="text-gray-300 lg:mr-7 mb-6 lg:mb-0 font-mono hover:text-stone-600 focus:outline-none"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 lg:mr-7 mb-6 lg:mb-0 font-mono hover:text-stone-600 focus:outline-none"
            >
              Tienda
            </a>
            <a
              href="#"
              className="text-gray-300 lg:mr-7 mb-6 lg:mb-0 font-mono hover:text-stone-600 focus:outline-none"
            >
              Contacto
            </a>
          </div>
          <div>
            <CartWidget/>
          </div>
        </div>
      </div>
    </nav>   
    </div>
  );
}

export default NavBar;
