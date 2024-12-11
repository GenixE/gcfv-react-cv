import {useEffect, useState} from "react";
import {Filter} from "./Filter.jsx";
import FilterData from "../data/filters.json";
import {Newsletter} from "./Newsletter.jsx";
import Isotope from 'isotope-layout';

export function Portfolio({data}) {
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        setFilters(FilterData);
    }, []);

    useEffect(() => {
        const portfolioContent = document.getElementById("portfolioContent");
        let portfolioIsotope;

        if (portfolioContent) {
            portfolioContent.addEventListener("shown.bs.collapse", function () {
                portfolioIsotope = new Isotope('.portfolio-container', {
                    itemSelector: '.portfolio-item',
                    layoutMode: 'fitRows',
                    transitionDuration: '0.8s', // Add transition duration for smoothness
                });
            });
        }

        // Cleanup event listeners on component unmount
        return () => {
            if (portfolioContent) {
                portfolioContent.removeEventListener("shown.bs.collapse", function () {
                    if (portfolioIsotope) {
                        portfolioIsotope.destroy();
                    }
                });
            }
        };
    }, []);

    const Slideshow = ({images}) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const [opacity, setOpacity] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {
                setOpacity(0); // Set opacity to 0 before changing the image
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                    setOpacity(1); // Set opacity to 1 after changing the image
                }, 500); // Match the transition duration
            }, 4000);

            return () => clearInterval(intervalId);
        }, [images]);

        return (
            <img
                className="img-fluid w-100"
                src={images[currentIndex]}
                alt="Slideshow"
                id={images.length > 1 ? "slideshow" : undefined}
                style={{
                    transition: 'opacity 0.5s ease-in-out',
                    maxHeight: '229px',
                    width: 'auto',
                    objectFit: 'contain',
                    opacity: opacity
                }}
            />
        );
    };

    return (
        <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-flex align-items-center mb-4">
                <h1 className="title pb-3 mb-5">Portfolio</h1>
                <button
                    className="btn btn-link ms-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#portfolioContent"
                    aria-expanded="false"
                    aria-controls="portfolioContent"
                    style={{textDecoration: "none", marginTop: "-60px"}}
                >
                    <i className="fas fa-plus"/>
                </button>
            </div>
            <div className="collapse collapsible-section" id="portfolioContent">
                <div className="row">
                    <div className="col-12">
                        <Filter data={filters}/>
                        <div className="row portfolio-container">
                            {data.map(item => (
                                <div key={item.id} className={`col-md-6 mb-4 portfolio-item ${item.category}`}>
                                    <h3 className="project-name">{item.project_name}</h3>
                                    <div className="position-relative overflow-hidden mb-2">
                                        {item.images.length > 1 ? (
                                            <Slideshow images={item.images}/>
                                        ) : (
                                            <img
                                                className="img-fluid w-100"
                                                src={item.images[0]}
                                                alt={item.project_name}
                                            />
                                        )}
                                        <div className="portfolio-btn d-flex align-items-center justify-content-center">
                                            <a href={item.repository} target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-eye"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {item.languages.map((language, index) => (
                                            <div key={index} className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                <div className="skills-item text-center rounded p-4 h-100">
                                                    <div className="text-primary text-center mb-3">
                                                        <span
                                                            className={`${language.icon} fa-2x`}
                                                            title={language.name}
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Newsletter />
            </div>
        </section>
    );
}