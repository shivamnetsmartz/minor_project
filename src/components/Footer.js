import React from "react";
import { NavLink } from 'react-router-dom';
import "../Footer.css"
const footer = () => {
    return (


        <footer class="text-center text-lg-start bg-dark text-muted" id="footer">

            <section
                class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >

                


                <div>
                <span className="span text-center mr-3">Get connected with us on social networks:</span>
      <div class="wrapper">
         <div class="icon facebook">
            <div class="tooltip">
               Facebook
            </div>
            <span><i class="fab fa-facebook-f"></i></span>
         </div>
         <div class="icon twitter">
            <div class="tooltip">
               Twitter
            </div>
            <span><i class="fab fa-twitter"></i></span>
         </div>
         <div class="icon instagram">
            <div class="tooltip">
               Instagram
            </div>
            <span><i class="fab fa-instagram"></i></span>
         </div>
         <div class="icon github">
            <div class="tooltip">
               Github
            </div>
            <span><i class="fab fa-github"></i></span>
         </div>
         <div class="icon youtube">
            <div class="tooltip">
               YouTube
            </div>
            <span><i class="fab fa-youtube"></i></span>
         </div>
      </div>
   
                </div>

            </section>



            <section class="">
                <div class="container text-center text-md-start mt-5">

                    <div class="row mt-3" id="row">

                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-gem me-3"></i>SFS School
                            </h6>
                            <p className="text-justify">
                                Sebiz can help you achieve your IT and training goals. We are the IT partner you can depend on to increase business efficiencies and help your business be more visible online.  To date we have more than 3000 projects under our belt and many more underway.
                            </p>
                        </div>



                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Laravel</a>
                            </p>
                        </div>



                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Help</a>
                            </p>
                        </div>

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i class="fas fa-home me-3"></i> Plot No. IT-C-6 Sebiz Square IT Park Road, Sector 67, Sahibzada Ajit Singh Nagar, Punjab 160062</p>
                            <p><i class="fas fa-envelope me-3"></i>project@example.com</p>
                            <p><i class="fas fa-phone me-3"></i> +91-6283479730</p>
                           
                        </div>

                    </div>

                </div>
            </section>



            <div class="text-center p-4" id="copy">
                © 2021 Copyright:
                <NavLink class="text-reset fw-bold" to="/">SFS School</NavLink>
            </div>

        </footer>


    );
};

export default footer;
