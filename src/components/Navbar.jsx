import React from "react";
import { Outlet, Link } from "react-router-dom";

import logoPaquebot from "../assets/imgs/logoPaquebot.png";

/**
* La navbar elle importe deja le logo de la plateforme

* @component

* @param {string} activeLink - specifi le nom de l'element a passer en classe active
* @param {string} darkTheme - (optionel) specifi si la navbar doit avoir une couleur de fond, yes pour oui 
*/

function Navbar({ activeLink, darkTheme }) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${
          darkTheme === "yes" ? "bg-dark" : ""
        }`}
        aria-label="Eighth navbar example"
        id="backToTop"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logoPaquebot}
              alt="Logo de la plateforme"
              className="img-fluid"
              width={130}
            />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="bi bi-grid-1x2-fill fs-1 text-primary"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample07"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li
                className={`nav-item ${
                  activeLink === "accueil" ? "active-link" : ""
                }`}
              >
                <Link className="nav-link  me-3 me-3" to="/">
                  Accueil
                </Link>
              </li>
              <li
                className={`nav-item ${
                  activeLink === "chambres" ? "active-link" : ""
                }`}
              >
                <Link className="nav-link  me-3 me-3" to="/bedroom">
                  Chambres
                </Link>
              </li>
              <li
                className={`nav-item ${
                  activeLink === "reservation" ? "active-link" : ""
                }`}
              >
                <Link className="nav-link  me-3" to="/ReservationFirstStep">
                  Reserver
                </Link>
              </li>
              <li
                className={`nav-item ${
                  activeLink === "services" ? "active-link" : ""
                }`}
              >
                <Link className="nav-link  me-3" to="/service">
                  Services
                </Link>
              </li>
              <li
                className={`nav-item ${
                  activeLink === "contact" ? "active-link" : ""
                }`}
              >
                <Link className="nav-link  me-3" to="/contact">
                  Contactez-nous
                </Link>
              </li>
              <li
                className={`nav-item ${
                  activeLink === "localisation" ? "active-link" : ""
                }`}
              >
                <a className="nav-link  me-3" href="http/#">
                  Localisation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
