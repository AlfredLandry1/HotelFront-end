import React, { useState } from "react";
import { Link } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import moment from "moment";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import Testimonial from "../../components/Testimonial";

import Navbar from "../../components/Navbar";
import ReservationState from "./components/ReservationState";
import Carousel from "../../pages/contact/components/Carousel";
import Toast from "../../components/Toast";

import slide1 from "../../assets/imgs/contact/slide1.png";
import slide2 from "../../assets/imgs/contact/slide2.png";
import slide3 from "../../assets/imgs/contact/slide3.png";
import avatar1 from "../../assets/imgs/avatars/1.png";
import avatar2 from "../../assets/imgs/avatars/2.png";
import avatar3 from "../../assets/imgs/avatars/3.png";
import avatar4 from "../../assets/imgs/avatars/4.png";
import Footer from "../../components/footer";
import Drinks from "../../apis/Drinks";

const validationSchema = Yup.object().shape({
  commingDate: Yup.date().required("Choisissez une date"),
  goingDate: Yup.date().min(
    Yup.ref("commingDate"),
    "Votre date de depart doit etre supperieur a celle d'arrivee"
  ),
  bedroom: Yup.array().required("Veillez choisir votre chambre"),
  adultNumber: Yup.number()
    .required("Entrez le nbre d'adult(s)")
    .typeError("Entrez un nombre valide"),
  childrenNumber: Yup.number()
    .required("Entrez le nbre d'enfant(s)")
    .typeError("Entrez un nombre valide"),
  houre: Yup.string().required("Entrez votre heure d'arrivee"),
});

