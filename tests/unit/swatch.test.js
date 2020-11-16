import "@testing-library/jest-dom"

import * as React from "react"
import { render } from "@testing-library/react"
import { ColorSwatch } from "../../components/color-swatch"


describe("ColorSwatch", () => {
  it("renders", () => {
    const { container } = render(<ColorSwatch
      name="AOEU Indigo"
      hexCode="#486CC7"
      colorVariableName="color-aoeu-indigo"
      isDark={ true }></ColorSwatch>)


    expect(container.innerHTML).toBeTruthy()
  })

  it("has color text", () => {
    const { getByText } = render(<ColorSwatch
      name="AOEU Indigo"
      hexCode="#486CC7"
      colorVariableName="color-aoeu-indigo"
      isDark={ true }></ColorSwatch>)

    expect(getByText("AOEU Indigo")).toBeTruthy()
  })


  it("has hex code", () => {
    const { getByText } = render(<ColorSwatch
      name="AOEU Indigo"
      hexCode="#486CC7"
      colorVariableName="color-aoeu-indigo"
      isDark={ true }></ColorSwatch>)

    expect(getByText(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)).toBeTruthy()
  })
})

