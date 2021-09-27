import React from "react";
import "./Header.scss";
import "../../App.scss";

export class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid headerIntro d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center align-items-center text-white">WE MAKE WEBSITES</h1>
        <a
          className="mt-4 text-center text-decoration-none align-items-center justify-content-center border border-white px-3 py-2"
          href="#portofolio"
        >
          START TOUR
        </a>
      </div>
    );
  }
}
