import NavBar from "./Components/NavBar/NavBar.jsx";
import "./App.css";
import Principal from "./Components/BannerPrincipal/Principal";
import ItemCount from "./Components/ItemCount/ItemCount.js";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./Components/itemDetailContainer/ItemDetailContainer.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Principal />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
