import React from "react";

const Star = ({ onClick, fill, color, textSize=10}) => {
  return (
    <button onClick={onClick}>
      {fill ? (
        <i className={`fa-solid fa-star text-[${textSize}px] text-${color}`}></i>
      ) : (
        <i className={`fa-regular fa-star text-[${textSize}px] text-${color} `}></i>
      )}
    </button>
  );
};

export default Star;
