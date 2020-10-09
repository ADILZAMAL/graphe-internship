import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cup from "../assets/icons/cup.svg";
import clock from "../assets/icons/clock.svg";
import { useSelector } from "react-redux";
export default function Section2LeftBottom() {
  const lectionsLeft = useSelector((store) => store.stats.lectionsLeft);
  const hoursSpentOnLections = useSelector(
    (store) => store.stats.hoursSpentOnLections
  );
  return (
    <Container className="section2__left__bottom">
      <Row>
        <Col className="section2__left__bottom__card  mr-4 ">
          <div className="section2__left__bottom__card1__image ">
            <img src={cup} alt="" />
          </div>
          <div className=" ml-3">
            <h1>{lectionsLeft}</h1>
            <p>Lections</p>
          </div>
        </Col>

        <Col className=" section2__left__bottom__card  ">
          <div className="section2__left__bottom__card2__image">
            <img src={clock} alt="" />
          </div>
          <div className=" ml-3">
            <h1>{hoursSpentOnLections}</h1>
            <p>Hours spent on lections</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
