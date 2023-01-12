import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

/* ----------------------------------------------------------------------------
 *      REACT ICONS
 * --------------------------------------------------------------------------- */

import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { VscSearch } from "react-icons/vsc";

/* ----------------------------------------------------------------------------
 *      BR STROM - LOGO
 * --------------------------------------------------------------------------- */

import Logo from "../../assets/logo.png";

/* ----------------------------------------------------------------------------
 *      DATA
 * --------------------------------------------------------------------------- */

import { SidebarData } from "../../data/SidebarData";

/* ============================================================================ */
/*      NAVBAR
/* ============================================================================ */

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])
  
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="nav_position">
          <div className={`navbar ${show && 'navbar_transparent'}`}>
            <div className="navbar_logo">
              <a href="/">
                <img src={Logo} alt="Br Ström" />
              </a>
            </div>

            <div className="navbar_nav">

              {/* --- NAVBAR - SEARCH --- */}

              <div className="wrap_search">
                <form action="" autoComplete="on">
                  <input
                    id="search"
                    className="search"
                    type="text"
                    placeholder="Vad letar du efter?"
                  />
                  <input id="search_submit" value="Sök" type="submit" />
                  <VscSearch className="search_icon" />
                  <p className="icon_title" onClick={showSidebar}>
                    Sök
                  </p>
                </form>
              </div>

              {/* --- NAVBAR - MENU --- */}

              <Link to="#" className="menu_bar">
                <FaBars onClick={showSidebar} />
                <p className="icon_title" onClick={showSidebar}>
                  Meny
                </p>
              </Link>
            </div>
          </div>

          <nav className={sidebar ? "nav_menu active" : "nav_menu"}>
            <ul className="nav_menu_items" onClick={showSidebar}>
              <li className="navbar_toggle">
                <Link to="#" className="menu_bar">
                  <AiFillCloseCircle />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              
              <button className="menu_login">
                <Link to="/login" className="nav_text nav_login">
                  <span>Login</span>
                  </Link>
              </button>

              <div className="call">
                <p className="call-us">
                  Ring oss!
                  <br /> <b className="call-number">020-103370</b>
                </p>
              </div>
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
