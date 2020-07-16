import React, { useState } from "react"
import { Link } from "gatsby"
import name from "./name.svg"
import brain from "./nestted.svg"
import "../styles/styles.scss"

const Navigation = props => {
  const count = 0

  function click() {
    const count = count + 1
    props.updated(count)
  }
  return (
    <section class="top-nav">
      <div className="">
        <img src={brain} alt="logo" style={{ height: "60px", width: "60px" , marginLeft: "20px"}} />
        <img
          className="name"
          src={name}
          alt="logo"
          style={{ height: "60px", width: "100px", marginLeft: "10px", marginRight: "10px"}}
        />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li>
          <Link to="" onClick={click}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/#Features" onClick={click}>
            Features
          </Link>
        </li>
        <li>
          <Link to="/#About" onClick={click}>
            About
          </Link>
        </li>
        <li>
          <Link to="/#Join" onClick={click}>
            Join Today
          </Link>
        </li>
      </ul>
    </section>
    // <nav
    //   style={{
    //     display: "flex",
    //     justifyContent: "flex-end",
    //     backgroundColor: "black",
    //   }}
    // >
    //   <p className=" ">Home</p>
    //   <Link to="/#Features">
    //     <p className="">Features</p>
    //   </Link>
    //   <Link to="/#About">
    //     <p className="">About</p>
    //   </Link>{" "}
    //   <Link to="/#Join">
    //     <p className="">Join Beta</p>
    //   </Link>{" "}
    // </nav>
  )
}

export default Navigation
