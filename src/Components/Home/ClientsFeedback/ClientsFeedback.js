import React, { useState, useEffect } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';



const ClientsFeedback = () => {
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        fetch('https://secret-eyrie-95562.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setFeeds(data))
    }, [])
    return (
        <section className="feedback-container mt-5 mb-5 p-1">
            <h3 className="text-center">Clients <span style={{ color: '#7ab259' }}>Feedback</span> </h3>
            <div className="container">
                <div className="row mt-5 pt-5">
                    {
                        feeds.map(feed => <FeedbackCard feed={feed} key={feed.id}></FeedbackCard>)
                    }
                </div>
            </div>

        </section>
    );
};

export default ClientsFeedback;