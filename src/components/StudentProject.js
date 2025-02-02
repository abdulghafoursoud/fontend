import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const StudentProject = () => {


// instructor should login to access this page
    const navigate = useNavigate(); 
    const reg_no = sessionStorage.getItem('reg_no'); 

    useEffect(() => {    
        if (!reg_no) {
            console.error('No reg_no found in sessionStorage');
            navigate('/StudentLogin');
            return;
        }
        
        }, []);
      
// logout function
        const handleLogout = () => {
            sessionStorage.clear(); 
            navigate('/StudentLogin');
        };
    

    


// fetch all students
    const [project, setproject] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/Project/');
          setproject(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Fetch data every 5 seconds
    const interval = setInterval(() => {
        fetchData();
      }, 3000);
  
      // Fetch initial data
      fetchData();
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
  
    
    const [studentData, setStudentData] = useState([]);
            const [loading, setLoading] = useState(true);
            const [errorMessage, setErrorMessage] = useState('');
            const navigate2 = useNavigate();
        
            useEffect(() => {
                const fetchStudentData = async () => {
                    const reg_no = sessionStorage.getItem('reg_no'); // Retrieve reg_no from sessionStorage
                    const encodedRegNo = encodeURIComponent(reg_no);
                    try {
                        const response = await axios.get(`http://localhost:8000/api/Student_Reg/${encodedRegNo}/`);
                        setStudentData(response.data); // Save the student data
                    } catch (error) {
                        if (error.response) {
                            setErrorMessage(error.response.data.message || 'Failed to fetch student data.');
                        } else {
                            setErrorMessage('An error occurred. Please try again later.');
                        }
                    } finally {
                        setLoading(false); // Stop the loading indicator
                    }
                };
        
                fetchStudentData();
            }, [navigate2]);
        
            



          
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
                                     {studentData.student_name}
                                     </a>
                                     
                                 </li>

                                 <li className="nav-item">
                                     <a className="nav-link active">
                                     <strong>Project Status :</strong> <i class="bi bi-exclamation-octagon me-1"></i>                                     Not Upload Yet
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
                                               style={{ minHeight: "100vh", width: "250px",background:'Salmon'}}
                                           >
                                               <h3 className="text-center mb-4">Dashboard</h3>
                                               <p>{studentData.reg_no}</p>
                                               <ul className="nav flex-column">
                                                   <li className="nav-item">
                                                       <a className="nav-link text-white">
                                                           <i className="bi bi-house-door-fill"></i> &ensp;
                                                           <Link to="/StudentDashboard" style={{ textDecoration: "none", color: "inherit" }}>
                                                            Dashboard</Link>
                                                       </a>
                                                   </li>
                               
                                                   <li className="nav-item">
                                                       <a className="nav-link text-white">
                                                       <Link to="/StudentProject" style={{ textDecoration: "none", color: "inherit" }}>
                                                       <i class="bi bi-folder"></i>&ensp;
                                                       Projects</Link>
                                                       </a>
                                                   </li>
                                                   
                                                   
                                                   <li className="nav-item">
                                                   <Link to="/StudentSetting" style={{ textDecoration: "none", color: "inherit" }}>
                               
                                                       <a className="nav-link text-white">
                                                           <i className="bi bi-gear-fill"></i> &ensp;
                                                           Settings
                                                       </a>
                                                       </Link>
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
                             <li class="breadcrumb-item"><Link to="/StudentDashboard" style={{ textDecoration: "none",color:"black"}}>Home</Link></li>
                             <li class="breadcrumb-item"><Link to="/StudentProject" style={{ textDecoration: "none",color:"black"}}>Projects</Link></li>
                             <li class="breadcrumb-item"><Link to="/StudentSetting" style={{ textDecoration: "none",color:"black"}}>Account Settings</Link></li>
                             <li class="breadcrumb-item" onClick={handleLogout} style={{cursor:'pointer',color:'black'}}>Logout</li>
             
                             </ol>
                           </nav>
            </div></div>

    






<h2>All Projects</h2>


                <div className="table-responsive">
                
                    <table className="table table-striped table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>Tittle</th>
                                <th>Reg Number</th>
                                <th>Course</th>
                                <th>Date uploaded:</th>
                                <th>File</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        {project.map((project, index) => (
            <tr key={index}>
              <td>{project.project_title}</td>
              <td>{project.course}</td>
              <td>{project.st_reg_no}</td>
              <td>{new Date(project.date_uploaded).toLocaleDateString()}</td>
              <td>
                                                <a href={project.project_file} target="_blank" rel="noopener noreferrer">
                                                    Download
                                                </a>
                                            
              </td>
              
            </tr>
          ))}
                               
                        
                        </tbody>
                    </table>
               
                </div>
            </div>
        </div>
                 </div>

);
};

export default StudentProject;