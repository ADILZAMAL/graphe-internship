import React from "react";
import { Container, Row } from "react-bootstrap";
import Ellipse1 from "../assets/icons/Ellipse 24.svg";
import Ellipse2 from "../assets/icons/Ellipse 25.svg";
import LineChart from "./LineChart";
export default function Section2LeftTop() {
  return (
    <Container fluid className="section2__left__top">
      <Row className="section2__left__top__header px-3">
        <div>
          <p className="m-0 py-3">Students number change per month</p>
        </div>
        <div>
          <div className="mr-4">
            <p className="m-0">
              <img src={Ellipse1} alt="" /> Applied
            </p>
          </div>
          <div>
            <p className="m-0">
              <img src={Ellipse2} alt="" /> Left
            </p>
          </div>
        </div>
      </Row>

      <Row className="d-flex justify-content-center">
        <LineChart />
      </Row>
    </Container>
  );
}
