import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/order-api';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import ProductsList from '../../components/Products/ProductsList';
import CategoryList from '../../components/Products/CategoryList';
import OrderDetail from '../../components/Order/OrderDetail';
import LogOut from '../../components/LogOut/LogOut';
import Header from '../../components/Header/Header'
import Cart from '../Cart/Cart';
// import Footer from '../../components/Footer/Footer'

export default function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
 

  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    
    setCart(updatedCart);
    alert ('successfully addded to cart')

  }

  // async function handleChangeQty(itemId, newQty) {
  //   const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
  //   setCart(updatedCart);
  // }

  // async function handleCheckout() {
  //   await ordersAPI.checkout();
  //   navigate('/orders');
  // }

  return (    
  
  <>
  {/* <Header user={user} setUser={setUser} /> */}

    <main className='NewOrderPage'>
      <aside>
        {/* <Logo /> */}
        <CategoryList
          categories={categoriesRef.current}
          cart={setCart}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn">PREVIOUS ORDERS</Link>
        <LogOut user={user} setUser={setUser} />
      </aside>
      <ProductsList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />

      {/* <Cart /> */}
      {/* <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      /> */}

      {/* < Footer /> */}
    </main>

    </>
  );
}