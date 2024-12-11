import {CollapsibleSection} from './CollapsibleSection';

export function Education({data}) {
    const educationContent = (
        <div className="border-start border-2 border-light pt-2 ps-5">
            {data.map(item => (
                <div className="position-relative mb-4" key={item.id}>
                    <span
                        className="bi bi-arrow-right fs-4 text-light position-absolute"
                        style={{top: "-5px", left: "-50px"}}
                    />
                    <h5 className="mb-1 course">
                        {item.course}
                    </h5>
                    <p className="mb-2 sy">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.school}
                        </a> | <small>{item.sy}</small>
                    </p>
                    <p className="desc">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>
    );

    return (
        <CollapsibleSection
            title="Education"
            defaultOpen={true}
            id="education"
        >
            {educationContent}
        </CollapsibleSection>
    );
}