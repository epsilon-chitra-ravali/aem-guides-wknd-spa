import React, { useState } from "react";
import logo from '../../images/inc-india-logo-black.svg';
import './Header.scss';

function Header() {
  const [expandDestinations, setExpandDestinations] = useState(false)
  const [expandExperiences, setExpandExperiences] = useState(false)
  const [expandTravel, setExpandTravel] = useState(false)

  const destinations = [
    {
      image: require("../../images/cq5dam.web.512.288.jpeg"),
      caption: "Popular Destinations",
      url: "/content/incredible-india-v2/en/destinations/popular-destinations.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (1).jpeg"),
      caption: "Spiritual Destinations",
      url: "/content/incredible-india-v2/en/destinations/spiritual-destinations.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (2).jpeg"),
      caption: "The Land Of Buddha",
      url: "/content/incredible-india-v2/en/destinations/the-land-of-buddha.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (3).jpeg"),
      caption: "States and Union Territories",
      url: "/content/incredible-india-v2/en/destinations/states.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (4).jpeg"),
      caption: "All Destinations",
      url: "/content/incredible-india-v2/en/destinations/all-destinations.html"
    },
  ];

  const experiences = [
    {
      image: require("../../images/cq5dam.web.512.288 (5).jpeg"),
      caption: "Heritage",
      url: "/content/incredible-india-v2/en/experiences/heritage.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (6).jpeg"),
      caption: "Spiritual",
      url: "/content/incredible-india-v2/en/experiences/spiritual.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (7).jpeg"),
      caption: "Adventure",
      url: "/content/incredible-india-v2/en/experiences/adventure.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (8).jpeg"),
      caption: "Nature and Wildlife",
      url: "/content/incredible-india-v2/en/experiences/nature-and-wildlife.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (9).jpeg"),
      caption: "Art",
      url: "/content/incredible-india-v2/en/experiences/art.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (10).jpeg"),
      caption: "Food and Cuisine",
      url: "/content/incredible-india-v2/en/experiences/food-and-cuisine.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (11).jpeg"),
      caption: "Luxury",
      url: "/content/incredible-india-v2/en/experiences/luxury.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (12).jpeg"),
      caption: "Yoga and Wellness",
      url: "/content/incredible-india-v2/en/experiences/yoga-and-wellness.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (13).jpeg"),
      caption: "Shopping",
      url: "/content/incredible-india-v2/en/experiences/Shopping.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (14).jpeg"),
      caption: "Museums In India",
      url: "/content/incredible-india-v2/en/experiences/museums.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (15).jpeg"),
      caption: "Crafted In India",
      url: "/content/incredible-india-v2/en/experiences/crafted-in-india.html"
    },
  ];

  const travel = [
    {
      image: require("../../images/cq5dam.web.512.288 (16).jpeg"),
      caption: "About India",
      url: "/content/incredible-india-v2/en/travel/about-india.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (17).jpeg"),
      caption: "Visa",
      url: "/content/incredible-india-v2/en/travel/about-india/visa.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (18).jpeg"),
      caption: "Currency",
      url: "/content/incredible-india-v2/en/travel/about-india/currency.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (19).jpeg"),
      caption: "Weather",
      url: "/content/incredible-india-v2/en/travel/about-india/weather.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (20).jpeg"),
      caption: "SBM",
      url: "/content/incredible-india-v2/en/travel/about-india/sbm.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (21).jpeg"),
      caption: "SBI - Branch and ATM Locator",
      url: "/content/incredible-india-v2/en/travel/about-india/sbi-branch-and-atm-locator.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (22).jpeg"),
      caption: "Audio Guide",
      url: "/content/incredible-india-v2/en/travel/audio-guide.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (23).jpeg"),
      caption: "Repository",
      url: "/content/incredible-india-v2/en/travel/repository.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (24).jpeg"),
      caption: "Hotels ITDC",
      url: "/content/incredible-india-v2/en/travel/itdc-hotels.html"
    }, {
      image: require("../../images/cq5dam.web.512.288 (25).jpeg"),
      caption: "IRCTC Tour Packages",
      url: "/content/incredible-india-v2/en/travel/irctc-tour-packages.html"
    },
  ];

  const expandDestinationsMenu = (() => {
    setExpandDestinations(!expandDestinations)
    setExpandExperiences(false)
    setExpandTravel(false)
  })

  const expandExperiencesMenu = (() => {
    setExpandExperiences(!expandExperiences)
    setExpandDestinations(false)
    setExpandTravel(false)
  })

  const expandTravelMenu = (() => {
    setExpandTravel(!expandTravel)
    setExpandDestinations(false)
    setExpandExperiences(false)
  })

  return (
    <>
      <header className="App-header">
        <nav className="top-menu navbar navbar-light navbar-expand-lg top-padding-zero" style={{ width: "100%" }}>
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav mr-auto">
                <li className="dropdown dropdown-megamenu nav-item" data-tags="inc-v2:region/e,inc-v2:region/w,inc-v2:region/c,inc-v2:region/ne,inc-v2:region/n,inc-v2:region/s">
                  <h3 className="dropdown-toggle nav-link" onClick={expandDestinationsMenu} title="Destinations" data-testid="destinations" >Destinations</h3>
                  {expandDestinations && <div className="dropdown-container Destinations">
                    <div className="container pt-5">
                      <div className="row" data-testid="destinations-options">
                        {destinations.map((item) => (
                          <div className="col-6 col-md-3 col-lg-2 mb-5">
                            <a href={item.url} className="no-underline menu-card-item" title={item.caption}>
                              <div className="card-default menu-card border-0">
                                <div class="cust-width-ratio width-ratio-no-shadow ratio16-9">
                                  <img
                                    className="card-image image-top contenido lazyload"
                                    src={item.image}
                                    alt={item.caption}
                                    loading="lazy" />
                                </div>
                                <div className="card-body">
                                  <span className="card-text">{item.caption}</span>
                                </div>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>}
                </li>
                <li className="dropdown dropdown-megamenu nav-item" data-tags="inc-v2:region/e,inc-v2:region/w,inc-v2:region/c,inc-v2:region/ne,inc-v2:region/n,inc-v2:region/s">
                  <h3 onClick={expandExperiencesMenu} title="Experiences" className="dropdown-toggle nav-link" data-testid="experiences" >Experiences</h3>
                  {expandExperiences && <div className="dropdown-container Experiences">
                    <div className="container pt-5">
                      <div className="row" data-testid="experiences-options">
                        {experiences.map((item) => (
                          <div className="col-6 col-md-3 col-lg-2 mb-5">
                            <a href={item.url} className="no-underline menu-card-item" title={item.caption}>
                              <div className="card-default menu-card border-0">
                                <div class="cust-width-ratio width-ratio-no-shadow ratio16-9">
                                  <img
                                    className="card-image image-top contenido lazyload"
                                    src={item.image}
                                    alt={item.caption}
                                    loading="lazy" />
                                </div>
                                <div className="card-body">
                                  <span className="card-text">{item.caption}</span>
                                </div>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>}
                </li>
                <li className="dropdown dropdown-megamenu nav-item" data-tags="inc-v2:region/e,inc-v2:region/w,inc-v2:region/c,inc-v2:region/ne,inc-v2:region/n,inc-v2:region/s">
                  <h3 onClick={expandTravelMenu} title="Travel" className="dropdown-toggle nav-link" data-testid="travel">Travel</h3>
                  {expandTravel && <div className="dropdown-container Travel">
                    <div className="container pt-5">
                      <div className="row" data-testid="travel-options">
                        {travel.map((item) => (
                          <div className="col-6 col-md-3 col-lg-2 mb-5">
                            <a href={item.url} className="no-underline menu-card-item" title={item.caption}>
                              <div className="card-default menu-card border-0">
                                <div class="cust-width-ratio width-ratio-no-shadow ratio16-9">
                                  <img
                                    className="card-image image-top contenido lazyload"
                                    src={item.image}
                                    alt={item.caption}
                                    loading="lazy" />
                                </div>
                                <div className="card-body">
                                  <span className="card-text">{item.caption}</span>
                                </div>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>}
                </li>
              </ul>
              <a className="navbar-brand" href="/content/incredible-india-v2/en.html">
                <img
                  src={logo}
                  alt="image"
                  loading="lazy" />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
