import React, { Component } from "react";
import "./App.css";
import Range from "./components/Range";
import Output from "./components/Output";

class App extends Component {
  state = {
    height: 170,
    weight: 65,
    bmi: 22.49,
    bmiClass: "Normal"
  }
  
  heightChange = height => {
    this.setState({ height }, this.setBmi)
  }

  weightChange = weight => {
    this.setState({ weight }, this.setBmi)
  }

  setBmi = () => {
    const { height, weight } = this.state
    const bmi = weight / height / height * 10000
    const bmiClass = this.getBmiClass(bmi)
    this.setState({ bmi, bmiClass })
  }
  
  getBmiClass = bmi => {
    if (bmi < 18.5) return 'Underweight'
    if (bmi >= 18.5 && bmi <= 24.9) return 'Normal'
    if (bmi >= 25 && bmi <= 29.9) return 'Overweight'
    if (bmi >= 30) return 'Obese'
  }

  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <form action="">
          <div>
            <label htmlFor="">Height</label>
            <Range value={ this.state.height } onChange={ this.heightChange } />
          </div>
          <div>
            <label htmlFor="">Weight</label>
            <Range value={ this.state.weight } onChange={ this.weightChange } />
          </div>
        </form>
        <Output data={this.state}/>
      </div>
    );
  }
}

export default App;
