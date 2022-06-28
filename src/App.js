import NavBar from "./Components/NavBar/NavBar.jsx";
import "./App.css";
import Principal from "./Components/BannerPrincipal/Principal";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./Components/itemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
          </Routes>
        {/* <ItemListContainer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
