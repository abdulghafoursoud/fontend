import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import InstructorNav from "./InstructorNav";
import { useNavigate } from 'react-router-dom'; // Import useNavigate



const InstructorStudentView = () => {
    

// instructor should login to access this page
const navigate = useNavigate(); 
const email = sessionStorage.getItem('email'); 

useEffect(() => {    
    if (!email) {
        console.error('No email found in sessionStorage');
        navigate('/InstructorLogin');
        return;
    }
    
    }, []);
  
// logout function
    const handleLogout = () => {
        sessionStorage.clear(); 
        navigate('/InstructorLogin');
    };


        return (
           <div>
                
                                  <nav className="navbar navbar-expand-lg navbar-DarkOrange bg-DarkOrange shadow-sm" style={{background:'MediumAquamarine'}}>
                                                                         <div className="container">
                                                                             <a className="navbar-brand" href="/">
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
                                                                                         <a className="nav-link active">
                                                                                         
                                                                                         </a>
                                                                                         
                                                                                     </li>
                                                    
                                                                                    
                                                                                     
                                                                                     
                                                                                    
                                                         
                                                         
                                                         
                                                                                     
                                                                                 </ul>
                                                                             </div>
                                                                         </div>
                                                                     </nav>
                                                    
                                                    
                                                    
                                                    
                                                                      <div className="d-flex">
                                                                {/* Sidebar */} 
                                                                <nav
                                                                    className="bg-Salmon text-white p-3"
                                                                    style={{ minHeight: "100vh", width: "250px",background:"Salmon"}}
                                                                >
                                                                    <h3 className="text-center mb-4">Instructor Panel</h3>
                                                                    <ul className="nav flex-column">
                                                                        <li className="nav-item">
                                                                            <a className="nav-link text-white">
                                                                                <i className="bi bi-house-door-fill"></i> &ensp;
                                                                                <Link to="/InstructorDashboard" style={{ textDecoration: "none", color: "inherit" }}>
                                                                                 Dashboard</Link>
                                                                            </a>
                                                                        </li>
                                                    
                                                                        <li className="nav-item">
                                                                            <a className="nav-link text-white">
                                                                            <Link to="/InstructorProject" style={{ textDecoration: "none", color: "inherit" }}>
                                                                            <i class="bi bi-folder"></i>&ensp;
                                                                            Projects</Link>
                                                                            </a>
                                                                        </li>
                                                                        
                                                                        
                                                                        <li className="nav-item">
                                                                            <a href="" className="nav-link text-white">
                                                                                <i className="bi bi-gear-fill"></i> &ensp;
                                                                                Settings
                                                                            </a>
                                                                        </li>
                                                    
                                                                        <li className="nav-item">
                                                                            <a href="" className="nav-link text-white" onClick={handleLogout}>
                                                                            <i class="bi bi-box-arrow-right"></i>&ensp;
                                                                            Logout
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </nav>
                                                    
                                                    
                                 
                                             <div className="flex-grow-1 p-4">
                                                 
                                            
                                 <div class="card" style={{border:'none'}}>
                                             <div class="card-body" style={{background:'MediumAquamarine',border:'none'}}>
                                              
                                               <nav>
                                                 <ol class="breadcrumb" style={{color:'white'}}>
                                                 <li class="breadcrumb-item"><Link to="/InstructorDashboard" style={{ textDecoration: "none",color:"black"}}>Home</Link></li>
                                                 <li class="breadcrumb-item"><Link to="/StudentDashboard" style={{ textDecoration: "none",color:"black"}}>Projects</Link></li>
                                                 <li class="breadcrumb-item"><Link to="/StudentDashboard" style={{ textDecoration: "none",color:"black"}}>Account Settings</Link></li>
                                                 <li class="breadcrumb-item" onClick={handleLogout} style={{cursor:'pointer',color:'black'}}>Logout</li>
                                 
                                                 </ol>
                                               </nav>
                                             </div></div></div></div>

                                  
                                                          
                                                          
                                                          </div>

);
};

export default InstructorStudentView;