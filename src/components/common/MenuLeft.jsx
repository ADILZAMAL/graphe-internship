import React from "react";
import "../../styles/common/MenuLeft.css";
import setting from "../../assets/icons/settings.svg";
import folder from "../../assets/icons/folders.svg";
import mail from "../../assets/icons/mail.svg";
import chart from "../../assets/icons/chart.svg";
import file from "../../assets/icons/files.svg";
import { useSelector, useDispatch } from "react-redux";
import { changeTab } from "../../store/common";
export default function MenuLeft() {
  const dispatch = useDispatch();
  const tab = useSelector((store) => store.common.tab);
  const onClickHandler = (name) => {
    dispatch(changeTab(name));
  };
  return (
    <div className=" menu-container  ">
      <div className="menu__brand">
        <span className="">g</span>
      </div>
      <div className="menu__nav ">
        <div className="icons__container">
          <div
            className={tab === "folder" ? "active" : ""}
            onClick={() => {
              onClickHandler("folder");
            }}
          >
            <img src={folder} alt="" />
          </div>

          <div
            className={tab === "chart" ? "active" : ""}
            onClick={() => {
              onClickHandler("chart");
            }}
          >
            <img src={chart} alt="" />
          </div>
          <div
            className={tab === "mail" ? "active" : ""}
            onClick={() => {
              onClickHandler("mail");
            }}
          >
            <img src={mail} alt="" />
          </div>
          <div
            className={tab === "file" ? "active" : ""}
            onClick={() => {
              onClickHandler("file");
            }}
          >
            <img src={file} alt="" />
          </div>
        </div>
        <div className="menu__nav__settings">
          <img src={setting} alt="" />
        </div>
      </div>
    </div>
  );
}
