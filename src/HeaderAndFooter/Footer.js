import React from 'react'

const Footer = () => {
  return (
    <>
        {/* <!-- Footer Start--> */}
        <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
            <div className="container pt-5 pb-4">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6">
                        <a href="index.html" className="navbar-brand logo-banner m-0">
                            <img src="img/logo1.jpeg" alt="SSI Education Mysore Logo" style={{width: "150px", height: "80px" }}/>
                        </a>
                        <p className="mt-4 text-light">
                            <strong>SSI Education Mysore</strong> - Pioneering skill-based education since 1995. 
                            
                        </p>
                        <div className="d-flex hightech-link">
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-facebook-f text-primary"></i></a>
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-twitter text-primary"></i></a>
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-instagram text-primary"></i></a>
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <a href="#" className="h3 text-secondary">Quick Links</a>
                        <div className="mt-4 d-flex flex-column short-link">
                            <a href="/about" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>About SSI</a>
                            <a href="/service" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Our Services</a>
                            <a href="diploma.html" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Diploma Programs</a>
                            <a href="contact.html" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Contact Us</a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <a href="#" className="h3 text-secondary">Contact SSI</a>
                        <div className="text-white mt-4 d-flex flex-column contact-link">
                            <a href="#" className="pb-3 text-light border-bottom border-primary">
                                <i className="fas fa-map-marker-alt text-secondary me-2"></i> 
                                1st Floor, Cauvery Complex 16th Main, 5th Cross Road, Saraswathipuram, Mysuru, Karnataka-570009
                            </a>
                            <a href="tel:+919876543210" className="py-3 text-light border-bottom border-primary">
                                <i className="fas fa-phone-alt text-secondary me-2"></i> 
                                +91 99860 19715
                            </a>
                            <a href="mailto:admissions@ssieducationmysore.in" className="py-3 text-light border-bottom border-primary">
                                <i className="fas fa-envelope text-secondary me-2"></i> 
                                info@ssieducation.in
                            </a>
                            <a href="#" className="py-3 text-light border-bottom border-primary">
                                <i className="fas fa-clock text-secondary me-2"></i> 
                                Mon-Sat: 9:00 AM - 6:00 PM
                            </a>
                        </div>
                    </div>
                </div>
                
                <hr className="text-light mt-5 mb-4"/>
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <span className="text-light">
                            Copyright © 2026, 
                            <a href="index.html" className="text-secondary">SSI Education Mysore</a>. 
                            All rights reserved.
                        </span>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <span className="text-light"> 
                            Web-Powered by, 
                            <a href="https://www.vssitcompany.com/" className="text-secondary">SSi IT Cell</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer