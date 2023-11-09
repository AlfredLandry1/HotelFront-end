import React from "react";

import "./Accueil.css";

import BannerNavbar from "../../components/BannerNavbar";
import SimpleCardDescription from "../../components/SimpleCardDescription";
import RightImgCard from "../../components/RightImgCard";
import LeftImgCard from "../../components/leftImgCard";
import SmallCard from "./components/SmallCard";
import Carousel from "../../components/Carousel";
import Testimonial from "../../components/Testimonial";
import LinkFormReservation from "../../components/LinkFormReservation";
import Footer from "../../components/footer";

import bannerImage from "../../assets/imgs/home/bannerBg.png";
import imgPresentation1 from "../../assets/imgs/home/p-1.png";
import imgPresentation2 from "../../assets/imgs/home/p-2.png";
import imgPresentation3 from "../../assets/imgs/home/p-3.png";
import cardImg1 from "../../assets/imgs/home/home-img1.png";
import cardImg2 from "../../assets/imgs/home/home-img2.png";
import imgSlide1 from "../../assets/imgs/home/carousel-1.png";
import imgSlide2 from "../../assets/imgs/home/carousel-2.png";
import imgSlide3 from "../../assets/imgs/home/carousel-3.png";
import avatar1 from "../../assets/imgs/avatars/1.png";
import avatar2 from "../../assets/imgs/avatars/2.png";
import avatar3 from "../../assets/imgs/avatars/3.png";
import avatar4 from "../../assets/imgs/avatars/4.png";

function Acceuil() {
  return (
    <>
      <BannerNavbar
        activeLink="accueil"
        bannerImage={bannerImage}
        brandText="Une experience innoubliable en bordure de plague vous y attends."
        descriptionText="ipsum dolor sit amet consectetur adipisicing elit. Neque numquam beatae, sint harum, totam iure doloribus explicabo incidunt praesentium odio in dolore aspernatur consectetur quidem saepe labore aliquam nihil optio."
        iconName="bi bi-calendar-check-fill"
        alertMessage="Le paquebot hotel vous souhaites une bonne navigation."
        linkName="Reserver maintenant"
      />

      <section className="row g-0 p-0 m-0 mb-5">
        <SimpleCardDescription
          imgPresentation={imgPresentation1}
          title="Notre accueil"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eum!
              Quasi, dolor consectetur!"
        />
        <SimpleCardDescription
          imgPresentation={imgPresentation2}
          title="Nos services"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eum!
              Quasi, dolor consectetur!"
        />
        <SimpleCardDescription
          imgPresentation={imgPresentation3}
          title="Notre posiiton"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eum!
              Quasi, dolor consectetur!"
        />
      </section>

      <section className="container mx-auto my-5 px-4 px-md-0 justify-content-center">
        <RightImgCard
          title="Qui sommes-nous ?"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, accusamus laudantium? Labore impedit dolorum facilis
                dolore aliquam, neque fugit quia ullam tempora voluptates sint,
                laborum, inventore commodi incidunt adipisci maiores!"
          whitBtn="yes"
          linkName="Voir plus"
          iconName="bi bi-arrow-right-short"
          cardImg={cardImg1}
        />
        <LeftImgCard
          title="Qui sommes-nous ?"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, accusamus laudantium? Labore impedit dolorum facilis
                dolore aliquam, neque fugit quia ullam tempora voluptates sint,
                laborum, inventore commodi incidunt adipisci maiores!"
          whitBtn="yes"
          linkName="Voir plus"
          iconName="bi bi-arrow-right-short"
          cardImg={cardImg2}
        />
        <SmallCard />
      </section>
      <Carousel
        imgSlide1={imgSlide1}
        imgSlide2={imgSlide2}
        imgSlide3={imgSlide3}
      />

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
          <h1 className="text-light pt-5 pb-3 mt-3 mt-md-5">
            Reservez d&eacute;s maintenant !
          </h1>
          <LinkFormReservation />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Acceuil;
