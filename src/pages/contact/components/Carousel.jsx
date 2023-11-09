import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import RateUs from "../../../components/RateUs";

/**
 *
 * @param {boolean} rating - specifi si le composant de notage apparait
 * @param {string} imgSlide1 - specifi la reference a la premiere image du carousel
 * @param {string} imgSlide2 - specifi la reference a la seconde image du carousel
 * @param {string} imgSlide3 - specifi la reference a la troisieme image du carousel
 * @returns le carousel de 3 elements image simple avec le composant de noteage si besoin
 */

function Carousel({ rating, imgSlide1, imgSlide2, imgSlide3 }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-left" data-aos-duration="1000">
      {rating ? <RateUs /> : ""}
      <div className="card border-0 bg-transparent">
        <div className="card-body">
          <div
            id="carouselCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner w-100">
              <div className="carousel-item active">
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                  <img
                    src={imgSlide1}
                    alt={imgSlide1}
                    className="img-fluid w-100"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                  <img
                    src={imgSlide2}
                    alt={imgSlide2}
                    className="img-fluid w-100"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                  <img
                    src={imgSlide3}
                    alt={imgSlide3}
                    className="img-fluid w-100"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
