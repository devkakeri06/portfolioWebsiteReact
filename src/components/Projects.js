import React from "react";
import ReactDOM from "react-dom";
import yelpcamp from "../images/yelpcamp.JPG";
import todos from "../images/todos.jpg";
import spotify from "../images/spotify.png";
import weather from "../images/weather.jpg";
import score from "../images/score.jpg";
import museum from "../images/museum.JPG";

export class Projects extends React.Component {
  render() {
    return (
      <div>
        <div style={{ minHeight: "100vh", paddingBottom: "50px" }}>
          <br />
          <br />
          <br />

          <h1 style={{ marginBottom: "50px" }}>Projects</h1>
          <div className="container">
            <div
              className="row d-flex align-items-center justify-content-around align-content-end flex-wrap"
              style={{ marginBottom: "50px" }}
            >
              <div className="col d-flex justify-content-center">
                <div
                  class="card"
                  style={{ width: "18rem", marginBottom: "50px" }}
                >
                  <img src={yelpcamp} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">YelpCamp</h5>
                    <p class="card-text">
                      A Full CRUD Application made with MongoDB, Express, Node,
                      EJS, Bootstrap.
                    </p>
                    <a
                      href="https://github.com/devkakeri06/YelpCamp"
                      class="btn btn-primary"
                    >
                      See Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div
                  class="card"
                  style={{ width: "18rem", marginBottom: "50px" }}
                >
                  <img src={spotify} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Spotify Clone</h5>
                    <p class="card-text">
                      Spotify Clone made with HTML, CSS and Vanilla JS.
                    </p>
                    <a
                      href="https://github.com/devkakeri06/Spotify-Clone"
                      class="btn btn-primary"
                    >
                      See Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div
                  class="card"
                  style={{ width: "18rem", marginBottom: "50px" }}
                >
                  <img src={todos} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Todos List</h5>
                    <p class="card-text">Todos List made with ReactJS.</p>
                    <a
                      href="https://github.com/devkakeri06/TodoListReact"
                      class="btn btn-primary"
                    >
                      See Project
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="row d-flex align-items-center justify-content-around align-content-end flex-wrap"
                style={{ marginBottom: "50px" }}
              >
                <div className="col d-flex justify-content-center">
                  <div
                    class="card"
                    style={{ width: "18rem", marginBottom: "50px" }}
                  >
                    <img src={museum} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Museum of Candy</h5>
                      <p class="card-text">
                        A pure Frontend Project made with HTML and CSS and
                        Bootstrap.
                      </p>
                      <a
                        href="https://github.com/devkakeri06/Museum-of-Candy"
                        class="btn btn-primary"
                      >
                        See Project
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col d-flex justify-content-center">
                  <div
                    class="card"
                    style={{ width: "18rem", marginBottom: "50px" }}
                  >
                    <img src={weather} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Weather App</h5>
                      <p class="card-text">
                        Weather Map made using OpenWeatherAPI, HTML, CSS and
                        Vanilla JS.
                      </p>
                      <a
                        href="https://github.com/devkakeri06/Weather-App"
                        class="btn btn-primary"
                      >
                        See Project
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col d-flex justify-content-center">
                  <div
                    class="card"
                    style={{ width: "18rem", marginBottom: "50px" }}
                  >
                    <img src={score} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Score-Keeper</h5>
                      <p class="card-text">
                        Scorekeeper made with HTML, Bulma CSS, Javascript.
                      </p>
                      <a
                        href="https://github.com/devkakeri06/Score-Keeper"
                        class="btn btn-primary"
                      >
                        See Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  To see more of my work follow me on{"   "}
                  <span>
                    <a
                      href="https://github.com/devkakeri06"
                      class="btn btn-success"
                    >
                      Github
                    </a>
                  </span>
                </p>
              </div>
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
