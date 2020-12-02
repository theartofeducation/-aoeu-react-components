import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import {
  ReactComponent as AOEULogoHorizontal
} from "../../packages/logo-svgs/aoeu-logo-horizontal.svg"
import {
  ReactComponent as AOEULogoVertical
} from "../../packages/logo-svgs/aoeu-logo-vertical.svg"
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
  variant: PropTypes.oneOf(["horizontal", "vertical"]),
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
