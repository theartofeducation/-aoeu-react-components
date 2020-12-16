import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

/**
 * Renders an unstyled unordered list <ul> element (no list style)
 */
export const List = ({
  children,
  orientation,
  trimmed
}) => {
  // const classes = clsx([
  //   styles.list,
  //   styles[orientation],
  //   trimmed && styles.trimmed,
  //   className
  // ])
  const alignment = {
    left: "start",
    right: "flex-end",
    centered: "center"
  }

  let StyledList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: ${alignment[orientation]};
    list-style-type: none;
    margin: 0;
    padding: 0;
  `

  if (trimmed) {
    StyledList = styled(StyledList)`
      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    `
  }

  return (
    <StyledList>
      {children}
    </StyledList>
  )
}

List.propTypes = {
  /**
   * List content
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object
  ]),
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

const StyledListItem = styled.li`
  margin: 0.75rem;
`

/**
 * Renders a list item <li> element
 */
export const ListItem = ({ children }) => (
  <StyledListItem>
    {children}
  </StyledListItem>
)

ListItem.propTypes = {
  /**
   * List item content
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object
  ])
}
