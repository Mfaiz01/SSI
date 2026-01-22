import React from 'react'

const About = () => {
  return (
    <>
        {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header py-5">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4 animated slideInDown">Why Us</h1>
            </div>
        </div>
        {/* <!-- Page Header End --> */}


        
        {/* <!-- About Start --> */}
        <div className="container-fluid py-5 my-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                        <h5 className="text-primary">Our Legacy of Excellence</h5>
                        <h1 className="mb-4">Pioneering Skill Development Since 1995</h1>
                        <p><strong>SSI Education Mysore</strong>, established in 1995, has evolved from a pioneering software education institute into Karnataka's leading skill development and vocational training institution. With over three decades of unwavering commitment to educational excellence, we have consistently adapted to industry needs while maintaining the highest standards of academic quality.</p>
                        
                        <p className="mb-4">As an <strong>ISO 9001:2015 certified institution</strong>, we operate with globally recognized quality management systems in training, competency-based training, and research & development. Our journey reflects our dedication to transforming education through skill-based learning and digitized training methodologies.</p>
                        
                        <div className="row mb-4">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-check-circle text-primary fa-2x me-3"></i>
                                    <div>
                                        <h6 className="mb-0">ISO 9001:2015 Certified</h6>
                                        <small>Quality Management</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-user-graduate text-primary fa-2x me-3"></i>
                                    <div>
                                        <h6 className="mb-0">30+ Years Experience</h6>
                                        <small>Since 1995</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row mb-4">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-building text-primary fa-2x me-3"></i>
                                    <div>
                                        <h6 className="mb-0">15+ Government Partners</h6>
                                        <small>Authorized Affiliations</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-certificate text-primary fa-2x me-3"></i>
                                    <div>
                                        <h6 className="mb-0">UGC Affiliated Courses</h6>
                                        <small>Nationally Recognized</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* <a href="affiliations.html" className="btn btn-secondary rounded-pill px-5 py-3 text-white me-3">View Our Affiliations</a> */}
                        <a href="/service" className="btn btn-outline-primary rounded-pill px-5 py-3">Explore Programs</a>
                    </div>

                    <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                        <div className="h-100 position-relative">
                            <img src="img/aboutpm.jpeg" className="img-fluid w-75 rounded" alt="SSI Students in practical training session" style={{marginBottom: "25%"}}/>
                            <div className="position-absolute w-75" style={{top: "25%", left: "25%"}}>
                                <img src="img/aboutpm2.jpg" className="img-fluid w-100 rounded" alt="SSI Certification ceremony with partners"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}

        {/* <!-- Authorized Affiliations Section --> */}
        <div className="container-fluid bg-light py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "800px"}}>
                    <h5 className="text-primary">Trusted & Authorized</h5>
                    <h1 className="mb-4">Government Recognized Affiliations</h1>
                    <p className="mb-4">SSI Education Mysore operates under the authorization and approval of leading government and national educational bodies, ensuring our certifications hold national credibility and industry acceptance.</p>
                </div>
                
                <div className="row g-4 mb-5">
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                        <div className="p-4 affiliation-badge rounded h-100">
                            <h5 className="mb-3"><i className="fas fa-handshake text-primary me-2"></i>NSDC Skill India Partner</h5>
                            <p className="mb-0">Authorized training partner under National Skill Development Corporation, delivering PMKVY and DDU-GKY aligned skill development programs.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                        <div className="p-4 affiliation-badge rounded h-100">
                            <h5 className="mb-3"><i className="fas fa-university text-primary me-2"></i>Medhavi Skills University</h5>
                            <p className="mb-0">Official Assessment & Certification partner, providing industry-aligned skill certification programs recognized nationwide.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                        <div className="p-4 affiliation-badge rounded h-100">
                            <h5 className="mb-3"><i className="fas fa-award text-primary me-2"></i>ISO 9001:2015 Certified</h5>
                            <p className="mb-0">Certified for Quality Management Systems in Training, CBT, Overseas Education, Data Processing & R&D activities.</p>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Partner Logos Grid --> */}
                <div className="text-center wow fadeIn" data-wow-delay=".9s">
                    <h4 className="mb-4">Our Clients</h4>
                    <div className="row justify-content-center align-items-center g-3">
                        <div className="col-6 col-md-3">
                            <img src="img/nsdclogo.png" alt="NSDC Skill India" className="img-fluid partner-logo"/>
                        </div>
                        <div className="col-6 col-md-3">
                            <img src="img/ugc-logo.png" alt="UGC Affiliated" className="img-fluid partner-logo"/>
                        </div>
                        <div className="col-6 col-md-3">
                            <img src="img/sree-azad-logo.png" alt="Sree Azad Singh Memorial Foundation" className="img-fluid partner-logo"/>
                        </div>
                        <div className="col-6 col-md-3">
                            <img src="img/sree-azad-logo.png" alt="Jamia Urdu Aligarh" className="img-fluid partner-logo"/>
                        </div>
                        <div className="col-6 col-md-3">
                            <img src="img/sree-azad-logo.png" alt="Panchbandhu Sewa Sansthan" className="img-fluid partner-logo"/>
                        </div>
                        <div className="col-6 col-md-3">
                            <img src="img/iso-logo.png" alt="ISO 9001:2015 Certified" className="img-fluid partner-logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Why Choose SSI Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "600px"}}>
                    <h5 className="text-primary">Our Advantages</h5>
                    <h1 className="mb-4">Why Choose SSI Education?</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay=".3s">
                        <div className="bg-light p-5 feature-card">
                            <div className="icon-box bg-primary rounded-circle mb-4">
                                <i className="fas fa-graduation-cap fa-2x text-white"></i>
                            </div>
                            <h4 className="mb-3">Government Authorized</h4>
                            <p className="mb-4">All our diploma programs are UGC-affiliated and government-recognized, ensuring your certification holds national credibility and acceptance across industries and government sectors.</p>
                            <a href="diploma.html" className="text-primary">View Diploma Programs <i className="fas fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay=".5s">
                        <div className="bg-light p-5 feature-card">
                            <div className="icon-box bg-primary rounded-circle mb-4">
                                <i className="fas fa-cogs fa-2x text-white"></i>
                            </div>
                            <h4 className="mb-3">Industry-Relevant Curriculum</h4>
                            <p className="mb-4">Our programs are designed in collaboration with industry experts and national skill councils, ensuring you learn the most current and in-demand skills for today's job market.</p>
                            <a href="service.html" className="text-primary">Explore Training <i className="fas fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay=".7s">
                        <div className="bg-light p-5 feature-card">
                            <div className="icon-box bg-primary rounded-circle mb-4">
                                <i className="fas fa-user-tie fa-2x text-white"></i>
                            </div>
                            <h4 className="mb-3">Experienced Faculty</h4>
                            <p className="mb-4">Learn from industry practitioners and certified trainers with years of field experience, providing practical insights and real-world knowledge beyond textbook learning.</p>
                            <a href="contact.html" className="text-primary">Meet Our Team <i className="fas fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Why Choose SSI End --> */}

        
    </>
  )
}

export default About