//@ts-check
import React from "react";
import "../NavBar/NavBar";
import ItemListContainer from "../ItemListContainer";
import ItemCount from '../ItemCount';

function Principal() {
  return (
    <div className="imagen">
      <ItemListContainer
            title="★ Driver Gloves | Imperial Plaid (Field-Tested) "         
            price="$67.900,00"
          />
          <ItemCount
          stock={10}
          initial={1}
          onAdd={"onAdd"}
          />
    </div>
  );
}

export default Principal;
