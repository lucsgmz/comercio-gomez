import React from "react";
function NavBar() {
  return (
    <div className="contenedor">
      <nav>
        <div class="nav-wrapper navColor">
          <img
            className="brand-logo center imgNav"
            src={require("../imagenes/logo1.jpg")}
          />
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li>
              <a href="sass.html">Inicio</a>
            </li>
            <li>
              <a href="badges.html">Ofertas</a>
            </li>
          </ul>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Contacto</a>
            </li>
            <li>
              <a href="badges.html">Reclamos</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="fondo"></div>
    </div>
  );
}
export default NavBar;
