import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
const ResetPassword = () => {
  return (
    <>
        <Meta title={"Reset Password"}/>
        <BreadCrumb title={"Reset Password"}/>
        <div className="signup-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Reset Password</h3>
                        <form action="" className="flex-column d-flex gap-3">
                          
                            <div>
                                <input name="password" type="password" placeholder="New Password" className="form-control"/>
                            </div>
                            <div>
                                <input name="password" type="password" placeholder="Confirm Password" className="form-control"/>
                            </div>
                            <div className="d-flex  w-100 justify-content-center gap-1 align-items-center">
                                <button className="button border-0" type="submit">OK</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default ResetPassword