import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import MenuLeft from "./components/common/MenuLeft";
function App() {
  return (
    <Container fluid className="app  ">
      <Row>
        <Col className="menu ">
          <MenuLeft />
        </Col>
        <Col className="main ">main</Col>
      </Row>
    </Container>
  );
}

export default App;
