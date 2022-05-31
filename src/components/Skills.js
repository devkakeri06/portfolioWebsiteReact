import React from "react";
import ReactDOM from "react-dom";
import skills from "../images/coding.png";

export class Skills extends React.Component {
  render() {
    return (
      <div
        id="Skills"
        style={{
          height: "100vh",
          paddingTop: "50px",
        }}
      >
        <h1>Skills</h1>
        <div
          className="container-fluid"
          style={{
            // height: "80vh",
            paddingBottom: "120px",
            paddingTop: "60px",
          }}
        >
          <div className="row">
            <div className="col" id="skills">
              <img src={skills} height="400px" id="comder"></img>
            </div>
            <div className="col" id="skillbar">
              <h6>HTML/CSS</h6>
              <div
                class="progress"
                style={{
                  marginBottom: "15px",
                  marginRight: "40px",
                  marginLeft: "40px",
                }}
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <h6>JavaScript</h6>
              <div
                class="progress"
                style={{
                  marginBottom: "15px",
                  marginRight: "40px",
                  marginLeft: "40px",
                }}
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <h6>ReactJS</h6>
              <div
                class="progress"
                style={{
                  marginBottom: "15px",
                  marginRight: "40px",
                  marginLeft: "40px",
                }}
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <h6>Git/Github</h6>
              <div
                class="progress"
                style={{
                  marginBottom: "15px",
                  marginRight: "40px",
                  marginLeft: "40px",
                }}
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <h6>Python</h6>
              <div
                class="progress"
                style={{
                  marginBottom: "15px",
                  marginRight: "40px",
                  marginLeft: "40px",
                }}
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <h6>Machine Learning</h6>
              <div
                class="progress"
                style={{
                  marginBottom: "15px",
                  marginRight: "40px",
                  marginLeft: "40px",
                }}
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <h6>Backend Development</h6>
              <div
                class="progress"
                style={{
                  marginBottom: "15px",
                  marginRight: "40px",
                  marginLeft: "40px",
                }}
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <h6>Programming</h6>
              <div
                class="progress"
                style={{
                  marginBottom: "15px",
                  marginRight: "40px",
                  marginLeft: "40px",
                }}
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
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
