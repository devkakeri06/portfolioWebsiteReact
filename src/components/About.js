import React from "react";
import ReactDOM from "react-dom";
import aboutme from "../images/aboutme.png";

export class About extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
        }}
      >
        <div
          className="container-fluid text-dark bg-light px-5"
          style={{
            paddingBottom: "120px",
            paddingTop: "69px",
            width: "100%",
          }}
        >
          <h1>About Me</h1>
          <br />
          <br />

          <div className="row">
            <div className="col order-2 order-lg-1">
              <h4 className="text-align-center px-1" id="abouttext">
                My programming journey started back when I was in school. I was
                involved with robotics and arduino and that's when I got
                introduced to programming. I knew what coding was and what it
                does but it did not grab my attention back then.
                <br />
                <br />
                After my 10th boards I chose Science stream with Electronics
                being one of the subjects. I was thrilled to learn about how
                everyday devices like Sensors, Mobiles, Computers worked. I
                wanted to explore this field more and that's why I chose
                Electronics and Communication Engineering as my discipline.
                <br /> <br />
                In First Year I learnt Python and C/C++ programming. That's when
                I decided to explore this domain more. I realised how much work
                goes behind making the apps and websites we use everyday. Then I
                started taking programming a bit more seriously as I realised
                its potential. I started with DSA and Problem Solving and
                started Web Development alongside. This website is my first
                ReactJS project!😃
              </h4>
            </div>
            <div className="col order 1 order-lg-2 ">
              <img src={aboutme} id="computer"></img>
            </div>
          </div>
          <br />
          <br />
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
