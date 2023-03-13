import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import {AiOutlineDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Cart = () => {
  return (
    <>
        <BreadCrumb title={"Cart"}/>
        <Meta title={"Cart"}/>
        <div className="cart-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header d-flex justify-content-between align-items-center">
                            <h4 className="cart-col-1">Product</h4>
                            <h4 className="cart-col-2">Price</h4>
                            <h4 className="cart-col-3">Quantity</h4>
                            <h4 className="cart-col-4">Total</h4>
                        </div>
                        <div className="cart-data py-3 mb-2 gap-1 d-flex justify-content-between align-items-center">
                            <div className="cart-col-1 d-flex align-items-center">
                                <div className="w-25">
                                    <img src='images/images/watch.jpg' className="img-fluid" alt="product-img"/>
                                </div>
                                <div className="w-75">
                                    <p >dfdffd</p>
                                    <p >dfd</p>
                                    <p >3dfas</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">$ 1000</h5>
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-1">
                                <div>
                                    <input
                                    className="form-control" 
                                    type="number" 
                                    name="" 
                                    min={1}
                                    max={10}
                                    id=""/>
                                </div>
                                <div>
                                    <AiOutlineDelete className="text-danger"/>
                                </div>
                            </div>
                            <div className="cart-col-4">
                            <h5 className="price">$ 1000</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 mt-4">
                       <div className="d-flex justify-content-between align-items-center">
                        <Link to="/products" className="button">Continue To Shopping</Link>
                        <div className="d-flex  align-items-end flex-column">
                            <h4>Subtotal : $1000 </h4>
                            <p>Taxes and shipping calculated at checkout</p>
                            <Link to="/checkout" className="button">Checkout</Link>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default Cart