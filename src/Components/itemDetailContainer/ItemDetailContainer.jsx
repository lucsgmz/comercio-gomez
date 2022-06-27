import productsData from "../productsData/weapons.json";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";

export default function ItemDetailContainer() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let products = [
      {
        id: 1,
        name: "★ Driver Gloves | Imperial Plaid (Field-Tested)",
        price: "67.900",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit..",
        img : "https://static.wixstatic.com/media/80c5f0_14449f8b8a5641e4959c5f1bae47c51e~mv2.png/v1/fill/w_153,h_115,al_c,q_85,usm_0.66_1.00_0.01/80c5f0_14449f8b8a5641e4959c5f1bae47c51e~mv2.webp"
    },
    {
        "id": 2,
        "name": "StatTrak™ AWP | Hyper Beas (Well-Worn)",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit..",
        "price ": "$67.900,00"
    },
    {
        "id": 3,
        "name": "StatTrak™ M4A4 | Cyber Security (Field-Tested)",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit..",
        "price ": "$67.900,00"
    },
    {
        "id": 4,
        "name": "★ StatTrak™ Ursus Knife | Doppler Phase 1 (Factory New)",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit..",
        "price ": "$67.900,00"
    },
    {
        "id": 5,
        "name": "★ Falchion Knife | Tiger Tooth (Factory New)",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit..",
        "price ": "$67.900,00"
    },
    {
        "id": 6,
        "name": "AWP | Neo-Noir (Field-Tested)",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit..",
        "price ": "$67.900,00"
    },
    {
        "id": 7,
        "name": "M4A1-S | Chantico's Fire (Field-Tested)",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit..",
        "price ": "$67.900,00"
    },
    {
        "id": 8,
        "name": "AK-47 | Neon Rider (Field-Tested)",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit..",
        "price ": "$67.900,00"
    },
    {
        "id": 9,
        "name": "★ Driver Gloves | Imperial Plaid (Field-Tested)",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit..",
        "price ": "$67.900,00"
    },
    {
        "id": 10,
        "name": "★ Driver Gloves | Imperial Plaid (Field-Tested)",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit..",
        "price ": "$67.900,00"
    }
  ];
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)  
      }, 3000);
      
    }).then((res) => {
      const item = res.find((item)=> item.id === 1/* Number(itemId) */)
      setDetails(item);
    });
  }, [id]);

  return (
    <div>
      <ItemDetail details={details} />
    </div>
  );
}
