import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const getStyledList = ({ orientation, trimmed }) => {
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
      > li {
        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    `
  }

  return StyledList
}

/**
 * Renders an unstyled unordered list &lt;ul&gt; element (no list style)
 */
export const List = ({
  children,
  orientation,
  trimmed
}) => {
  const StyledList = getStyledList({ orientation, trimmed })

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
 * Renders a list item &lt;li&gt; element
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
