import React from "react";
import "./footer.css";

/* ----------------------------------------------------------------------------
 *          IMAGES
 * --------------------------------------------------------------------------- */

import Logo from "../../assets/logo-light.png";
import FTI from "../../assets/companies/fti.png";
import ElKretsen from "../../assets/companies/el-kretsen.png";
import Natur from "../../assets/companies/naturvardsverket.png";

/* ============================================================================ */
/*          NAVBAR
/* ============================================================================ */


const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer_grid">
          {/* <div className="footer_logo">
            <img src={Logo} alt="Br Ström" />
          </div> */}
          <div className="companies container">
            <p>I samarbete med</p>
            <div className="companies_images">
            <img src={FTI} alt="FTI" />
            <img src={ElKretsen} alt="El-Kretsen" />
            <img src={Natur} alt="Naturvårdsverket" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
