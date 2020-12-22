import React from "react"
import { List, ListItem } from "./"

export default {
  title: "Components/List",
  component: List
}

const Template = args => (
  <List {...args.listProps} style={{ border: "1px dashed #eee" }}>
    <ListItem>{args.items[0]}</ListItem>
    <ListItem>{args.items[1]}</ListItem>
    <ListItem>{args.items[2]}</ListItem>
    <ListItem>{args.items[3]}</ListItem>
  </List>
)

export const DefaultUsage = Template.bind({})
DefaultUsage.args = {
  listProps: {},
  items: ["Item One", "Item Two", "Item Three", "Item Four"]
}
DefaultUsage.storyName = "Default Usage"

export const NoTrim = Template.bind({})
NoTrim.args = {
  ...DefaultUsage.args,
  listProps: { trimmed: false }
}
NoTrim.storyName = "No Trim"

export const RightAligned = Template.bind({})
RightAligned.args = {
  ...DefaultUsage.args,
  listProps: { orientation: "right" }
}
RightAligned.storyName = "Right Aligned"

export const RightAlignedNoTrim = Template.bind({})
RightAlignedNoTrim.args = {
  ...DefaultUsage.args,
  listProps: { orientation: "right", trimmed: false }
}
RightAlignedNoTrim.storyName = "Right Aligned (no trim)"

export const Centered = Template.bind({})
Centered.args = {
  ...DefaultUsage.args,
  listProps: { orientation: "centered" }
}
Centered.storyName = "Centered"

export const CenteredNoTrim = Template.bind({})
CenteredNoTrim.args = {
  ...DefaultUsage.args,
  listProps: { orientation: "centered", trimmed: false }
}
CenteredNoTrim.storyName = "Centered (no trim)"
