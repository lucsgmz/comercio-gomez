import NavBar from "./Components/NavBar/NavBar.jsx";
import "./App.css";
import Principal from "./Components/BannerPrincipal/Principal";
import ItemCount from "./Components/ItemCount.js";
import ItemListContainer from "./Components/ListContainer/ItemListContainer.jsx";

function App() {
  function onAdd() {
    alert("Producto agregado correctamente");  
  }
  return (
    <div>
      <NavBar />
      <Principal />
      <ItemCount
        initial={1}
        stock={5}
        onAdd={onAdd}
      />
    </div>
  );
}

export default App;
