import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
export default class Banner extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className="success">
          <Container fluid>
            <h1
              className="display-3"
              style={{
                color: "white",
                fontFamily: "sans-serif",
                fontSize: "24px"
              }}
            >
              {" "}
              CONDUIT
            </h1>
            <p style={{ textAlign: "center", color: "white" }} className="lead">
              A place to share your knowledge.
            </p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
