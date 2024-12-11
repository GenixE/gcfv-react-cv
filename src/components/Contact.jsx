import React from 'react';

export function Contact() {
    return (
        <>
            {/* Contact Start */}
            <section className="py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="d-flex align-items-center mb-4">
                    <h1 className="title pb-3 mb-5">Contact Me</h1>
                    <button
                        className="btn btn-link ms-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#contactContent"
                        aria-expanded="false"
                        aria-controls="contactContent"
                        style={{textDecoration: 'none', marginTop: '-60px'}}
                    >
                        <i className="fas fa-plus"></i>
                    </button>
                </div>

                <div className="collapse collapsible-section" id="contactContent">
                    <p className="mb-4">
                        If you have any questions or want to work with me, feel free to send me a message.
                    </p>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control contact border-0 bg-secondary"
                                        id="name"
                                        placeholder="Your Name"
                                    />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input
                                        type="email"
                                        className="form-control contact border-0 bg-secondary"
                                        id="email"
                                        placeholder="Your Email"
                                    />
                                    <label htmlFor="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control contact border-0 bg-secondary"
                                        id="subject"
                                        placeholder="Subject"
                                    />
                                    <label htmlFor="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea
                                        className="form-control contact border-0 bg-secondary"
                                        placeholder="Leave a message here"
                                        id="message"
                                        style={{height: 200}}
                                        defaultValue={""}
                                    />
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/* Contact End */}
        </>
    );
}