import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import logo from '../assets/ORBS.png';
function Sidebar() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (id) => {
    setSelectedButton(id);
  };

  async function handleLogOut() {
    const res = await fetch("http://localhost:3007/api/user/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      credentials: "include",
    });
    toast.success("Logout Successful");
    navigate("/Login");
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="profile">
        <img src={logo} alt="Logo" />
          <h4>Codelet</h4>
        </div>
      </div>
      <div className="divider"></div>
      <div
        className={`profile-option ${
          selectedButton === "request" ? "selected" : ""
        }`}
        id="request"
        onClick={() => handleButtonClick("request")}
      >
        <span className="button-icon">
          <i className="fa fa-home" style={{ fontSize: "18px" }}></i>
        </span>
        <span className="option-left" style={{ marginLeft: "18px" }}>
          <Link to="/request" className="atag">
            Home
          </Link>
        </span>
      </div>
      <div
        className={`profile-option ${
          selectedButton === "request" ? "selected" : ""
        }`}
        id="request"
        onClick={() => handleButtonClick("request")}
      >
        <span className="button-icon">
          <i className="fa fa-user" style={{ fontSize: "18px" }}></i>
        </span>
        <span className="option-left" style={{ marginLeft: "18px" }}>
          <Link to="/request" className="atag">
            Profile
          </Link>
        </span>
      </div>
      <div
        className={`profile-option ${
          selectedButton === "transcript" ? "selected" : ""
        }`}
        id="transcript"
        onClick={() => handleButtonClick("transcript")}
      >
        <span className="button-icon">
          <i className="fa fa-file-text" style={{ fontSize: "18px" }}></i>
        </span>
        <span style={{ marginLeft: "23px" }}>
          <Link to="/generate" className="atag">
            Courses/Sheets
          </Link>
        </span>
      </div>
      <div
        className={`profile-option ${
          selectedButton === "request" ? "selected" : ""
        }`}
        id="request"
        onClick={() => handleButtonClick("request")}
      >
        <span className="button-icon">
          <i className="fa fa-trophy" style={{ fontSize: "18px" }}></i>
        </span>
        <span className="option-left" style={{ marginLeft: "18px" }}>
          <Link to="/request" className="atag">
            1v1
          </Link>
        </span>
      </div>
      <div
        className={`profile-option ${
          selectedButton === "request" ? "selected" : ""
        }`}
        id="request"
        onClick={() => handleButtonClick("request")}
      >
        <span className="button-icon">
          <i className="fa fa-comment-dots" style={{ fontSize: "18px" }}></i>
        </span>
        <span className="option-left" style={{ marginLeft: "18px" }}>
          <Link to="/request" className="atag">
            Buddy Zone
          </Link>
        </span>
      </div>
      <div>
        <span className="option-left" style={{ marginLeft: "18px" ,fontFamily: 'Cygnito Mono', }}>
          <Link
            to="/logout"
            className="atag"
            Id="logoutbutton"
            onClick={handleLogOut}
          >
            .logout()
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
