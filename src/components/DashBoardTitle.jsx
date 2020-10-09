import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import edit from "../assets/icons/edit.svg";
import plus from "../assets/icons/plus.svg";
import "../styles/DashboardTitle.css";
export default function DashBoardTitle() {
  return (
    <Container fluid className="px-5 py-4 dashboard-title">
      <div className="dashboard__title">
        <h1>Dashboard</h1>
        <p>Subject Course</p>
      </div>
      <div className="dashboard__button">
        <button className="dashboard__button__manage mr-3">
          {" "}
          <img src={edit} /> Manage dashboard
        </button>
        <button className="dashboard__button__create">
          <img src={plus} alt="" />
          Create new dashboard
        </button>
      </div>
    </Container>
  );
}
