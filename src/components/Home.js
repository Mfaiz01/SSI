import React from 'react'

const Home = () => {
  return (
    <>
     {/* <!-- Carousel Start --> */}
<div className="container-fluid px-0">
    <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        {/* <!-- Indicators --> */}
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carouselId" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselId" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#carouselId" data-bs-slide-to="3"></button>
        </div>
        
        {/* <!-- Slides --> */}
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="img/try2.png" className="d-block w-100" alt="Slide 1"/>
            </div>
            <div className="carousel-item">
                <img src="img/try7.jpg" className="d-block w-100" alt="Slide 2"/>
            </div>
            <div className="carousel-item">
                <img src="img/try3.png" className="d-block w-100" alt="Slide 3"/>
            </div>
            <div className="carousel-item">
                <img src="img/try6.png" className="d-block w-100" alt="Slide 4"/>
            </div>
        </div>
        
        {/* <!-- Controls --> */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
        </button>
    </div>
</div>
{/* <!-- Carousel End --> */}


        {/* <!-- Fact Start --> */}
        <div className="container-fluid bg-secondary py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">2500</h1>
                            <h5 className="text-white mt-1">Plus happy customers</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">30</h1>
                            <h5 className="text-white mt-1">Thousand Satisfied Students Outcome</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">365</h1>
                            <h5 className="text-white mt-1">Days of Complete Support</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">4</h1>
                            <h5 className="text-white mt-1">Stars reviews given by satisfied clients</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Fact End --> */}

       {/* About Start */}
<div className="container-fluid py-5 my-5">
    <div className="container pt-5">
        <div className="row g-5">
            <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                <div className="h-100 position-relative">
                    <img src="img/about-2.png" className="img-fluid w-75 rounded" alt="SSI Students engaged in hands-on vocational training" style={{marginBottom:"25%"}}/>
                    <div className="position-absolute w-75" style={{ top: "25%", left: "25%"}}>
                        <img src="img/about-1.png" className="img-fluid w-100 rounded" alt="SSI Partnership signing ceremony with NSDC Skill India"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                <h5 className="text-primary">SSi's Legacy & Mission</h5>
                <h1 className="mb-4">Building Careers Through Innovative Skill Development and Successful Placements Since 1995</h1>
                
                {/* Fixed: Removed nested <p> tags */}
                <p className="mb-3">
                    <strong>SSI Education Mysore</strong> began its journey in 1995 as a pioneer in software education and has since transformed into Karnataka's leading skill development institution.
                </p>
                
                <p className="mb-3">
                    Our evolution from IT training to comprehensive vocational education mirrors India's growing demand for job-ready professionals.
                </p>
                
                <p className="mb-3">
                    As an <strong>authorized education partner of Sree Azad Singh Memorial Foundation</strong> and an <strong>NSDC Skill India partner</strong>, we offer government-recognized programs that combine theoretical knowledge with practical application across diverse sectors including IT, Healthcare, Management, and Vocational Studies.
                </p>
                
                <p className="mb-4">
                    From <strong>Diploma in Full Stack Development</strong> and <strong>Healthcare Management</strong> to <strong>Advanced Physiotherapy</strong> and <strong>Fire & Safety Management</strong>, our programs are meticulously designed to meet evolving industry demands. We pride ourselves on being more than an educational institution. We are a career-launching platform that transforms students into skilled professionals.
                </p>
            </div>
        </div>
    </div>
</div>
{/* About End */}

        {/* <!-- Partners Start --> */}

        {/* <!-- Our Major Initiatives --> */}
        <div className="container-fluid bg-light py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "700px"}}>
                    <h5 className="text-primary">National Impact</h5>
                    <h1 className="mb-4">Major Government Initiatives</h1>
                    <p className="mb-4">As an authorized NSDC partner, SSI Education actively contributes to national skill development missions and digital transformation projects.</p>
                </div>
                
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".3s">
                        <div className="card border-0 shadow-sm h-100 hover-shadow">
                            <div className="card-img-top overflow-hidden" style={{height: "180px"}}>
                                <img src="img/aboutcard1.png" className="img-fluid w-100 h-100 object-fit-cover" alt="Skill India Training Program"/>
                            </div>
                            <div className="card-body text-center p-4">
                                <h4 className="mb-3">Skill India Training</h4>
                                <p className="mb-0">Implementing PMKVY & DDU-GKY aligned programs for youth skill development and employability enhancement.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".5s">
                        <div className="card border-0 shadow-sm h-100 hover-shadow">
                            <div className="card-img-top overflow-hidden" style={{height: "180px"}}>
                                <img src="img/aboutcard2.png" className="img-fluid w-100 h-100 object-fit-cover" alt="Smart ID Card Solutions"/>
                            </div>
                            <div className="card-body text-center p-4">
                                <h4 className="mb-3">Smart ID Cards</h4>
                                <p className="mb-0">Providing digitized identification solutions with secure, technology-enabled smart card systems.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".7s">
                        <div className="card border-0 shadow-sm h-100 hover-shadow">
                            <div className="card-img-top overflow-hidden" style={{height: "180px"}}>
                                <img src="img/aboutcard3.png" className="img-fluid w-100 h-100 object-fit-cover" alt="SR & APAR Digitization"/>
                            </div>
                            <div className="card-body text-center p-4">
                                <h4 className="mb-3">SR & APAR Digitization</h4>
                                <p className="mb-0">Digitizing Service Records and Annual Performance Appraisal Reports for government departments.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".9s">
                        <div className="card border-0 shadow-sm h-100 hover-shadow">
                            <div className="card-img-top overflow-hidden" style={{height: "180px"}}>
                                <img src="img/aboutcard4.png" className="img-fluid w-100 h-100 object-fit-cover" alt="Industrial Training Programs"/>
                            </div>
                            <div className="card-body text-center p-4">
                                <h4 className="mb-3">Industrial Training</h4>
                                <p className="mb-0">Providing sector-specific training programs aligned with National Occupational Standards (NOS).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Training Domains Section --> */}
<div className="container-fluid py-5">
    <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-lg-8 text-center wow fadeIn" data-wow-delay=".3s">
                <h5 className="text-primary">Comprehensive Education</h5>
                <h1 className="mb-4">Diverse Training Domains</h1>
                <p className="mb-5">SSI Education offers specialized training across multiple high-demand sectors, ensuring comprehensive skill development aligned with industry requirements.</p>
                
                {/* <!-- Centered Image --> */}
                <div className="mb-5 wow fadeIn" data-wow-delay=".5s">
                    <img src="img/about-01.png" className="img-fluid rounded shadow" alt="SSI Training Domains - IT, Healthcare, Management, Vocational" style={{maxWidth: "600px"}}/>
                </div>
                
                {/* <!-- Centered Training Domains List --> */}
                <div className="row justify-content-center mb-5">
                    <div className="col-md-8 col-lg-6">
                        <div className="row">
                            <div className="col-md-6 text-start">
                                <ul className="list-unstyled">
                                    <li className="mb-3"><i className="fas fa-laptop-code text-primary me-2"></i> <strong>Information Technology</strong></li>
                                    <li className="mb-3"><i className="fas fa-briefcase text-primary me-2"></i> <strong>Management Studies</strong></li>
                                    <li className="mb-3"><i className="fas fa-heartbeat text-primary me-2"></i> <strong>Healthcare Programs</strong></li>
                                    <li className="mb-3"><i className="fas fa-tools text-primary me-2"></i> <strong>Vocational Training</strong></li>
                                </ul>
                            </div>
                            <div className="col-md-6 text-start">
                                <ul className="list-unstyled">
                                    <li className="mb-3"><i className="fas fa-store text-primary me-2"></i> <strong>Retail Management</strong></li>
                                    <li className="mb-3"><i className="fas fa-building text-primary me-2"></i> <strong>Corporate Training</strong></li>
                                    <li className="mb-3"><i className="fas fa-project-diagram text-primary me-2"></i> <strong>Project-Based Learning</strong></li>
                                    <li className="mb-3"><i className="fas fa-chalkboard-teacher text-primary me-2"></i> <strong>Teacher Training</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Centered Buttons --> */}
                <div className="mt-4 text-center">
                    <a href="service.html" className="btn btn-primary rounded-pill px-4 py-2 me-2">View All Services</a>
                    <a href="diploma.html" className="btn btn-outline-primary rounded-pill px-4 py-2">Browse Diploma Courses</a>
                </div>
            </div>
        </div>
    </div>
