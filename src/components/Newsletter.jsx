export function Newsletter() {
    return (
        <>
            {/* Subscribe Start */}
            <section className="wow fadeInUp" data-wow-delay="0.1s">
                <div className="bg-secondary text-center p-5">
                    <h1 className="text-white font-weight-bold">Newsletter</h1>
                    <p className="text-white">
                        Subscribe to get my latest news about my projects.
                    </p>
                    <div className="position-relative w-100">
                        <input
                            className="form-control newsletter bg-dark border-0 w-100 py-3 ps-4 pe-5"
                            type="text"
                            placeholder="Your email"
                        />
                        <button
                            type="button"
                            className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
            {/* Subscribe End */}
        </>
    )
}