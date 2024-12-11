export function Education({data}) {
    return (
        <>
            {/* Education Start */}
            <section className="py-5 wow fadeInUp" data-wow-delay="0.1s">
                {/* Collapsible Header */}
                <div className="d-flex align-items-center mb-4">
                    <h1 className="title pb-3 mb-5">Education</h1>
                    <button
                        className="btn btn-link ms-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#educationContent"
                        aria-expanded="false"
                        aria-controls="educationContent"
                        style={{textDecoration: "none", marginTop: "-60px"}}
                    >
                        <i className="fas fa-plus"/>
                    </button>
                </div>
                {/* Collapsible Content */}
                <div className="collapse collapsible-section" id="educationContent">
                    <div className="border-start border-2 border-light pt-2 ps-5">
                        {/* Education items remain the same */}
                        {data.map(item => (
                            <div className="position-relative mb-4" key={item.id}>
                                <span className="bi bi-arrow-right fs-4 text-light position-absolute"
                                      style={{top: "-5px", left: "-50px"}}/>
                                <h5 className="mb-1 course">
                                    {item.course}
                                </h5>
                                <p className="mb-2 sy">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.school}
                                    </a> | <small>{item.sy}</small>
                                </p>
                                <p className="desc">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Education End */}
        </>
    );
}