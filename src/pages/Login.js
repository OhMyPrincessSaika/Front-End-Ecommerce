import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
        <BreadCrumb title={"Login"}/>
        <Meta title={"Login"}/>
        <div className="login-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Login</h3>
                        <form action="" className="flex-column d-flex gap-3">
                            <div>
                                <input type="email" placeholder="Email" className="form-control"/>
                            </div>
                            <div>
                                <input type="password" placeholder="Password" className="form-control"/>
                            </div>
                            <div>
                                <Link to="/forgot-password">Forgot Password</Link>
                            </div>
                            <div className="d-flex jusitfy-content-center gap-1 align-items-center">
                                <button className="button border-0">Login</button>
                                <Link to="/sign-up" className="button  border-0 signup">Sign Up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login