import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {AiOutlineHome,AiOutlineInfoCircle} from 'react-icons/ai';
import {BiPhoneCall} from 'react-icons/bi';
import {CiMail} from 'react-icons/ci';
const Contact = () => {
  return (
     <div>
        <BreadCrumb title={"Contact Us"}/>
        <Meta  title={"Contact Us"}/>
        <div className="contact-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
               <div className="row">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61084.639440177816!2d96.15661191569247!3d16.8862814253528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193b44e8b67b3%3A0xb50d88d2ceee17e7!2sNorth%20Dagon%20Township%2C%20Yangon!5e0!3m2!1sen!2smm!4v1678031579105!5m2!1sen!2smm"
                width={600} 
                height={450} 
                className='border-0 w-100'
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
               </div>
               <div className="col-12 mt-5">
                  <div className="contact-inner-wrapper d-flex justify-content-between ">
                     <div>
                        <h3 className="contact-title mb-4">Contact</h3>
                        <form action="">
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
                           <div>
                              <button className="button border-0 mt-2">Submit</button>
                           </div>
                        </form>
                     </div>
                     <div>
                        <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                        <div>
                           <ul className="ps-0">
                              <li className="mb-3 d-flex gap-2  align-items-center">
                                 <AiOutlineHome className="fs-5"/>
                                 <address className="mb-0">No.883, Bo Saw Oo(2)St.Dagon Myothit(North),Yangon,Myanmar</address>
                              </li>
                              <li className="mb-3 d-flex gap-2  align-items-center">
                                 <BiPhoneCall className="fs-5"/>
                                 <a href="tel:+95 781252825">+95 781252825</a>
                              </li>
                              <li className="mb-3 d-flex gap-2  align-items-center">
                                 <CiMail className="fs-5"/>
                                 <a href="mailto:saikakawakita69@gmail.com">saikakawakita69@gmail.com</a>
                              </li>
                              <li className="mb-3 d-flex gap-2  align-items-center">
                                 <AiOutlineInfoCircle className="fs-5"/>
                                 <p className="mb-0">Monday-Friday 10AM - 8PM</p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </div>
     </div>
  )
}

export default Contact