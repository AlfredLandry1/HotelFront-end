import React from "react";
import { Link } from "react-router-dom";
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

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Entrez votre nom")
    .min(4, "Votre nom devrat avoir 4 caracteres minimum")
    .max(30, "Vous avez atteint la limitation de caracteres"),
  lastName: Yup.string()
    .required("Entrez votre prenom")
    .min(4, "Votre prenom devrat avoir 4 caracteres minimum")
    .max(30, "Vous avez atteint la limitation de caracteres"),
  email: Yup.string()
    .required("Entrez votre adresse mail")
    .email("Veillez entrer une adresse mail valid"),
  country: Yup.string().required("Entrez votre pays de residence"),
  city: Yup.string().required("Entrez votre ville de residence"),
  phone: Yup.number()
    .typeError("Entrez un mumero valide")
    .required("Entrez votre telephone"),
  civility: Yup.string().required("Veillez choisir votre situation actuelle"),
  sex: Yup.string().required("Veillez choisir votre sex"),
});

function ReservationFirstStep() {
  const initialValues = {
    firstName: localStorage.getItem("ReservationPartOfStepTwo")
      ? JSON.parse(localStorage.getItem("ReservationPartOfStepTwo")).firstName
      : "",
    lastName: localStorage.getItem("ReservationPartOfStepTwo")
      ? JSON.parse(localStorage.getItem("ReservationPartOfStepTwo")).lastName
      : "",
    email: localStorage.getItem("ReservationStepOne")
      ? JSON.parse(localStorage.getItem("ReservationStepOne")).email
      : "",
    country: localStorage.getItem("ReservationStepOne")
      ? JSON.parse(localStorage.getItem("ReservationStepOne")).country
      : "",
    city: localStorage.getItem("ReservationStepOne")
      ? JSON.parse(localStorage.getItem("ReservationStepOne")).city
      : "",
    phone: localStorage.getItem("ReservationStepOne")
      ? JSON.parse(localStorage.getItem("ReservationStepOne")).phone
      : "",
    civility: localStorage.getItem("ReservationStepOne")
      ? JSON.parse(localStorage.getItem("ReservationStepOne")).civility
      : "maried",
    sex: localStorage.getItem("ReservationStepOne")
      ? JSON.parse(localStorage.getItem("ReservationStepOne")).sex
      : "male",
  };

  function handleSubmit(formValues, onSubmittingProps) {
    try {
      localStorage.setItem("ReservationStepOne", JSON.stringify(formValues));
    } catch (e) {
      console.error(
        "Une erreur c'est produite lors de l'ajout des donnees en memoire",
        e
      );
    }

    onSubmittingProps.resetForm();
    window.location.href = "/ReservartionSecondStep";
  }

  return (
    <>
      <Navbar activeLink="reservation" darkTheme="yes" />
      <ReservationState step="step1" />

      <section className="container px-4 px-md-0">
        <div className="row flex-column-reverse flex-lg-row justify-content-between">
          <div className="col-12 col-lg-7">
            <div className="card bg-transparent border-0 shadow-md">
              {localStorage.getItem("ReservationStepOne") ? (
                <div className="text-sm-end">
                  <Link
                    to="/ReservartionSecondStep"
                    className="text-decoration-none fs-5 text-secondary"
                  >
                    Suivant <span className="bi bi-arrow-right"></span>
                  </Link>
                </div>
              ) : (
                <></>
              )}
              <div className="card-header border-0 my-3 bg-transparent text-primary">
                <h3 className="fw-bold fs-1">Reservation . . .</h3>
                <p className="text-justify">
                  Toutes les informations demand&eacute;es ici sont neccessaires
                  au bon fonctionnement de votre reservation. Nous vous
                  recommandons donc de fournir des informations validees.
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
                        Informations personnelles
                      </h4>
                      <div className="row g-3 mt-3">
                        <div className="col-sm-6">
                          <label
                            htmlFor="firstName"
                            className="form-label fw-medium"
                          >
                            Nom
                          </label>
                          <Field
                            name="firstName"
                            id="firstName"
                            type="text"
                            placeholder="Ex: Landry"
                            maxLength="30"
                            spellCheck
                            required
                            className={`form-control text-primary ${
                              formik.errors.firstName ? "is-invalid" : ""
                            }`}
                          />
                          <ErrorMessage
                            className="text-danger invalid-feedback"
                            name="firstName"
                            component="span"
                          />
                        </div>

                        <div className="col-sm-6">
                          <label
                            htmlFor="lastName"
                            className="form-label fw-medium"
                          >
                            Pr&eacute;nom
                          </label>
                          <Field
                            name="lastName"
                            id="lastName"
                            type="text"
                            spellCheck
                            placeholder="Ex: Joe"
                            maxLength="30"
                            className={`form-control text-primary ${
                              formik.errors.lastName ? "is-invalid" : ""
                            }`}
                          />
                          <ErrorMessage
                            className="text-danger invalid-feedback"
                            name="lastName"
                            component="span"
                          />
                        </div>

                        <div className="col-sm-12">
                          <label
                            htmlFor="email"
                            className="form-label fw-medium"
                          >
                            Email
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">@</span>
                            <Field
                              name="email"
                              id="email"
                              type="email"
                              placeholder="Ex: landry@gmail.com"
                              spellCheck
                              maxLength="30"
                              required
                              className={`form-control text-primary ${
                                formik.errors.mail ? "is-invalid" : ""
                              }`}
                            />
                          </div>
                          <ErrorMessage
                            className="text-danger invalid-feedback"
                            name="email"
                            component="span"
                          />
                        </div>

                        <div className="col-sm-4">
                          <label
                            htmlFor="country"
                            className="form-label fw-medium"
                          >
                            Pays
                          </label>
                          <Field
                            name="country"
                            id="country"
                            type="text"
                            placeholder="Ex: Cameroun"
                            spellCheck
                            maxLength="30"
                            required
                            className={`form-control text-primary ${
                              formik.errors.country ? "is-invalid" : ""
                            }`}
                          />
                          <ErrorMessage
                            className="text-danger invalid-feedback"
                            name="country"
                            component="span"
                          />
                        </div>

                        <div className="col-sm-4">
                          <label
                            htmlFor="city"
                            className="form-label fw-medium"
                          >
                            Ville
                          </label>
                          <Field
                            name="city"
                            id="city"
                            type="text"
                            placeholder="Ex: Yaounde"
                            spellCheck
                            maxLength="30"
                            required
                            className={`form-control text-primary ${
                              formik.errors.city ? "is-invalid" : ""
                            }`}
                          />
                          <ErrorMessage
                            className="text-danger invalid-feedback"
                            name="city"
                            component="span"
                          />
                        </div>

                        <div className="col-sm-4">
                          <label
                            htmlFor="phone"
                            className="form-label fw-medium"
                          >
                            Telephone
                          </label>
                          <Field
                            name="phone"
                            id="phone"
                            type="number"
                            placeholder="2376xxxxxxxx"
                            spellCheck
                            className={`form-control text-primary ${
                              formik.errors.phone ? "is-invalid" : ""
                            } mb-3`}
                            maxLength="30"
                            required
                          />
                          <ErrorMessage
                            className="text-danger invalid-feedback"
                            name="phone"
                            component="span"
                          />
                        </div>

                        <div className="col-sm-5">
                          <label
                            htmlFor="civility"
                            className="form-label fw-medium"
                          >
                            Situation matrimoniale
                          </label>
                          <Field
                            name="civility"
                            id="civility"
                            as="select"
                            className="form-select"
                            required
                          >
                            <option value="maried">Mari&eacute;</option>
                            <option value="alone">c&eacute;libataire</option>
                          </Field>
                          <ErrorMessage
                            className="text-danger invalid-feedback"
                            name="civility"
                            component="span"
                          />
                        </div>

                        <hr className="my-5" />

                        <h4 className="mb-3 fw-medium">Genre</h4>
                        <div className="my-3">
                          <div className="form-check">
                            <Field
                              id="male"
                              name="sex"
                              type="radio"
                              value="male"
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="male">
                              Masculin
                            </label>
                          </div>

                          <div className="form-check">
                            <Field
                              id="female"
                              name="sex"
                              type="radio"
                              value="female"
                              className="form-check-input"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="female"
                            >
                              Feminin
                            </label>
                          </div>
                          <ErrorMessage
                            className="text-danger invalid-feedback"
                            name="sex"
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
                          En cliquant sur suivant vous acceptez{" "}
                          <Link>la politique de l'hotel</Link> et sa{" "}
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
            <Toast alertMessage="La prochaine &eacute;tape consiste &agrave; nous en dire plus sur votre s&eacute;jour" />
          </div>
        </div>
      </section>
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
    </>
  );
}

export default ReservationFirstStep;
