import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

/**
 *
 * @param {string} avatar - specifi le nom de la photo de profile de l'utilisateur
 * @param {string} authorName - specifi le nom de l'utilisateur
 * @param {string} content - specifi le contenu du post
 * @param {string} postedDate - specifi la date du post
 * @returns une carte de commentaire
 */

function Testimonial({ avatar, authorName, content, postedDate }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="col-12 col-lg-5">
      <div
        className="card text-light bg-transparent border-0 bg-glass-subtle shadow"
        data-aos="zoom-in-right"
      >
        <div className="card-header bg-transparent">
          <div className="text-light d-flex align-items-center">
            <img
              src={avatar}
              alt="avatar"
              className="img-fluid me-2"
              width={40}
            />
            <h5 className="fw-bold">{authorName}</h5>
          </div>
        </div>
        <div className="card-body">
          <div className="card-title fw-medium">{content}</div>
        </div>
        <div className="card-footer bg-transparent d-flex justify-content-end">
          <h6 className="fw-normal opacity-50">Post&eacute; le {postedDate}</h6>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
