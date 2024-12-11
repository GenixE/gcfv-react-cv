import {CollapsibleSection} from './CollapsibleSection';
import {useEffect, useState} from 'react';

export function Newsletter() {
    const [news, setNews] = useState([]);
    const [visibleNews, setVisibleNews] = useState(4);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null); // Reset error state
            const params = {
                api_token: import.meta.env.VITE_NEWS_API_TOKEN,
                categories: 'business,tech',
                search: 'apple',
                limit: '50',
            };
            const esc = encodeURIComponent;
            const query = Object.keys(params)
                .map(k => esc(k) + '=' + esc(params[k]))
                .join('&');
            const url = "https://api.thenewsapi.com/v1/news/all?" + query;

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch news');
                const result = await response.json();
                setNews(Array.isArray(result.data) ? result.data : []);
            } catch (error) {
                console.error('Error fetching news:', error);
                setError('Failed to fetch news. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleNews((prevVisible) => prevVisible + 4);
            setLoading(false);
        }, 500);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const newsletterContent = (
        <div className="row g-4 wow fadeInUp" data-wow-delay="0.1s">
            {error ? (
                <div className="col-12 text-center text-danger">
                    <p>{error}</p>
                </div>
            ) : (
                news.slice(0, visibleNews).map((item, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="newsletter-item">
                            {item.image_url ? (
                                <img
                                    src={item.image_url}
                                    alt={item.title || "Newsletter Image"}
                                    className="img-fluid rounded mb-3"
                                    style={{objectFit: 'contain'}}
                                />
                            ) : (
                                <div
                                    className="newsletter-image-placeholder mb-3 rounded d-flex align-items-center justify-content-center bg-light"
                                    style={{width: '100%', height: '200px'}}>
                                    <span className="text-muted">No Image Available</span>
                                </div>
                            )}
                            <h5 className="mb-2 newsletter-title">{item.title}</h5>
                            <p className="mb-0 newsletter-desc">
                                {item.description || item.summary}
                            </p>
                            {item.url && (
                                <a href={item.url} target="_blank" rel="noopener noreferrer"
                                   className="btn btn-link mt-2">
                                    Read more about {item.title}
                                </a>
                            )}
                            <div className="mt-2 text-muted small">
                                {item.publisher?.name && <span>Source: {item.publisher.name}</span>}
                                {item.published_at && (
                                    <span className="ms-2">
                                        Published: {formatDate(item.published_at)}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            )}
            {visibleNews < news.length && !error && (
                <div className="col-12 text-center mt-4">
                    <button className="btn btn-primary" onClick={handleLoadMore} disabled={loading}>
                        {loading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            )}
        </div>
    );

    return (
        <CollapsibleSection title="Newsletter" defaultOpen={true} id="newsletter">
            {newsletterContent}
        </CollapsibleSection>
    );
}
