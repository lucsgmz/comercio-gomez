import React, { createContext, useState} from 'react'

export const DataContext = createContext([]);


export default function CartContext({children}) {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
      return cart.find((product) => product.id === id);}

    const addProduct = (item, quantity) =>{
      console.log(item.id)
      console.log(!!isInCart(item.id))
      if (!!isInCart(item.id)){
        const newCart = cart;
        const auxCart = newCart.findIndex(product => product.id === item.id);
        newCart[auxCart]["cantidad"] += quantity;
        newCart[auxCart]["precio"] += (item.price * quantity)
        setCart([...newCart]);
      }else {
        setCart([...cart, {...item, cantidad:quantity, precio:item.price *quantity}]);
      }
      }
       
    const clearCart = () => setCart([])

    
    const removeProduct = (id) => {setCart(cart.filter(product => product.id !== id));}

    function totalItems(cart) {
      return cart.reduce((prev,next) => prev + next.cantidad, 0);
    }

  return (
    <DataContext.Provider value = {{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        cart, 
        totalItems

    }}>
        {children}
    </DataContext.Provider>
  )
}
