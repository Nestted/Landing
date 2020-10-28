import React, { Component } from "react"
import values from "./values.svg"

class Values extends Component {
  render() {
    return (
      <div id="Values" className="About">
        <img
          src={values}
          alt="values"
          className="values_image"
          style={{
            margin: "0 auto",
          }}
        />

        <h1
          className="values_heading"
          style={{ margin: "auto", fontSize: "4rem", paddingBottom: "20px" }}
        >
          Values
        </h1>
        <div className="about_text">
          <img src={values} alt="values" className="values_image1" />
          <p
            style={{
              padding: "50px",
              fontSize: "1.5rem",
            }}
          >
            Nestted brings accountability, fun, faith, honor and security to
            Social Media. We want to help people love their families a little more.
            We focusing our attention on what matters the most…Family matters.
          </p>
        </div>
      </div>
    )
  }
}

export default Values
