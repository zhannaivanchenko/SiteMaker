import React from "react";
import "./Content.scss";
import "../../App.scss";




export class Content extends React.Component {
  render() {
    return (
      <div className="container-fluid d-flex  containerFullyResponsive ">
        <div className="container d-flex flex-column">
          <div className="row justify-content-center my-4">
            <div className="col-10 justify-content-center align-items-center d-inline">
              <button
                type="button"
                className="border col-6 responsiveButton"
                id="leftMenu"
              >
                START TOUR
              </button>

              <button
                type="button"
                className="border col-6 responsiveButton"
                id="rightMenu"
              >
                FOR ALL DEVICES
              </button>
            </div>
          </div>

          <div className="row d-flex justify-content-center my-4">
            <div className="col-5 col-md-4 offset-1 offset-md-2 d-flex justify-content-center align-items-center mb-3">
              <img
                src="/images/Phones.png"
                className="phonesImage img-fluid"
                alt="blackAndWhitePhones"
              />
            </div>

            <div className="col-6 col-md-5 justify-content-left">
              <h5>Fully Responsive</h5>
              <p className="responsiveText mt-3 overflow-auto">
                Eum cu tantas legere comlectirut hnc utamur ea eam. Lorem impsum
                dolor sit amet, volumus temporibus definitionen id us, vel ut
                magna timeam apareat. movet timeam maoirum an lus. Sea libris
                dictas lucilus et. Ne cibo urbantas pri. qui ad populo
                accusamus. Qud congue ea lius. nisi aperiri sit ut.
              </p>
              <button
                type="button"
                className="col-6 border mt-2 responsiveButton"
                id="getNowBtn"
                href=""
              >
                GET NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
