import React from 'react';
import CountUp from 'react-countup';

export function About({data}) {
    return (
        <>
            {/* About Start */}
            <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
                <div className="d-flex align-items-center">
                    <h1 className="title pb-3 mb-5">About Me</h1>
                    <button
                        className="btn btn-link ms-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#aboutContent"
                        aria-expanded="true"
                        aria-controls="aboutContent"
                        style={{textDecoration: "none", marginTop: "-60px"}}
                    >
                        <i className="fas fa-minus"/>
                    </button>
                </div>
                <div className="collapse show collapsible-section" id="aboutContent">
                    <p>{data.description}</p>
                    <div className="row mb-4">
                        <div className="col-sm-6 py-1">
                            <span className="fw-medium text-primary">Name:</span> {data.name}
                        </div>
                        <div className="col-sm-6 py-1">
                            <span className="fw-medium text-primary">Birthday:</span> {data.birthday}
                        </div>
                        <div className="col-sm-6 py-1">
                            <span className="fw-medium text-primary">Degree:</span> {data.degree}
                        </div>
                        <div className="col-sm-6 py-1">
                            <span className="fw-medium text-primary">Experience Level:</span> {data.level}
                        </div>
                        <div className="col-sm-6 py-1">
                            <span className="fw-medium text-primary">Phone:</span> {data.phone}
                        </div>
                        <div className="col-sm-6 py-1">
                            <span className="fw-medium text-primary">Email:</span> {data.email}
                        </div>
                        <div className="col-sm-6 py-1">
                            <span className="fw-medium text-primary">Location:</span> {data.location}
                        </div>
                        <div className="col-sm-6 py-1">
                            <span className="fw-medium text-primary">Freelance:</span> {data.freelance}
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <div className="d-flex bg-secondary p-4 box">
                                <h1 className="flex-shrink-0 display-5 text-primary mb-0 number">
                                    <CountUp end={data.experience} duration={3} />
                                </h1>
                                <div className="ps-3">
                                    <p className="mb-0">Hours of</p>
                                    <h5 className="mb-0">Experience</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <div className="d-flex bg-secondary p-4 box">
                                <h1 className="flex-shrink-0 display-5 text-primary mb-0 number">
                                    <CountUp end={data.projects} duration={3} />
                                </h1>
                                <div className="ps-3">
                                    <p className="mb-0">Complete</p>
                                    <h5 className="mb-0">Projects</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About End */}
        </>
    );
}