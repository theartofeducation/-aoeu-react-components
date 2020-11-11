import React from "react"
import PropTypes from "prop-types"
import { List, ListItem } from "../list"
import { ColorSwatch, GradientSwatch } from "../color-swatch"
import styles from "./styles.module.scss"

const ColorPalette = ({ colorCollection }) => (
  <List trimmed={false}>
    {colorCollection.map(color => (
      <ListItem key={`${color.name}-${color.hexCode}`}>
        <ColorSwatch {...color} />
      </ListItem>
    ))}
  </List>
)

ColorPalette.propTypes = {
  colorCollection: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    hexCode: PropTypes.string.isRequired,
    colorVariableName: PropTypes.string.isRequired,
    isDark: PropTypes.bool.isRequired
  }))
}

const BrandPalette = ({
  colorCollection,
  gradientStartHexCode,
  gradientEndHexCode
}) => (
  <div className={styles.brandPalette}>
    <ColorPalette colorCollection={colorCollection} />
    <GradientSwatch
      startHexCode={gradientStartHexCode}
      endHexCode={gradientEndHexCode} />
  </div>
)

BrandPalette.propTypes = {
  colorCollection: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    hexCode: PropTypes.string.isRequired,
    colorVariableName: PropTypes.string.isRequired,
    isDark: PropTypes.bool.isRequired
  })),
  gradientStartHexCode: PropTypes.string,
  gradientEndHexCode: PropTypes.string
}

const aoeuBrandColorPalette = [
  {
    name: "AOEU Blue",
    hexCode: "#00AFD7",
    colorVariableName: "color-aoeu-blue",
    isDark: true
  },
  {
    name: "AOEU Dark Gray",
    hexCode: "#545555",
    colorVariableName: "color-aoeu-dark-gray",
    isDark: true
  },
  {
    name: "AOEU Rio Grande",
    hexCode: "#C4D600",
    colorVariableName: "color-aoeu-rio-grande",
    isDark: false
  },
  {
    name: "AOEU Apple Green",
    hexCode: "#84BD00",
    colorVariableName: "color-aoeu-apple-green",
    isDark: true
  },
  {
    name: "AOEU Observatory",
    hexCode: "#00966C",
    colorVariableName: "color-aoeu-observatory",
    isDark: true
  },
  {
    name: "AOEU Tiffany Blue",
    hexCode: "#00B2A9",
    colorVariableName: "color-aoeu-tiffany-blue",
    isDark: true
  },
  {
    name: "AOEU Allports",
    hexCode: "#0076A8",
    colorVariableName: "color-aoeu-allports",
    isDark: true
  },
  {
    name: "AOEU Indigo",
    hexCode: "#486CC7",
    colorVariableName: "color-aoeu-indigo",
    isDark: true
  },
  {
    name: "AOEU Toolbox",
    hexCode: "#7474C1",
    colorVariableName: "color-aoeu-toolbox",
    isDark: true
  },
  {
    name: "AOEU Purple Mountain's Majesty",
    hexCode: "#A57FB2",
    colorVariableName: "color-aoeu-purple-mountains-majesty",
    isDark: true
  },
  {
    name: "AOEU Free Speech Magenta",
    hexCode: "#E45DBF",
    colorVariableName: "color-aoeu-free-speech-magenta",
    isDark: true
  },
  {
    name: "AOEU Vivid Cerise",
    hexCode: "#DF1995",
    colorVariableName: "color-aoeu-vivid-cerise",
    isDark: true
  },
  {
    name: "AOEU Shiraz",
    hexCode: "#BA0C2F",
    colorVariableName: "color-aoeu-shiraz",
    isDark: true
  },
  {
    name: "AOEU Flamingo",
    hexCode: "#E5554F",
    colorVariableName: "color-aoeu-flamingo",
    isDark: true
  },
  {
    name: "AOEU Mango Tango",
    hexCode: "#EA7600",
    colorVariableName: "color-aoeu-mango-tango",
    isDark: true
  },
  {
    name: "AOEU Sunglow",
    hexCode: "#FFC845",
    colorVariableName: "color-aoeu-sunglow",
    isDark: false
  },
  {
    name: "AOEU Oracle",
    hexCode: "#395056",
    colorVariableName: "color-aoeu-oracle",
    isDark: true
  },
  {
    name: "AOEU Athens Gray",
    hexCode: "#EBF0F3",
    colorVariableName: "color-aoeu-athens-gray",
    isDark: false
  }
]

export const AoeuBrandColorPalette = () => (
  <ColorPalette colorCollection={aoeuBrandColorPalette} />
)

