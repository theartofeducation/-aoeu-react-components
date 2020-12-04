import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

/**
 * Creates an anchor tag <a> that opens the given URL in a new window/tab
 */
export const ExternalLink = ({ url, className, children }) => (
  <a
    href={url}
    className={clsx([className])}
    target="_blank"
    rel="noreferrer">
    {children}
  </a>
)

ExternalLink.propTypes = {
  /**
  The URL the link to navigate the user to
  */
  url: PropTypes.string.isRequired,
  /**
  Optional CSS class to apply to the link
  */
  className: PropTypes.string,
  /**
  Link content
  */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object
  ]).isRequired
}
