import {CollapsibleSection} from './CollapsibleSection';

export function Service({data}) {
    const serviceContent = (
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
    );

    return (
        <CollapsibleSection
            title="Services"
            defaultOpen={true}
            id="services"
        >
            {serviceContent}
        </CollapsibleSection>
    );
}