import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mark from "./Mark";
import { useSelector, useDispatch } from "react-redux";
import { changeSortBy } from "../store/stats";
export default function Section2RightLeft() {
  const dispatch = useDispatch();
  const students = useSelector((store) => store.stats.students);
  const data = [...students];
  const order = useSelector((store) => store.stats.sortBy);
  console.log(order);
  switch (order) {
    case "ascending":
      data.sort((a, b) => (a.averageMark < b.averageMark ? 1 : -1));
      break;
    case "descending":
      data.sort((a, b) => {
        return a.averageMark > b.averageMark ? 1 : -1;
      });
      break;
  }
  const onChangeHandler = (e) => {
    // console.log(e.target.value);
    const value = e.target.value;
    dispatch(changeSortBy(value));
  };
  return (
    <Container fluid className="section2__right__left mr-5">
      <Row
        style={{ position: "fixed", backgroundColor: "white", zIndex: "100" }}
      >
        <Col className="section2__right__left__header d-flex justify-content-between">
          <p className=" py-3">Students by type of studying</p>
          <div>
            <select onChange={onChangeHandler}>
              <option value="ascending">Ascending</option>
              <option value="descending" selected>
                Descending
              </option>
            </select>
          </div>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col>
          {data.map((d) => (
            <Mark name={d.name} averageMark={d.averageMark} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
