import React, { Component } from "react";
import PropTypes from 'prop-types'

class Range extends Component {
  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired  
  }

  static defaultProps = {
    min: 0,
    max: 245,
    step: 1
  }

  state = {
    value: this.props.value
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
