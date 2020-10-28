import React, { Component } from "react"
import family from "./famprofile.svg"
import heart from "./Heartlock.svg"
import Engagement from "./engagement.svg"
import tribal from "./tribal.svg"
import Nestt from "./2Nestt PRofile .gif"
import Saftey from "./Safety Accountability .gif"
import Moments from "./Moments.gif"
import ReactCardCarousel from "react-card-carousel"

class Features extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
    }
  }

  static get CARD_STYLE() {
    return {
      height: "380px",
      width: "280px",
      paddingTop: "20px",
      textAlign: "center",
      background: "black",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box",
    }
  }
  render() {
    return (
      <div id="Features" className="features">
        <h1
          style={{
            color: "white",
            textAlign: "left",
            fontWeight: "bold",
            marginBottom: "30px",
            marginLeft: "30px",
            marginTop: "200px",
            paddingTop: "200px"



          }}
        >
          Features
        </h1>
        <div className="desktop">
          <div className="desktop_view">
            <img
              src={Nestt}
              alt="mission"
              style={{ width: "230px", margin: "0 auto" }}
            />

            <p
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
                padding: "10px",
              }}
            >
              <br />
              The Nestt is a place where individual profiles are linked together to create a manageable
              family profile.
            </p>
          </div>
          <div className="desktop_view">
            <img
              src={Saftey}
              alt="values"
              style={{ width: "230px", margin: "0 auto" }}
            />
            <p
              style={{
                textAlign: "center",
                margin: "0 auto",
                fontSize: "1.5rem",
                width: "80%",
                padding: "10px",
              }}
            >
              <br />
              Nestted provides secure messaging that notifies the spouse or parent of interactions with
              others outside of the family.
            </p>
          </div>
          <div className="desktop_view">
            <img
              src={Moments}
              alt="mission"
              style={{ width: "230px", margin: "0 auto" }}
            />

            <p
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
                padding: "10px",
              }}
            >
              <br />
              <br />
              Families create moments by posting their favorite memories and share them with the world.
            </p>
          </div>
        </div>
        {/* <div style={Features.CONTAINER_STYLE}>
          <ReactCardCarousel>
            <div className="" style={Features.CARD_STYLE}>
              <img src={family} alt="mission" style={{ width: "230px" }} />

              <p
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  padding: "10px",
                }}
              >
                <br />
                Individual profiles are linked together to create a manageable
                family profile.
              </p>
            </div>
            <div className="" style={Features.CARD_STYLE}>
              <img src={heart} alt="values" style={{ width: "200px" }} />
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "1rem",
                  padding: "10px",
                }}
              >
                <br />
                Secure messaging that notify spouse or parent of interactions
                with others outside of the family.
              </p>
            </div>
            <div className="" style={Features.CARD_STYLE}>
              <img src={Engagement} alt="mission" style={{ width: "200px" }} />

              <p
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  padding: "10px",
                }}
              >
                <br />
                <br />
                Families chat and share their moments with the world.
              </p>
            </div>
          </ReactCardCarousel>
        </div> */}
        
      </div>
    )
  }
}

export default Features
