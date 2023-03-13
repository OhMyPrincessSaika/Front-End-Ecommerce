import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    
        <div className="blog-card">
            <div className="card-image">
                <img src="images/images/blog-1.jpg" className="img-fluid w-100" alt="blog"/>
            </div>
            <div className="blog-content">
                <p className="date">27th May, 2002</p>
                <h5 className="title">
                    A Beautiful Sunday Morning Renaissance
                </h5>
                <p className="desc">
                    LoremEsse minim cupidatat reprehenderit duis mollit consectetur cupidatat ut elit mollit laboris. Id nulla eiusmod dolore ex eu ad commodo quis 
                </p>
                <Link to="/blog/:id" className="button">Read More</Link>
            </div>
        </div>
   
  )
}

export default BlogCard