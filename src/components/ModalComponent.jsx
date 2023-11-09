import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param {String} iconName - Specifi le nom complet de l'icone a afficher
 * @param {String} linkName - Specifi le nom du lien de l'icona afficher
 * @param {String} modalTitle - Specifi le nom du lien a afficher pour l'affichage du modale
 * @param {String} modalContent - Specifi le contenu de la boite modale
 * @returns composant fonctionnel qui permet l'affichage dune boite modal avec le nom du boutond'activation
 */

function ModalComponent({ iconName, linkName, modalTitle, modalContent }) {
  return (
    <>
      <Link
        className="text-decoration-none text-light fs-6"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdropLive"
      >
        <span className={iconName}></span> {linkName}
      </Link>
      <div
        className="modal fade"
        id="staticBackdropLive"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLiveLabel"
        style={{ display: `none` }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0 rounded-3">
            <div className="modal-header">
              <h5
                className="modal-title text-primary"
                id="staticBackdropLiveLabel"
              >
                {modalTitle}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{modalContent}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Compris
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalComponent;
