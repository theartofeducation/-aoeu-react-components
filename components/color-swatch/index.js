import React, { useState } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { Icon } from "../icons"
import { notify } from "../notification"
import { writeToClipboard } from "@aoeu/util"
import styles from "./styles.module.scss"

const copyToClipboard = async content => {
  await writeToClipboard(content)

  notify({
    type: "success",
    message: `💥 "${content}" has been copied to the clipboard for you`
  })
}

export const ColorSwatch = ({
  name,
  hexCode,
  colorVariableName,
  isDark
}) => (
  <div className={styles.colorSwatch}>
    <div
      className={clsx([styles.swatch, isDark && styles.darkColor])}
      style={{ backgroundColor: hexCode }}>
      <span
        className={styles.hexCode}
        title={`Click to copy "${hexCode}" to the clipboard`}
        onClick={() => copyToClipboard(hexCode)}>
        {hexCode}
      </span>
    </div>
    <div
      className={styles.colorVariableName}
      title={`Click to copy "var(--${colorVariableName})" to the clipboard`}
      onClick={() => copyToClipboard(`var(--${colorVariableName})`)}>
      {`var(--${colorVariableName})`}
    </div>
    <div className={styles.colorName}>{name}</div>
  </div>
)

ColorSwatch.propTypes = {
  /**
   * Display name for the color
   */
  name: PropTypes.string.isRequired,
  /**
   * The HEX color code for the color
   */
  hexCode: PropTypes.string.isRequired,
  /**
   * The CSS variable name for referencing this color
   */
  colorVariableName: PropTypes.string.isRequired,
  /**
   * Indicates whether or not the color is a dark color, which will result
   * in rendering the text in a light, contrasting color
   */
  isDark: PropTypes.bool
}

ColorSwatch.defaultProps = {
  isDark: true
}

export const GradientSwatch = ({
  direction,
  startHexCode,
  endHexCode
}) => {
  const [gradientDirection, setGradientDirection] = useState(direction)

  const gradientDirectionStyleMap = {
    topToBottom: `linear-gradient(${startHexCode}, ${endHexCode})`,
    topRightToBottomLeft: `linear-gradient(-135deg, ${startHexCode}, ${endHexCode})`,
    rightToLeft: `linear-gradient(-90deg, ${startHexCode}, ${endHexCode})`,
    bottomRightToTopLeft: `linear-gradient(-45deg, ${startHexCode}, ${endHexCode})`,
    bottomToTop: `linear-gradient(0deg, ${startHexCode}, ${endHexCode})`,
    bottomLeftToTopRight: `linear-gradient(45deg, ${startHexCode}, ${endHexCode})`,
    leftToRight: `linear-gradient(90deg, ${startHexCode}, ${endHexCode})`,
    topLeftToBottomRight: `linear-gradient(135deg, ${startHexCode}, ${endHexCode})`
  }

  const gradientStyle = gradientDirectionStyleMap[gradientDirection]
  const backgroundStyleText = `background: ${gradientStyle}`

  return (
    <div className={clsx([styles.colorSwatch, styles.gradientSwatch])}>
      <div className={styles.gradientSwatchContainer}>
        <div
          className={styles.swatch}
          style={{ background: gradientStyle }}>
        </div>
        <div className={styles.gradientSwatchDirectionToggles}>
          <button
            className={styles.gradientSwatchDirectionToggleButton}
            onClick={() => setGradientDirection("bottomRightToTopLeft")}>
            <Icon
              symbolId="arrow-down"
              className={clsx([styles.arrowIcon, styles.arrowTopLeft])} />
          </button>
          <button
            className={styles.gradientSwatchDirectionToggleButton}
            onClick={() => setGradientDirection("bottomToTop")}>
            <Icon
              symbolId="arrow-down"
              className={clsx([styles.arrowIcon, styles.arrowTopMiddle])} />
          </button>
          <button
            className={styles.gradientSwatchDirectionToggleButton}
            onClick={() => setGradientDirection("bottomLeftToTopRight")}>
            <Icon
              symbolId="arrow-down"
              className={clsx([styles.arrowIcon, styles.arrowTopRight])} />
          </button>
          <button
            className={styles.gradientSwatchDirectionToggleButton}
            onClick={() => setGradientDirection("rightToLeft")}>
            <Icon
              symbolId="arrow-down"
              className={clsx([styles.arrowIcon, styles.arrowLeftMiddle])} />
          </button>
          <div className={styles.gradientSwatchDirectionTogglesCenter}></div>
          <button
            className={styles.gradientSwatchDirectionToggleButton}
            onClick={() => setGradientDirection("leftToRight")}>
            <Icon
              symbolId="arrow-down"
              className={clsx([styles.arrowIcon, styles.arrowRightMiddle])} />
          </button>
          <button
            className={styles.gradientSwatchDirectionToggleButton}
            onClick={() => setGradientDirection("topRightToBottomLeft")}>
            <Icon
              symbolId="arrow-down"
              className={clsx([styles.arrowIcon, styles.arrowBottomLeft])} />
          </button>
          <button
            className={styles.gradientSwatchDirectionToggleButton}
            onClick={() => setGradientDirection("topToBottom")}>
            <Icon
              symbolId="arrow-down"
              className={clsx([styles.arrowIcon, styles.arrowBottomMiddle])} />
          </button>
          <button
            className={styles.gradientSwatchDirectionToggleButton}
            onClick={() => setGradientDirection("topLeftToBottomRight")}>
            <Icon
              symbolId="arrow-down"
              className={clsx([styles.arrowIcon, styles.arrowBottomRight])} />
          </button>
        </div>
      </div>
      <div
        className={styles.gradientStyleContent}
        title={`Click to copy "${backgroundStyleText}" to the clipboard`}
        onClick={() => copyToClipboard(backgroundStyleText)}>
        {backgroundStyleText}
      </div>
    </div>
  )
}

GradientSwatch.propTypes = {
  direction: PropTypes.string,
  startHexCode: PropTypes.string.isRequired,
  endHexCode: PropTypes.string.isRequired
}

GradientSwatch.defaultProps = {
  direction: "topToBottom"
}
