import React, { Component } from "react"
import Select from "../components/Select"

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh"
}

export default class DefaultDemo extends Component {
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
        <Select value={value} items={items} onChange={this.onChooseItem} />
      </div>
    )
  }
}
