import React, { Component } from "react";
import name from "./name.svg";

class Join extends Component {
handleSubmit = async (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  if (!email) return;

  const endpoint =
    "https://script.google.com/macros/s/AKfycbz4gLqiHwC3K7eOj97OJe2kM0_5qzyQV_ueeBW704P5IMHKr_oZnU5Uy5gacKhJWuM8/exec";

  const url = new URL(endpoint);
  url.searchParams.set("email", email);
  url.searchParams.set("source", "nestted.com");
  url.searchParams.set("page", window.location.pathname);
  url.searchParams.set("ts", Date.now().toString());

    // Fire-and-forget (email already confirmed working)
  fetch(url.toString(), { method: "GET", mode: "no-cors" });

  // UX: success message
  if (this.messageRef) {
    this.messageRef.innerText = "✅ You’re on the list.";
    this.messageRef.style.color = "#9e1c99";
  }

  e.target.reset();
};



messageRef = null;


  render() {
    return (
      <div id="Join" className="Join">
        <h1 style={{ margin: "auto", fontSize: "3rem", paddingTop: "200px", marginBottom: "10px" }}>
          Join Today!
        </h1>

        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">Submit</button>
            <p
  ref={(el) => (this.messageRef = el)}
  style={{ marginTop: 12, fontWeight: 500 }}
></p>

          </form>
        </div>

        <img
          className="name"
          src={name}
          alt="logo"
          style={{ height: "120px", width: "200px", margin: "0 auto", marginTop: "10px" }}
        />
      </div>
    );
  }
}

export default Join;








