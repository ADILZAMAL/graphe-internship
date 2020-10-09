import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import e1 from "../assets/icons/Ellipse 24.svg";
import e3 from "../assets/icons/Ellipse 25.svg";
import e4 from "../assets/icons/Ellipse 26.svg";
import e2 from "../assets/icons/eclipse 27.svg";
import Donut from "./Donut";
export default function Section2RightRight() {
  const data = useSelector((store) => store.stats.group);
  const group = [...data];
  const bullet = [e1, e2, e3, e4];
  const total = useSelector((store) => store.stats.numberOfStudent);
  return (
    <Container
      fluid
      className="section2__right__right d-flex flex-column justify-content-between"
    >
      <Row>
        <Col className="section2__right__right__header">
          <p className=" py-3">Students by type of studying</p>
        </Col>
      </Row>
      <Row className=" ">
        <Col>
          <div className="graph-left  ">
            <Donut />
          </div>
          <div className="section2__right__right__data ">
            {group.map((data, index) => (
              <div className="group__item my-4">
                <div>
                  <img src={bullet[index]} />
                  <p className="ml-3">{data[0]}</p>
                </div>
                <div>
                  <strong>{data[1]} </strong>
                  <span style={{ fontSize: "0.6rem" }}>
                    ({Math.floor((data[1] / total) * 100)}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
