import React from 'react'

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Training",
      description: "Comprehensive skill development programs with hands-on training and industry-aligned curriculum for various sectors.",
      icon: "📚",
      image: "img/service-1.png",
      delay: ".3s",
      features: ["NSDC Certified", "Industry Experts", "Placement Assistance"]
    },
    {
      id: 2,
      title: "Diploma Programs",
      description: "Specialized diploma courses offering in-depth knowledge and certification in high-demand technical fields.",
      image: "img/service-2.jpeg",
      delay: ".5s",
      features: ["Recognized Certification", "Practical Learning", "Job-Oriented"]
    },
    {
      id: 3,
      title: "BPO",
      description: "Business Process Outsourcing solutions with comprehensive training and infrastructure support for seamless operations.",
      icon: "💼",
      image: "img/bpo.jpg",
      delay: ".7s",
      features: ["Process Training", "Quality Standards", "Infrastructure Setup"]
    },
    {
      id: 4,
      title: "Call Centre & Support",
      description: "End-to-end call center setup with agent training, technology implementation, and quality monitoring systems.",
      icon: "📞",
      image: "img/callcenter.jpg",
      delay: ".9s",
      features: ["Agent Training", "CRM Systems", "Quality Assurance"]
    },
    {
      id: 5,
      title: "Survey Works",
      description: "Professional survey services including field training, data collection, analysis, and reporting solutions.",
      icon: "📊",
      image: "img/survey.jpg",
      delay: ".3s",
      features: ["Field Training", "Data Analysis", "Reporting Tools"]
    },
    {
      id: 6,
      title: "Digitization",
      description: "Complete digitization solutions for records, documents, and processes with secure data management systems.",
      icon: "💻",
      image: "img/digitization.jpg",
      delay: ".5s",
      features: ["Document Scanning", "Data Security", "Digital Archives"]
    }
  ];

  // Last two services for centered row
  const lastTwoServices = [
    {
      id: 7,
      title: "Internship",
      description: "Structured internship programs bridging the gap between academic learning and real-world industry experience.",
      icon: "👨‍💻",
      image: "img/internship.jpg",
      delay: ".7s",
      features: ["Industry Exposure", "Mentorship", "Certificate Programs"]
    },
    {
      id: 8,
      title: "Project Design & Development",
      description: "End-to-end project solutions from conceptualization to implementation with technical expertise and support.",
      icon: "⚙️",
      image: "img/project.jpg",
      delay: ".9s",
      features: ["Consulting", "Implementation", "Support & Maintenance"]
    }
  ];

  return (
    <>
         {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header py-5">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4 animated slideInDown">What We Do</h1>
            </div>
        </div>
        {/* <!-- Page Header End --> */}


        {/* <!-- Our Services Section --> */}
        <div className="container-fluid bg-light py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "800px"}}>
                    <h5 className="text-primary">Our Expertise</h5>
                    <h1 className="mb-4 display-5 fw-bold">Comprehensive Services</h1>
                    <p className="mb-4 fs-5">We offer a wide range of professional services designed to empower individuals and organizations through skill development, technology solutions, and industry partnerships.</p>
                </div>
                
                {/* First 6 services in 3-column grid */}
                <div className="row g-5 mb-5">
                  {services.map((service) => (
                    <div key={service.id} className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay={service.delay}>
                      <div className="card border-0 shadow-lg h-100 hover-shadow-lg transition-all" style={{transition: 'all 0.3s ease'}}>
                        <div className="position-relative">
                          <div className="card-img-top overflow-hidden" style={{height: "220px"}}>
                            <img 
                              src={service.image} 
                              className="img-fluid w-100 h-100 object-fit-cover transition-transform" 
                              style={{transition: 'transform 0.5s ease'}}
                              alt={service.title}
                              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                          </div>
                          <div className="position-absolute top-0 start-0 m-4 bg-white rounded-circle d-flex align-items-center justify-content-center"
                               style={{width: '60px', height: '60px', fontSize: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
                            {service.icon}
                          </div>
                        </div>
                        
                        <div className="card-body p-4 d-flex flex-column">
                          <h4 className="mb-3 fw-bold text-dark">{service.title}</h4>
                          <p className="mb-4 text-secondary flex-grow-1">{service.description}</p>
                          
                          <div className="mb-4">
                            <h6 className="text-primary mb-3 fw-semibold">Key Features:</h6>
                            <div className="d-flex flex-wrap gap-2">
                              {service.features.map((feature, index) => (
                                <span key={index} className="badge bg-light text-dark border px-3 py-2">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="mt-auto">
                            <button className="btn btn-outline-primary w-100 py-2 fw-semibold">
                              Explore Service →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Last 2 services centered */}
                <div className="row justify-content-center g-5 mb-5">
                  {lastTwoServices.map((service) => (
                    <div key={service.id} className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay={service.delay}>
                      <div className="card border-0 shadow-lg h-100 hover-shadow-lg transition-all" style={{transition: 'all 0.3s ease'}}>
                        <div className="position-relative">
                          <div className="card-img-top overflow-hidden" style={{height: "220px"}}>
                            <img 
                              src={service.image} 
                              className="img-fluid w-100 h-100 object-fit-cover transition-transform" 
                              style={{transition: 'transform 0.5s ease'}}
                              alt={service.title}
                              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                          </div>
                          <div className="position-absolute top-0 start-0 m-4 bg-white rounded-circle d-flex align-items-center justify-content-center"
                               style={{width: '60px', height: '60px', fontSize: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
                            {service.icon}
                          </div>
                        </div>
                        
                        <div className="card-body p-4 d-flex flex-column">
                          <h4 className="mb-3 fw-bold text-dark">{service.title}</h4>
                          <p className="mb-4 text-secondary flex-grow-1">{service.description}</p>
                          
                          <div className="mb-4">
                            <h6 className="text-primary mb-3 fw-semibold">Key Features:</h6>
                            <div className="d-flex flex-wrap gap-2">
                              {service.features.map((feature, index) => (
                                <span key={index} className="badge bg-light text-dark border px-3 py-2">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="mt-auto">
                            <button className="btn btn-outline-primary w-100 py-2 fw-semibold">
                              Explore Service →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Section */}
                <div className="row mt-5 pt-5 g-4 wow fadeIn" data-wow-delay=".3s">
                  <div className="col-md-3 col-6 text-center">
                    <div className="p-4 bg-white rounded-3 shadow-sm">
                      <h2 className="text-primary fw-bold display-4">50+</h2>
                      <p className="mb-0 fw-semibold">Training Programs</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 text-center">
                    <div className="p-4 bg-white rounded-3 shadow-sm">
                      <h2 className="text-primary fw-bold display-4">10K+</h2>
                      <p className="mb-0 fw-semibold">Professionals Trained</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 text-center">
                    <div className="p-4 bg-white rounded-3 shadow-sm">
                      <h2 className="text-primary fw-bold display-4">100+</h2>
                      <p className="mb-0 fw-semibold">Industry Partners</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 text-center">
                    <div className="p-4 bg-white rounded-3 shadow-sm">
                      <h2 className="text-primary fw-bold display-4">25+</h2>
                      <p className="mb-0 fw-semibold">Cities Served</p>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-5 pt-5 wow fadeIn" data-wow-delay=".3s">
                  <div className="bg-primary rounded-4 p-5 text-white mb-4" style={{background: 'linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%)'}}>
                    <h2 className="mb-3 fw-bold">Ready to Transform Your Career?</h2>
                    <p className="mb-4 fs-5">Join thousands who have enhanced their skills and career prospects with our programs.</p>
                    <button className="btn btn-light btn-lg px-5 py-3 fw-bold me-3">
                      Get Started Today
                    </button>
                    <button className="btn btn-outline-light btn-lg px-5 py-3 fw-bold">
                      Download Brochure
                    </button>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service