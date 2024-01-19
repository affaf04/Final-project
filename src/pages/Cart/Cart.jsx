import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as ordersAPI from "../../utilities/order-api";
import OrderDetail from "../../components/Order/OrderDetail";
import empty from "./empty.gif";


export default function CartPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCart() {
      try {
        const cartData = await ordersAPI.getCart();
        setCart(cartData);
        console.log(cartData);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    }

    getCart();
  }, []);

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);

    console.log(updatedCart);
  }
  
  async function handleCheckout() {
      await ordersAPI.checkout();
      navigate('/orders');
    }
  
  
  
  
  
  
  
  return (
    <main className="CartPage">
      {cart.lineItems && cart.lineItems.length > 0 ? (
        <>
          <OrderDetail
            order={cart}
            handleChangeQty={handleChangeQty}
            handleCheckout={ handleCheckout}
          />
        </>
      ) : (
        <div
          style={{
            flex: '1',
            width: 'full',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <img src={empty} alt="Empty Cart" />
          <p>Nothing in your cart </p>
        </div>
      )}
    </main>
  );
}