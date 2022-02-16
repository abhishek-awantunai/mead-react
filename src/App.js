import React, { Component } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import PageNotFound from "./pages/404";
import Home from './pages/Home';
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

const routes = (
  <Router>
    <div className="container-fluid mt-5">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} >
          <Route path="detail" element={<ProductDetail />} />
        </Route>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  </Router>
);

class App extends Component {
  state = {  } 
  render() { 
    return (
        routes 
    );
  }
}

export default App;