import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const InstructorNav = () => {
    
        return (
           
        <>
                 <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                     <div className="container">
                         <span className="navbar-brand">
                             <h4>SPSS</h4>
                         </span>
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
                                     <span className="nav-link active">
                                     <Link to="/InstructorLogin" style={{ textDecoration: "none", color: "inherit" }}>
                                         Display Instructor name </Link>
                                     </span>
                                 </li>
                                 
                           
                             </ul>
                         </div>
                     </div>
                 </nav>

                  <div className="d-flex">
            {/* Sidebar */}
            <nav
                className="bg-dark text-white p-3"
                style={{ minHeight: "100vh", width: "250px" }}
            >
                <h3 className="text-center mb-4">Instructor Panel</h3>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <span className="nav-link text-white">
                            <i className="bi bi-house-door-fill"></i> Dashboard
                        </span>
                    </li>

                    <li className="nav-item">
                        <span className="nav-link text-white">
                        <i class="bi bi-folder"></i> Projects
                        </span>
                    </li>
                    
                    
                    <li className="nav-item">
                        <span className="nav-link text-white">
                            <i className="bi bi-gear-fill"></i> Settings
                        </span>
                    </li>

                    <li className="nav-item">
                        <span className="nav-link text-white">
                        <i class="bi bi-box-arrow-right"></i> Logout
                        </span>
                    </li>
                </ul>
            </nav>

            
               
           
        </div>
                 </>

);
};

export default InstructorNav;