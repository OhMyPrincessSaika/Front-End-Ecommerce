import React from 'react'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi';
import {HiOutlineInformationCircle} from 'react-icons/hi';
const Checkout = () => {
  return (
    <>
        <div className="py-5 home-wrapper-2 checkout-wrapper">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="website-name">Saika Store</h3>
                            <nav 
                            style ={{"--bs-breadcrumb-divider" : ">"}}
                            aria-label = "breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="/cart" className="text-dark">Cart</a>
                                    </li>
                                    &nbsp; /
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Information
                                    </li>
                                    &nbsp; /
                                    <li className="breadcrumb-item" aria-current="page">
                                        Shipping
                                    </li>
                                    &nbsp; /
                                    <li className="breadcrumb-item" aria-current="page">
                                        Payment
                                    </li>
                                </ol>
                            </nav>
                            <h4 className="title">Contact Information</h4>
                            <p className="user-details">
                                saikakawakita69@gmail.com
                            </p>
                            <form action="" className="d-flex flex-wrap gap-3 justify-content-between">
                                <div className="w-100">
                                    <select name="" className="form-control form-select" id="">
                                        <option value="" selected disabled>Select Country</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input className="form-control" placeholder="First Name" type="text"/>
                                </div>
                                <div className="flex-grow-1">
                                    <input className="form-control" placeholder="Last Name" type="text"/>
                                </div>
                                <div className="w-100">
                                    <input className="form-control" placeholder="Address" type="text"/>
                                </div>
                                <div className="w-100">
                                    <input className="form-control" placeholder="Apartment,Suite,etc." type="text"/>
                                </div>
                                <div className="flex-grow-1">
                                    <input className="form-control" type="text" placeholder="City"/>
                                </div>
                                <div className="flex-grow-1">
                                    <select name="" className="form-control form-select" id="">
                                        <option value="" selected disabled>
                                            Select State
                                        </option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input className="form-control" type="text" placeholder="Postal Code"/> 
                                </div>
                            </form>
                            <div className="w-100 my-4">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link to="/cart" className="text-dark">
                                        <BiArrowBack/>
                                        Return to Cart
                                    </Link>
                                    <Link to="/cart" className="button">Continue to Shipping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-bottom py-4">
                            <div className="d-flex align-items-center gap-1 justify-content-between">
                                <div className="w-75 d-flex gap-3">
                                    <div className="w-25 position-relative">
                                        <span
                                        style={{top:'2px',right:'2px'}}
                                        className="badge bg-secondary rounded-circle position-absolute">
                                            1
                                        </span>
                                        <img style={{borderRadius:'10px'}} src="/images/images/watch.jpg" className="img-fluid" alt="watch"/>
                                    </div>
                                    <div>
                                        <h5 className="title">Samsung Watch</h5>
                                        <p className="type">blah blah</p>
                                    </div>
                                </div>
                                <div>
                                    <h5>$100</h5>
                                </div>
                            </div>
                        </div> 
                        <div className="d-flex flex-column border-bottom py-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 total">Subtotal</p>
                                <p className="mb-0 total-price">$10000</p>
                            </div>   
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 total">Shipping</p>
                                <p className="mb-0 total-price">$10000</p>
                            </div>   
                        </div>  
                        <div className="d-flex justify-content-between align-items-center py-4 border-bottom">
                            <h4 className="total">Total</h4>
                            <h5 className="total-price">$10000</h5>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout