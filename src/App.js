import React, { useState } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import styles from './App.css';
import { getUser } from './utilities/users-service';
import AuthPage from './pages/AuthPage/AuthPage'
import NewOrderPage from './pages/NewOrderPage/NewOrderPage'
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage'
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Cart from './pages/Cart/Cart';
import Makeup from './pages/Makeup/Makeup';
import Footer from './components/Footer/Footer';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>

      <Header user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage user={user} setUser={setUser} />} />

        {user ? (
          <>
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            <Route path='/cart' element ={<Cart user={user} setUser={setUser} />} />
            <Route path='/search' element ={<Makeup user={user} setUser={setUser} />} />
            <Route path="/*" element={<Navigate to="/orders/new" />} />

          </>
        ) : (
          <Route path="/*" element={<Navigate to="/auth" />} />
        )}
      </Routes>
      <Footer />
    </main>
  );
}
