import productsData from "../productsData/weapons.json";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";

export default function ItemDetailContainer() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsData.find(product => product ))  
      }, 3000);
      console.log(productsData);
    }).then((res) => {
      setDetails(res);
    });
  }, [id]);

  return (
    <div>
      <ItemDetail details={details} />
    </div>
  );
}
