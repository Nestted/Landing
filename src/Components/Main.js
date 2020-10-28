import React, { Component } from "react"
import { Link } from "gatsby"

class Main extends Component {
  render() {
    return (
      <div className="main" style={{ backgroundColor: "black" }}>
        <h1 className="slogan" style={{ color: "white", paddingTop: "200px"}}>
          <b>Social Media for you and your mama.</b>
        </h1>
        <p>
          Nestted is a place for families of all types and sizes. Like a hilarious sitcom, families share touching moments
          with the world.
        </p>
        <button className="join-today">
          <Link to="/#Join">Join Today!</Link>
        </button>
      </div>
    )
  }
}

export default Main
