import NavBar from "./Components/NavBar/NavBar.jsx";
import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./Components/itemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataContext from "./Context/CartContext.js";
import Cart from "./Components/Cart/Cart.jsx";

function App() {
  return (
    <>
      
        <BrowserRouter>
        <DataContext>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<Cart/>} />
          </Routes>
          {/* <ItemListContainer /> */}
        </DataContext>
        </BrowserRouter>
      
    </>
  );
}

export default App;
