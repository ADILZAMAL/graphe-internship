import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import book from "../assets/icons/book.svg";
import mark from "../assets/icons/mark.svg";
import person from "../assets/icons/person.svg";
import underperform from "../assets/icons/underperform.svg";
import "../styles/Section1.css";
export default function Section1() {
  const students = useSelector((store) => store.stats.numberOfStudent);
  const averageMarks = useSelector((store) => store.stats.averageMark);
  const numberOfUnderPerformingStudents = useSelector(
    (store) => store.stats.numberOfUnderPerformingStudents
  );
  const percentageOfFinshedHomework = useSelector(
    (store) => store.stats.percentageOfFinishedHomework
  );
  return (
    <Container fluid className="px-5 section1__container ">
      <Container fluid className="section1 ">
        <Row className=" ">
          <Col className="section1__card1  card mr-4">
            <div className="section1__card1__image ">
              <img src={person} alt="" />
            </div>
            <div className="card__text ml-3">
              <h1>{students}</h1>
              <p>Students</p>
            </div>
          </Col>
          <Col className="card  mr-4">
            <div className="section1__card2__image ">
              <img src={mark} alt="" />
            </div>
            <div className="card__text ml-3">
              <h1>{averageMarks}</h1>
              <p>Average mark</p>
            </div>
          </Col>
          <Col className="card  mr-4">
            <div className="section1__card3__image">
              <img src={underperform} alt="" />
            </div>
            <div className="card__text ml-3">
              <h1>{numberOfUnderPerformingStudents}</h1>
              <p>Underperforming students</p>
            </div>
          </Col>
          <Col className=" card">
            <div className="section1__card4__image">
              <img src={book} alt="" />
            </div>
            <div className="card__text ml-3">
              <h1>{percentageOfFinshedHomework}%</h1>
              <p>Finshed homework</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
