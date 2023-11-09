import React from "react";

/**
 *
 * @param {string} step - specifi quel est l'etape a mettre en evidence
 * @returns le composant jsx de l'etape de reservation
 */

function ReservationState({ step }) {
  return (
    <section className="sticky-top w-100 bg-gradient-primary my-5 py-4">
      <div className="container px-4 px-md-0">
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-1 col-md-4">
            <p
              className={`${
                step === "step1" ? "text-light fs-4 fw-normal" : ""
              } d-flex m-0 w-100`}
            >
              <span className="bi bi-person-rolodex me-1"></span>
              <span className="d-none d-md-block text-wrap text-break">
                Informations personnelles
              </span>
            </p>
          </div>
          <div className="col-1 col-md-4">
            <p
              className={`${
                step === "step2" ? "text-light fs-4 fw-normal" : ""
              } d-flex m-0 w-100`}
            >
              <span className="bi bi-info-square me-1"></span>
              <span className="d-none d-md-block text-wrap text-break">
                Informations li&eacute;es au s&eacute;jour
              </span>
            </p>
          </div>
          <div className="col-1 col-md-4">
            <p
              className={`${
                step === "step3" ? "text-light fs-4 fw-normal" : ""
              } d-flex m-0 w-100`}
            >
              <span className="bi bi-credit-card me-1"></span>
              <span className="d-none d-md-block text-wrap text-break">
                Informations li&eacute;es au payment
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReservationState;
