import { useEffect } from 'react';
import Isotope from 'isotope-layout';

export function Filter({ data }) {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const portfolioIsotope = new Isotope('.portfolio-container', {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows',
            });

            const filterButtons = document.querySelectorAll('#portfolio-flters li');
            filterButtons.forEach(button => {
                button.addEventListener('click', function () {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');

                    portfolioIsotope.arrange({ filter: this.getAttribute('data-filter') });
                });
            });

            // Set the "All" filter as active by default
            const defaultButton = document.querySelector('#portfolio-flters li[data-filter="*"]');
            if (defaultButton) {
                defaultButton.classList.add('active');
                portfolioIsotope.arrange({ filter: '*' });
            }
        }, 0);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="row">
            <div className="col-12 text-center mb-2">
                <ul className="list-inline mb-4" id="portfolio-flters" style={{ gap: '5px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {data.map(filter => (
                        <li
                            key={filter.id}
                            className="btn btn-secondary"
                            data-filter={filter.data_filter}
                            style={{ margin: '5px' }} // Add margin to create space between buttons
                        >
                            <i className={`fa ${filter.icon} me-2`} />
                            {filter.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
