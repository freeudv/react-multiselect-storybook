import React, { Component } from "react"
import Select from "../components/Select"

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh"
}

export default class MultipleDemo extends Component {
  state = {
    value: null
  }

  onChooseItem = items => {
    const value = items.join(", ")
    this.setState({
      value: value.length < 20 ? value : `${value.slice(0, 20)}...`
    })
  }

  render() {
    const { value } = this.state
    const { items } = this.props

    return (
      <div style={style}>
        <Select
          value={value}
          items={items}
          multiple={true}
          onChange={this.onChooseItem}
        />
      </div>
    )
  }
}
