import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

/**
 *
 * @param {string} title - specifi le titre de la carte
 * @param {string} content - specifi le contenu de descriptif de la carte
 * @param {string} linkName - specifi le nom du bouton
 * @param {string} iconName - specifi le nom de l'icone a afficher dans le bouton
 * @param {string} cardImg - specifi le nom de l'image de la carte
 * @returns
 */

function LeftImgCard({
  title,
  whitDescription,
  size,
  capacity,
  content,
  linkName,
  iconName,
  cardImg,
  whitBtn,
}) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="pb-5 py-lg-5 my-lg-5">
      <div className="row">
        <div className="col-lg-5 col-md-12" data-aos="fade-right">
          <img
            src={cardImg}
            alt={title}
            className="img-fluid w-100 pb-5 pb-lg-0"
            loading="lazy"
          />
        </div>
        <div className="col-lg-1 col-md-12"></div>
        <div className="col-lg-6 col-md-12" data-aos="fade-left">
          <div className="card-body">
            <h1 className="card-title mb-3 text-primary">{title}</h1>
            {whitDescription === "yes" ? (
              <div className="d-flex flex-wrap">
                <h4 className="card-title mb-3 fw-bold text-dark me-5">
                  Taille:
                  {size} m<sup>2</sup>
                </h4>
                <h4 className="card-title mb-3 fw-bold text-dark">
                  Capacit&eacute;:
                  {capacity} pers
                </h4>
              </div>
            ) : (
              ""
            )}
            <div className="card-text text-justify">
              <p>{content}</p>
            </div>
            {whitBtn === "yes" ? (
              <a
                className="btn btn-secondary px-4 mb-5 d-inline-flex align-items-center"
                href="http:/#"
              >
                {linkName} <span className={`fs-3 ps-2 ${iconName}`}></span>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImgCard;
