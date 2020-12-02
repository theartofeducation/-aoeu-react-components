import { create } from "@storybook/theming/create";
import AOEULogo from "../packages/logo-svgs/aoeu-logo-vertical.svg"

export const theme = create({
  base: "light",
  brandTitle: "AOEU",
  brandUrl: "https://theartofeducation.github.io",
  brandImage: AOEULogo,
  fontBase: "proxima-nova",
  fontCode: "Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace"
})
