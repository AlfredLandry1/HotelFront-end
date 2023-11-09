import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import service1 from "../../../assets/imgs/home/service-1.png";
import service2 from "../../../assets/imgs/home/service-2.png";
import service4 from "../../../assets/imgs/home/service-4.png";

/**
 *
 * @returns JSX elements
 */

function SmallCard() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="pb-5 py-lg-5 my-lg-5">
      <h1 className="text-primary" data-aos="fade-right">Services</h1>
      <div className="row justify-content-center">
        <div className="py-5 col-12 col-sm-12 col-md-6 col-lg-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
          <div className="card bg-transparent border-0">
            <div className="position-relative w-100 h-100">
              <div className="position-absolute top-90 start-40 z-1">
                <span className="py-1 px-2 bg-secondary rounded-circle bi bi-arrow-down-short text-light fs-2"></span>
              </div>
              <div className="position-relative d-flex flex-column justify-content-center">
                <div className="position-absolute h-100 w-100 bg-filter d-flex flex-column justify-content-center rounded-4">
                  <h2 className="fs-4 text-light fw-bold text-center">
                    Une salle de d&eacute;tente avec bar
                  </h2>
                </div>
                <img
                  src={service1}
                  alt="Service"
                  loading="lazy"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="card-body p-0 mt-5" data-aos="fade-up" data-aos-duration="500">
              <p className="card-text text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quidem eveniet veritatis iusto nihil? Lorem ipsum
                dolor sit amet consectetur elit! Obcaecati quidem eveniet
                veritatis iusto nihil.
              </p>
            </div>
          </div>
        </div>

        <div className="py-5 col-12 col-sm-12 col-md-6 col-lg-4" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="700">
          <div className="card bg-transparent border-0">
            <div className="position-relative w-100 h-100">
              <div className="position-absolute top-90 start-40 z-1">
                <span className="py-1 px-2 bg-secondary rounded-circle bi bi-arrow-down-short text-light fs-2"></span>
              </div>
              <div className="position-relative d-flex flex-column justify-content-center">
                <div className="position-absolute h-100 w-100 bg-filter d-flex flex-column justify-content-center rounded-4">
                  <h2 className="fs-4 text-light fw-bold text-center">
                    Des chambres de qualit&eacute;es
                  </h2>
                </div>
                <img
                  src={service2}
                  alt="Service"
                  loading="lazy"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="card-body p-0 mt-5" data-aos="fade-up" data-aos-duration="700">
              <p className="card-text text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quidem eveniet veritatis iusto nihil? Lorem ipsum
                dolor sit amet consectetur elit! Obcaecati quidem eveniet
                veritatis iusto nihil.
              </p>
            </div>
          </div>
        </div>

        <div className="py-5 col-12 col-sm-12 col-md-6 col-lg-4" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="800">
          <div className="card bg-transparent border-0">
            <div className="position-relative w-100 h-100">
              <div className="position-absolute top-90 start-40 z-1">
                <span className="py-1 px-2 bg-secondary rounded-circle bi bi-arrow-down-short text-light fs-2"></span>
              </div>
              <div className="position-relative d-flex flex-column justify-content-center">
                <div className="position-absolute h-100 w-100 bg-filter d-flex flex-column justify-content-center rounded-4">
                  <h2 className="fs-4 text-light fw-bold text-center">
                    Une salle de r&eacute;union
                  </h2>
                </div>
                <img
                  src={service4}
                  alt="Service"
                  loading="lazy"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="card-body p-0 mt-5" data-aos="fade-up" data-aos-duration="900">
              <p className="card-text text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quidem eveniet veritatis iusto nihil? Lorem ipsum
                dolor sit amet consectetur elit! Obcaecati quidem eveniet
                veritatis iusto nihil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
