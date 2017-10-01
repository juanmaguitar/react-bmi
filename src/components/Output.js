import React, { Component } from "react";

class Output extends Component {
  toFeet = n => {
    const realFeet = n * 0.3937 / 12;
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);
    return `${feet}'${inches}`;
  };

  toLbs = n => {
    const nearExact = n / 0.45359237;
    const lbs = Math.floor(nearExact);
    return lbs;
  };

  render() {
    let { height, weight, bmi, bmiClass } = this.props.data;
    height = this.toFeet(height);
    weight = this.toLbs(weight);
    return (
      <div className="output">
        <h3>{height}</h3>
        <h3>{weight}</h3>
        <h3>{bmi}</h3>
        <h3 className={bmiClass === "Obese" ? "danger" : ""}>
          {bmiClass}
          {bmiClass === "Obese" ? <a href="somewhere">What Can I do?</a> : ""}
        </h3>
      </div>
    );
  }
}

export default Output;
