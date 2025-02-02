import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const WelcomePage = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="/" style={{ color: "white" }}>
                        <h3>SPSS</h3>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="/" style={{ color: "white" }}>
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" style={{ color: "white" }}>
                                <Link to="/InstructorLogin" style={{ textDecoration: "none", color: "inherit" }}>
                                    Instructor Login </Link>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" style={{ color: "white" }}>
                                <Link to="/StudentLogin" style={{ textDecoration: "none", color: "inherit" }}>
                                    Student Login </Link>
                                </a>
                            </li>
                            
                           



                            
                        </ul>
                    </div>
                </div>
            </nav>



            
            <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img src="/home.jpg"  
            className="img-fluid mb-4" 
            style={{ maxHeight: '300px', objectFit: 'cover' , borderRadius: '10px'}} // Responsive image styling
          />
        </div>
        <div className="col-md-6 text-center">
          <h1 className="display-4">Welcome To SPSS</h1>
          <p className="lead">"An online project submission system revolutionizes the way we 
            share ideas and collaborate, transforming the tedious process of submitting work into a seamless experience that fosters creativity, 
            enhances organization, and ensures that every contribution is valued and easily accessible."</p>
          <hr className="my-4" />
          <p>Are You a <strong>Student ?</strong> Log in to get started.</p>
          <div className="mt-4">

           <Link to="/StudentRegistrationForm" style={{ textDecoration: "none", color: "inherit" }}>

            <a className="btn btn-primary btn-lg me-2" href="/signup" role="button">Sign Up</a></Link> 
            
            <Link to="/StudentLogin" style={{ textDecoration: "none", color: "inherit" }}>
            <a className="btn btn-secondary btn-lg" href="/login" role="button">Log In</a></Link>
          </div>
        </div>
      </div>
    </div>

<br></br>

    <footer className="bg-dark text-white py-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h5>About Us</h5>
            <p>
              "OSPSS for the best and secure online platform we store students projcts via online"
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-white">About</a>
              </li>
              <li>
                <a href="#" className="text-white">Services</a>
              </li>
              <li>
                <a href="#" className="text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-house-door-fill"></i> Mw/Kwerekwe Zanzibar
              </li>
              <li>
                <i className="bi bi-telephone-fill"></i> +255 657440597
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i> soudabdulghafour@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <small>&copy; 2025 OSPSS All rights reserved.</small>
      </div>
    </footer>
        </div>
    );
};

export default WelcomePage;
