import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import {
  ReactComponent as AOEULogoHorizontal
} from "@aoeu/logo-svgs/aoeu-logo-horizontal.svg"
import {
  ReactComponent as AOEULogoVertical
} from "@aoeu/logo-svgs/aoeu-logo-vertical.svg"
import styles from "./styles.module.scss"

/**
 * AOEU Brand Logo
 */
export const AOEULogo = ({
  variant,
  size,
  className
}) => {
  const LogoComponent = (variant === "horizontal") ? AOEULogoHorizontal : AOEULogoVertical

  return (
    <LogoComponent
      className={clsx([
        styles.logo,
        styles[`${variant}-${size}`],
        className
      ])} />
  )
}

AOEULogo.propTypes = {
  /**
   * Specifies which AOEU logo to use: horizontal or vertical
   */
  variant: PropTypes.oneOf(["horizontal", "vertical"]),
  /**
   * Size of the logo to render. The "fill" option will render the logo to
   * fill the available vertical and horizontal space of the container it's in.
   */
  size: PropTypes.oneOf(["xs", "s", "m", "l", "xl", "fill"]),
  /**
   * optional styling class
   */
  className: PropTypes.string
}

AOEULogo.defaultProps = {
  variant: "horizontal",
  size: "m"
}
