import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Section2.css";
import Section2LeftTop from "./Section2LeftTop";
import Section2LeftBottom from "./Section2LeftBottom";
import Section2RightLeft from "./Section2RightLeft";
import Section2RightRight from "./Section2RightRight";
export default function Section2() {
  return (
    <Container className="px-5 my-5" fluid>
      <Container fluid className="section2 ">
        <Row>
          <Col className=" mr-4 section2__left p-0">
            <Section2LeftTop />
            <Section2LeftBottom />
          </Col>
          <Col className=" section2__right p-0">
            <Section2RightLeft />
            <Section2RightRight />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
