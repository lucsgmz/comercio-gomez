//@ts-check
import React from "react";
import "../Components/NavBar";
import ItemListContainer from "../Components/ItemListContainer";

function Principal() {
  return (
    <div className="imagen">
      <div className="container mx-auto flex px-8">
        <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-400/40 dark:border-gray-700 m-8">
          <ItemListContainer
            title="★ Driver Gloves | Imperial Plaid (Field-Tested) "         
            price="$67.900,00"
          />
        </div>  
      </div>
      
    </div>
  );
}

export default Principal;
