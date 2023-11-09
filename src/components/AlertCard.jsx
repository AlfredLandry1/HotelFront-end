import React from "react";

function Alert({ alertMessage }) {
  return (
    <div className="col-12">
      <div
        className="alert alert-primary border-0 alert-dismissible fade show text-light shadow-sm"
        role="alert"
      >
        <div className="card-header fw-bolder fs-5">Le paquebot hotel</div>
        <div className="card-body py-2 text-justify">
          {alertMessage}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Alert;
