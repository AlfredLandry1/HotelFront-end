import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import moment from "moment";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Entrez votre nom")
    .min(4, "Votre nom devrat avoir 4 caracteres minimum")
    .max(30, "Vous avez atteint la limitation de caracteres"),
  lastName: Yup.string()
    .required("Entrez votre prenom")
    .min(4, "Votre prenom devrat avoir 4 caracteres minimum")
    .max(30, "Vous avez atteint la limitation de caracteres"),
  commingDate: Yup.date().required("Choisissez une date"),
  goingDate: Yup.date()
    .min(
      Yup.ref("commingDate"),
      "Votre date de depart doit etre supperieur a celle d'arrivee"
    )
    .required("Choisissez une date"),
});

function LinkFormReservation() {
  const currentDate = moment().format("YYYY-MM-DD");
  const initialValues = {
    firstName: "",
    lastName: "",
    commingDate: currentDate,
    goingDate: moment(currentDate).add(4, "days").format("YYYY-MM-DD"),
  };

  function handleSubmit(formValues, onSubmittingProps) {
    localStorage.setItem("ReservationPartOfStepTwo", JSON.stringify(formValues));

    onSubmittingProps.resetForm();
    window.location.href = '/ReservationFirstStep'
  }

  return (
    <div className="col-12 w-100">
      <div className="bg-form rounded-3">
        <div className="bg-glass w-100 rounded-3">
          <div className="card bg-transparent border-0 p-3 rounded-3">
            <div className="card-header d-flex align-items-center bg-transparent border-0">
              <span className="bg-primary fs-2 px-3 py-2 me-3 rounded-circle bi bi-person-plus-fill text-light"></span>
              <h5 className="fw-bold text-light fs-3 text-break">
                Je reserve maintenant
              </h5>
            </div>
            <div className="card-body">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {(formik) => (
                  <Form className="row">
                    <div className="col-12 col-lg-2">
                      <label
                        htmlFor="firstName"
                        className="form-label fw-normal text-light"
                      >
                        Nom
                      </label>
                      <Field
                        name="firstName"
                        id="firstName"
                        type="text"
                        placeholder="Ex: Jhon"
                        maxLength="30"
                        required
                        className={`form-control text-primary fw-normal ${
                          formik.errors.firstName ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        className="text-danger invalid-feedback"
                        name="firstName"
                        component="span"
                      />
                    </div>
                    <div className="col-12 col-lg-2">
                      <label
                        htmlFor="lastName"
                        className="form-label fw-normal text-light"
                      >
                        Pr&eacute;nom
                      </label>
                      <Field
                        name="lastName"
                        id="lastName"
                        type="text"
                        placeholder="Ex: Jhon"
                        maxLength="30"
                        required
                        className={`form-control text-primary fw-normal ${
                          formik.errors.lastName ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        className="text-danger invalid-feedback"
                        name="lastName"
                        component="span"
                      />
                    </div>
                    <div className="col-12 col-lg-2">
                      <label
                        htmlFor="commingDate"
                        className="form-label fw-normal text-light"
                      >
                        Date d'arriv&eacute;e
                      </label>
                      <Field
                        name="commingDate"
                        id="commingDate"
                        type="date"
                        className={`form-control text-primary fw-normal ${
                          formik.errors.commingDate ? "is-invalid" : ""
                        }`}
                        min={`${moment().format("YYYY")}-01-01`}
                        required
                      />
                      <ErrorMessage
                        className="text-danger invalid-feedback"
                        name="commingDate"
                        component="span"
                      />
                    </div>
                    <div className="col-12 col-lg-2">
                      <label
                        htmlFor="goingDate"
                        className="form-label fw-normal text-light"
                      >
                        Date de d&eacute;part
                      </label>
                      <Field
                        name="goingDate"
                        id="goingDate"
                        type="date"
                        className={`form-control text-primary fw-normal ${
                          formik.errors.goingDate ? "is-invalid" : ""
                        }`}
                        min={`${moment().format("YYYY")}-01-01`}
                        required
                      />
                      <ErrorMessage
                        className="text-danger invalid-feedback"
                        name="goingDate"
                        component="span"
                      />
                    </div>
                    <div className="col12 col-lg-3">
                    <label
                        className="form-label opacity-0"
                      >
                        Date de d&eacute;part
                      </label>
                      <button
                        type="submit"
                        disabled={!formik.isValid || formik.isSubmitting}
                        className="w-100 btn btn-primary btn-lg text-break text-wrap"
                      >
                        <span className="bi bi-send-plus-fill pe-3"></span>
                        Continuer
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkFormReservation;
