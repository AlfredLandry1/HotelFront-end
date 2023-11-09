import React, { useState } from "react";

function RateUs() {
  const [rating, setRating] = useState({
    star1: "rate pe-3 bi bi-star",
    star2: "rate pe-3 bi bi-star",
    star3: "rate pe-3 bi bi-star",
    star4: "rate pe-3 bi bi-star",
    star5: "rate pe-3 bi bi-star",
  });

  const handleClick = (star) => {
    setRating((prevState) => ({
      ...prevState,
      [star]:
        prevState[star] === "rate pe-3 text-primary bi bi-star-fill"
          ? "rate pe-3 bi bi-star"
          : "rate pe-3 text-primary bi bi-star-fill",
    }));
  };

  return (
    <div className="col-12">
      <div className="card bg-transparent border-0">
        <div className="card-header text-primary fw-bolder fs-4  bg-transparent border-0">
          Not&eacute;e nous
        </div>
        <div className="card-body fs-3 text-muted pt-0">
          <span
            className={rating.star1}
            onClick={() => handleClick("star1")}
          ></span>
          <span
            className={rating.star2}
            onClick={() => handleClick("star2")}
          ></span>
          <span
            className={rating.star3}
            onClick={() => handleClick("star3")}
          ></span>
          <span
            className={rating.star4}
            onClick={() => handleClick("star4")}
          ></span>
          <span
            className={rating.star5s}
            onClick={() => handleClick("star5")}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default RateUs;
