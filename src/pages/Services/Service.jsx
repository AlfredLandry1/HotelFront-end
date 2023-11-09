import React from "react";

import BannerNavbar from "../../components/BannerNavbar";
import SimpleCardDescription from "../../components/SimpleCardDescription";
import RightImgCard from "../../components/RightImgCard";
import LeftImgCard from "../../components/leftImgCard";
import LinkFormReservation from "../../components/LinkFormReservation";
import Footer from "../../components/footer";

import bannerImage from "../../assets/imgs/service/bannerBg.png";
import imgPresentation1 from "../../assets/imgs/service/p-1.png";
import imgPresentation2 from "../../assets/imgs/service/p-2.png";
import imgPresentation3 from "../../assets/imgs/service/p-3.png";
import service1 from "../../assets/imgs/service/s-1.png";
import service2 from "../../assets/imgs/service/s-2.png";
import service3 from "../../assets/imgs/service/s-3.png";
import service4 from "../../assets/imgs/service/s-4.png";
import contactBg from "../../assets/imgs/service/formBg.png";

function Services() {
  return (
    <>
      <BannerNavbar
        activeLink="services"
        bannerImage={bannerImage}
        brandText="D&eacute;couvrez d&egrave;s maintenant nos services"
        descriptionText="dipose de plusieurs services comme le wifi gratuit, une restauration à la demande, un parquing sécurisé et bien d'autres."
        alertMessage="D'&eacute;couvrez nous collection de services."
        iconName="bi bi-calendar-fill"
        linkName="Reserver maintenant"
      />

      <section className="row g-0 p-0 m-0 mb-5">
        <SimpleCardDescription
          imgPresentation={imgPresentation1}
          title="La convivialit&eacute;"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eum!
              Quasi, dolor consectetur!"
        />
        <SimpleCardDescription
          imgPresentation={imgPresentation2}
          title="Une carte flexiblee"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eum!
              Quasi, dolor consectetur!"
        />
        <SimpleCardDescription
          imgPresentation={imgPresentation3}
          title="Un environement favorable"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eum!
              Quasi, dolor consectetur!"
        />
      </section>
      <section className="container mx-auto my-5 px-4 px-md-5 px-md-0 justify-content-center">
        <h1 className="text-primary mt-5 pt-5">Chambres</h1>
        <LeftImgCard
          title="Salle de d&eacute;tente avec mini bar"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto nostrum repellendus cumque fuga, dolorum laboriosam impedit nobis expedita dolore, ullam ipsam voluptatem. Aspernatur illo, eligendi voluptatibus placeat incidunt atque."
          cardImg={service1}
        />
        <RightImgCard
          title="Une salle de r&eacute;union"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto nostrum repellendus cumque fuga, dolorum laboriosam impedit nobis expedita dolore, ullam ipsam voluptatem. Aspernatur illo, eligendi voluptatibus placeat incidunt atque."
          cardImg={service2}
        />
        <LeftImgCard
          title="Une restauration sur demande"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto nostrum repellendus cumque fuga, dolorum laboriosam impedit nobis expedita dolore, ullam ipsam voluptatem. Aspernatur illo, eligendi voluptatibus placeat incidunt atque."
          cardImg={service3}
        />
        <RightImgCard
          title="Un espace boucarau"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto nostrum repellendus cumque fuga, dolorum laboriosam impedit nobis expedita dolore, ullam ipsam voluptatem. Aspernatur illo, eligendi voluptatibus placeat incidunt atque."
          cardImg={service4}
        />
        <LeftImgCard
          title="Un parking s&eacute;curis&eacute;"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto nostrum repellendus cumque fuga, dolorum laboriosam impedit nobis expedita dolore, ullam ipsam voluptatem. Aspernatur illo, eligendi voluptatibus placeat incidunt atque."
          cardImg={service3}
        />
      </section>
      <section
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
      </section>
      <Footer />
    </>
  );
}

export default Services;
