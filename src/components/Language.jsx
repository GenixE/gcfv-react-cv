import React from 'react';
import { Waypoint } from 'react-waypoint';

export function Language({ data }) {
    // Split the data into two parts
    const half = Math.ceil(data.length / 2);
    const firstHalf = data.slice(0, half);
    const secondHalf = data.slice(half);

    const handleWaypointEnter = () => {
        document.querySelectorAll('.progress .progress-bar').forEach((bar) => {
            bar.style.width = bar.getAttribute('aria-valuenow') + '%';
        });
    };

    return (
        <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-flex align-items-center mb-4">
                <h1 className="title pb-3 mb-5">Languages</h1>
                <button
                    className="btn btn-link ms-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#languagesContent"
                    aria-expanded="false"
                    aria-controls="languagesContent"
                    style={{ textDecoration: 'none', marginTop: '-60px' }}
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>

            <div className="collapse collapsible-section" id="languagesContent">
                <Waypoint onEnter={handleWaypointEnter} />
                <div className="row">
                    <div className="col-sm-6">
                        {firstHalf.map((language) => (
                            <div className="skill mb-4" key={language.id}>
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">{language.name}</p>
                                    <p className="mb-2">{language.fluency}%</p>
                                </div>
                                <div className="progress">
                                    <div
                                        className={language['bar-color']}
                                        role="progressbar"
                                        aria-valuenow={language.fluency}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: '0%' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-sm-6">
                        {secondHalf.map((language) => (
                            <div className="skill mb-4" key={language.id}>
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">{language.name}</p>
                                    <p className="mb-2">{language.fluency}%</p>
                                </div>
                                <div className="progress">
                                    <div
                                        className={language['bar-color']}
                                        role="progressbar"
                                        aria-valuenow={language.fluency}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: '0%' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}