import React from "react";
import avatarsmall from "../assets/icons/avatarsmall.svg";
export default function Mark({ name, averageMark }) {
  return (
    <div className="d-flex align-items-center justify-content-between my-3">
      <div>
        <img src={avatarsmall} alt="" />
        <span className="ml-4" style={{ fontSize: "0.7rem" }}>
          {name}
        </span>
      </div>
      <div>
        <strong style={{ fontSize: "0.8rem" }}>{averageMark}</strong>
      </div>
    </div>
  );
}
