import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ maxRating }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex justify-center mt-[200px]">
      {Array.from({ length: maxRating }, (_, index) => (
        <Star
          onClick={() => setRating(index + 1)}
          fill={rating >= index + 1}
          key={index}
          color="yellow-500"
          textSize={30} 
        />
      ))}
      <p className="text-[30px]"> {rating || ""} </p>
    </div>
  );
};

export default StarRating;
