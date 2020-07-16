import React, { Component } from "react"
import nesttedgif from "./nestted-gif.gif"
import brain from "./nestted.svg"
import tribal from "./tribal.svg"

class Footer extends Component {
  render() {
    return (
      <div className="gif">
        <img
          id="gif"
          src={nesttedgif}
          style={{ width: "90%", margin: "0 auto", marginTop: "50px" }}
        />
        <img
          src={brain}
          alt="logo"
          style={{ height: "160px", width: "160px", margin: "0 auto" }}
        />

        <img
          src={tribal}
          style={{ width: "100%", marginLeft: "-5px", marginTop: "100px" }}
        />
      </div>
    )
  }
}

export default Footer
