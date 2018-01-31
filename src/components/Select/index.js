import React, { Component, Fragment } from "react"
import "./style.css"

import ArrowIcon from "./ArrowIcon"
import DefaultItemComponent from "./DefaultItemComponent"

import DefaultValueComponent from "./DefaultValueComponent"

export default class Select extends Component {
  static defaultProps = {
    valueComponent: DefaultValueComponent,
    iconComponent: ArrowIcon,
    itemComponent: DefaultItemComponent,
    items: [],
    onChange: () => {},
    multiple: false
  }

  state = {
    itemContainerBox: {},
    isOpen: false,
    selected: []
  }

  componentDidMount() {
    window.addEventListener("scroll", this.setItemsContainerBox)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.setItemsContainerBox)
  }

  getItemsContainerBox = () => {
    if (!this.rootElement || !this.itemsContainerElement) {
      return
    }

    const rootElementBoundary = this.rootElement.getBoundingClientRect()
    const itemsContainerElementBoundary = this.itemsContainerElement.getBoundingClientRect()

    const left = rootElementBoundary.left
    const bottom =
      rootElementBoundary.top + this.itemsContainerElement.offsetHeight
    const top =
      bottom > window.innerHeight
        ? rootElementBoundary.top - this.itemsContainerElement.offsetHeight
        : rootElementBoundary.top + rootElementBoundary.height

    return {
      width: `${this.rootElement.offsetWidth}px`,
      left: `${left}px`,
      top: `${top}px`
    }
  }

  setItemsContainerBox = () => {
    const itemContainerBox = this.getItemsContainerBox()

    this.setState({ itemContainerBox })
  }

  openItemsContainer = () => {
    this.setState({ isOpen: true }, this.setItemsContainerBox)
  }

  closeItemsContainer = () => {
    this.setState({ isOpen: false })

    if (this.props.multiple) {
      this.props.onChange(this.state.selected)
    }
  }

  select = item => {
    const hasSelected = this.state.selected.includes(item)

    this.setState(state => ({
      selected: hasSelected
        ? state.selected.filter(i => i !== item)
        : [...state.selected, item]
    }))
  }

  onItemChoose = item => event => {
    if (this.props.multiple) {
      event.preventDefault()
      event.stopPropagation()
      this.select(item)
    } else {
      this.props.onChange(item)
    }
  }

  isActive = item => {
    if (this.props.multiple) {
      return this.state.selected.includes(item)
    }

    return item === this.props.value
  }

  renderItemsContaner = () => {
    const { itemComponent: ItemComponent } = this.props

    return (
      <div
        className="select__items-container-wrapper"
        onClick={this.closeItemsContainer}
      >
        <div
          className="select__items-container"
          ref={itemsContainer => {
            this.itemsContainerElement = itemsContainer
          }}
          style={this.state.itemContainerBox}
        >
          <ul className="select__list">
            {this.props.items.map((item, index) => (
              <li
                key={index}
                className={`select__item${
                  this.isActive(item) ? " active" : ""
                }`}
                onClick={this.onItemChoose(item)}
              >
                <ItemComponent value={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {
      style,
      value,
      valueComponent: ValueComponent,
      iconComponent: IconComponent
    } = this.props
    const { isOpen } = this.state

    return (
      <Fragment>
        <div
          className="select"
          style={style}
          ref={root => {
            this.rootElement = root
          }}
        >
          <div className="select__value" onClick={this.openItemsContainer}>
            <ValueComponent value={value} />
          </div>
          <button className="select__btn" onClick={this.openItemsContainer}>
            <IconComponent />
          </button>
        </div>
        {this.state.isOpen && this.renderItemsContaner()}
      </Fragment>
    )
  }
}
