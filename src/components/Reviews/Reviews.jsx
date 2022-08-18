import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadReviewsMovie } from "services/moviesAPI";

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        loadReviewsMovie(movieId).then(setReviews)
    }, [movieId]);

    const isReviewsEmpty = reviews.length === 0;
    
    return (
        isReviewsEmpty ? 
        <p>We don't have any reviews for this movie</p>
        :
        <ol>
            {reviews.map(review => {
                const {id, content, author} = review;
                return (
                    <li key={id}>
                        <p><b>Author: {author}</b></p>
                        <p>{content}</p>
                    </li>
                )
            })}
        </ol>
    )
};

export default Reviews;