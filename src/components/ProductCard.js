import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import {BsCart3,BsHeart} from 'react-icons/bs';
import {GrCompare} from 'react-icons/gr';
import {AiOutlineEye} from 'react-icons/ai';
const ProductCard = (props) => {
  const {grid,isStore} = props;
  console.log({isStore})
  const ratingChanged = (e) => {
    console.log(e);
  }
  return (
    <div className={`m-1 ${isStore} ? gr-${grid} : gr-3 `}>
       
        <div  className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <Link>
                <BsHeart className="fs-5 text-dark"/>
              </Link>
            </div>
            <Link to="/product/:id">
              <div className="product-img">
                  <img src="images/images/watch.jpg" className="img-fluid" alt="product"/>
                  <img src="images/images/watch1.jpg" className="img-fluid" alt="product"/>
              </div>
            </Link>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title">
                    Kids headphones bulk 10 pack multi colored for students
                </h5>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? `d-block` : `d-none`}`}>
                  Irure laborum ullamco sint qui ut Lorem incididunt minim nulla ullamco.
                </p>
                <p className="price">$1000.00</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-1">
                <Link to="/">
                  <GrCompare className="fs-5 text-dark"/>
                </Link>
                <Link to="/">
                  <AiOutlineEye className="fs-5 text-dark"/>
                </Link>
                <Link to='/'>
                  <BsCart3 className="fs-5 text-dark"/>
                </Link>
              </div>
            </div>
        </div>
    
      
      </div>
       
  )
}

export default ProductCard