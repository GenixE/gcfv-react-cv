import { useEffect } from 'react';

export function Filter({ data, isotopeInstance }) {
    useEffect(() => {
        if (isotopeInstance) {
            const filterButtons = document.querySelectorAll('#portfolio-flters li');
            filterButtons.forEach(button => {
                button.addEventListener('click', function () {
                    if (!this.classList.contains('active')) {
                        filterButtons.forEach(btn => btn.classList.remove('active'));
                        this.classList.add('active');
                        isotopeInstance.arrange({ filter: this.getAttribute('data-filter') });
                    }
                });
            });

            const defaultButton = document.querySelector('#portfolio-flters li[data-filter="*"]');
            if (defaultButton) {
                defaultButton.classList.add('active');
                isotopeInstance.arrange({ filter: '*' });
            }
        }
    }, [isotopeInstance]);

    return (
        <div className="row">
            <div className="col-12 text-center mb-2">
                <ul className="list-inline mb-4" id="portfolio-flters" style={{ gap: '5px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {data.map(filter => (
                        <li
                            key={filter.id}
                            className="btn btn-secondary"
                            data-filter={filter.data_filter}
                            style={{ margin: '5px' }}
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