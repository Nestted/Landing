import React, { Component } from "react"
import Helmet from "react-helmet"
import "../styles/styles.css"
import Main from "../Components/Main"
import About from "../Components/About"
import Join from "../Components/Join"
import Features from "../Components/Features"
import Navigation from "../Components/Navigation"
import Mission from "../Components/Mission"
import Vision from "../Components/Vision"
import Values from "../Components/Values"
import Footer from "../Components/footer"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { nav: "" }
  }
  update = x => {
    this.setState({ nav: this.state.nav + 1 })
  }
  render() {
    return (
      <div className="App">
        <Helmet title="Nestted" defer={false} />

        <Navigation key={this.state.nav} updated={this.update} />
        <Main />
        <Features />
        <About />
        <Values />
        <Mission />
        <Vision />
        <Join />
        <Footer />
      </div>
    )
  }
}

export default Home
