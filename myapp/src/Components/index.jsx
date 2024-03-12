import React from "react";
import "./index.css";
import logo from "./logo.png";
import bannerImg from "./banner-img.png";
const Index = () => {
  return (
    <>
      <div class="bgLightGray">
        <span>
          <i class="fa-solid fa-circle-user"></i>
        </span>
        <span class="contactNumber">1800 2666</span>
        <small class="available">(Available 24 x 7)</small>
        <span class="callBack">
          <i class="fa-solid fa-phone"></i>
          <a class="callBackLink" href="">
            Call Back
          </a>
        </span>
        <span>
          <button class="liveChat">Live Chat</button>
        </span>

        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Support
          </button>
          <ul class="dropdown-menu" id="dropdown-menu-one">
            <li>
              <a class="dropdown-item" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Grievance Redressal
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Counter Offer Acceptance
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Info Centre
          </button>
          <ul class="dropdown-menu" id="dropdown-menu-two">
            <li>
              <a class="dropdown-item" href="#">
                Info Centre
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Expert Blogs
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                FAQs
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Tax Benefits
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Downloads
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Corporate India Risk Index
              </a>
            </li>
          </ul>
        </div>

        <span>
          <a href="" class="investorRelations">
            Investor Relations
          </a>
        </span>

        <div class="dropdown" id="dropdownBtn">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="lombardLogo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-4 mb-2 mb-lg-0" />
            {/* Motor Insurance */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Motor Insurance
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Motor Insurance
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Car Insurance
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Bike Insurance
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Motor Floater
                  </a>
                </li>
              </ul>
            </li>

            {/* Health Insurance */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Health Insurance
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Health Insurance
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Health AdvantEdge
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    MaxProtect
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Health Booster
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Personal Protect
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Arogya Sanjeevani Policy, ICICI Lombard
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Corona Kavach Policy, ICICI Lombard
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Saral Suraksha Bima, ICICI Lombard
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Golden Shield
                  </a>
                </li>
              </ul>
            </li>

            {/* Travel Insurance */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Travel Insurance
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Travel Insurance
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Single Trip
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Gold Multi trip
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Student Travel
                  </a>
                </li>
              </ul>
            </li>
            {/* Business Insurance */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Business Insurance
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Business Insurance
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Marine Transit
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Workmen’s Compensation
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Group Health Insurance
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Fire Insurance - Sookshma
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Marine Open Insurance
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Fire Insurance - Griha for Housing Societies
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Professional Indemnity Policy for Medical Practitioners
                  </a>
                </li>
              </ul>
            </li>
            {/* Other Insurance */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Other Insurance{" "}
                <span>
                  <i class="fas fa-angle-down"></i>
                </span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Crop Insurance
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    NRI Insurance
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Cyber Insurance
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    ICICI Bharat Griha Raksha Policy
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Complete Home Protect
                  </a>
                </li>
              </ul>
            </li>
            {/* Renewals */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Renewals
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    All policy renewal
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Car Policy
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Bike Policy
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Health Policy
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Travel Policy
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Business Insurance
                  </a>
                </li>
              </ul>
            </li>
            {/* Claims */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Claims
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Health Claims
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Motor Claims
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Travel Claims
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Home Claims
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Cyber Insurance Claims
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </nav>

      <div className="ngFaintOrange">
        <div className="row">
          <div className="col-md-6">
            <h2 className="headline">
              Over 4 crore customers have faith in us because we care.
            </h2>
          </div>
          <div className="col-md-6">
            <img src={bannerImg} alt="" style={{ float: "right" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
