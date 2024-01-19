import React from 'react'
import { useState } from 'react';
import * as ordersAPI from '../../utilities/order-api';
import './popular.css'

function PopularItems() {
 
    const popularItems =  [
        {name: 'Bubble', img: 'https://cdn.accentuate.io/7180002689177/1651174231561/FreshStart_Primary_CutOut_01-2.png?v=1668706801111', price: 5.95},
        {name: 'Foundation', img: 'https://www.makeupforever.com/dw/image/v2/BCRL_PRD/on/demandware.static/-/Sites-Makeupforever_master_catalog/default/dwe03c0514/images/I000075106/US-3548752185189_I000075106_HD-SKIN-FOUNDATION-22-30ML-1N06_Face_0.png', price: 5.95},
        {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', price: 9.95},
        {name: 'Cerave', img: 'https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/products-v3/renewing-sa-cleanser/700x875/renewing_sa_cleanser_8oz_front_new-700x875-v2.jpg', price: 5.95},
        {name: 'Ahava -Darc circls', img: 'https://www.ahava.com/cdn/shop/products/dark-circles-and-uplift-eye-treatment.png',  price: 9.95},
        {name: 'Facial scrub for Oily skin', img : 'https://drthrowerskincare.com/cdn/shop/files/15_49480ad5-2c98-46a4-bbd8-fd5d813f9d7f.png', price: 3.95},


      ]

      const [cart, setCart] = useState(null);
       
     
       
    
  return (
    <div className='pplr'>
         {popularItems.map(p => (
        <div  key={p.id}>
          <p>Name: {p.name}</p>
          <img className='img 'src={p.img} alt={p.name} />
          <span>Price: ${p.price.toFixed(2)}</span>
          
        </div>
        
      ))}

    </div>
  )
}

export default PopularItems