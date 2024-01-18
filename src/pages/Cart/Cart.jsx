import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as ordersAPI from "../../utilities/order-api";
import * as usersAPI from "../../utilities/users-api";
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


  const handlePayment = async () => {
   
      window.paypal
        .Buttons({
          createOrder: async (data, actions) => {
            const cart = ordersAPI.getCart()
            const response = await fetch('/api/cart', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                cart: cart.lineItems.map(item => ({
                  id: item.id,
                  quantity: item.quantity,
                })),
              }),
            });

            const order = await response.json();

            return order.id;
          },
          onApprove: async (data, actions) => {
            const captureResult = await actions.order.capture();
            console.log('Payment successful. Capture result:', captureResult);

            navigate('/success');
          },
          onError: (error) => {
            console.error('Error during payment:', error);
          },
        })
        .render('#paypal-button-container');
 
  };

  return (
    <main className="CartPage">
      {cart.lineItems && cart.lineItems.length > 0 ? (
        <>
          <OrderDetail
            order={cart}
            handleChangeQty={handleChangeQty}
            handleCheckout={handlePayment}
          />
          <div id="paypal-button-container"></div>
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
          <p>Empty Cart</p>
        </div>
      )}
    </main>
  );
}
