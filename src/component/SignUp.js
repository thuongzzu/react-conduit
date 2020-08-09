import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <Row>
        <Col className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign Up</h1>
          <p className="text-xs-center">
            <Link to="/Sign-in"> Have an account? </Link>
          </p>
          <form>
            <fieldset>
              <fieldset className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Username"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                />
              </fieldset>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
              >
                Sign in
              </button>
            </fieldset>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
