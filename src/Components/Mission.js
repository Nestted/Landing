import React, { Component } from "react"
import mission from "./mission.svg"
import Family from "./Family Mission1.svg"

class Mission extends Component {
  render() {
    return (
      <div id="Mission" className="About">
        <img src={mission} alt="mission" className="mission_image1" />

        <h1 style={{ margin: "auto", fontSize: "4rem", paddingBottom: "20px" }}>
          Mission
        </h1>
        <div className="about_text_mob">
          <p
            style={{
              padding: "50px",
              fontSize: "1.5rem",
            }}
          >
            Our mission is to promote “family” and togetherness. We aim to
            help nonprofits and community-orgs and build a platform for successful
            outreach. We strive to enhance lifestyles with an innovative
            approach that results in happy lives as well as shape a better
            future.
          </p>
          <img src={mission} alt="mission" className="mission_image" />
        </div>
      </div>
    )
  }
}

export default Mission
