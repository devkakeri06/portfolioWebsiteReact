import React from "react";
import ReactDOM from "react-dom";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit] = useForm("mrgrdvyv");
  if (state.succeeded) {
    return (
      <div style={{ padding: "60px" }}>
        <div class="alert alert-success" role="alert">
          Mail received!
        </div>
      </div>
    );
  }

  return (
    <div id="Contact">
      <div
        className="container-fluid text-dark bg-light px-5"
        style={{ minHeight: "100vh" }}
      >
        <br />
        <br />
        <h1 class="title">Contact me</h1>
        <br />
        <br />

        <div className="row">
          <div className="col" id="information">
            <h3 class="text">Get in Touch</h3>
            <br />
            <br />
            <h5>Have a project idea? or need help with something?</h5>
            <h5>...or have an opportunity you'd like to share?</h5>
            <h4 class="head">Name:-</h4>
            <h5 class="sub-title">Devaansh Kakeri</h5>
            <h4 class="head">Address:-</h4>
            <h5 class="sub-title">
              Mumbai, Maharashtra, India.
              <br />
              Pincode-421202
            </h5>
            <h4 class="head">Email:-</h4>
            <h5 class="sub-title">kakeri43@gmail.com</h5>
            <br />
            <br />
            {/* links */}
            <a href="https://dev.to/devkakeri06" target="blank">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg"
                alt="devkakeri06"
                height="30"
                width="40"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://linkedin.com/in/devkakeri06" target="blank">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                alt="devkakeri06"
                height="30"
                width="40"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://instagram.com/devkakeri06" target="blank">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
                alt="devkakeri06"
                height="30"
                width="40"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://twitter.com/devkakeri06" target="blank">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
                alt="devkakeri06"
                height="30"
                width="40"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              class="footer-link"
              href="https://github.com/devkakeri06"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="#343a40"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.codechef.com/users/devv_06" target="blank">
              <img
                align="center"
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg"
                alt="devkakeri06"
                height="30"
                width="40"
                fill="#000005"
              />
            </a>
          </div>

          <form className="col" id="form" onSubmit={handleSubmit}>
            <h4 class="text">Message me</h4>
            <br />
            <br />

            <div className="row">
              <div className="col input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="name"
                  id="name"
                />
                <ValidationError
                  prefix="name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="col input-group mb-3">
                <input
                  id="email"
                  name="email"
                  type="text"
                  class="form-control"
                  placeholder="E-mail"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <ValidationError
                  prefix="email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                id="subject"
                name="subject"
                type="text"
                class="form-control"
                placeholder="Subject"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <ValidationError
                prefix="subject"
                field="subject"
                errors={state.errors}
              />
            </div>
            <div class="input-group mb-3">
              <textarea
                name="message"
                id="message"
                name="message"
                type="text"
                class="form-control"
                placeholder="Message"
                aria-label="Username"
                aria-describedby="basic-addon1"
                cols="20"
                rows="10"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>
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
