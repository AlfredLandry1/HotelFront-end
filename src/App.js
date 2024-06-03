import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageLoarder from "./loader/PageLoarder";
import Err404 from "./pages/errors/Err404";
import Acceuil from "./pages/home/Accueil";
import Chambre from "./pages/bedroom/Chambres";
import ReservationFirstStep from "./pages/reservation/ReservartionFirstStep";
import ReservartionSecondStep from "./pages/reservation/ReservartionSecondStep";
import Contact from "./pages/contact/Contact";
import Service from "./pages/Services/Service";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import ClearStorage from "./functions/ClearStorage";
import ReservationThirdStep from "./pages/reservation/ReservationThirdStep";

function App() {
  if (localStorage.getItem("ReservationStepOne")) {
    ClearStorage("ReservationStepOne", 3600000);
  }

  return (
    <BrowserRouter>
      {/* <PageLoarder> */}
        <Routes>
          <Route index exact path="/" element={<Acceuil />} />
          <Route path="bedroom" element={<Chambre />} />
          <Route
            path="ReservationFirstStep"
            element={<ReservationFirstStep />}
          />
          {localStorage.getItem("ReservationStepOne") ? (
            <Route
              path="ReservartionSecondStep"
              element={<ReservartionSecondStep />}
            />
          ) : (
            <></>
          )}
          {localStorage.getItem("ReservationStepTwo") ? (
            <Route
              path="reservationThirdStep"
              element={<ReservationThirdStep />}
            />
          ) : (
            <></>
          )}
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Err404 />} />
        </Routes>
      {/* </PageLoarder> */}
    </BrowserRouter>
  );
}

export default App;
