//@ts-check
import carrito from "../Img/carrito.png";

function CartWidget() {

  return (
    <div className="flex flex-col lg:flex-row text-center">
      <a href="#">
        <img src={carrito} alt="ALGO" />
       
      </a>
    
      
    </div>
  );
}
export default CartWidget