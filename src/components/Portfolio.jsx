import {useEffect, useState} from "react";
import {Filter} from "./Filter.jsx";
import FilterData from "../data/filters.json";
import Isotope from 'isotope-layout';
import {CollapsibleSection} from './CollapsibleSection';

export function Portfolio({data}) {
    const [filters, setFilters] = useState([]);
    const [portfolioIsotope, setPortfolioIsotope] = useState(null);

    useEffect(() => {
        setFilters(FilterData);
    }, []);

    // Initialize Isotope when the component mounts or when data changes
    useEffect(() => {
        if (document.querySelector('.portfolio-container')) {
            const iso = new Isotope('.portfolio-container', {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows',
                transitionDuration: '0.8s',
            });

            const filterButtons = document.querySelectorAll('#portfolio-flters li');
            filterButtons.forEach(button => {
                button.addEventListener('click', function () {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    const filterValue = this.getAttribute('data-filter');
                    iso.arrange({ filter: filterValue });
                });
            });

            setPortfolioIsotope(iso);
        }

        return () => {
            if (portfolioIsotope) {
                portfolioIsotope.destroy();
            }
        };
    }, [data]);


    const Slideshow = ({images}) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const [opacity, setOpacity] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {
                setOpacity(0);
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                    setOpacity(1);
                }, 500);
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

    const portfolioContent = (
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
    );

    return (
        <CollapsibleSection
            title="Portfolio"
            defaultOpen={true}
            id="portfolio"
            onToggle={(isOpen) => {
                // Re-initialize Isotope when section is opened
                if (isOpen && !portfolioIsotope) {
                    const iso = new Isotope('.portfolio-container', {
                        itemSelector: '.portfolio-item',
                        layoutMode: 'fitRows',
                        transitionDuration: '0.8s',
                    });
                    setPortfolioIsotope(iso);
                }
            }}
        >
            {portfolioContent}
        </CollapsibleSection>
    );
}