import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../src/style.css';
import { useEffect } from 'react';

import { MastersPage } from './pages/masters';
import { LoginPage } from './pages/login';
import { OrdersPage } from './pages/orders';
import { useAuth } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import { CustomersApi } from './api';

// import { Master } from './components/Master';

// import { OrderForm } from './pages/orders/components/OrderForm';
// import { OrdersList } from './pages/orders/components/OrdersList';

export default function App() {
  const  { isAuth, logout } = useAuth();

  // useEffect(() => {
  //   CustomersApi.getCustomers().then(list => console.log(list))
  // }, []);
  
  return (
  <div className='container'>

    {isAuth &&  <nav>
    <ul>
        <li><Link to="/">Заявки</Link></li>
        {/* <li><Link to="/login">Login</Link></li> */}
        <li><Link to="/masters">Мастера</Link></li>
      </ul>
      <button onClick={logout}>Выйти</button>
    </nav>}

    <Routes>
      {/* <PrivateRoute path="/" element={<OrdersPage />} /> */}
      <Route path="/" element={
        <PrivateRoute>
          <OrdersPage />
        </PrivateRoute>
      } />
      <Route path="/masters" element={
        <PrivateRoute>
          <MastersPage />
        </PrivateRoute>
      } />
      <Route path="/login" element={<LoginPage />} />
    </Routes>

    

    {/* <OrdersList />
    <OrderForm /> */}
    
  </div>
  );
}



