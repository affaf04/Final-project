import React from 'react';
import { useState, useEffect, useRef } from 'react';
import * as ordersAPI from '../../utilities/order-api';
import * as itemsAPI from '../../utilities/items-api';
import ProductsList from '../../components/Products/ProductsList';
import './popular.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function PopularItems() {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);

  useEffect(function() {
    async function getItem() {
    const items = await itemsAPI.getAll();
      // categoriesRef.current = items.reduce((cats, item) => {
      //   const cat = item.category.name;
      //   return cats.includes(cat) ? cats : [...cats, cat];
      // }, []);
      const filteredItems = items.filter(item => item.isPopular);
      setMenuItems(filteredItems);
      setActiveCat(categoriesRef.current[0]);
    }
    getItem();
    // async function getCart() {
    //   const cart = await ordersAPI.getCart();
    //   setCart(cart);
    // }
    // getCart();
  }, []);
 

  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    
    setCart(updatedCart);
    toast.success('Successfully added to cart');

  }


  console.log(menuItems)

  return (    
  
  <>

    <main className='pplr' >
   
      < ProductsList style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}
       menuItems={menuItems}

        handleAddToOrder={handleAddToOrder}
      />

<div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}}>

             <ToastContainer/>

      </div>

    </main>

    </>
  );
}