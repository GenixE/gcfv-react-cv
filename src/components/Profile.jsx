import {Sidebar} from "./Sidebar.jsx";
import {TypeAnimation} from "react-type-animation";
import { Link } from 'react-router-dom';

export function Profile() {
    return (
        <div className="col-lg-4 sticky-lg-top vh-100">
            <div className="d-flex flex-column h-100 text-center overflow-auto shadow navbar">
                <img
                    className="w-100 img-fluid mb-4"
                    src="/img/gcfv.webp"
                    alt="Profile"
                />
                <Sidebar/>
                <h1 className="text-primary mt-2 name">Gian Carlo Valencia Ferry</h1>
                <div className="mb-4" style={{height: 22}}>
                    <TypeAnimation
                        sequence={[
                            "Student in IES Emili Darder", // Text to display
                            2000, // Pause for 2 seconds
                            "Web Developer",
                            2000,
                            "Full Stack Developer",
                            2000,
                            "Freelancer",
                            2000,
                        ]}
                        wrapper="h4"
                        cursor={true}
                        repeat={Infinity}
                        style={{display: "inline-block", color: "lightgrey"}}
                        className="text-light typed-text-output"
                    />
                </div>
                <div className="d-flex justify-content-center mt-auto mb-3">
                    <a
                        className="btn btn-secondary btn-square mx-1 link"
                        href="https://www.facebook.com/gcfv0831/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook-f"/>
                    </a>
                    <a
                        className="btn btn-secondary btn-square mx-1 link"
                        href="https://www.linkedin.com/in/gian-carlo-valencia-ferry-97a8bb310/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin-in"/>
                    </a>
                    <a
                        className="btn btn-secondary btn-square mx-1 link"
                        href="https://www.instagram.com/gcfv_31/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-instagram"/>
                    </a>
                    <a
                        className="btn btn-secondary btn-square mx-1 link"
                        href="https://t.me/gcfv_31"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-telegram"/>
                    </a>
                </div>
                <div className="d-flex align-items-end justify-content-between border-top w-100">
                    <a
                        href="/my_cv.pdf"
                        className="btn w-50 border-end nav-button right-border"
                        download
                    >
                        Download CV
                    </a>
                    <Link to="/contact" className="btn w-50 btn-scroll nav-button">
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
}
