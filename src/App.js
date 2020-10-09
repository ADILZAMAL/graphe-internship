import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import MenuLeft from "./components/common/MenuLeft";
import Main from "./components/Main";
function App() {
  return (
    <Container fluid className="app  ">
      <Row>
        <Col className="menu ">
          <MenuLeft />
        </Col>
        <Col className="main ">
          <Main />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
