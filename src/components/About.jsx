import CountUp from 'react-countup';
import { CollapsibleSection } from './CollapsibleSection';

export function About({data}) {
    const aboutContent = (
        <>
            <p>{data.description}</p>
            <div className="row mb-4">
                <div className="col-sm-6 py-1">
                    <span className="fw-medium text-primary">Name:</span> {data.name}
                </div>
                <div className="col-sm-6 py-1">
                    <span className="fw-medium text-primary">Birthday:</span> {data.birthday}
                </div>
                <div className="col-sm-6 py-1">
                    <span className="fw-medium text-primary">Degree:</span> {data.degree}
                </div>
                <div className="col-sm-6 py-1">
                    <span className="fw-medium text-primary">Experience Level:</span> {data.level}
                </div>
                <div className="col-sm-6 py-1">
                    <span className="fw-medium text-primary">Phone:</span> {data.phone}
                </div>
                <div className="col-sm-6 py-1">
                    <span className="fw-medium text-primary">Email:</span> {data.email}
                </div>
                <div className="col-sm-6 py-1">
                    <span className="fw-medium text-primary">Location:</span> {data.location}
                </div>
                <div className="col-sm-6 py-1">
                    <span className="fw-medium text-primary">Freelance:</span> {data.freelance}
                </div>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-6 col-xl-6">
                    <div className="d-flex bg-secondary p-4 box">
                        <h1 className="flex-shrink-0 display-5 text-primary mb-0 number">
                            <CountUp end={data.experience} duration={3} className="countUp"/>
                        </h1>
                        <div className="ps-3">
                            <p className="mb-0 abtText">Hours of</p>
                            <h5 className="mb-0 abtText">Experience</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                    <div className="d-flex bg-secondary p-4 box">
                        <h1 className="flex-shrink-0 display-5 text-primary mb-0 number">
                            <CountUp end={data.projects} duration={3} className="countUp"/>
                        </h1>
                        <div className="ps-3">
                            <p className="mb-0 abtText">Complete</p>
                            <h5 className="mb-0 abtText">Projects</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <CollapsibleSection
            title="About Me"
            defaultOpen={true}
            id="about"
        >
            {aboutContent}
        </CollapsibleSection>
    );
}