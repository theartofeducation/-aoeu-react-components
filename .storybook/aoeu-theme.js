import { create } from "@storybook/theming/create";
import AOEULogo from "../packages/logo-svgs/aoeu-logo-vertical.svg"

export const theme = create({
  base: "light",
  brandTitle: "The Art of Education University Web/UI Style Guide",
  brandUrl: "/",
  brandImage: AOEULogo,
  fontBase: "proxima-nova",
  fontCode: "Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace"
})
