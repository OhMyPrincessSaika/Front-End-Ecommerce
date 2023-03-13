import React from 'react'
import BreadCrumb from '../components/BreadCrumb.js';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard.js';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import {MdFavoriteBorder,MdOutlineCompare} from 'react-icons/md';
const SingleProduct = () => {
  const ratingChanged = (e) => {
    console.log(e)
  }
  const copyToClipBoard = (text) => {
    console.log("text" ,text);
    navigator.clipboard.writeText(text);
  }
  const props = {width: 400, height:500, zoomWidth: 600, img: "https://i5.walmartimages.com/asr/b0831758-8d31-4dbd-bc29-90ff6694292d.543c455362168b7273806c2f0d1af9ff.jpeg"}
  const [orderedProduct, setOrderedProduct] = React.useState(true);
  return (
    <>
        <BreadCrumb title={"Single Product"}/>
        <Meta title={"Single Product"}/>
        <div className="main-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl p-3">
                <div className='row'>
                    <div className="col-6">
                        <div className="main-product-image">
                        <div className="react-zoom-image">
                            <ReactImageZoom {...props}/>
                        </div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-2">
                            <div>
                                <img src="https://cdn.mos.cms.futurecdn.net/BfnZtDrEwhZvABetukx8aL-1200-80.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div>
                                <img src="https://cdn.mos.cms.futurecdn.net/BfnZtDrEwhZvABetukx8aL-1200-80.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div>
                                <img src="https://cdn.mos.cms.futurecdn.net/BfnZtDrEwhZvABetukx8aL-1200-80.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div>
                                <img src="https://cdn.mos.cms.futurecdn.net/BfnZtDrEwhZvABetukx8aL-1200-80.jpg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className="title">
                                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                                </h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">$ 100</p>
                                <div className="d-flex align-items-center gap-1">
                                <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor="#ffd700"
                                        />
                                <p className="mb-0 t-review">(2 reviews)</p>
                                </div>
                                <a className="review-btn" href="#review">Write a review</a>
                            </div>
                            <div className="border-bottom">
                                <div className="d-flex gap-1 align-items-center">
                                    <h3 className="product-heading my-2">Type: </h3> <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-1 align-items-center">
                                    <h3 className="product-heading my-2">Brand: </h3> <p className="product-data">Havels</p>
                                </div>
                                <div className="d-flex gap-1 align-items-center">
                                    <h3 className="product-heading my-2">Category: </h3> <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-1 align-items-center">
                                    <h3 className="product-heading my-2">Tags: </h3> <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-1 align-items-center">
                                    <h3 className="product-heading my-2">Availability: </h3> <p className="product-data">In Stock</p>
                                </div>
                                <div className="d-flex gap-1 flex-column mt-2 mb-3">
                                    <h3 className="product-heading my-2">Size: </h3> 
                                    <div className="d-flex flex-wrap gap-1">
                                        <span className="badge border border-1 bg-white text-dark">S</span>
                                        <span className="badge border border-1 bg-white text-dark">M</span>
                                        <span className="badge border border-1 bg-white text-dark">XL</span>
                                        <span className="badge border border-1 bg-white text-dark">XXL</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-1 flex-column mt-2 mb-3">
                                    <h3 className="product-heading my-2">Color: </h3> <Color/>
                                </div>
                                <div className="d-flex align-items-center gap-2 flex-row mt-2 mb-3">
                                    <h3 className="product-heading my-2">Quantity: </h3> 
                                    <div className="">
                                        <input 
                                        className="form-control"
                                        type="number" 
                                        name="" 
                                        style={{"width":"70px"}}
                                        id=""/>
                                    </div>
                                    <div className="d-flex align-items-center gap-1 ms-5">
                                        <button className="button border-0" type="submit">
                                            Add to Cart
                                        </button>
                                        <button className="button border-0 signup" type="submit">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <div>
                                        <a href="">
                                            <MdOutlineCompare className="fs-5 me-2"/> Add to Compare</a>
                                    </div>
                                    <div>
                                        <a href="" >
                                            <MdFavoriteBorder className="fs-5 me-2"/> Add to Wishlist</a>
                                    </div>
                                </div>
                                <div className="d-flex flex-column gap-1">
                                    <h3 className="product-heading my-3">Shipping & Returns:</h3> 
                                    <p className="product-data">
                                        Free Shipping and returns available on all orders!<br/>
                                        We ship all US domestic orders within 
                                        <b>5-10 business days!</b>
                                    </p>
                                </div>
                                <div className="d-flex flex-column gap-1">
                                    <h3 className="product-heading my-3">Product Link:</h3> 
                                    <a
                                    href="javascript:void(0);"
                                    onClick={(e) => {
                                        copyToClipBoard('https://i5.walmartimages.com/asr/b0831758-8d31-4dbd-bc29-90ff6694292d.543c455362168b7273806c2f0d1af9ff.jpeg')
                                    }}>
                                        Copy Product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        <section className="description-wrapper  home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className='col-12'>
                        <h3 className="mb-3">Description</h3>
                        <div className="bg-white p-3">
                            <p>
                                Sit cupidatat qui laboris ex adipisicing dolor proident ullamco exercitation labore aliquip. Tempor consectetur consequat sunt proident ut cupidatat irure laborum anim. Nulla consequat laborum incididunt nulla id aute est sit aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="review" className="review-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3>Reviews</h3>
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4>Customer Reviews</h4>
                                    <div className="d-flex gap-1 align-items-center">
                                        <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor="#ffd700"
                                        />
                                        <p className="mb-0">Based on 2 Reviews</p>
                                    </div>
                                </div>
                                <div>
                                {
                                    orderedProduct
                                    &&
                                    <a className="text-dark text-decoration-underline" href="">Write A Review</a>
                                }
                                </div>
                            </div>
                            <div className="review-form py-4">
                        <form action="" className="d-flex gap-2 flex-column">
                            <div>
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div>
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div>
                                <input type="tel" className="form-control" placeholder="Mobile Number"/>
                            </div>
                            <div>
                                <textarea name="" id="" cols="30" rows="10" className="w-100 form-control"
                                placeholder="Comments"
                                >
                                </textarea>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="button border-0 mt-2">Submit</button>
                            </div>
                        </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review">
                                <div className="d-flex gap-1 align-items-center">
                                <h4 className="mb-0">Saika</h4>
                                <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor="#ffd700"
                                />
                                </div>
                                <p className="mt-3">
                                    Magna proident labore sint proident laboris ipsum laborum cupidatat reprehenderit enim fugiat tempor. Mollit nulla veniam consequat aliqua commodo exercitation dolor quis. Qui adipisicing do ullamco cillum anim. Fugiat ipsum ad eu deserunt nostrud quis ut laboris.
                                </p>
                                <p className="mt-3">
                                    Magna proident labore sint proident laboris ipsum laborum cupidatat reprehenderit enim fugiat tempor. Mollit nulla veniam consequat aliqua commodo exercitation dolor quis. Qui adipisicing do ullamco cillum anim. Fugiat ipsum ad eu deserunt nostrud quis ut laboris.
                                </p>
                                <p className="mt-3">
                                    Magna proident labore sint proident laboris ipsum laborum cupidatat reprehenderit enim fugiat tempor. Mollit nulla veniam consequat aliqua commodo exercitation dolor quis. Qui adipisicing do ullamco cillum anim. Fugiat ipsum ad eu deserunt nostrud quis ut laboris.
                                </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="popular-wrapper py-5 home-wrapper-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="section-heading">You May Also Like</h3>
                            </div>
                            <ProductCard/>
                           
                        </div>
                    </div>
        </section>
    </>
  )
}

export default SingleProduct