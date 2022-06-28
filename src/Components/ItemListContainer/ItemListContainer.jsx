import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    let products = [
      {
        id: 1,
        title: "★ Driver Gloves | Imperial Plaid  ",
        status: "(Field-Tested)",
        price: 500,  
        pictureUrl:
          "https://static.wixstatic.com/media/80c5f0_14449f8b8a5641e4959c5f1bae47c51e~mv2.png/v1/fill/w_153,h_115,al_c,q_85,usm_0.66_1.00_0.01/80c5f0_14449f8b8a5641e4959c5f1bae47c51e~mv2.webp",
      },
      {
        id: 2,
        title: "StatTrak™ AWP | Hyper Beast  ",
        status: "(Well-Worn)",
        price: 600,
        pictureUrl:
          "https://static.wixstatic.com/media/80c5f0_26440b0362ae4c619f1c236f028189ae~mv2.png/v1/fill/w_153,h_115,al_c,q_85,usm_0.66_1.00_0.01/80c5f0_26440b0362ae4c619f1c236f028189ae~mv2.webp",
      },
      {
        id: 3,
        title: "StatTrak™ M4A4 | Cyber Security ",
        status: "(Field-Tested)",
        price: 700,
        pictureUrl:
          "https://static.wixstatic.com/media/80c5f0_0b7c063e8fb14a5d89e49ed517570d26~mv2.png/v1/fill/w_153,h_115,al_c,q_85,usm_0.66_1.00_0.01/80c5f0_0b7c063e8fb14a5d89e49ed517570d26~mv2.webp",
      },
      {
        id: 4,
        title: "★ Ursus Knife | Doppler Phase 1",
        status: "(Factory New)",
        price: 800,
        pictureUrl:
          "https://static.wixstatic.com/media/80c5f0_f8949ace1c5b4e498030cdde9fe4091f~mv2.png/v1/fill/w_153,h_115,al_c,q_85,usm_0.66_1.00_0.01/80c5f0_f8949ace1c5b4e498030cdde9fe4091f~mv2.webp",
      },
      {
        id: 5,
        title: "★ Falchion Knife | Tiger Tooth",
        status: "(Factory New)",
        pictureUrl:
          "https://static.wixstatic.com/media/eb7755_742688e05b62407a899ca5de489a76b1~mv2.png/v1/fill/w_153,h_115,al_c,q_85,usm_0.66_1.00_0.01/eb7755_742688e05b62407a899ca5de489a76b1~mv2.webp",
        price: "$67.900,00",
      },
      {
        id: 6,
        title: "AWP | Neo-Noir (Field-Tested)",
        status: "(Field-Tested)",
        pictureUrl:
          "https://static.wixstatic.com/media/80c5f0_f0832452044e47b98ba7bf6238018268~mv2.png/v1/fill/w_153,h_115,al_c,q_85,usm_0.66_1.00_0.01/80c5f0_f0832452044e47b98ba7bf6238018268~mv2.webp",
        price: "$67.900,00",
      },
      {
        id: 7,
        title: "M4A1-S | Chantico's Fire",
        status: "(Field-Tested)",
        pictureUrl:
          "https://static.wixstatic.com/media/80c5f0_0e23733962844fdb9100daf9d2329978~mv2.png/v1/fill/w_153,h_115,al_c,q_85,usm_0.66_1.00_0.01/80c5f0_0e23733962844fdb9100daf9d2329978~mv2.webp",
        price: "$67.900,00",
      },
      {
        id: 8,
        title: "AK-47   |   Neon Rider ",
        status: "(Field-Tested)",
        pictureUrl:
          "https://static.wixstatic.com/media/80c5f0_e8f0dbe71c0e4e09ad5714d27b1af473~mv2.png/v1/fill/w_153,h_115,al_c,q_85,usm_0.66_1.00_0.01/80c5f0_e8f0dbe71c0e4e09ad5714d27b1af473~mv2.webp",
        price: "$67.900,00",
      },
      {
        id: 9,
        title: "Sir Bloody Miami Darryl | The Professionals",
        status: "Character",
        pictureUrl:
          "https://static.wixstatic.com/media/80c5f0_f9ae0a744ce84df89f693bcb44e19c76~mv2.png/v1/fill/w_153,h_115,al_c,q_85,usm_0.66_1.00_0.01/80c5f0_f9ae0a744ce84df89f693bcb44e19c76~mv2.webp",
        price: "$67.900,00",
      }
    ];

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    }).then((res) => {
      setProductlist(res);
    });
  }, []);

  return (
    <>
      <ItemList productlist={productlist} />
    </>
  );
}
