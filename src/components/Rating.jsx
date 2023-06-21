import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';

function Rating({ rating }) {
  const renderRatingStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span
          key={i}
          className="inline-block text-amber-400"
        >
          <BsFillStarFill />
        </span>
      );
    }
    return stars;
  };

  return <div>{renderRatingStars()}</div>;
}

export default Rating;