import React, { Component } from "react"
import name from './name.svg';

class Join extends Component {
  render() {
    return (
      <div id="Join" className="Join">
        <h1 style={{ margin: "auto", fontSize: "3rem", paddingTop: "200px", marginBottom: "10px"}}>Join Today!</h1>
        <div className="form">
          <form>
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <button>Submit</button>{" "}
          </form>
        </div>
        <img className='name' src={name} alt="logo" style={{ height: "120px", width: "200px" , margin: '0 auto', marginTop: "10px"}} />

      </div>
    )
  }
}

export default Join
