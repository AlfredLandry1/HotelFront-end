import React from "react";
import { Link } from "react-router-dom";

import imgMap from "../assets/imgs/home/imgMap.png";
import Navbar from "./Navbar";
import Toast from "./Toast";

/**
* La banniere est reutilisable et importe elle meme sa navbar

* @component

* @param {string} bannerImage - specifi l'image a mettre en arriere plan de la banniere
* @param {string} brandText - specifi le plus gros titre qui s'affiche sur la banniere
* @param {string} descriptionText - specifi le texte de description de la page en cours
* @param {string} iconName - specifi le nom de l'icone a afficher dans le bouton de la navbar
* @param {string} linkName - specifi le texte du bouton de la banniere
* @returns
*/

function BannerNavbar({
  activeLink,
  bannerImage,
  brandText,
  descriptionText,
  alertMessage,
  iconName,
  linkName,
}) {
  return (
    <header
      className="bg-img"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="banner-filter">
        <Navbar activeLink={activeLink} />
        <div className="container my-md-4">
          <div className="row justify-content-center">
            <div className="col-11 col-md-12 col-lg-9 banner-text">
              <h1 className="col-md-12 col-lg-9 h1 mb-md-3 fw-bolder">
                {brandText}
              </h1>

              <p className="col-md-12 col-lg-8 mb-md-5 text-break fw-light text-justify">
                <big>Le PAQUEBOT HOTEL</big> {descriptionText}
              </p>

              <Link
                className="btn btn-secondary px-5 py-3 mb-5 tex-break w-auto"
                to="/reservationFirstStep"
              >
                <span className={`pe-2 ${iconName}`}></span> {linkName}
              </Link>
            </div>

            <div className="col-11 col-md-12 col-lg-3 mt-md-3">
              <div className="col-12">
                <img
                  className="mb-3 w-100 img-fluid box-shadow"
                  loading="lazy"
                  src={imgMap}
                  alt="Localisation de l'hotel"
                />
              </div>

              <div>
                <Toast alertMessage={alertMessage} />

                {/* <div className="col-7 d-flex justify-content-between gap-3 mb-5">
                  <a
                    className="btn btn-primary rounded-circle py-2 align-self-start"
                    title="Cr&eacute;er un compte maintenant"
                    href="http/#"
                  >
                    <span className="bi bi-person-plus-fill"></span>
                  </a>
                  <a
                    className="btn btn-danger rounded-circle py-2 align-self-start"
                    title="Me d&eacute;connecter"
                    href="http/#"
                  >
                    <span className="bi bi-person-dash-fill"></span>
                  </a>
                  <a
                    className="btn btn-secondary rounded-circle py-2 align-self-start"
                    title="Modifier mon profile maintenant"
                    href="http/#"
                  >
                    <span className="bi bi-person-fill"></span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default BannerNavbar;
