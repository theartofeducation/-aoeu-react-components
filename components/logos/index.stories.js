import React from "react"
import { AOEULogo } from "./"

export default {
  title: "Components/Brand and Product Logos",
  component: AOEULogo
}

const Template = args => <AOEULogo {...args} />

export const BrandLogo = () => (
  <AOEULogo />
)
BrandLogo.storyName = "Brand Logo"

export const HorizontalExtraSmall = Template.bind({})
HorizontalExtraSmall.args = { variant: "horizontal", size: "xs" }
HorizontalExtraSmall.storyName = "Horizontal Extra Small"

export const HorizontalSmall = () => (
  <AOEULogo variant="horizontal" size="s" />
)
HorizontalSmall.storyName = "Horizontal Small"

export const HorizontalMedium = () => (
  <AOEULogo variant="horizontal" size="m" />
)
HorizontalMedium.storyName = "Horizontal Medium"

export const HorizontalLarge = () => (
  <AOEULogo variant="horizontal" size="l" />
)
HorizontalLarge.storyName = "Horizontal Large"

export const HorizontalExtraLarge = () => (
  <AOEULogo variant="horizontal" size="xl" />
)
HorizontalExtraLarge.storyName = "Horizontal Extra large"

export const HorizontalFill = () => (
  <AOEULogo variant="horizontal" size="fill" />
)
HorizontalFill.storyName = "Horizontal Fill"

export const VerticalExtraSmall = () => (
  <AOEULogo variant="vertical" size="xs" />
)
VerticalExtraSmall.storyName = "Vertical Extra Small"

export const VerticalSmall = () => (
  <AOEULogo variant="vertical" size="s" />
)
VerticalSmall.storyName = "Vertical Small"

export const VerticalMedium = () => (
  <AOEULogo variant="vertical" size="m" />
)
VerticalMedium.storyName = "Vertical Medium"

export const VerticalLarge = () => (
  <AOEULogo variant="vertical" size="l" />
)
VerticalLarge.storyName = "Vertical Large"

export const VerticalExtraLarge = () => (
  <AOEULogo variant="vertical" size="xl" />
)
VerticalExtraLarge.storyName = "Vertical Extra large"

export const VerticalFill = () => (
  <AOEULogo variant="vertical" size="fill" />
)
VerticalFill.storyName = "Vertical Fill"
