import React from "react";
import { Col, Container, InputGroup, FormControl } from "react-bootstrap";
import search from "../../assets/icons/search.svg";
import avatar from "../../assets/icons/avatar.svg";
import arrowDown from "../../assets/icons/arrowDown.svg";
import notification from "../../assets/icons/notifications.svg";
import logout from "../../assets/icons/logout.svg";
import "../../styles/common/Header.css";
import { useSelector } from "react-redux";
export default function Header() {
  const username = useSelector((store) => store.common.username);
  const designation = useSelector((store) => store.common.designation);
  return (
    <Col className="border header">
      <Container fluid className="header-container px-5">
        <div className="">
          <img className="pr-1" src={search} alt="" />
          <input className="header__input" placeholder="search..." />
        </div>
        <div className="header__right ">
          <div>
            <div className="header__user mr-3 ">
              <h6>{username}</h6>
              <p>{designation}</p>
            </div>
            <div className="user-image mr-3">
              <img src={avatar} />
            </div>
            <div className="arrow mr-4 ">
              <img src={arrowDown} alt="" />
            </div>
          </div>
          <div>
            <div className="ml-4 mr-3">
              <img src={notification} alt="" />
            </div>
            <div className="mr-2">
              <img src={logout} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </Col>
  );
}
