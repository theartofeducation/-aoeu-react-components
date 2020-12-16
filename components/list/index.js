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
  orientation,
  trimmed
}) => {
  const classes = clsx([
    styles.list,
    styles[orientation],
    trimmed && styles.trimmed,
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
   * Optional list orientation (alignment). Valid options are "left", "right" or "centered".
   */
  orientation: PropTypes.oneOf(["left", "right", "centered"]),
  /**
   * When true, the margin is removed from the outside of the first and last items in the list.
   */
  trimmed: PropTypes.bool
}

List.defaultProps = {
  orientation: "left",
  trimmed: true
}

/**
 * Renders a list item <li> element
 */
export const ListItem = ({ children, className }) => (
  <li className={clsx([styles.listItem, className])}>
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
