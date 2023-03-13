import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
  const ratingChanged = (e) => {
    console.log(e);
  }
  return (
    <div className="col-6 gap-4 my-2">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
              <div>
                <img src="images/images/watch.jpg" alt="watch" className="img-fluid"/>
              </div>
              <div>
                <div className="special-product-content">
                  <h5 className="brand">
                    Havels
                  </h5>
                  <h6 className="title">
                    Samsung Galaxy Note10+ Mobile Phone; Sim...
                  </h6>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className="price">
                  <span className="red-p">$1000</span>
                  &nbsp;
                  <strike>$799</strike>
                </p>
                <div className="discount-till d-flex align-items-center gap-1">
                  <p className="mb-0"><b>5</b>days</p>
                  <div className="d-flex gap-1">
                    <span className="badge bg-danger rounded-circle p-2">05</span>:
                    <span className="badge bg-danger rounded-circle p-2">10</span>:
                    <span className="badge bg-danger rounded-circle p-2">33</span>
                  </div>
                </div>
                <div className='prod-count my-3'>
                  <p>Count:<span>6</span></p>
                  <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <Link to="/" className="button">Add To Cart</Link>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct