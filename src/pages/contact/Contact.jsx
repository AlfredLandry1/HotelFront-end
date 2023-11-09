import React from "react";

import BannerNavbar from "../../components/BannerNavbar";
import AlertCard from "../../components/AlertCard";
import DashboardCard from "./components/DashboardCard";
import FormContact from "./components/FormContact";
import Carousel from "./components/Carousel";
import LinkFormReservation from "../../components/LinkFormReservation";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/footer";

import bannerImage from "../../assets/imgs/contact/bannerBg.png";
import contactBg from "../../assets/imgs/contact/contactBg.png";
import slide1 from "../../assets/imgs/contact/slide1.png";
import slide2 from "../../assets/imgs/contact/slide2.png";
import slide3 from "../../assets/imgs/contact/slide3.png";
import avatar1 from "../../assets/imgs/avatars/1.png";
import avatar2 from "../../assets/imgs/avatars/2.png";
import avatar3 from "../../assets/imgs/avatars/3.png";
import avatar4 from "../../assets/imgs/avatars/4.png";

function Contact() {
  return (
    <>
      <BannerNavbar
        activeLink="contact"
        bannerImage={bannerImage}
        brandText="Prendre contact avec notre &eacute;quipe"
        descriptionText="ipsum dolor sit amet consectetur adipisicing elit. Neque numquam beatae, sint harum, totam iure doloribus explicabo incidunt praesentium odio in dolore aspernatur consectetur quidem saepe labore aliquam nihil optio."
        iconName="bi bi-calendar-check-fill"
        alertMessage="Reserver d&egrave;s maintenant et prenez place pour cette aventure. !"
        linkName="Reserver maintenant"
      />

      <section className="container px-4 px-md-0">
        <div className="py-5">
          <AlertCard alertMessage="Nous vous fournirons une reponse dans de bref d&eacute;lais si neccessaire." />
        </div>
        <div className="row gap-4 gap-lg-0">
          <DashboardCard
            cardTitle="Telephone"
            cardIcon="bi-telephone-fill"
            cardContent="+237 6xx xxx xxx"
          />
          <DashboardCard
            cardTitle="Email"
            cardIcon="bi-envelope-check-fill"
            cardContent="paquebothotel@info.com"
          />
          <DashboardCard
            cardTitle="Position"
            cardIcon="bi-geo-alt-fill"
            cardContent="Kribi, pr&egrave;t de l'&eacute;cole public de Nzui"
          />
        </div>
        <div className="row gap-5 flex-column-reverse flex-lg-row justify-content-between py-5">
          <div className="col-12 col-lg-5">
            <FormContact />
          </div>
          <div className="col-12 col-lg-5">
            <Carousel
              rating={true}
              imgSlide1={slide1}
              imgSlide2={slide2}
              imgSlide3={slide3}
            />
          </div>
        </div>
      </section>
      <section
        className="px-4 px-md-0 w-100 bg-img"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="mt-5 w-100 m-0 p-0 bg-filter">
          <div className="container py-5">
            <h1 className="text-light text-center fw-bold mt-3 mt-md-5">
              Reservez d&eacute;s maintenant !
            </h1>
            <p className="text-light text-center py-2 pb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              adipisci est nulla cupiditate eius maiores ullam, repellendus
              nihil dolore reprehenderit magnam rem omnis culpa minima quae
              voluptate porro consequuntur at!
            </p>
            <LinkFormReservation />
          </div>
        </div>
      </section>
      <>
        <section className="w-100 bg-dark py-5">
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
        <Footer />
      </>
    </>
  );
}

export default Contact;
