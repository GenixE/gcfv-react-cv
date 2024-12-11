export function Footer() {
    return (
        <section className="wow fadeIn" data-wow-delay="0.1s">
            <div className="bg-secondary text-light text-center p-5 footer">
                <div className="d-flex justify-content-center mb-4">
                    <a className="btn btn-dark btn-square mx-1 link" href="https://www.facebook.com/gcfv0831/"
                       target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-dark btn-square mx-1 link"
                       href="https://www.linkedin.com/in/gian-carlo-valencia-ferry-97a8bb310/" target="_blank"
                       rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-dark btn-square mx-1 link" href="https://www.instagram.com/gcfv_31/"
                       target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-dark btn-square mx-1 link" href="https://t.me/gcfv_31" target="_blank">
                        <i className="fab fa-telegram"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}