import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import SmurfForm from "./SmurfForm"

test("render form without errors", () => {
  render(<SmurfForm />)
})
