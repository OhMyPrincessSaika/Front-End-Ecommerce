import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
const WishList = () => {
  return (
    <>
        <Meta title={"Wish List"}/>
        <BreadCrumb title={"Wish List"}/>
        <div className="wishlist-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="wish-list-card position-relative">
                            <img src="images/images/cross.svg" 
                            alt="cross" 
                            className="position-absolute cross img-fluid"/>
                            <div className="wishlist-card-image">
                                <img src="images/images/watch.jpg" 
                                alt="watch" className="img-fluid"/>
                            </div>
                            <div className="py-3">
                                <h5 className="title">Tempor in consectetur labore reprehenderit ullamco velit in culpa nostrud dolor velit exercitation.</h5>
                                <h6 className="price">$100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wish-list-card position-relative">
                            <img src="images/images/cross.svg" 
                            alt="cross" 
                            className="position-absolute cross img-fluid"/>
                            <div className="wishlist-card-image">
                                <img src="images/images/watch.jpg" 
                                alt="watch" className="img-fluid"/>
                            </div>
                            <div className="py-3">
                                <h5 className="title">Tempor in consectetur labore reprehenderit ullamco velit in culpa nostrud dolor velit exercitation.</h5>
                                <h6 className="price">$100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wish-list-card position-relative">
                            <img src="images/images/cross.svg" 
                            alt="cross" 
                            className="position-absolute cross img-fluid"/>
                            <div className="wishlist-card-image">
                                <img src="images/images/watch.jpg" 
                                alt="watch" className="img-fluid"/>
                            </div>
                            <div className="py-3">
                                <h5 className="title">Tempor in consectetur labore reprehenderit ullamco velit in culpa nostrud dolor velit exercitation.</h5>
                                <h6 className="price">$100</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WishList