import React from "react";
import Header from "./common/Header";
import { Container, Col, Row } from "react-bootstrap";
import DashBoardTitle from "./DashBoardTitle";
import Section1 from "./Section1";
export default function Main() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Header />
      </Row>
      <Row>
        <DashBoardTitle />
      </Row>
      <Row>
        <Section1 />
      </Row>
      <Row>5 card</Row>
    </Container>
  );
}
