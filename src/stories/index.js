import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

//import { Button, Welcome } from "@storybook/react/demo"

import DefaultDemo from "./DefaultDemo"
import MultipleDemo from "./MultipleDemo"
import CssCustomDemo from "./CssCustomDemo"
import ValueCustom from "./ValueCustom"

const items = ["Item1", "Item2", "Item3", "Item4"]

const Presentation = () => <DefaultDemo items={items} />

storiesOf("Multiselect Example", module)
  .add("DefaultDemo", () => <Presentation />)
  .add("MultipleDemo", () => <MultipleDemo items={items} />)
  .add("CssCustomDemo", () => <CssCustomDemo items={items} />)
  .add("ValueCustom", () => <ValueCustom items={items} />)

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
