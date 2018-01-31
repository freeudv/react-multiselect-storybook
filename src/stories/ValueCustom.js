import React, { Component } from "react"
import Select from "../components/Select"

import euroIcon from "../img/euro_symbol_24px.svg"

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh"
}

const valueStyles = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  fontSize: "24px"
}

const imgStyles = {
  marginRight: "5px"
}

const ValueComponent = ({ value }) => (
  <div style={valueStyles}>
    <img style={imgStyles} src={euroIcon} alt="Euro Icon" />
    <span>{value}</span>
  </div>
)

export default class ValueCustom extends Component {
  state = {
    value: null
  }

  onChooseItem = item => {
    this.setState({ value: item })
  }

  render() {
    const { value } = this.state
    const { items } = this.props

    return (
      <div style={style}>
        <Select
          value={value}
          items={items}
          valueComponent={ValueComponent}
          onChange={this.onChooseItem}
        />
      </div>
    )
  }
}
