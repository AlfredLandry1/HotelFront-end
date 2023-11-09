import React, { useEffect, useState } from "react";

import "./PageLoader.css";

const Loader = () => {
  return (
    <div className="loader d-flex flex-column align-items-center justify-content-center">
      <div className="sprinter d-flex flex-wrap shadow p-5">
        <div className="content1"></div>
        <div className="content2"></div>
        <div className="content3"></div>
        <div className="content4"></div>
      </div>
      {/* <h3 className="mt-5 pt-5">Chargement . . .</h3> */}
    </div>
  );
};

const PageLoarder = ({ children }) => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsloading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <div>{isLoading ? <Loader /> : children}</div>;
};

export default PageLoarder;
