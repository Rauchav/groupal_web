import "./reviews.css";
import { Link } from "react-router-dom";

function Reviews({ reviews }) {
  return (
    <div className="reviews">
      <ul className="reviews__list">
        {reviews &&
          reviews.map((review) => {
            return (
              <li key={review.id} className="reviews__item">
                <Link to={`${review.id}`} className="reviews__link">
                  {review.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Reviews;
