import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import ReservationState from "./components/ReservationState";
import Footer from "../../components/footer";

function ReservationThirdStep() {
  return (
    <div>
      <Navbar activeLink="reservation" darkTheme="yes" />
      <ReservationState step="step3" />

      <div className="container px-4 px-md-0 mb-5">
        <div className="row flex-column-reverse flex-lg-row justify-content-between">
          <div className="col-12 col-lg-7">
            <div className="card bg-transparent border-0 shadow-md">
              <div className="text-sm-start">
                <Link
                  to="/ReservartionSecondStep"
                  className="text-decoration-none fs-5 text-secondary"
                >
                  <span className="bi bi-arrow-left"></span>
                  Pr&eacute;c&eacute;dent
                </Link>
                <h3 className="fw-bold fs-1">Payement . . .</h3>
                <p className="text-justify">
                  Suite &agrave; des probl&egrave;mes technique, nous ne
                  disposons pas pour le moment de moyen de payement
                  electronique. Nous vous demandons donc de suivre les
                  &eacute;tapes &eacute;nnumer&eacute;es ci dessous pour valider
                  votre resevation et &eacute;ffectuer votre payement. Nous
                  sommes d&eacute;sol&eacute; pour ce p&eacute;tit
                  d&eacute;sagr&eacute;ment.
                </p>
                <div className="mt-4">
                  <h4 className="mb-3 fw-medium">
                    Etapes de validation de payement.
                  </h4>
                  <ol className="fw-medium">
                    <li className="my-3">
                      Contacter le service client de l'hotel au
                      <code>+237 6xx xxx xxx</code>.
                    </li>
                    <cite className="fw-normal">
                      Cette &eacute;tape permet au service client de l'hotel de
                      vous identifier et de
                      <code>
                        vous donner le num&eacute;ro au quel vous allez
                        &eacute;ffectuer le payement
                      </code>
                      . Ou convenir avec vous d'un moyen de payement
                      personnalis&eacute;.
                      <div className="my-3 d-flex flex-wrap align-items-center">
                        <Link
                          to="whatsapp://send?text=bonjour&phone=675156532"
                          className="me-3"
                        >
                          <button className="btn btn-success border-0 shadow-sm">
                            <span className="bi bi-whatsapp"></span>
                          </button>
                        </Link>
                        <Link
                          to="tel"
                          className="me-3"
                        >
                          <button className="btn btn-primary border-0 shadow-sm">
                            <span className="bi bi-telephone"></span>
                          </button>
                        </Link>
                      </div>
                    </cite>
                    <li className="my-3">Effectuer le payement.</li>
                    <cite className="fw-normal">
                      A cette &eacute;tape, vous devez &eacute;ffectuer votre
                      payement comme convenu &agrave; l'&eacute;tape
                      supp&eacute;rieur.
                    </cite>
                    <li className="my-3">Verifier votre boite email.</li>
                    <cite className="fw-normal">
                      A cette &eacute;tape, vous devez recevoir un email de
                      validation de votre reservation. Cet email contiendra les
                      informations li&eacute;es &agrave; votre reservation. En
                      cas de nom r&eacute;ception, verifier vos{" "}
                      <code>spam</code>. En cas d'abscence, actualiser votre
                      voite de reception. Si apr&egrave;s toutes ces tentatives,
                      vous n'avez toujour pas de mail, veuillez re-contacter le
                      service client de l'hotel au <code>+237 6xx xxx xxx</code>
                      .
                    </cite>
                  </ol>
                  <p>
                    Le Paquebot Hotel vous remercis de votre confiance et vous
                    souhaites un agr&eacute;able s&eacute;jour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <Footer />
      </>
    </div>
  );
}

export default ReservationThirdStep;
