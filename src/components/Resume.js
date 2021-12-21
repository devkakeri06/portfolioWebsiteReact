import React from "react";
import ReactDOM from "react-dom";
import resume1 from "../images/resume1.JPG";
import resume2 from "../images/resume2.JPG";
import resumepdf from "../images/RESUMEPDF.pdf";

export class Resume extends React.Component {
  render() {
    return (
      <div style={{ minHeight: "100vh", paddingTop: "50px" }}>
        <h1>Resume</h1>
        <div
          className="container"
          style={{ marginBottom: "50px", marginTop: "50px" }}
        >
          <div className="row">
            <div className="col">
              <img
                src={resume1}
                style={{ border: "2px solid black", height: "700px" }}
                id="res1"
              ></img>
            </div>
            <div className="col">
              <img
                src={resume2}
                style={{ border: "2px solid black", height: "700px" }}
                id="res2"
              ></img>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <a href={resumepdf} download>
            <button type="button" class="btn btn-success">
              Download Resume
            </button>
          </a>
        </div>
        <div
          style={{
            height: "69px",
            backgroundColor: "#292b2c",
            color: "white",
            paddingBottom: "10px",
          }}
          className="d-flex align-items-end justify-content-center"
        >
          <span>
            <span className="far fa-copyright">
              <p>Devaansh Kakeri | © 2022 All rights reserved.</p>
            </span>
          </span>
        </div>
      </div>
    );
  }
}
