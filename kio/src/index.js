import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import GetOrder from './GetOrder';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
<<<<<<< HEAD
import SignUp from './SignUp';
import Stores from './stores';
import StoreDetail from './StoreDetail';
import MenuDetail from './MenuDetail';
import MenuBoard from './MenuBoard';



=======
>>>>>>> 6a8db427 (first commit)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<Login />} /> 
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<GetOrder />} />
        <Route path="/signUp" element={<SignUp />} />  
        <Route path="/stores" element={<Stores />} />
        <Route path="/store/:storeId" element={<StoreDetail />} />  
        <Route path="/MenuDetail" element={<MenuDetail />} />
        <Route path="/menus/:storeId" element={<MenuBoard />} />
=======
      <Route path="/login" element={<Login />} />
        <Route path="/" element={<Menu />} />
        <Route path="/orders" element={<GetOrder />} />
>>>>>>> 6a8db427 (first commit)
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
