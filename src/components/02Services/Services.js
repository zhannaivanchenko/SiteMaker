import React from "react";
import "./Services.scss";
import "../../App.scss";

const serviceDescription = {
  webDesignDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  graphicDesignDescription:
    "Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequunturdeleniti.",
  programmingDescription:
    "Lotam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.",
  photographyDescription:
    "Atque quis totam repellendus omnis alias magnam corrupti, possimus aspernaturperspiciatis quae provident consequatur minima doloremque blanditiis nihil maximeducimus earum autem. Magni animi blanditiis similique iusto, repellat sed quisquam!",
};

export class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceContent: serviceDescription.webDesignDescription,
      activeService: "webDesignContainer",
      services: [
        {
          name: "webDesignContainer",
          image: "/images/Icon1.png",
          title: "WEB DESIGN",
          description: serviceDescription.webDesignDescription,
        },
        {
          name: "graphicDesignContainer",
          image: "/images/Icon2.png",
          title: "GRAPHIC DESIGN",
          description: serviceDescription.graphicDesignDescription,
        },
        {
          name: "programmingContainer",
          image: "/images/Icon3.png",
          title: "PROGRAMMING",
          description: serviceDescription.programmingDescription,
        },

        {
          name: "photographyContainer",
          image: "/images/Icon4.png",
          title: "PHOTOGRAPHY",
          description: serviceDescription.photographyDescription,
        },
      ],
    };
    this.handleClickGraph = this.handleClickGraph.bind(this);
  }

  handleClickGraph(e) {
    console.log("e=%o", e);
    console.log("e=%o", e.target.id);
    // if(e.target.id === 'graphicDesignContainer'){ console.log('here I am')}
    switch (e.target.id) {
      case "graphicDesignContainer":
        return this.setState({
          serviceContent: serviceDescription.graphicDesignDescription,
          activeService: "graphicDesignContainer",
        });
      case "webDesignContainer":
        return this.setState({
          serviceContent: serviceDescription.webDesignDescription,
          activeService: "webDesignContainer",
        });
      case "programmingContainer":
        return this.setState({
          serviceContent: serviceDescription.programmingDescription,
          activeService: "programmingContainer",
        });
      case "photographyContainer":
        return this.setState({
          serviceContent: serviceDescription.photographyDescription,
          activeService: "photographyContainer",
        });
      default:
        return "";
    }

    // this.setState({ serviceContent : serviceDescription.graphicDesignDescription });
  }
  buttonLayout(services) {
    return services.map((service) => (
      <div className="col-3 mx-auto d-flex justify-content-center align-items-center">
        <div
          className="col-3  d-flex flex-column justify-content-center align-items-center"
          onClick={this.handleClickGraph}
          key={service.name}
        >
          <img
            id={service.name}
            src={service.image}
            className="img-fluid"
            alt={service.name}
          />
          <p className="serviceTitle text-nowrap ">{service.title}</p>
        </div>
      </div>
    ));
  }

  render() {
    let buttonDesign = this.buttonLayout(this.state.services);

    return (
      <div className="container mt-5" id="services">
        <div className="row justify-content-center align-items-center">
          {buttonDesign}
        </div>

        <div className="row ">
          <div className="col-1 "></div>
          <div className="col-1 activeBox" id="webBox"></div>
          <div className="col-2 border-bottom"></div>
          <div
            className="col-1 border-top border-bottom serviceBox defaultBox"
            id="graphBox"
          ></div>
          <div className="col-2 border-bottom"></div>
          <div
            className="col-1 border-top border-bottom serviceBox defaultBox"
            id="programBox"
          ></div>
          <div className="col-2 border-bottom"></div>
          <div
            className="col-1 border-top border-bottom serviceBox defaultBox"
            id="photoBox"
          ></div>
        </div>

        <div className="row justify-content-left">
          <p className="offset-2 col-9 text-right pt-4 pb-5 serviceDescriptionText">
            {this.state.serviceContent}
          </p>
        </div>
      </div>
    );
  }
}
