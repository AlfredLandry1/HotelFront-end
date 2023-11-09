import React from "react";

import "./Err404.css";

function CookiesPopover() {
  return (
    <>
      <div className="error-content d-flex flex-column justify-content-center align-items-center">
        <h1 className="h1 display-1 text-primary error-type text-break">404</h1>
        <h3 className="text-dark">Opps !!! Cette page n'exixte pas :(</h3>
        <div className="error-circle1"></div>
      </div>
    </>
  );
}

export default CookiesPopover;
