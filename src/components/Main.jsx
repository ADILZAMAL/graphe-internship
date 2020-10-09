import React from "react";
import Header from "./common/Header";
import { Container, Col, Row } from "react-bootstrap";
import DashBoardTitle from "./DashBoardTitle";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { useSelector } from "react-redux";
export default function Main() {
  const tab = useSelector((store) => store.common.tab);
  if (tab !== "chart") {
    return (
      <Container fluid className="p-0">
        <Row>
          <Header />
        </Row>
        <Row>Not available...</Row>
      </Container>
    );
  }
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
      <Row>
        <Section2 />
      </Row>
    </Container>
  );
}
