import React from "react";
import Item from "../Item/Item";

export default function ItemList({ productlist }) {

  return (
    <div className="container mx-auto flex flex-wrap">
     {
      productlist.map((item)=>
      <Item  key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      pictureUrl={item.pictureUrl}/>
      )
     }
     
    
    </div>
    
  );
}
