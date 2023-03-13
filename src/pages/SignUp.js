import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const SignUp = () => {
  return (
    <>
        <Meta title={"Sign Up"}/>
        <BreadCrumb title={"Sign Up"}/>
        <div className="signup-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Sign Up</h3>
                        <form action="" className="flex-column d-flex gap-3">
                            <div>
                                <input type="text" name="name" placeholder="Name" className="form-control"/>
                            </div>
                            <div>
                                <input type="email" placeholder="Email" className="form-control"/>
                            </div>
                            <div>
                                <input type="tel" placeholder="Mobile Number" className="form-control"/>
                            </div>
                            <div>
                                <input type="password" placeholder="Password" className="form-control"/>
                            </div>
                            <div className="d-flex  w-100 justify-content-center gap-1 align-items-center">
                                <button className="button border-0" type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp