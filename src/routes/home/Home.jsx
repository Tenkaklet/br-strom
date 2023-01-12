import React from "react";
import "./home.css";

/* ----------------------------------------------------------------------------
 *      IMAGES
 * --------------------------------------------------------------------------- */

import Header from "../../assets/shutterstock/1935964840.jpg";
import Services from "../../assets/shutterstock/1195014727.jpg";
import Team from "../../assets/shutterstock/1818067979.jpg";
import Help from "../../assets/shutterstock/2115834863.jpg";

/* ----------------------------------------------------------------------------
 *      REACT ICONS
 * --------------------------------------------------------------------------- */

import { HiArrowNarrowRight } from "react-icons/hi";

/* ----------------------------------------------------------------------------
 *      ARTICLE PARALLAX
 * --------------------------------------------------------------------------- */

import { Parallax } from "react-scroll-parallax";

/* ============================================================================ */
/*       HOME
/* ============================================================================ */

const Home = () => {
  return (
    <div className="home">
      {/* ----- Header ----- */}

      <header className="header">
        <img src={Header} alt="" />
      </header>

      {/* ----- Section ----- */}

      <section className="home_section container flex">
        <div className="home_articles">
          {/* ----- Article: Services & Products ----- */}

          <Parallax translateX={['-200px', '200px']}>
            <article className="home_article flex">
              <img src={Services} alt="" />
              <div className="article_text">
                <h1>Våra tjänster och produkter</h1>
                <br />
                <p>
                  Vi erbjuder tjänster och produkter inom området hjälpmedel.
                  Våra kunder är Regioner, Kommuner och Företag.
                </p>

                <div className="links">
                  <a href="/services">
                    <HiArrowNarrowRight />
                    <span>Läs mer om våra tjänster</span>
                  </a>
                </div>
                <div className="links">
                  <a href="/services">
                    <HiArrowNarrowRight />
                    <span>Läs mer om vår service</span>
                  </a>
                </div>
              </div>
            </article>
          </Parallax>

          {/* ----- Article: Team ----- */}

          <Parallax translateX={['200px', '-200px']}>
            <article className="home_article flex">
              <div className="article_text">
              <h1>Vårt team</h1>
                <br />
                <p>
                  Här kan du hitta våra kontaktuppgifter och lite kort
                  information om våra olika verksamhetsområden.
                </p>

                <div className="links">
                  <a href="/om">
                    <HiArrowNarrowRight />
                    <span>Läs mer om vårt team</span>
                  </a>
                </div>
              </div>
              <img src={Team} alt="" />
            </article>
          </Parallax>

          {/* ----- Article: Contact ----- */}

          <Parallax translateX={['-200px', '200px']}>
            <article className="home_article flex">
              <img src={Help} alt="" />
              <div className="article_text">
              <h1>Kontakta oss</h1>
                <br />
                <p>
                  För dig som privatperson bistår vi gärna med ansökan om
                  bostadsanpassning eller arbetsplatsanpassning.
                </p>

                <div className="links">
                  <a href="/kontakt">
                    <HiArrowNarrowRight />
                    <span>Kontakta oss så hjälper vi dig!</span>
                  </a>
                </div>
              </div>
            </article>
          </Parallax>
        </div>
      </section>
    </div>
  );
};

export default Home;
