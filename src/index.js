import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/home'
import Category from './pages/category'
import Product from './pages/product'
import Welcome from './pages/welcome'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NewUser from './components/NewUser';

const routes = (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/welcome/*" element={<Welcome />} >
        <Route path="new" element={<NewUser />} />
      </Route>
      <Route path="/category" element={<Category />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  </BrowserRouter>)

ReactDom.render(routes, document.getElementById('root'));