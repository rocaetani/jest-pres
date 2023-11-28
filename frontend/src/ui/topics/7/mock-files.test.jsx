import { render, screen } from "@testing-library/react"
import React from "react"
import MockFiles from "./mock-files"


jest.mock("./functions-file", () => ({
    functionX: (value) => value + 3,
    functionY: (value) => value * 10,
}))

  

describe("Mock Files", () => {

    it("functions mock", async () => {

        render(<MockFiles/>)
        const heading1 = screen.getByRole("heading", { name: "5" })
        expect(heading1).toBeInTheDocument()
        const heading2 = screen.getByRole("heading", { name: "20" })
        expect(heading2).toBeInTheDocument()
    })
})