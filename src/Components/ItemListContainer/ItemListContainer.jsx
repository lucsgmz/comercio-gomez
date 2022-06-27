import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {

  const [productlist, setProductlist] = useState([])

  useEffect(() => {

    let products =[
      {id:1,
       title: '★ Driver Gloves | Imperial Plaid (Field-Tested) ',
       price:500,
       pictureUrl: 'https://static.wixstatic.com/media/80c5f0_14449f8b8a5641e4959c5f1bae47c51e~mv2.png/v1/fill/w_153,h_115,al_c,q_85,usm_0.66_1.00_0.01/80c5f0_14449f8b8a5641e4959c5f1bae47c51e~mv2.webp'
       },
       {id:2,
        title: 'StatTrak™ AWP | Hyper Beast (Well-Worn) ',
        price:600,
        pictureUrl: 'https://static.wixstatic.com/media/80c5f0_26440b0362ae4c619f1c236f028189ae~mv2.png/v1/fill/w_153,h_115,al_c,q_85,usm_0.66_1.00_0.01/80c5f0_26440b0362ae4c619f1c236f028189ae~mv2.webp'
        },
        {id:3,
          title: 'StatTrak™ M4A4 | Cyber Security (Field-Tested) ',
          price:700,
          pictureUrl: 'https://static.wixstatic.com/media/80c5f0_0b7c063e8fb14a5d89e49ed517570d26~mv2.png/v1/fill/w_153,h_115,al_c,q_85,usm_0.66_1.00_0.01/80c5f0_0b7c063e8fb14a5d89e49ed517570d26~mv2.webp'
          }, 
          {id:4,
            title: '★ Ursus Knife | Doppler Phase 1	(Factory New)',
            price:800,
            pictureUrl: 'https://static.wixstatic.com/media/80c5f0_f8949ace1c5b4e498030cdde9fe4091f~mv2.png/v1/fill/w_153,h_115,al_c,q_85,usm_0.66_1.00_0.01/80c5f0_f8949ace1c5b4e498030cdde9fe4091f~mv2.webp'
          }
    ]  

 new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(products)
      }, 2000)
    }).then((res) =>{
      setProductlist(res)
    });
  
    
  }, [])
  
  return (
    <>
  <ItemList productlist={productlist}/>  
    </>
  );
}


