import React from "react";
import banner1 from "../images/banner.jpeg";
import banner2 from "../images/banner2.jpeg";
import banner3 from "../images/banner3.jpeg";
import course1 from "../images/course1.jpeg";
import course2 from "../images/course2.jpeg";
import course3 from "../images/course3.jpeg";
import course4 from "../images/university.jpg";
import partners1 from "../images/partners/our_partner-1.png";
import partners2 from "../images/partners/our_partner-2.jpg";
import partners3 from "../images/partners/our_partner-3.jpg";
import partners4 from "../images/partners/our_partner-4.jpg";
import partners5 from "../images/partners/our_partner-5.jpg";

import partners7 from "../images/partners/our_partner-7.png";

import partners9 from "../images/partners/our_partner-9.png";
import partners10 from "../images/partners/our_partner-10.png";
import partners11 from "../images/partners/our_partner-11.png";
import partners12 from "../images/partners/our_partner-12.jpg";
import mean from "../images/mean.png";
import mern from "../images/MERN.png";
import java from "../images/java.png";
import python from "../images/python.jpg";



const Home = () => {
    return (
        <>
            {/* banner */}


            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" data-interval="4000">
    <div class="carousel-item active">
      <img class="d-block w-100" src={banner1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={banner2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={banner3} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

            {/* cards */}
            <div className="container-fluid">
                <h1 className="text-center mt-3">Highlights of Sebiz Finishing School</h1>
                <div className="row">

                    <div className="col-lg-3 mt-5 " id="card-hover">
                        <div className="card">
                            <img class="card-img-top" src={course1} alt="Card img" />
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">Best Industry Leader</h5>
                                <p class="card-text">
                                    SFS partners with well known colleges in the region to offer 6 week and 6 month courses on campus in .Net, PHP, iPhone, Android, Java and QA.communication skills are also taught at SFS.
                                </p>
                                <a href="#!" class="btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-5 " id="card-hover">
                        <div className="card">
                            <img class="card-img-top" src={course4} alt="Card img" />
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">Great Faculty & Infrastructure</h5>
                                <p class="card-text ">
                                    The faculty at SFS are highly qualified and trained professionals. They are conversant with the latest technologies and programming languages. Besides high quality training and intensive lab work.

                                </p>
                                <a href="#!" class="btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 mt-5 " id="card-hover">
                        <div className="card">
                            <img class="card-img-top" src={course3} alt="Card imag" />
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">Learn Courses Online</h5>
                                <p class="card-text">
                                    The Sebiz Finishing School came into existence with the purpose of brushing up skills of fresh IT graduates to make them industry-ready. Today SFS is fast becoming an education hub in the Tricity area.
                                </p>
                                <a href="#!" class="btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 mt-5" id="card-hover">
                        <div className="card">
                            <img class="card-img-top" src={course2} alt="Card imag" />
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">Industrial Training</h5>
                                <p class="card-text">
                                    SFS offers high quality courses of 6 Months & 6 Weeks duration within the Sebiz facility with courses covering .Net, PHP, iPhone, Android and Java. Courses in allied subjects like HR are also offered.
                                </p>
                                <a href="#!" class="btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            {/* our top courses */}

<div className="container-fluid">
                <h1 className="text-center mt-3">Highlights of Our top Courses</h1>
                <div className="row">

                    <div className="col-lg-3 mt-5 " id="card-hover">
                        <div className="card">
                            <img class="card-img-top" src={mean} alt="Card img" />
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">MEAN Stack</h5>
                                <p class="card-text">
                                MEAN is a free and open-source JavaScript software stack for building dynamic web sites and web applications. MEAN stack support programs that are written in JavaScript, MEAN applications can be written in one language for both server-side and client-side execution environments.
                                </p>
                                <a href="#!" class="btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-5 " id="card-hover">
                        <div className="card">
                            <img class="card-img-top" src={mern} alt="Card img" />
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">MERN Stack</h5>
                                <p class="card-text ">
                                MERN is a free and open-source JavaScript software stack for building dynamic web sites and web applications. MERN stack support programs that are written in JavaScript, MERN applications can be written in one language for both server-side and client-side execution environments.

                                </p>
                                <a href="#!" class="btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 mt-5 " id="card-hover">
                        <div className="card">
                            <img class="card-img-top" src={java} alt="Card imag" />
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">Java</h5>
                                <p class="card-text">
                                Java is a programming language. Java is a high level, robust, object-oriented and secure programming language. Before Java, its name was Oak. Since Oak was already a registered company, so James Gosling and his team changed the Oak name to Java.Java can help reduce costs, drive innovation.
                                </p>
                                <a href="#!" class="btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 mt-5" id="card-hover">
                        <div className="card">
                            <img class="card-img-top" src={python} alt="Card imag" />
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">Python</h5>
                                <p class="card-text">
                                Python is a high-level, interpreted, object-oriented scripting language. Python is often used as a support language for software developers, for build control and management, testing, and in many other ways. Building embedded systems and robots. You'll also find ideas for practical projects.
                                </p>
                                <a href="#!" class="btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* company */}


            <div class="container-fluid" id="partner">
                <div class="row1">
                    <h3 className="text-center mt-3 h2">Over 1500 students placed in premier IT companies</h3><br />
                    <p class="text-center mt-2 h4">PARTIAL LIST OF COMPANIES</p><br />

                    <div className="col-sm-12 col-lg-12 col-md-12" id="partner1">
                        <img src={partners1} alt="" class="card-hover img-thumbnail mr-2 mb-2" />
                        <img src={partners2} alt="" class="card-hover img-thumbnail mr-2 mb-2" />
                        <img src={partners3} alt="" class="card-hover img-thumbnail mr-2 mb-2" />
                        <img src={partners4} alt="" class="card-hover img-thumbnail mr-2 mb-2" />
                        <img src={partners5} alt="" class="card-hover img-thumbnail mr-2 mb-2" />
                      
                    </div>


                    <div className=" col-lg-12  " id="partner1">
                        <img src={partners7} alt="" class="card-hover img-thumbnail mr-2 mb-2" />
                       
                        <img src={partners9} alt="" class="card-hover img-thumbnail mr-2 mb-2" />
                        <img src={partners10} alt="" class="card-hover img-thumbnail mr-2 mb-2" />
                        <img src={partners11} alt="" class="card-hover img-thumbnail mr-2 mb-2" />
                        <img src={partners12} alt="" class="card-hover img-thumbnail mr-2 mb-2" />
                    </div>

                </div>
            </div>

<footer/>
        </>
    );
};

export default Home;
