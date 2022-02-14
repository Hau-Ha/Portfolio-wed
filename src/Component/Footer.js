import React from "react";
import logo1 from "./pic/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="conatiner text-center top">
          <div className="img">
            <img src={logo1} alt="" />
          </div>
          <p>© 2022.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
