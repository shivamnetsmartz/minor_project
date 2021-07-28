import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from "../images/white_logo_transparent.svg";
import '../navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <NavLink className="navbar-brand" to="/"><img src={logo} height="40%" width="30%" alt="" /></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="list">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">HOME <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">SIGNUP</NavLink>
                        </li>
                
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signin">ADMIN LOGIN</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/contact">CONTACT</NavLink>
                        </li>
                    </ul>

                    <form className="form-inline">
     
                            <div className="form-group mx-sm-3 mb-2">
                                
                                <input type="search" className="form-control" id="inputPassword2" placeholder="Search"/>
                               </div>
                             <NavLink className="nav-link btn btn-success mb-2" id="search" type="submit"to="/">Search</NavLink>
                    </form>

                        </div>
            </nav>



        </>
                )
}

                export default Navbar
