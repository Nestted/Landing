import React, { Component } from "react"
import name from './name.svg';

class Join extends Component {
  handleSubmit = async (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  if (!email) return;

await fetch(
  "https://script.google.com/macros/s/AKfycbxZVu-6VwIz4mkE9k6cAMyVBc4M5-SmM0p_JJlD5Q80WRvDrLA_TVYWPvu5JlpUfdmo/exec",
  {
    method: "POST",
    mode: "no-cors", // 👈 critical for Google Scripts
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      email: email,
      source: "nestted.com",
      page: window.location.pathname,
      user_agent: navigator.userAgent,
    }),
  }
);


  e.target.reset();
  alert("You're on the list 👀");
};

  render() {
    return (
      <div id="Join" className="Join">
        <h1 style={{ margin: "auto", fontSize: "3rem", paddingTop: "200px", marginBottom: "10px"}}>Join Today!</h1>
        <div className="form">
<div>
  <input
    className="email"
    type="email"
    name="email"
    placeholder="Enter your email address"
    ref={(el) => (this.emailInput = el)}
  />

  <button
    type="button"
    onClick={() => {
      if (!this.emailInput?.value) {
        alert("Enter an email");
        return;
      }

      this.handleSubmit({
        preventDefault: () => {},
        target: {
          email: { value: this.emailInput.value },
          reset: () => {
            this.emailInput.value = "";
          },
        },
      });
    }}
  >
    Submit
  </button>
</div>

        </div>
        <img className='name' src={name} alt="logo" style={{ height: "120px", width: "200px" , margin: '0 auto', marginTop: "10px"}} />

      </div>
    )
  }
}

export default Join




