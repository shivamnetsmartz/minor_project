import React from 'react'
import login from "../images/login.jpg";
import logo from "../images/logo.svg"
// import { NavLink } from 'react-router-dom';
const Signin = () => {
    return (

        <>
          
    <div className="container mt-5">
      <div className="card login-card">
        <div className="row no-gutters">
          <div className="col-md-5">
            <img src={login} alt="login" className="login-card-img"/>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <div className="brand-wrapper">
                <img src={logo} alt="logo" className="logo"/>
              </div>
              <p className="login-card-description">Login into admin account</p>
              <form action="#!">
                  <div className="form-group">
                    <label for="email" className="sr-only">Username</label>
                    <input type="email" name="username" id="email" className="form-control" placeholder="Username"/>
                  </div>
                  <div className="form-group mb-4">
                    <label for="password" className="sr-only">Password</label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="***********"/>
                  </div>
                  <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Login"/>
                </form>
                <a href="#!" className="forgot-password-link text-dark">Forgot password?</a>
              
                <nav className="login-card-footer-nav">
                  <a href="#!" className="text-dark">Terms of use.</a>
                  <a href="#!" className="text-dark">Privacy policy</a>
                </nav>
            </div>
          </div>
        </div>
      </div>
</div>
        </>

    )
}

export default Signin
