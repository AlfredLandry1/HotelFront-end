import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import BannerNavbar from "../../components/BannerNavbar";
import Alert from "../../components/AlertCard";
import SimpleCardDescription from "../../components/SimpleCardDescription";
import RightImgCard from "../../components/RightImgCard";
import LeftImgCard from "../../components/leftImgCard";
import LinkFormReservation from "../../components/LinkFormReservation";
import Footer from "../../components/footer";

import bannerImage from "../../assets/imgs/bedroom/bannerBg.png";
import imgPresentation1 from "../../assets/imgs/bedroom/p-1.png";
import imgPresentation2 from "../../assets/imgs/bedroom/p-2.png";
import imgPresentation3 from "../../assets/imgs/bedroom/p-3.png";
import cardImg1 from "../../assets/imgs/bedroom/ch-1.png";
import cardImg2 from "../../assets/imgs/bedroom/ch-2.png";
import cardImg3 from "../../assets/imgs/bedroom/ch-3.png";
import cardImg4 from "../../assets/imgs/bedroom/ch-4.png";
import cardImg5 from "../../assets/imgs/bedroom/ch-1.png";
import contactBg from "../../assets/imgs/bedroom/formBg.png";

function Chambres() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <BannerNavbar
        activeLink="chambres"
        bannerImage={bannerImage}
        brandText="Chambres d'hotel pour votre Séjour &agrave; KRIBI"
        descriptionText=" vous donne accès &agrave; plusieurs équipements et services de qualité pour un séjour &agrave; KRIBI dans une chambre qui ne manquera  pas de vous séduire."
        alertMessage="Reserver d&egrave;s maintenant."
        iconName="bi bi-calendar-fill"
        linkName="Reserver maintenant"
      />

      <section className="row g-0 p-0 m-0 mb-5">
        <SimpleCardDescription
          imgPresentation={imgPresentation1}
          title="Environnement calme et paisible"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eum!
              Quasi, dolor consectetur!"
        />
        <SimpleCardDescription
          imgPresentation={imgPresentation2}
          title="Petit déjeuner"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eum!
              Quasi, dolor consectetur!"
        />
        <SimpleCardDescription
          imgPresentation={imgPresentation3}
          title="Confort assuré"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eum!
              Quasi, dolor consectetur!"
        />
      </section>
      <section className="container mx-auto my-5 px-4 px-md-5 px-md-0 justify-content-center">
        <Alert alertMessage="Nous ne disposons encore pas pour le moment de chambre cat&eacute;goris&eacute;es." />
        <h1 className="text-primary mt-5">Chambres</h1>
        <LeftImgCard
          title="Chambre de classe 1"
          whitDescription="yes"
          size=" xxx"
          capacity=" 2"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto nostrum repellendus cumque fuga, dolorum laboriosam impedit nobis expedita dolore, ullam ipsam voluptatem. Aspernatur illo, eligendi voluptatibus placeat incidunt atque."
          whitBtn="yes"
          linkName="Réserver"
          iconName="bi bi-arrow-right-short"
          cardImg={cardImg1}
        />
        <RightImgCard
          title="Chambre de classe 2"
          whitDescription="yes"
          size=" xxx"
          capacity=" 2"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto nostrum repellendus cumque fuga, dolorum laboriosam impedit nobis expedita dolore, ullam ipsam voluptatem. Aspernatur illo, eligendi voluptatibus placeat incidunt atque."
          whitBtn="yes"
          linkName="Réserver"
          iconName="bi bi-arrow-right-short"
          cardImg={cardImg2}
        />
        <LeftImgCard
          title="Chambre de classe 3"
          whitDescription="yes"
          size=" xxx"
          capacity=" 2"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto nostrum repellendus cumque fuga, dolorum laboriosam impedit nobis expedita dolore, ullam ipsam voluptatem. Aspernatur illo, eligendi voluptatibus placeat incidunt atque."
          whitBtn="yes"
          linkName="Réserver"
          iconName="bi bi-arrow-right-short"
          cardImg={cardImg3}
        />
        <RightImgCard
          title="Chambre de classe 5"
          whitDescription="yes"
          size=" xxx"
          capacity=" 2"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto nostrum repellendus cumque fuga, dolorum laboriosam impedit nobis expedita dolore, ullam ipsam voluptatem. Aspernatur illo, eligendi voluptatibus placeat incidunt atque."
          whitBtn="yes"
          linkName="Réserver"
          iconName="bi bi-arrow-right-short"
          cardImg={cardImg4}
        />
        <LeftImgCard
          title="Chambre de classe 6"
          whitDescription="yes"
          size=" xxx"
          capacity=" 2"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto nostrum repellendus cumque fuga, dolorum laboriosam impedit nobis expedita dolore, ullam ipsam voluptatem. Aspernatur illo, eligendi voluptatibus placeat incidunt atque."
          whitBtn="yes"
          linkName="Réserver"
          iconName="bi bi-arrow-right-short"
          cardImg={cardImg5}
        />
      </section>
      <section className="container px-4 px-md-5 px-md-0 justify-content-center">
        <h2 className="text-primary fw-bold mb-3" data-aos="zoom-in-right">
          Services inclus dans nos chambres
        </h2>
        <ul data-aos="zoom-in-left" data-aos-duration="1000">
          <li className="mb-3 mt-2 list-unstyled text-dark fw-medium fs-6">
            <span className="bi bi-cloud-snow-fill text-secondary text-secondary"></span> Climatisation
          </li>
          <li className="mb-3 mt-2 list-unstyled text-dark fw-medium fs-6">
            <span className="bi bi-tv-fill text-secondary"></span> Téléviseur avec CANAL+
          </li>
          <li className="mb-3 mt-2 list-unstyled text-dark fw-medium fs-6">
            <span className="bi bi-wifi text-secondary"></span> Internet sans fil haute vitesse
          </li>
          <li className="mb-3 mt-2 list-unstyled text-dark fw-medium fs-6">
            <span className="bi bi-people-fill text-secondary"></span> Service de chambres
          </li>
        </ul>
        <br />
        <h2 className="text-primary fw-bold mb-3" data-aos="zoom-in-right">
          Services également disponibles &agrave; la réception
        </h2>
        <ul data-aos="zoom-in-left" data-aos-duration="1000">
          <li className="mb-3 mt-2 list-unstyled text-dark fw-medium fs-6">
            <span className="bi bi-columns-gap text-secondary"></span> Distributeur de glace,
            café, collations et boissons gazeuses
          </li>
          <li className="mb-3 mt-2 list-unstyled text-dark fw-medium fs-6">
            <span className="bi bi-box-fill text-secondary"></span> Planche et fer &agrave;
            repasser
          </li>
          <li className="mb-3 mt-2 list-unstyled text-dark fw-medium fs-6">
            <span className="bi bi-safe2-fill text-secondary"></span> Buanderie
          </li>
          <li className="mb-3 mt-2 list-unstyled text-dark fw-medium fs-6">
            <span className="bi bi-laptop-fill text-secondary"></span> Sécrétariat
          </li>
          <li className="mb-3 mt-2 list-unstyled text-dark fw-medium fs-6">
            <span className="bi bi-arrow-down-up text-secondary"></span> Orange et MTN mobile
            money
          </li>
        </ul>
      </section>
      <div
        className="mt-5 px-4 px-md-0 w-100 bg-img"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="w-100 m-0 p-0 bg-filter">
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
      </div>
      <Footer />
    </>
  );
}

export default Chambres;
