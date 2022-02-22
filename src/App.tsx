import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Brand from './pages/brand/Brand';
import Category from './pages/category/Category';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Payment from './pages/payment/Payment';
import Product from './pages/product/Product';
import QuickOrder from './pages/quickOrder/QuickOrder';
import Search from './pages/search/Search';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/category" element={<Category />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/search" element={<Search />} />
      <Route path="/product" element={<Product />} />
      <Route path="/quick-order" element={<QuickOrder />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
