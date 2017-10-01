import React, { Component } from "react";

class Range extends Component {
  state = {
    value: this.props.value
  }

  static defaultProps = {
    min: 0,
    max: 245,
    step: 1
  }

  handleChange = ({ target }) => {
    const {value} = target
    this.props.onChange(value)
    this.setState({ value })
  }

  render() {
    return (
      <div className="range">
        <input
          type="range"
          value={this.state.value}
          min={this.state.min}
          max={this.state.max}
          step={this.state.step}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Range;
