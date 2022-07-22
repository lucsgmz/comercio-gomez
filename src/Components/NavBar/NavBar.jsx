import React from "react";
import logo from "../Img/logo.png";
import menu from "../Img/menu.png";
import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "../ShoppingCart/CartWidget";

function NavBar() {
  function openMenu() {
    let menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  }
  return (
    <div>
      <nav className=" backgroundNav py-6 relative">
        <div className="container mx-auto flex px-8 xl:px-0">
          <div className="flex flex-grow items-center">
            <Link to={`/`}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <img src={menu} alt="menu" onClick={openMenu} />
          </div>
          <div
            id="menu"
            className="lg:flex hidden flex-grow justify-between absolute lg:top-0  top-20 left-0 bg-gray-800 lg:bg-black lg:relative w-full lg:w-auto items-center py-10 lg:py-0 px-8 "
          >
            <div className="flex flex-col lg:flex-row mb-6 lg:mb-0">
              <Link to={`/`}>
                <button className="navItemColor lg:mr-7 mb-6 lg:mb-0 font-mono focus:outline-none">
                  Home
                </button>
              </Link>
              
                <div className="dropdown">
                  <button className=" navItemColor lg:mr-7 mb-6 lg:mb-0 font-mono focus:outline-none">
                    <span className="">Estado</span>
                    <svg
                      className="fill-current h-4 w-4 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden lg:mr-7 mb-6 lg:mb-0 bg-violet-800 pt-1 dropMenu opacity-100">
                    <li className=""><Link to={"/category/Field-Tested"} class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Field-Tested</Link></li>
                    <li className=""><Link to={"/category/FactoryNew"} class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Factory New</Link></li>
                  </ul>
                </div>
              
              <Link to ={`/`}
                href="#"
                className="navItemColor lg:mr-7 mb-6 lg:mb-0 font-mono focus:outline-none"
              >
                Contacto
              </Link>
            </div>
            <div>
              <Link to="/Cart"><CartWidget /></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
