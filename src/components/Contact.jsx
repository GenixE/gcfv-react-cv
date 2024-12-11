import {CollapsibleSection} from './CollapsibleSection';

export function Contact() {
    const contactContent = (
        <>
            <p className="mb-4">
                If you have any questions or want to work with me, feel free to send me a message.
            </p>
            <form>
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control contact border-0 bg-secondary"
                                id="name"
                                placeholder="Your Name"
                            />
                            <label htmlFor="name">Your Name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control contact border-0 bg-secondary"
                                id="email"
                                placeholder="Your Email"
                            />
                            <label htmlFor="email">Your Email</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control contact border-0 bg-secondary"
                                id="subject"
                                placeholder="Subject"
                            />
                            <label htmlFor="subject">Subject</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea
                                className="form-control contact border-0 bg-secondary"
                                placeholder="Leave a message here"
                                id="message"
                                style={{height: 200}}
                                defaultValue={""}
                            />
                            <label htmlFor="message">Message</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </>
    );

    return (
        <CollapsibleSection
            title="Contact Me"
            defaultOpen={true}
            id="contact"
        >
            {contactContent}
        </CollapsibleSection>
    );
}