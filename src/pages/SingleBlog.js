import React from 'react'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft,HiOutlineArrowRight} from 'react-icons/hi';
import BreadCrumb from '../components/BreadCrumb';
const SingleBlog = () => {
  return (
    <>
      <Meta title={""}/>
      <BreadCrumb title={""}/>
      <div className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <div className="single-blog-card">
                    
                    <Link to='/blogs' className="d-flex gap-1 align-items-center">
                    <HiOutlineArrowLeft className="fs-5"/>
                      Go Back to Blogs
                      </Link>
                    <h3 className="title">
                      A Beautiful Sunday Morning Renaissance
                    </h3>
                    <img src="images/images/blog-1.jpg" className="img-fluid my-4 w-100" alt="blog"/>
                    <p>Adipisicing proident adipisicing ea aute.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlog