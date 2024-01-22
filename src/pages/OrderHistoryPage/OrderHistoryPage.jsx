import './historystyle.css';
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/order-api';
// import LogOut from '../../components/LogOut/LogOut';
import OrderList from '../../components/Order/OrderList';
import OrderDetail from '../../components/Order/OrderDetail';

export default function OrderHistoryPage({ user, setUser }) {
  /*--- State --- */
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  /*--- Side Effects --- */
  useEffect(function () {
    // Load previous orders (paid)
    async function fetchOrderHistory() {
      const orders = await ordersAPI.getOrderHistory();
      setOrders(orders);
      // If no orders, activeOrder will be set to null below
      setActiveOrder(orders[0] || null);
    }
    fetchOrderHistory();
  }, []);

  /*--- Event Handlers --- */
  function handleSelectOrder(order) {
    setActiveOrder(order);
  }

  /*--- Rendered UI --- */
  return (
    <main className='pplr'>
   
      <div style={{ border: '2px solid #e28975'}}>
         <OrderList  

        orders={orders}
        activeOrder={activeOrder}
        handleSelectOrder={handleSelectOrder}
      />
      </div>
     <div >
       <OrderDetail
        order={activeOrder}
      />
     </div>
     
    </main>
  );
}