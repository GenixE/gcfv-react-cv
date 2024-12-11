import React, { useState, useEffect } from 'react';

export function CollapsibleSection({ title, children, defaultOpen = true, id, onToggle }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    useEffect(() => {
        if (onToggle) {
            onToggle(isOpen);
        }
    }, [isOpen, onToggle]);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s" id={`${id}Title`}>
            <div className="d-flex align-items-center">
                <h1 className="title pb-3 mb-5">{title}</h1>
                <button
                    className="btn btn-link ms-3"
                    type="button"
                    onClick={toggleSection}
                    style={{textDecoration: "none", marginTop: "-60px"}}
                >
                    <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`}/>
                </button>
            </div>
            <div
                className={`collapsible-section ${isOpen ? 'show' : ''}`}
                id={`${id}Content`}
                style={{
                    transition: 'all 0.3s ease-in-out',
                    opacity: isOpen ? 1 : 0,
                    maxHeight: isOpen ? '2000px' : '0',
                    overflow: 'hidden'
                }}
            >
                {children}
            </div>
        </section>
    );
}