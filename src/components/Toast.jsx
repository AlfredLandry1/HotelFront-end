import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Toast({ alertMessage }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="toast fade show mb-3 w-100"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header border-0">
        <strong className="me-auto">Le paquebot hotel</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body text-black fw-medium">{alertMessage}</div>
    </div>
  );
}

export default Toast;
