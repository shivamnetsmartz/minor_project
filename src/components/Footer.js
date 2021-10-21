import React from "react";
import { NavLink } from 'react-router-dom';
import "../Footer.css"
const footer = () => {
    return (


        <footer className="text-center text-lg-start bg-dark text-muted" id="footer">

            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >

                


                <div>
                <span className="span text-center mr-3">Get connected with us on social networks:</span>
      <div className="wrapper">
         <div className="icon facebook">
            <div className="tooltip">
               Facebook
            </div>
            <span><i className="fab fa-facebook-f"></i></span>
         </div>
         <div className="icon twitter">
            <div className="tooltip">
               Twitter
            </div>
            <span><i className="fab fa-twitter"></i></span>
         </div>
         <div className="icon instagram">
            <div className="tooltip">
               Instagram
            </div>
            <span><i className="fab fa-instagram"></i></span>
         </div>
         <div className="icon github">
            <div className="tooltip">
               Github
            </div>
            <span><i className="fab fa-github"></i></span>
         </div>
         <div className="icon youtube">
            <div className="tooltip">
               YouTube
            </div>
            <span><i className="fab fa-youtube"></i></span>
         </div>
      </div>
   
                </div>

            </section>



            <section className="">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3" id="row">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>SFS School
                            </h6>
                            <p className="text-justify">
                                Sebiz can help you achieve your IT and training goals. We are the IT partner you can depend on to increase business efficiencies and help your business be more visible online.  To date we have more than 3000 projects under our belt and many more underway.
                            </p>
                        </div>



                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>



                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fas fa-home me-3"></i> Plot No. IT-C-6 Sebiz Square IT Park Road, Sector 67, Sahibzada Ajit Singh Nagar, Punjab 160062</p>
                            <p><i className="fas fa-envelope me-3"></i>project@example.com</p>
                            <p><i className="fas fa-phone me-3"></i> +91-6283479730</p>
                           
                        </div>

                    </div>

                </div>
            </section>



            <div className="text-center p-4" id="copy">
                © 2021 Copyright:
                <NavLink className="text-reset fw-bold" to="/">SFS School</NavLink>
            </div>

        </footer>


    );
};

export default footer;
