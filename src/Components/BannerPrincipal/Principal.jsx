//@ts-check
import React from "react";
import "../NavBar/NavBar";
import ItemListContainer from "../ListContainer/ItemListContainer";
import ItemCount from '../ItemCount';

function Principal() {
  return (
    <div className="imagen">
      <ItemCount initial={1} stock={5} onAdd/>
      <ItemListContainer/>
      
    </div>
  );
}

export default Principal;
