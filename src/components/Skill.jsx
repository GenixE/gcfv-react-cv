import { CollapsibleSection } from './CollapsibleSection';

export function Skill({data = []}) {
    const skillsContent = (
        <div className="row">
            {data.map(skill => (
                <div key={skill.id} className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div
                        className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
                        style={{visibility: "visible", animationName: "fadeInUp"}}
                    >
                        <div className="text-primary text-center mb-3">
                            <span className={`${skill.icon} fa-3x`}/>
                        </div>
                        <div className="counter-counting d-flex justify-content-center">
                            <h4 className="display-6" data-toggle="counter-up">
                                {skill.percentage}
                            </h4>
                            <h4 className="display-6">%</h4>
                        </div>
                        <p className="mb-0">{skill.language}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <CollapsibleSection
            title="Skills"
            defaultOpen={true}
            id="skills"
        >
            {skillsContent}
        </CollapsibleSection>
    );
}