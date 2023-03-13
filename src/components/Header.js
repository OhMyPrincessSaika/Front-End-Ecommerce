import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import {BsSearch,BsPersonFill} from 'react-icons/bs';

import {VscGitCompare} from 'react-icons/vsc';
import {BsSuitHeartFill} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BiCategoryAlt} from 'react-icons/bi';
const Header = () => {
  return (
     <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6 ">
              <p className="text-end text-white mb-0">Hotline :<a className="text-white" href="tel:+95 781252825">+95781252825</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2">
            <h2>
              <Link className="text-white">Saika Store</Link>
            </h2>
          </div>
          <div className="col-5">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon2"/>
            <span className="input-group-text p-3" id="basic-addon2">
              <BsSearch className="fs-5"/>
            </span>
          </div>

          </div>
          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-around">
              <div>
                <Link to="/compare-product" className="text-white d-flex gap-1 align-items-center justify-content-center">
                  <VscGitCompare className="fs-3"/>
                  <p className="link-text mb-0">Compare<br/>Products</p>
                </Link>
              </div>
              <div>
                <Link to="/wish-list" className="text-white d-flex gap-2 align-items-center justify-content-center">
                  <BsSuitHeartFill className="fs-3"/>
                  <p className="link-text mb-0">Favorite<br/>WishList</p>
                </Link>
              </div>
              <div>
                <Link to="/login" className="text-white d-flex gap-2 align-items-center justify-content-center">
                  <BsPersonFill className="fs-3"/>
                  <p className="link-text mb-0">Log In<br/>Account</p>
                </Link>
              </div>
              <div>
                <Link to="/cart" className="text-white d-flex gap-1 align-items-center justify-content-center">
                  <AiOutlineShoppingCart className="fs-3"/>
                  <div className="link-text d-flex gap-1 flex-column justify-content-center">
                    <span className="bg-white badge rounded-3 text-dark">10</span>
                    <p className="mb-0">$100</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div> 
        </div>
      </header>
      <header className="header-lower py-3">
        <header className="container-xxl">
           <div className="row">
            <div className="col-12">
              <div className="menu d-flex align-items-center gap-5 justify-content-start">
                <div className="dropdown" style={{cursor:'pointer'}}>
                  <span className="dropdown-toggle gap-3 mb-0 text-white dropdown-toggle-no-caret d-flex align-items-center" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <BiCategoryAlt className="fs-4"/>
                    <h5 className="mb-0" >Shop Categories</h5>
                  </span>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                    <li><Link className="dropdown-item" to="/">Somethin else here</Link></li>
                  </ul>
                </div>
                <div className="menu-links mb-0">
                  <div className="d-flex gap-3 align-items-center gap-15">
                    <NavLink  to="/">Home</NavLink>
                    <NavLink  to="/products">Our Store</NavLink>
                    <NavLink  to="/blogs">Blogs</NavLink>
                    <NavLink  to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
           </div>
        </header>
      </header>
     </>
  )
}

export default Header