import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as ordersAPI from '../../utilities/order-api';
import * as usersAPI from '../../utilities/users-api'
import OrderDetail from '../../components/Order/OrderDetail';
import LineItem from '../../components/Products/LineItem';
import empty from './empty.gif'
import {loadStripe} from '@stripe/stripe-js';

// import stripe from 'react-stripe-checkout';

export default function CartPage() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
        console.log(cart)
      }
      getCart();
    }, []);
  
    async function handleChangeQty(itemId, newQty) {
      const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
      setCart(updatedCart);
      console.log(updatedCart);
    }
  
    // async function handleCheckout() {
    //   await ordersAPI.checkout();
    //   navigate('/orders');
    // }
  
    const handlePayment = async()=>{

        if(usersAPI){
            
            const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
            const res = await fetch('https://api.stripe.com',{
              method : "POST",
              headers  : {
                "content-type" : "application/json"
              },
              body  : JSON.stringify(cart)
            })
            if(res.statusCode === 500) return;
  
            const data = await res.json()
            console.log(data)
  
            alert("Redirect to payment Gateway...!")
            stripePromise.redirectToCheckout({sessionId : data}) 
        }
        else{
          alert("You have not Login!")
          setTimeout(()=>{
            navigate("/login")
          },1000)
        }
      
    }
    return (
      <main className='CartPage'>
        {cart.lineItems && cart.lineItems.length > 0  ? (
             <>
             <OrderDetail
              order={cart}
              handleChangeQty={handleChangeQty}
              handleCheckout={handlePayment}
               />  
        
            </>
            
        ) : (
          <div  style={{ flex: '1', width: 'full', justifyContent: 'center', alignItems: 'center', flexDirection: 'col' }}>
          <img src={empty}/>

            <p>Empty Cart</p>
          </div>
        )}
      </main>
    );
  }