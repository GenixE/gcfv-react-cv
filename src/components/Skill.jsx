export function Skill({data = []}) {
    return (
        <>
            {/* Skills Start */}
            <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
                {/* Collapsible Header */}
                <div className="d-flex align-items-center mb-4">
                    <h1 className="title pb-3 mb-5">Skills</h1>
                    <button
                        className="btn btn-link ms-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#skillsContent"
                        aria-expanded="false"
                        aria-controls="skillsContent"
                        style={{textDecoration: "none", marginTop: "-60px"}}
                    >
                        <i className="fas fa-plus"/>
                    </button>
                </div>
                {/* Collapsible Content */}
                <div className="collapse collapsible-section" id="skillsContent">
                    <div className="row">
                        {data.map(skill => (
                            <div key={skill.id} className="col-6 col-md-4 col-lg-4 col-xl-3">
                                <div
                                    className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
                                    style={{visibility: "visible", animationName: "fadeInUp"}}
                                >
                                    <div className="text-primary text-center mb-3">
                                        <span className={`${skill.icon} fa-3x`}/>
                                    </div>
                                    <div className="counter-counting d-flex justify-content-center">
                                        <h4 className="display-6" data-toggle="counter-up">
                                            {skill.percentage}
                                        </h4>
                                        <h4 className="display-6">%</h4>
                                    </div>
                                    <p className="mb-0">{skill.language}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Skills End */}
        </>
    );
}