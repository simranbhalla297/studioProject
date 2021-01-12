import React from "react";
import { Col, Row } from "react-bootstrap";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="first-row">
          <Row>
            <Col xs={4} sm={12}>
              <div className="logo">
                <img src={"logo.svg"} />
              </div>
            </Col>
            <Col xs={8} sm={12}>
              <div className="social-icons">
                <div className="icons">
                  <img src={"facebook.svg"} />
                </div>
                <div className="icons">
                  <img src={"pinterest.svg"} />
                </div>
                <div className="icons">
                  {" "}
                  <img src={"instagram.svg"} />
                </div>
                <div className="icons">
                  {" "}
                  <img src={"twitter.svg"} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="second-row">
          <Row>
            <Col xs={4} sm={12}>
              <div className="links">
                <ul>
                  <li>about</li>
                  <li>Events</li>
                  <li>Contatc</li>
                  <li>Support</li>
                </ul>
              </div>
            </Col>
            <Col xs={8} sm={12}>
              <h3
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: "45px",
                }}
              >
                © 2021 Loopstudios. All rights reserved.
              </h3>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Footer;
