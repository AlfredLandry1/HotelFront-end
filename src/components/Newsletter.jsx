import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import NewsletterAPI from "../apis/NewsletterAPI";
import FormValidated from "./FormValidated";

const validationSchema = Yup.object().shape({
  nom: Yup.string()
    .required("Entrez votre nom")
    .min(4, "Votre nom devrait avoir 4 caracteres minimum")
    .max(30, "Vous avez atteint la limitation de caracteres"),
  prenom: Yup.string()
    .required("Entrez votre prenom")
    .min(4, "Votre prenom devrait avoir 4 caracteres minimum")
    .max(30, "Vous avez atteint la limitation de caracteres"),
  email: Yup.string()
    .required("Entrez votre adresse mail")
    .email("Veillez entrer une adresse mail valide"),
});

function Newsletter() {
  useEffect(() => {
    AOS.init();
  }, []);

  const initialValues = {
    nom: "",
    prenom: "",
    email: "",
  };

  function handleSubmit(formValues, onSubmittingProps) {
    const success = NewsletterAPI(formValues);
    if (success) {
      onSubmittingProps.resetForm();
      console.log("Vos donnees ont ete enregistrees.");
      alert("Vous etes enregistrez.");
      return (
        <FormValidated
          show={true}
          title="Titre de la boîte modale"
          content="Contenu de la boîte modale"
        />
      );
    } else {
      console.log(
        "Une erreur c'est produite. Vos donnees n'ont pas ete enregistrees, veuillez reeseyer."
      );
      alert("Vous etes pas enregistrez.");
    }
  }

  return (
    <div
      className="card bg-transparent bg-glass-subtle border-0 shadow-md"
      data-aos="zoom-in-top"
      data-aos-duration="1000"
    >
      <FormValidated
        show={true}
        title="Titre de la boîte modale"
        content="Contenu de la boîte modale"
      />
      <div className="card-header border-0 my-2 bg-transparent d-flex align-items-center text-primary">
        <span className="bg-primary fs-3 px-3 py-2 me-3 rounded-circle bi bi-person-plus-fill text-light"></span>
        <h3 className="fw-bold text-break fs-3 text-light">Newsletter</h3>
      </div>
      <div className="card-body">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <div className="mb-3">
                <label
                  htmlFor="nom"
                  className="form-label fw-medium text-light"
                >
                  Nom
                </label>
                <Field
                  id="nom"
                  type="text"
                  name="nom"
                  maxLength="30"
                  spellCheck
                  placeholder="Ex: Doe"
                  className={`form-control text-primary bg-light ${
                    formik.errors.nom ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  className="invalid-feedback text-light"
                  name="nom"
                  component="span"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="prenom"
                  className="form-label fw-medium text-light"
                >
                  P&eacute;nom
                </label>
                <Field
                  id="prenom"
                  type="text"
                  name="prenom"
                  maxLength="30"
                  spellCheck
                  placeholder="Ex: Landry"
                  className={`form-control text-primary bg-light ${
                    formik.errors.prenom ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  className="invalid-feedback text-light"
                  name="prenom"
                  component="span"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label fw-medium text-light"
                >
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  spellCheck
                  placeholder="Ex: landry@gmail.com"
                  className={`form-control text-primary bg-light  ${
                    formik.errors.email ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  className="invalid-feedback text-light"
                  name="email"
                  component="span"
                />
              </div>
              <button
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
                className="btn btn-primary fs-5 fw-normal w-100 py-3 my-3"
              >
                Envoyer
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Newsletter;
