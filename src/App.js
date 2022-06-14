import NavBar from './Components/NavBar'
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import Principal from './Components/Principal';
import Saludo from './Components/Saludo.jsx'



function App() {
  return (
    <div>
      <NavBar/>
      <Saludo greeting="Bienvenidos a la lista de productos!"/>
      <ItemListContainer
            title="★ Driver Gloves | Imperial Plaid (Field-Tested) "         
            price="$67.900,00"
          />
    </div>
  );
}

export default App;
