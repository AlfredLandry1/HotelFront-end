import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function DashboardCard({ cardTitle, cardIcon, cardContent }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="col-12 col-lg-4" data-aos="zoom-in">
      <div className="card border-0 shadow-md">
        <div className="card-header border-0 bg-transparent text-primary d-flex justify-content-between align-items-center">
          <h5 className="fw-medium">{cardTitle}</h5>
          <span className={`bi ${cardIcon} fw-bolder`}></span>
        </div>
        <div className="card-body">
          <p className="text-dark fw-bold text-justify">{cardContent}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
