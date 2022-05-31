import React from "react";
import ReactDOM from "react-dom";
import demo from "../images/1653330140358 (1) (1).jpg";
import Typewriter from "typewriter-effect";

export class Body extends React.Component {
  render() {
    return (
      <div>
        <div
          className="container min-vh-100 align-items-center"
          style={{ paddingTop: "180px", paddingBottom: "150px" }}
        >
          <div className="row align-items-center">
            <div className="col align-items-center">
              <img
                src={demo}
                height="475px"
                style={{ borderRadius: "50%", border: "5px solid black" }}
                id="todoroki"
              ></img>
            </div>
            <div class="col align-items-center" id="intro">
              <h1>Hello! I am Devaansh!</h1>
              <h2 style={{ fontSize: "169%" }}>
                And I'm a
                <span>
                  <Typewriter
                    options={{
                      strings: [
                        "Developer.",
                        "Programmer.",
                        "Engineer.",
                        "Designer.",
                        "Gamer.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h2>
            </div>
          </div>
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
