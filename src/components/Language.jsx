import {Waypoint} from 'react-waypoint';
import {CollapsibleSection} from './CollapsibleSection';

export function Language({data}) {
    const half = Math.ceil(data.length / 2);
    const firstHalf = data.slice(0, half);
    const secondHalf = data.slice(half);

    const handleWaypointEnter = () => {
        document.querySelectorAll('.progress .progress-bar').forEach((bar) => {
            bar.style.width = bar.getAttribute('aria-valuenow') + '%';
        });
    };

    const languageContent = (
        <>
            <Waypoint onEnter={handleWaypointEnter}/>
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
                                    style={{width: '0%'}}
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
                                    style={{width: '0%'}}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

    return (
        <CollapsibleSection
            title="Languages"
            defaultOpen={true}
            id="languages"
            onToggle={(isOpen) => {
                // Trigger progress bar animation when section is opened
                if (isOpen) {
                    handleWaypointEnter();
                }
            }}
        >
            {languageContent}
        </CollapsibleSection>
    );
}