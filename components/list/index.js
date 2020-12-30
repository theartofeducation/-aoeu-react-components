import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./styles.module.scss"

/**
 * Renders an unstyled unordered list <ul> element (no list style)
 */
export const List = ({
  children,
  className,
  layout,
  orientation
}) => {
  const classes = clsx([
    styles.list,
    styles[layout],
    styles[orientation],
    className
  ])

  return (
    <ul className={classes}>
      {children}
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object
  ]),
  /**
   * Optional style class
   */
  className: PropTypes.string,
  /**
   * List layout, either "grid" or "flex"
   */
  layout: PropTypes.oneOf(["grid", "flex"]),
  /**
   * Optional list orientation (alignment). Valid options are "left", "right" or "centered".
   */
  orientation: PropTypes.string
}

List.defaultProps = {
  orientation: "left",
  layout: "grid"
}

/**
 * Renders a list item <li> element
 */
export const ListItem = ({ children, className }) => (
  <li className={className}>
    {children}
  </li>
)

ListItem.propTypes = {
  /**
   * List item content
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object
  ]),
  /**
   * Optional style class
   */
  className: PropTypes.string
}
