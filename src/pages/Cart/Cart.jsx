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
    initiatePayPalPayment(updatedCart);

    console.log(updatedCart);

  }async function initiatePayPalPayment(cart) {
  try {
    const response = await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lineItems: cart.lineItems,
        totalAmount: cart.orderTotal,
      }),
    });

    const order = await response.json();

    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return {
          purchase_units: [{
            items: cart.lineItems.map(item => ({
              name: item.itemId,
              quantity: item.newQty,
              unit_amount: {
                currency_code: 'USD',
                value: item.totalQty,
              },
            })),
            amount: {
              currency_code: 'USD',
              value: cart.orderTotal,
            },
          }],
        };
      },
      onApprove: async (data, actions) => {
        const captureResult = await actions.order.capture();
        console.log('Payment successful. Capture result:', captureResult);

        navigate('/success');
      },
      onError: (error) => {
        console.error('Error during payment:', error);
      },
    }).render('#paypal-button-container');
  } catch (error) {
    console.error('Error initiating PayPal payment:', error);
  }
}

  
  return (
    <main className="CartPage">
      {cart.lineItems && cart.lineItems.length > 0 ? (
        <>
          <OrderDetail
            order={cart}
            handleChangeQty={handleChangeQty}
            handleCheckout={ initiatePayPalPayment}
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
