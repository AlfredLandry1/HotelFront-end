import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Entrez votre nom")
    .min(4, "Votre nom devrat avoir 4 caracteres minimum")
    .max(30, "Vous avez atteint la limitation de caracteres"),
  email: Yup.string()
    .required("Entrez votre adresse mail")
    .email("Veillez entrer une adresse mail valid"),
  message: Yup.string()
    .required("Entrez votre message")
    .min(4, "Le message doit contenir 4 lettres minimum")
    .max(280, "Vous avez atteint la limite de caracteres"),
});

function FormContact() {
  useEffect(() => {
    AOS.init();
  }, []);

  const initialValues = {
    firstName: "",
    email: "",
    message: "",
  };

  function handleSubmit(formValues, onSubmittingProps) {
    console.log(formValues);
    onSubmittingProps.resetForm();
  }

  return (
    <div
      className="card border-0 shadow-md"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="card-header border-0 my-3 bg-transparent d-flex justify-content-between align-items-center text-primary">
        <h3 className="fw-bold fs-2">Contactez nous</h3>
        <span className="bi bi-pencil-square fs-2"></span>
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
                <label htmlFor="firstName" className="form-label fw-medium">
                  Nom
                </label>
                <Field
                  id="firstName"
                  type="text"
                  name="firstName"
                  maxLength="30"
                  spellCheck
                  placeholder="Ex: Landry"
                  className={`form-control text-primary bg-light ${
                    formik.errors.firstName ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  className="text-danger invalid-feedback"
                  name="firstName"
                  component="span"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-medium">
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
                  className="invalid-feedback"
                  name="email"
                  component="span"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-medium">
                  Message
                  <span className="badge text-muted text-secondary">
                    (280 mots max)
                  </span>
                </label>
                <Field
                  name="message"
                  as="textarea"
                  cols="30"
                  rows="10"
                  maxLength="280"
                  spellCheck
                  placeholder="Votre message ici . . ."
                  id="message"
                  className={`form-control text-primary bg-light  ${
                    formik.errors.message ? "is-invalid" : ""
                  }`}
                  style={{ resize: "none" }}
                />
                <ErrorMessage
                  className="invalid-feedback"
                  name="message"
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
              <button
                type="reset"
                className="btn btn-danger fs-5 fw-normal w-100 py-3 my-3"
              >
                Effacer
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormContact;
