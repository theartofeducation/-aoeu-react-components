import React from "react"
import { AOEULogo } from "./"
import styles from "./styles.module.scss"

export default {
  title: "Components/Brand and Product Logos",
  component: AOEULogo
}

const Template = args => <AOEULogo {...args} />

export const BrandLogo = Template.bind({})
BrandLogo.storyName = "Brand Logo"
BrandLogo.decorators = [Story => <div className={styles.storyContainer}><Story /></div>]
