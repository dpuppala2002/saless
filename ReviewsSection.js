// components/ReviewsSection.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewsSection = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1')
            .then(response => {
                setReviews(response.data.reviews);
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
            });
    }, []);

    return (
        <div className="reviews-section">
            <h2>Customer Reviews</h2>
            <div className="reviews-list">
                {reviews.map(review => (
                    <div key={review.id} className="review-item">
                        <p>{review.author}</p>
                        <p>{review.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsSection;