</div>

    {/* <!-- Certificates Section --> */}
    <div className="container-fluid bg-light py-4 py-md-5">
        <div className="container py-4 py-md-5">
            <div className="text-center">
                <h1 className="display-6 mb-5" data-aos="fade-up" data-aos-delay="100">
                    Certificates & Compliances
                </h1>
            </div>

            <div className="partner-logo-container">
                <div className="row g-5 align-items-center justify-content-center">

          
                    <div className="col-lg-2 col-md-3 col-4 text-center" data-aos="zoom-in" data-aos-delay="200">
                        <div className="d-flex flex-column align-items-center h-100">
                            <img src="img/NSDC.png" className="img-fluid" alt="GDPR Compliant" style={{maxHeight: "140px", width: "auto" , padding: "15px"}}/>
                            <p className="mt-2 mb-0 small text-muted">NSDC</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 col-4 text-center" data-aos="zoom-in" data-aos-delay="200">
                        <div className="d-flex flex-column align-items-center h-100">
                            <img src="img/cbvs.jpeg" className="img-fluid" alt="KEONICS" style={{maxHeight: "140px", width: "auto" , padding: "15px"}}/>
                            <p className="mt-2 mb-0 small text-muted">Central Board of Vocational Skill Development</p>
                        </div>
                    </div>
                    
            
                    <div className="col-lg-2 col-md-3 col-4 text-center" data-aos="zoom-in" data-aos-delay="300">
                        <div className="d-flex flex-column align-items-center h-100">
                            <img src="img/azad.jpeg" className="img-fluid" alt="Veriteam Software Solutions" style={{maxHeight: "140px", width: "auto" , padding: "15px"}}/>
                            <p className="mt-2 mb-0 small text-muted">Sree Azad Singh Memorial Foundation</p>
                        </div>
                    </div>
                    
                    {/* <!-- Government of Karnataka --> */}
                    <div className="col-lg-2 col-md-3 col-4 text-center" data-aos="zoom-in" data-aos-delay="400">
                        <div className="d-flex flex-column align-items-center h-100">
                            <img src="img/govt-karnataka.png" className="img-fluid" alt="Government of Karnataka" style={{maxHeight: "140px", width: "auto" , padding: "15px"}}/>
                            <p className="mt-2 mb-0 small text-muted">Information Security Management System</p>
                        </div>
                    </div>

                 
                    <div className="col-lg-2 col-md-3 col-4 text-center" data-aos="zoom-in" data-aos-delay="400">
                        <div className="d-flex flex-column align-items-center h-100">
                            <img src="img/ncsm.png" className="img-fluid" alt="Government of Karnataka" style={{maxHeight: "140px", width: "auto" , padding: "15px"}}/>
                            <p className="mt-2 mb-0 small text-muted">National Computer Saksharta Mission (NCSM)</p>
                        </div>
                    </div>

                    {/* <!-- Government of Karnataka --> */}
                    <div className="col-lg-2 col-md-3 col-4 text-center" data-aos="zoom-in" data-aos-delay="400">
                        <div className="d-flex flex-column align-items-center h-100">
                            <img src="img/govt-it.png" className="img-fluid" alt="Government of Karnataka" style={{maxHeight: "140px", width: "auto" , padding: "15px"}}/>
                            <p className="mt-2 mb-0 small text-muted">Information Security Management System</p>
                        </div>
                    </div>
                    
                 
                    <div className="col-lg-2 col-md-3 col-4 text-center" data-aos="zoom-in" data-aos-delay="500">
                        <div className="d-flex flex-column align-items-center h-100">
                            <img src="img/jamia.jpeg" className="img-fluid" alt="Sikkim Skill University" style={{maxHeight: "140px", width: "auto" , padding: "15px"}}/>
                            <p className="mt-2 mb-0 small text-muted">Academic Education Partner</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-2 col-md-3 col-4 text-center" data-aos="zoom-in" data-aos-delay="500">
                        <div className="d-flex flex-column align-items-center h-100">
                            <img src="img/gsdm.jpeg" className="img-fluid" alt="Sikkim Skill University" style={{maxHeight: "140px", width: "auto" , padding: "15px"}}/>
                            <p className="mt-2 mb-0 small text-muted">Gramin Skill Development University</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 col-4 text-center" data-aos="zoom-in" data-aos-delay="500">
                        <div className="d-flex flex-column align-items-center h-100">
                            <img src="img/medhavi.png" className="img-fluid" alt="Sikkim Skill University" style={{maxHeight: "140px", width: "auto" , padding: "15px"}}/>
                            <p className="mt-2 mb-0 small text-muted">Medhavi Skills University</p>
                        </div>
                    </div>


                  
                    <div className="col-lg-2 col-md-3 col-4 text-center" data-aos="zoom-in" data-aos-delay="200">
                        <div className="d-flex flex-column align-items-center h-100">
                            <img src="img/panch.jpeg" className="img-fluid" alt="HIPAA Compliant" style={{maxHeight: "140px", width: "auto" , padding: "15px"}}/>
                            <p className="mt-2 mb-0 small text-muted">Panchbandhu Sewa Sansthaan</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 col-4 text-center" data-aos="zoom-in" data-aos-delay="600">
                        <div className="d-flex flex-column align-items-center h-100">
                            <img src="img/digitalind.png" className="img-fluid" alt="Training Partner" style={{maxHeight: "140px", width: "auto" , padding: "15px"}}/>
                            <p className="mt-2 mb-0 small text-muted">Digital India</p>
                        </div>
                    </div>
                    
                    {/* <!-- Training Partner --> */}
                    <div className="col-lg-2 col-md-3 col-4 text-center" data-aos="zoom-in" data-aos-delay="600">
                        <div className="d-flex flex-column align-items-center h-100">
                            <img src="img/skillind.png" className="img-fluid" alt="Training Partner" style={{maxHeight: "140px", width: "auto" , padding: "15px"}}/>
                            <p className="mt-2 mb-0 small text-muted">Academic Education Partner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Partners End --> */}

    

        {/* <!-- Our Values Start --> */}
        <div className="container-fluid py-5 bg-light">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "600px"}}>
                    <h5 className="text-primary">Our Commitment</h5>
                    <h1 className="mb-4">Core Values & Mission</h1>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".3s">
                        <div className="text-center p-4 h-100">
                            <i className="fas fa-star fa-3x text-primary mb-3"></i>
                            <h4 className="mb-3">Quality First</h4>
                            <p className="mb-0">Maintaining highest academic standards through ISO 9001:2015 certified processes and continuous improvement.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".5s">
                        <div className="text-center p-4 h-100">
                            <i className="fas fa-handshake fa-3x text-primary mb-3"></i>
                            <h4 className="mb-3">Integrity & Trust</h4>
                            <p className="mb-0">Building relationships based on transparency, ethical practices, and reliable certification processes.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".7s">
                        <div className="text-center p-4 h-100">
                            <i className="fas fa-lightbulb fa-3x text-primary mb-3"></i>
                            <h4 className="mb-3">Innovation</h4>
                            <p className="mb-0">Embracing digitized transformation and modern training methodologies for effective skill development.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".9s">
                        <div className="text-center p-4 h-100">
                            <i className="fas fa-users fa-3x text-primary mb-3"></i>
                            <h4 className="mb-3">Student Success</h4>
                            <p className="mb-0">Focusing on individual growth, career readiness, and creating pathways for professional advancement.</p>
                        </div>
                    </div>
                </div>
                
                <div className="text-center mt-5 wow fadeIn" data-wow-delay=".5s">
                    <div className="p-4 bg-white rounded shadow-sm">
                        <h3 className="mb-3">Our Mission</h3>
                        <p className="mb-0 lead">"To empower individuals with industry-relevant skills through government-recognized education, fostering employability and contributing to national skill development initiatives."</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Our Values End --> */}
    </>
  )
}

export default Home