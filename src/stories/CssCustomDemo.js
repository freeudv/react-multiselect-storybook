import React, { Component } from "react"
import Select from "../components/Select"

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh"
}

const selectStyle = {
  width: "400px",
  height: "60px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow:
    "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)"
}

const imageStyle = {
  width: "30px",
  height: "30px"
}

const Image = () => (
  <img
    src="http://www.clipartbest.com/cliparts/acq/6qr/acq6qrdMi.jpg"
    style={imageStyle}
    alt="imperial icon"
  />
)

export default class CssCustomDemo extends Component {
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
          style={selectStyle}
          value={value}
          items={items}
          iconComponent={Image}
          onChange={this.onChooseItem}
        />
      </div>
    )
  }
}
