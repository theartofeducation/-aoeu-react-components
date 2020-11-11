import React from "react"
import { ExternalLink } from "./"

export default {
  title: "Components/External Link",
  component: ExternalLink
}

export const ExampleLink = () => (
  <ExternalLink url="https://theartofeducation.edu">
    The Art of Education University
  </ExternalLink>
)

ExampleLink.storyName = "Default"
