export function Service({data}) {
    return (
        <>
            {/* Services Start */}
            <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
                {/* Collapsible Header */}
                <div className="d-flex align-items-center mb-4">
                    <h1 className="title pb-3 mb-5">Services</h1>
                    <button
                        className="btn btn-link ms-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#servicesContent"
                        aria-expanded="false"
                        aria-controls="servicesContent"
                        style={{textDecoration: "none", marginTop: "-60px"}}
                    >
                        <i className="fas fa-plus"/>
                    </button>
                </div>
                {/* Collapsible Content */}
                <div className="collapse collapsible-section" id="servicesContent">
                    <div className="row g-4">
                        {data.map(item => (
                            <div className="col-md-6" key={item.id}>
                                <div className="service-item">
                                    <i className={item.icon}/>
                                    <h5 className="mb-2 service-title">{item.name}</h5>
                                    <p className="mb-0 service-desc">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Services End */}
        </>
    );
}