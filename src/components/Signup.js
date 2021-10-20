import React from 'react';
import signup from "../images/signup/signup.jpg";
import "../css/signup.css";
const Signup = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="card login-card">
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={signup} alt="register" className="login-card-img" />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">

                                <p className="login-card-description">Register into account</p>

                                <form className="register-form" id="register_form">
                                    <div className="form-group">
                                        <label for="username" className="sr-only">Enter Your Name</label>
                                        <input type="text" name="username" id="email" className="form-control" placeholder="Enter Your Name" />
                                    </div>

                                    <div className="form-group">
                                        <label for="email" className="sr-only">Enter Your Email</label>
                                        <input type="text" name="email" id="email" className="form-control" placeholder="Enter Your Email" />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label for="password" className="sr-only"> Enter Your Password</label>
                                        <input type="password" name="password" id="password" className="form-control" placeholder="***********" />
                                    </div>
                                
                                
                                    <div className="form-group mb-4">
                                        <label for="confirmPassword" className="sr-only"> Enter Your Password</label>
                                        <input type="password" name="confirmPassword" id="password" className="form-control" placeholder="***********" />
                                    </div>

                                    <div className="form-group form-button">
                                        <input type="submit" name="signup" id="signup" className="form-submit" value="register" />
                                    </div>
                                </form>


                                <nav className="login-card-footer-nav">
                                    <a href="#!" className="text-dark">I am already Register</a>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
