import React from "react";

/**
 * 
 * @param {string} imgSlide1 - specifi l'image du premier slide
 * @param {string} imgSlide2 - specifi l'image du second slide
 * @param {string} imgSlide3 - specifi l'image du troisieme slide
 * @returns jsx minimal carousel card
 */

function Carousel({ imgSlide1, imgSlide2, imgSlide3 }) {
  return (
    <section className="gap-0 mb-5 pb-5">
      <div
        id="carouselCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex flex-column flex-lg-row justify-content-between">
              <img loading="lazy"
                src={imgSlide1}
                alt={imgSlide1}
                className="img-fluid w-100"
              />
              <img loading="lazy"
                src={imgSlide3}
                alt={imgSlide3}
                className="img-fluid w-100"
              />
              <img loading="lazy"
                src={imgSlide2}
                alt={imgSlide2}
                className="img-fluid w-100"
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex flex-column flex-lg-row justify-content-between">
              <img loading="lazy"
                src={imgSlide3}
                alt={imgSlide3}
                className="img-fluid w-100"
              />
              <img loading="lazy"
                src={imgSlide2}
                alt={imgSlide2}
                className="img-fluid w-100"
              />
              <img loading="lazy"
                src={imgSlide1}
                alt={imgSlide1}
                className="img-fluid w-100"
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex flex-column flex-lg-row justify-content-between">
              <img loading="lazy"
                src={imgSlide2}
                alt={imgSlide2}
                className="img-fluid w-100"
              />
              <img loading="lazy"
                src={imgSlide1}
                alt={imgSlide1}
                className="img-fluid w-100"
              />
              <img loading="lazy"
                src={imgSlide3}
                alt={imgSlide3}
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
