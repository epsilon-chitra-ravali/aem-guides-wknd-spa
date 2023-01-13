import React from "react";
import './Footer.scss';
import logo from '../../images/inc-india-logo-white.svg';

function Footer() {

  const UT = {
      caption: "UT Tourism Websites",
      details: [
        { name: "Andaman and Nicobar", url: "https://www.andaman.gov.in" },
        { name: "Chandigarh", url: "http://chandigarhtourism.gov.in" },
        { name: "Dadra and Nagar Haveli", url: "https://www.tourismdddnh.in" },
        { name: "Daman and Diu", url: "https://www.tourismdddnh.in" },
        { name: "Delhi", url: "http://www.delhitourism.gov.in" },
        { name: "Jammu and Kashmir", url: "https://www.jktdc.co.in" },
        { name: "Ladakh", url: "https://leh.nic.in" },
        { name: "Lakshadweep", url: "https://www.lakshadweeptourism.com" },
        { name: "Puducherry", url: "http://www.pondytourism.in" }
      ]
    } 
    
  const contact = {
      caption: "Contact Details",
      details: [
        { name: "Under Secretary (IT)" },
        { name: "Ministry of Tourism," },
        { name: "126 Transport Bhawan" },
        { name: "Sansad Marg," },
        { name: "New Delhi" },
        { name: "☏ +91-011 23311237" },
        { name: "✉ info.mot@gov.in" }]
    };

  const states = {
    caption: "State Tourism Websites",
    details: [
      { name: "Andhra Pradesh", url: "https://tourism.ap.gov.in" },
      { name: "Arunachal Pradesh", url: "http://www.arunachaltourism.com" },
      { name: "Assam", url: "https://tourism.assam.gov.in" },
      { name: "Bihar", url: "https://tourism.bihar.gov.in" },
      { name: "Chhattisgarh", url: "https://www.chhattisgarhtourism.in" },
      { name: "Goa", url: "https://goa-tourism.com" },
      { name: "Gujarat", url: "http://www.arunachaltourism.com" },
      { name: "Haryana", url: "http://haryanatourism.gov.in" },
      { name: "Himachal Pradesh", url: "https://himachaltourism.gov.in" },
      { name: "Jharkhand", url: "https://tourism.jharkhand.gov.in" },
      { name: "Karnataka", url: "http://www.karnatakatourism.org" },
      { name: "Kerala", url: "https://www.keralatourism.org" },
      { name: "Madhya Pradesh", url: "http://www.mptourism.com" },
      { name: "Maharashtra", url: "https://www.maharashtratourism.gov.in" },
      { name: "Manipur", url: "http://manipurtourism.gov.in" },
      { name: "Meghalaya", url: "https://www.meghalayatourism.in" },
      { name: "Mizoram", url: "http://tourism.mizoram.gov.in" },
      { name: "Nagaland", url: "http://tourism.nagaland.gov.in" },
      { name: "Odisha", url: "http://odishatourism.gov.in" },
      { name: "Punjab", url: "https://punjabtourism.punjab.gov.in" },
      { name: "Rajasthan", url: "http://tourism.rajasthan.gov.in" },
      { name: "Sikkim", url: "http://www.sikkimtourism.gov.in" },
      { name: "Tamil Nadu", url: "http://www.tamilnadutourism.org" },
      { name: "Telangana", url: "https://www.telanganatourism.gov.in" },
      { name: "Tripura", url: "http://tripuratourism.gov.in" },
      { name: "Uttar Pradesh", url: "http://www.uptourism.gov.in" },
      { name: "Uttarakhand", url: "https://uttarakhandtourism.gov.in" },
      { name: "West Bengal", url: "http://www.wbtourismgov.in" },
    ]
  }

  const footer = [
    {
      image: require("../../images/RTSOI_Logo.png"),
      name: "Responsible Tourism Society of India (RTSOI)", url: "https://rtsoi.org"
    },
    {
      image: require("../../images/eivsa.png"),
      name: "E-Visa", url: "https://indianvisaonline.gov.in/evisa/tvoa.html"
    },
    {
      image: require("../../images/gov-india-logo.png"),
      name: "List of Indian Missions Abroad", url: "https://www.india.gov.in/"
    },
    {
      image: require("../../images/maharaja.png"),
      name: "Maharaja", url: "https://www.the-maharajas.com"
    },
    {
      image: require("../../images/iato.png"),
      name: "IATO", url: "https://www.iato.in"
    },
    {
      image: require("../../images/icpb.png"),
      name: "ICPB", url: "http://www.icpb.in"
    },
    {
      image: require("../../images/atoai-color.png"),
      name: "ATOI", url: "http://www.atoai.org/"
    },
    {
      image: require("../../images/indian-healthcare-tourism.png"),
      name: "India Health Tourism", url: "http://www.indiahealthcaretourism.com/"
    },
    {
      image: require("../../images/nabh.png"),
      name: "NABH", url: "https://nabh.co"
    }
  ]


  return (
    <footer >
      <div class="section no-title brand-section pb-5">
        <div class="container">
          <div class="owl-carousel brand-carousel owl-theme owl-loaded owl-drag" data-size="9">
            <div class="owl-stage-outer">
              <div class="owl-stage" style={{ transform: "translate3d(0px, 0px, 0px)", transition: "all 0s linear 0s; width: 1101px" }}>
                {footer.map((item) => (
                  <div class="owl-item active" style={{ width: "107.289px", marginRight: "15px" }}><div class="item text-center">
                    <a href={item.url} target="_blank" rel="noopener" class="no-underline" title={item.name}>
                      <img
                        className="img-fluid lazyloaded"
                        src={item.image}
                        alt={item.name}
                        loading="lazy" />
                    </a>
                  </div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="section footer footer-nav-section pt-5">
        <div class="container">
          <div class="row rowwise">
            <div class="col-lg-8 col-md-7 col-xl-7 footer-link-item">
              <h5 class="title title-xs">{states.caption}</h5>
              <div class="state-tourism">
                <ul class="list-inline footer-nav footer-important">
                  {states.details.map((detail) => (
                    <li>
                      <a href={detail.url} title={detail.name} target="_blank">
                        {detail.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
              <div class="col-lg-3 col-md-6 footer-link-item">
                <h5 class="title title-xs">{UT.caption}</h5>
                <div class="state-tourism">
                  <ul class="list-inline footer-nav list-inline">
                    {UT.details.map((detail) => (
                      <li>
                        <a href={detail.url} title={detail.name} target="_blank">
                          {detail.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 footer-link-item">
                <h5 class="title title-xs">{contact.caption}</h5>
                <div class="state-tourism">
                  <ul class="list-inline footer-nav list-inline">
                    {contact.details.map((detail) => (
                      <li href={detail.url} title={detail.name} target="_blank">
                          {detail.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-12">
              <img src={logo}
                alt="image"
                loading="lazy" />
            </div>
            <div class="col-12 footer-bottom">
              <p>India has a myriad of landscapes, great heritage and culture, varied flora and fauna. The country is the most preferred tourist destinations for tourists from all across the world for its picturesque landscapes, spectacular waterfalls, habitat of the country's largest tiger reserve and home to the warmest people on earth.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="footer footer-nav-section">
        <div class="container">
          <hr class="footer-line "></hr>
          <div class="row">
            <div class="col-lg-12 col-md-12 footer-bottom">
              <div class="state-tourism m-bottom-footer">
                <ul class="list-inline">
                  <li class="list-inline-item text-capitalize"><a href="/content/incredible-india-v2/en/privacy-policy.html" title="Privacy policy" target="_blank">Privacy policy
                  </a></li>
                  <li class="list-inline-item text-capitalize text-white">|</li>
                  <li class="list-inline-item text-capitalize"><a href="/content/incredible-india-v2/en/terms-of-platform-use.html" title="Terms of Platform Use" target="_blank">Terms of Platform Use
                  </a></li>
                  <li class="list-inline-item text-capitalize text-white">|</li>
                  <li class="list-inline-item text-capitalize"><a href="/content/incredible-india-v2/en/important-links.html" title="Important Links" target="_blank">Important Links
                  </a></li>
                  <li class="list-inline-item text-capitalize text-white">|</li>
                  <li class="list-inline-item text-capitalize"><a href="/content/incredible-india-v2/en/emergency.html" title="Emergency" target="_blank">Emergency
                  </a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-12 col-md-12 footer-bottom">
              <p class="text-right-m"> © Ministry of Tourism, Government of India</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
