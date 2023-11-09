import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

/**
 *
 * @param {string} imgPresentation - specifi le nom de l'image a mettre pour illustrer la presentation
 * @param {string} title - specifi le titre de la carte de presentation
 * @param {string} description - specifi la description de la carte de presentation
 * @returns component
 */

function SimpleCardDescription({ imgPresentation, title, description }) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="position-relative d-flex flex-column justify-content-center col-12 col-lg-4 column-gap-0">
      <div className="position-absolute h-100 w-100 bg-filter d-flex flex-column justify-content-center">
        <div className="px-2 px-md-5 px-sm-4 text-center">
          <h2 className="fw-bold text-break">{title}</h2>
          <p className="text-light text-break fw-normal" data-aos="zoom-in">
            {description}
          </p>
        </div>
      </div>
      <img src={imgPresentation} alt={title} loading="lazy" />
    </div>
  );
}

export default SimpleCardDescription;
