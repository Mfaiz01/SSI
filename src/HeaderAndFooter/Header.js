import React from 'react'

const Header = () => {
  return (
    <>
       
        {/* <!-- Topbar Start --> */}
        <div className="container-fluid bg-dark py-2 d-none d-md-flex">
            <div className="container">
                <div className="d-flex justify-content-between topbar">
                    <div className="top-info">
                        <small className="me-3 text-white-50"><a href="#"><i className="fas fa-map-marker-alt me-2 text-secondary"></i></a>Mysuru,Karnataka-570009</small>
                        <small className="me-3 text-white-50"><a href="#"><i className="fas fa-envelope me-2 text-secondary"></i></a>info@ssieducation.in</small>
                    </div>
                    <div id="note" className="text-secondary d-none d-xl-flex"><small>Note : We help you to Grow your Business</small></div>
                    <div className="top-link">
                        <a href="#" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-primary"></i></a>
                        <a href="#" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-twitter text-primary"></i></a>
                        <a href="#" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-instagram text-primary"></i></a>
                        <a href="#" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Topbar End --> */}

        
{/* <!-- Navbar Start --> */}
<div className="container-fluid bg-white">
    <div className="container">
        <nav className="navbar navbar-dark navbar-expand-lg py-0">
            {/* <!-- Logo Row --> */}
            <div className="d-flex justify-content-center align-items-center py-3">
                <a href="index.html" className="navbar-brand logo-banner m-0">
                    <img src="img/logo1.jpeg" alt="Logo" style={{width: "150px", height: "80px"}}/>
                </a>
            </div>
            <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                <div className="navbar-nav ms-auto mx-xl-auto p-0">
                    <a href="/" className="nav-item nav-link active text-secondary">Home</a>
                    <a href="/about" className="nav-item nav-link">Why Us</a>
                    <a href="/service" className="nav-item nav-link">What We Do</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Our Services</a>
                        <div className="dropdown-menu text-left">
                            {/* <!-- Diploma Training with Submenu --> */}
                            <div className="dropdown-item position-relative diploma-submenu">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <a href="diploma.html" className="text-decoration-none text-dark">Training</a>
                                    <span className="dropdown-toggle-symbol"> › </span>
                                </div>
                                <div className="diploma-dropdown-menu">
                            <a href="feature.html" className="dropdown-item">High-End Training</a>
                            <a href="blog.html" className="dropdown-item">Short-Term Training</a>
                            <a href="feature.html" className="dropdown-item">Vocational Training</a>
                            <a href="blog.html" className="dropdown-item">Job-Oriented Training</a>
                            <a href="feature.html" className="dropdown-item">Skill-Based Training</a>
                            <a href="blog.html" className="dropdown-item">Retail Training</a>
                            <a href="feature.html" className="dropdown-item">Corporate Training</a>
                            <a href="feature.html" className="dropdown-item">Project-Based Training</a>
                            <a href="blog.html" className="dropdown-item">Humanoid Training</a>
                            <a href="blog.html" className="dropdown-item">Management Training</a>
                            </div>
                            </div>
                            {/* <!-- Diploma Training with Submenu --> */}
                            <div className="dropdown-item position-relative diploma-submenu">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <a href="diploma.html" className="text-decoration-none text-dark">Diploma Programs</a>
                                    <span className="dropdown-toggle-symbol"> › </span>
                                </div>
                                <div className="diploma-dropdown-menu">
                                    <a href="diploma-robotics.html" className="dropdown-item">Diploma in Blood Collector </a>
                                    <a href="diploma-ai.html" className="dropdown-item">Diploma in Computer Aided Design </a>
                                    <a href="diploma-iot.html" className="dropdown-item">Diploma in Financial Management</a>
                                    <a href="diploma-cyber.html" className="dropdown-item">Diploma in Fire & Safety Management</a>
                                    <a href="diploma-data.html" className="dropdown-item">Diploma in Yoga Therapy</a>
                                    <a href="diploma-robotics.html" className="dropdown-item">Diploma in Beauty Therapy</a>
                                    <a href="diploma-ai.html" className="dropdown-item">Diploma in Hotel Management</a>
                                    <a href="diploma-iot.html" className="dropdown-item">Diploma in Primary Teachers Training Program</a>
                                    <a href="diploma-cyber.html" className="dropdown-item">Diploma in Nursery Teachers Training Program</a>
                                    <a href="diploma-data.html" className="dropdown-item">Diploma in Full Stack Development</a>
                                    <a href="diploma-data.html" className="dropdown-item">Diploma in Graphics & Animation</a>
                                    <a href="diploma-data.html" className="dropdown-item">Diploma in Healthcare Management</a>
                                    <a href="diploma-data.html" className="dropdown-item">Diploma in Information Technology</a>
                                    <a href="diploma-data.html" className="dropdown-item">Advanced Diploma in Physiothreaphy</a>
                                </div>
                            </div>
                            
                            <a href="feature.html" className="dropdown-item">BPO</a>
                            <a href="blog.html" className="dropdown-item">Call Center & Support</a>
                            <a href="blog.html" className="dropdown-item">Survey Works</a>
                            <a href="blog.html" className="dropdown-item">Digitization</a>
                            <a href="blog.html" className="dropdown-item">Internship</a>
                            <a href="blog.html" className="dropdown-item">Project Design & Development</a>
                        </div>
                    </div>
                   <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    </div>
</div>
{/* <!-- Navbar End -->  */}
    </>
  )
}

export default Header