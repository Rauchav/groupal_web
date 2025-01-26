import backIcon from "../../../resourses/images/back-solid-blue.svg";
import "./review.css";
import { useNavigate, useParams } from "react-router-dom";

function Review({ reviews }) {
  const navigate = useNavigate();
  const params = useParams();
  let id = params.reviewId;
  id = id - 1;

  return (
    <div className="review">
      {reviews && (
        <div className="review__item">
          <img
            alt="left arrow icon"
            src={backIcon}
            className="back__icon"
            onClick={() => navigate("/reviews")}
          ></img>
          <h3 className="review__title">{reviews[id]?.title}</h3>
          <p className="review__description">{reviews[id]?.text}</p>
          <p className="review__rating">
            Calificación final:{reviews[id]?.rating}/5
          </p>
        </div>
      )}
    </div>
  );
}

export default Review;
