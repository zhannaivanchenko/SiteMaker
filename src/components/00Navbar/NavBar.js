import React from "react";
// import ReactDOM from 'react-dom';
import "./NavBar.scss";
import "../../App.scss";
import Logo from "./Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

export class NavBar extends React.Component {
  render() {
    return (
      <div className="container-fluid container-md d-flex px-sm-2 justify-content-center align-items-center">
        <div className="row align-items-center navContainer  ">
          <div className="col-4 col-md-6 justify-content-start">
            <img src={Logo} className="float-left" alt="logoOfCompany" />
          </div>
          <div className="col-8 col-md-6 pt-3">
            <ul className="row d-flex justify-content-between align-items-center list-unstyled text-center navigationList ">
              <li className="col-2 " id="home">
                HOME
              </li>
              <li className="col-2 " id="services">
                SERVICES
              </li>
              <li className="col-2 " id="portfolio">
                PORTFOLIO
              </li>
              <li className="col-2 " id="about">
                ABOUT
              </li>
              <li className="col-2 " id="news">
                NEWS
              </li>
              <li className="col-2 " id="contact">
                CONTACT
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
