import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'
const CompareProduct = () => {
  return (
    <>
        <Meta title={"Compare Products"}/>
        <BreadCrumb title={"Compare Products"}/>
        <div className="compare-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="compare-product-card position-relative">
                  <img src="images/images/cross.svg" alt="cross" className="position-absolute cross"/>
                  <div className="product-card-image">
                    <img src="images/images/watch.jpg" className="img-fluid" alt="watch"/>
                  </div>
                  <div className="compare-product-details">
                    <h5 className="title">
                      Honor T1 7.0.1 GB RAM 8 GB 7 Inch  With WiFi+5G Tablet
                    </h5>
                    <h6 className="price mt-3 mb-3">$1000</h6>
                    <div>
                      <div className="product-detail">
                        <h5>Brand:</h5>
                        <p className="mb-0">Havels</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type:</h5>
                        <p className="mb-0">Watch</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability:</h5>
                        <p className="mb-0">In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Color:</h5>
                        <Color/>
                      </div>
                      <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-1">
                          <p>5</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="compare-product-card position-relative">
                  <img src="images/images/cross.svg" alt="cross" className="position-absolute cross"/>
                  <div className="product-card-image">
                    <img src="images/images/watch.jpg" className="img-fluid" alt="watch"/>
                  </div>
                  <div className="compare-product-details">
                    <h5 className="title">
                      Honor T1 7.0.1 GB RAM 8 GB 7 Inch  With WiFi+5G Tablet
                    </h5>
                    <h6 className="price mt-3 mb-3">$1000</h6>
                    <div>
                      <div className="product-detail">
                        <h5>Brand:</h5>
                        <p className="mb-0">Havels</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type:</h5>
                        <p className="mb-0">Watch</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability:</h5>
                        <p className="mb-0">In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Color:</h5>
                        <Color/>
                      </div>
                      <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-1">
                          <p>5</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
    </>
  )
}

export default CompareProduct