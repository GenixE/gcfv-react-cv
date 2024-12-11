import React, { useState, useEffect } from 'react';

export function Spinner() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading of JSON files
        const loadJsonFiles = async () => {
            // Replace with actual JSON loading logic
            await new Promise(resolve => setTimeout(resolve, 500));
            setLoading(false);
        };

        loadJsonFiles();
    }, []);

    return (
        <>
            {loading && (
                <div
                    id="spinner"
                    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
                >
                    <div
                        className="spinner-border text-primary"
                        style={{width: "3rem", height: "3rem"}}
                        role="status"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
        </>
    );
}