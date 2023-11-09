import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ModalComponent from "./ModalComponent";

import Newsletter from "./Newsletter";

import "bootstrap-icons/font/bootstrap-icons.css";
import logopaquebot from "../assets/imgs/logoPaquebotWhite.png";

function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="bg-primary py-5 px-3 px-md-2 px-lg-0">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={logopaquebot}
              alt="logo"
              width={200}
              className="mb-3 mt-3"
            />
            <p className="mb-4 mt-4 text-light">
              Situé à KRIBI, près de l'école publique de NZIOU
            </p>
            <span data-aos="zoom-left-in" data-aos-duration="1000">
              <h2 className="mb-3 mt-3 fw-bold">Nos contacts</h2>
              <ul className="mb-4">
                <li className="mb-3 mt-2 list-unstyled">
                  <span className="bi bi-telephone-fill"></span> Tel:xxxxxxxxx
                </li>
                <li className="mb-3 mt-2 list-unstyled">
                  <span className="bi bi-envelope-fill"></span> email:xxxxxxxxxx
                </li>
              </ul>
            </span>
            <span data-aos="zoom-left-in" data-aos-duration="1500">
              <h2 className="fw-bold">Suivez-nous</h2>
              <ul className="mb-4">
                <li className="mb-3 mt-2 list-unstyled">
                  <Link to="#" className="text-decoration-none text-light fs-6">
                    <span className="bi bi-facebook"></span> Facebook
                  </Link>
                </li>
                <li className="mb-3 mt-2 list-unstyled">
                  <Link to="#" className="text-decoration-none text-light fs-6">
                    <span className="bi bi-instagram"></span> Instagram
                  </Link>
                </li>
                <li className="mb-3 mt-2 list-unstyled">
                  <Link to="#" className="text-decoration-none text-light fs-6">
                    <span className="bi bi-tiktok"></span> TikTok
                  </Link>
                </li>
              </ul>
            </span>
          </div>
          <div className="col-md-4">
            <span data-aos="zoom-left-in" data-aos-duration="1800">
              <h2 className="fw-bold">Politiques et conditions</h2>
              <ul className="mb-4">
                <li className="mt-2 list-unstyled mb-4">
                  <ModalComponent
                    iconName="bi bi-file-earmark-fill"
                    linkName="Condition d'utilisation"
                    modalTitle="Condition d'utilisations"
                    modalContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                modi voluptate sint tempora, quisquam unde quidem suscipit animi
                numquam eaque earum illum sit harum amet. Facere provident nulla
                omnis ipsum? Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Quis modi voluptate sint tempora, quisquam unde quidem
                suscipit animi numquam eaque earum illum sit harum amet. Facere
                provident nulla omnis ipsum? Lorem ipsum dolor sit."
                  />
                </li>
                <li className="mt-2 list-unstyled mb-4">
                  <ModalComponent
                    linkName="Politique de l'hotel"
                    modalTitle="Politique de l'hotel"
                    iconName="bi bi-file-lock2-fill"
                    modalContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                modi voluptate sint tempora, quisquam unde quidem suscipit animi
                numquam eaque earum illum sit harum amet. Facere provident nulla
                omnis ipsum? Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Quis modi voluptate sint tempora, quisquam unde quidem
                suscipit animi numquam eaque earum illum sit harum amet. Facere
                provident nulla omnis ipsum? Lorem ipsum dolor sit."
                  />
                </li>
                <li className="mt-2 list-unstyled mb-4">
                  <ModalComponent
                    iconName="bi bi-file-lock2-fill"
                    linkName="Politiques de confidentialité"
                  />
                </li>
                <li className="mt-2 list-unstyled mb-4">
                  <ModalComponent
                    iconName="bi bi-file-earmark-fill"
                    linkName="Mentions légales"
                  />
                </li>
              </ul>
            </span>
            <span data-aos="zoom-right-in" data-duration="20000">
              <h2 className="fw-bold ">Plan du site</h2>
              <ul className="mb-4">
                <li className="mb-1 mt-1 list-unstyled mb-2">
                  <Link to="/" className="text-decoration-none text-light fs-6">
                    Accueil
                  </Link>
                </li>
                <li className="mb-1 mt-1 list-unstyled mb-2">
                  <Link
                    to="/bedroom"
                    className="text-decoration-none text-light fs-6"
                  >
                    Chambres
                  </Link>
                </li>
                <li className="mb-1 mt-1 list-unstyled mb-2">
                  <Link
                    to="/reservation"
                    className="text-decoration-none text-light fs-6"
                  >
                    Réserver
                  </Link>
                </li>
                <li className="mb-1 mt-1 list-unstyled mb-2">
                  <Link
                    to="/service"
                    className="text-decoration-none text-light fs-6"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-1 mt-1 list-unstyled mb-2">
                  <Link
                    to="/contact"
                    className="text-decoration-none text-light fs-6"
                  >
                    Contactez-nous
                  </Link>
                </li>
                <li className="mb-1 mt-1 list-unstyled mb-2">
                  <Link to="#" className="text-decoration-none text-light fs-6">
                    Localisation
                  </Link>
                </li>
              </ul>
            </span>
            <span data-aos="zoom-left-in" data-aos-duration="1800">
              <h2 className="mb-5 fw-bold">Nos partenaires</h2>
            </span>
          </div>
          <div className="col-md-4">
            <Newsletter />
          </div>
        </div>
        <div className="w-100 text-center mt-5 mt-md-0">
          <p className="mb-5 text-light">
            2023 LE PAQUEBOT HOTEL, &copy; tous droits réservés
          </p>
        </div>
      </div>
      <>
        {/* <div className=" p-3 d-flex fixed-bottom justify-content-end">
          <a
            href="#backToTop"
            className="btn-secondary text-light px-2 fs-2 shadow-lg rounded-2 ancre"
          >
            <span className="bi bi-arrow-up-short"></span>
          </a>
        </div> */}
      </>
    </footer>
  );
}

export default Footer;