const mastersProductColorPalette = {
  colorCollection: [
    {
      name: "AOEU Masters Primary",
      hexCode: "#00AFD7",
      colorVariableName: "color-masters-primary",
      isDark: true
    },
    {
      name: "AOEU Masters Secondary",
      hexCode: "#0076A8",
      colorVariableName: "color-masters-secondary",
      isDark: true
    },
    {
      name: "AOEU Masters Tertiary",
      hexCode: "#CFCFCF",
      colorVariableName: "color-masters-tertiary",
      isDark: false
    }
  ],
  gradientStartHexCode: "#00AFD7",
  gradientEndHexCode: "#0076A8"
}

export const MastersProductColorPalette = () => (
  <BrandPalette {...mastersProductColorPalette} />
)

const coursesProductColorPalette = {
  colorCollection: [
    {
      name: "AOEU Courses Primary",
      hexCode: "#485CC7",
      colorVariableName: "color-courses-primary",
      isDark: true
    },
    {
      name: "AOEU Courses Secondary",
      hexCode: "#7474C1",
      colorVariableName: "color-courses-secondary",
      isDark: true
    },
    {
      name: "AOEU Courses Tertiary",
      hexCode: "#00AFD7",
      colorVariableName: "color-courses-tertiary",
      isDark: true
    }
  ],
  gradientStartHexCode: "#7474C1",
  gradientEndHexCode: "#485CC7"
}

export const CoursesProductColorPalette = () => (
  <BrandPalette {...coursesProductColorPalette} />
)

const proProductColorPalette = {
  colorCollection: [
    {
      name: "AOEU PRO Primary",
      hexCode: "#E5554F",
      colorVariableName: "color-pro-primary",
      isDark: true
    },
    {
      name: "AOEU PRO Secondary",
      hexCode: "#FFC845",
      colorVariableName: "color-pro-secondary",
      isDark: false
    },
    {
      name: "AOEU PRO Tertiary",
      hexCode: "#F7BD98",
      colorVariableName: "color-pro-tertiary",
      isDark: false
    }
  ],
  gradientStartHexCode: "#f58021",
  gradientEndHexCode: "#ed1d25"
}

export const PROProductColorPalette = () => (
  <BrandPalette {...proProductColorPalette} />
)

const flexProductColorPalette = {
  colorCollection: [
    {
      name: "AOEU FLEX Primary",
      hexCode: "#00B2A9",
      colorVariableName: "color-flex-primary",
      isDark: true
    },
    {
      name: "AOEU FLEX Secondary",
      hexCode: "#4CC7E3",
      colorVariableName: "color-flex-secondary",
      isDark: true
    },
    {
      name: "AOEU FLEX Tertiary",
      hexCode: "#0076A8",
      colorVariableName: "color-flex-tertiary",
      isDark: true
    }
  ],
  gradientStartHexCode: "#4CC7E3",
  gradientEndHexCode: "#05a651"
}

export const FLEXProductColorPalette = () => (
  <BrandPalette {...flexProductColorPalette} />
)

const magazineProductColorPalette = {
  colorCollection: [
    {
      name: "AOEU Magazine Primary",
      hexCode: "#84BD00",
      colorVariableName: "color-magazine-primary",
      isDark: true
    },
    {
      name: "AOEU Magazine Secondary",
      hexCode: "#C4D600",
      colorVariableName: "color-magazine-secondary",
      isDark: false
    },
    {
      name: "AOEU Magazine Tertiary",
      hexCode: "#00966C",
      colorVariableName: "color-magazine-tertiary",
      isDark: true
    }
  ],
  gradientStartHexCode: "#00966C",
  gradientEndHexCode: "#C4D600"
}

export const MagazineProductColorPalette = () => (
  <BrandPalette {...magazineProductColorPalette} />
)

const conferenceProductColorPalette = {
  colorCollection: [
    {
      name: "AOEU Conference Primary",
      hexCode: "#E45DBF",
      colorVariableName: "color-conference-primary",
      isDark: true
    },
    {
      name: "AOEU Conference Secondary",
      hexCode: "#C4D600",
      colorVariableName: "color-conference-secondary",
      isDark: false
    },
    {
      name: "AOEU Conference Tertiary",
      hexCode: "#EA7600",
      colorVariableName: "color-conference-tertiary",
      isDark: true
    }
  ],
  gradientStartHexCode: "#E45DBF",
  gradientEndHexCode: "#FFC845"
}

export const ConferenceProductColorPalette = () => (
  <BrandPalette {...conferenceProductColorPalette} />
)