function ReservationSecondStep() {
  const [bedroomList] = useState([
    { value: "chambre 1", label: "Categorie 1: chambre 2" },
    { value: "chambre 1", label: "Categorie 1: chambre 5" },
    { value: "chambre 1", label: "Categorie 3: chambre 2" },
  ]);

  const initialValues = {
    commingDate: localStorage.getItem("ReservationPartOfStepTwo")
      ? JSON.parse(localStorage.getItem("ReservationPartOfStepTwo")).commingDate
      : "",
    goingDate: localStorage.getItem("ReservationPartOfStepTwo")
      ? JSON.parse(localStorage.getItem("ReservationPartOfStepTwo")).goingDate
      : "",
    bedroom: [],
    adultNumber: 1,
    childrenNumber: 1,
    houre: "",
  };

  function handleSubmit(formValues, onSubmittingProps) {
    try {
      localStorage.setItem("ReservationStepTwo", JSON.stringify(formValues));
    } catch (e) {
      alert("Une erreur c'est produite. veillez reeseller . . .");
      console.error(
        "Une erreur c'est produite lors de l'ajout des donnees en memoire",
        e
      );
    }

    onSubmittingProps.resetForm();
    window.location.href = "/ReservationThirdStep";
  }

  const success = Drinks();
  if (success) {
    console.log(success)
  } else {
    console.log("bad");
  }

  return (
    <div>
      <Navbar activeLink="reservation" darkTheme="yes" />
      <ReservationState step="step2" />

      <div className="container px-4 px-md-0">
        <div className="row flex-column-reverse flex-lg-row justify-content-between">
          <div className="col-12 col-lg-7">
            <div className="card bg-transparent border-0 shadow-md">
              <div className="text-sm-start">
                <Link
                  to="/ReservationFirstStep"
                  className="text-decoration-none fs-5 text-secondary"
                >
                  <span className="bi bi-arrow-left"></span>
                  Pr&eacute;c&eacute;dent
                </Link>
                {localStorage.getItem("ReservationStepThree") ? (
                  <div className="text-sm-end">
                    <Link
                      to="/ReservationThirdStep"
                      className="text-decoration-none fs-5 text-secondary"
                    >
                      Suivant <span className="bi bi-arrow-right"></span>
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="card-header border-0 my-3 bg-transparent text-primary">
                <h3 className="fw-bold fs-1">Reservation . . .</h3>
                <p className="text-justify">
                  Toutes les informations demand&eacute;es ici sont neccessaires
                  au bon fonctionnement de votre reservation. Nous vous
                  recommandons donc de fournir des informations validees.
                </p>
                <p className="text-justify">
                  Nous vous recommandons de consulter notre page de
                  <Link
                    to="/bedroom"
                    className="text-primary fw-bold text-decoration-none"
                  >
                    chambre
                  </Link> 
                  avant de choisir une chambre pour votre reservation.
                </p>
              </div>
              <div className="card-body">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {(formik) => (
                    <Form>
                      <h4 className="mb-3 fw-medium">
                        Informations Li&eacute;es au s&eacute;jour
                      </h4>
                      <div className="row g-3 mt-3">
                        <div className="col-sm-6">
                          <label
                            htmlFor="commingDate"
                            className="form-label fw-medium"
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
                        <div className="col-sm-6">
                          <label
                            htmlFor="goingDate"
                            className="form-label fw-medium"
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

                        <div className="col-sm-12">
                          <label
                            htmlFor="bedroom"
                            className="form-label fw-medium"
                          >
                            Chambre(s) disponnible
                          </label>
                          <Multiselect
                            name="bedroom"
                            isObject={true}
                            options={bedroomList}
                            displayValue="label"
                            onSelect={formik.onchange}
                            placeholder="Cliquez pour choisir"
                            className="form-select"
                            required
                          />
                          <ErrorMessage
                            className="text-danger invalid-feedback"
                            name="bedroom"
                            component="span"
                          />
                        </div>

                        <div className="col-sm-4">
                          <label
                            htmlFor="adultNumber"
                            className="form-label fw-medium"
                          >
                            Nbre d'adultes
                            <span className="badge text-muted text-secondary">
                              (02 / chambre)
                            </span>
                          </label>
                          <Field
                            name="adultNumber"
                            id="adultNumber"
                            type="number"
                            placeholder="Ex: 2"
                            min="1"
                            max="2"
                            required
                            className={`form-control text-primary ${
                              formik.errors.adultNumber ? "is-invalid" : ""
                            }`}
                          />
                          <ErrorMessage
                            className="text-danger invalid-feedback"
                            name="adultNumber"
                            component="span"
                          />
                        </div>

                        <div className="col-sm-4">
                          <label
                            htmlFor="childrenNumber"
                            className="form-label fw-medium"
                          >
                            Nbre d'enfants
                            <span className="badge text-muted text-secondary">
                              (02 / chambre)
                            </span>
                          </label>
                          <Field
                            name="childrenNumber"
                            id="childrenNumber"
                            type="number"
                            placeholder="Ex: 1"
                            min="1"
                            max="2"
                            required
                            className={`form-control text-primary ${
                              formik.errors.childrenNumber ? "is-invalid" : ""
                            }`}
                          />
                          <ErrorMessage
                            className="text-danger invalid-feedback"
                            name="childrenNumber"
                            component="span"
                          />
                        </div>

                        <div className="col-sm-4">
                          <label
                            htmlFor="houre"
                            className="form-label fw-medium"
                          >
                            Heure d'arriv&eacute;e
                          </label>
                          <Field
                            name="houre"
                            id="houre"
                            type="time"
                            placeholder="237 6xx xxx xxx"
                            spellCheck
                            className={`form-control text-primary ${
                              formik.errors.houre ? "is-invalid" : ""
                            } mb-3`}
                            maxLength="30"
                            required
                          />
                          <ErrorMessage
                            className="text-danger invalid-feedback"
                            name="houre"
                            component="span"
                          />
                        </div>

                        <hr className="my-5" />

                        <h4 className="mb-1 fw-medium">
                          Conditions d'utilisations
                        </h4>

                        <h6
                          className="form-check-label text-breack mb-5"
                          htmlFor="consentement"
                        >
                          En cliquant sur suivant vous acceptez 
                          <Link>la politique de l'hotel</Link> et sa 
                          <Link to="">
                            la politique de confidentialit&eacute;
                          </Link>
                        </h6>

                        <button
                          type="submit"
                          disabled={!formik.isValid || formik.isSubmitting}
                          className="btn btn-primary fs-5 fw-normal w-100 py-3 my-3"
                        >
                          Suivant
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <Carousel
              imgSlide1={slide1}
              imgSlide2={slide2}
              imgSlide3={slide3}
            />
            <Toast alertMessage="Vous y &ecirc;tes presque. Reste plus qu'&egrave; valider votre payment." />
          </div>
        </div>
      </div>
      <section className="w-100 bg-dark py-5 mt-5">
        <div className="container px-4 px-md-0 pb-5">
          <h1 className="text-light pb-3">Les avis des clients</h1>
          <div className="row gap-5 justify-content-center">
            <Testimonial
              avatar={avatar1}
              authorName="Lionnel Jr"
              content="J'ai apprec&eacute; mon s&eacute;jour &agrave; le paquebot hotel."
              postedDate="2023-03-10"
            />
            <Testimonial
              avatar={avatar2}
              authorName="Notue Diana"
              content="J'y etait pour un voyage d'affaire et j'ai ete satisfaite : )"
              postedDate="2023-03-10"
            />
            <Testimonial
              avatar={avatar3}
              authorName="Heve Js"
              content="J'aime le paquebot hotel."
              postedDate="2023-03-10"
            />
            <Testimonial
              avatar={avatar4}
              authorName="Aude M."
              content="L'hotel est original. . ."
              postedDate="2023-03-10"
            />
          </div>
        </div>
      </section>
      <>
        <Footer />
      </>
    </div>
  );
}

export default ReservationSecondStep;
