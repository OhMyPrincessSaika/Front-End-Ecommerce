import React from 'react'
import './App.css';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/Layout';
import PrivacyAndPolicy  from './pages/PrivacyAndPolicy'
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact';
import Store from './pages/Store';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import RefundPolicy from './pages/RefundPolicy';
import TermsAndConditions from './pages/TermsAndCondiitions';
import ShippingPolicy from './pages/ShippingPolicy';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
const App = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='/products' element={<Store/>}/>
                    <Route path="/product/:id" element={<SingleProduct/>}/>
                    <Route path='/blogs' element={<Blog/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/blog/:id" element={<SingleBlog/>}/>
                    <Route path='/compare-product' element={<CompareProduct/>}/>
                    <Route path="/wish-list" element={<WishList/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/> 
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    <Route path="reset-password" element={<ResetPassword/>}/>
                    <Route path="/privacy-policy" element={<PrivacyAndPolicy/>}/>
                    <Route path="/refund-policy" element={<RefundPolicy/>}/>
                    <Route path='/shipping-policy' element={<ShippingPolicy/>}/>
                    <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
                </Route>
                
            </Routes>
        </Router>
    </>
  )
}

export default App