import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./styles.module.scss"

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
  className: PropTypes.string,
  orientation: PropTypes.string,
  trimmed: PropTypes.bool
}

List.defaultProps = {
  orientation: "left",
  trimmed: true
}

export const ListItem = ({ children, className }) => (
  <li className={clsx([styles.listItem, className])}>
    {children}
  </li>
)

ListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object
  ]),
  className: PropTypes.string
}
