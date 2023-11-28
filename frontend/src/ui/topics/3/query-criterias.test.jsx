import { render, screen } from "@testing-library/react"
import React from "react"
import QueryCriterias from "./query-criterias"

describe("Query Criterias", () => {
    it("ByRole", async () => {
        render(<QueryCriterias/>)

        const button = screen.getByRole("button")

        expect(button).toBeInTheDocument()
    })

    it("ByLabelText", async () => {
        render(<QueryCriterias/>)

        const input = screen.getByLabelText("Field")

        expect(input).toBeInTheDocument()
    })

    it("ByPlaceholderText", async () => {
        render(<QueryCriterias/>)

        const placeholderText = screen.getByPlaceholderText("Place")

        expect(placeholderText).toBeInTheDocument()
    })

    it("ByText", async () => {
        render(<QueryCriterias/>)

        const text = screen.getByText("Some Text")

        expect(text).toBeInTheDocument()
    })

    it("ByDisplayValue", async () => {
        render(<QueryCriterias/>)

        const displayValue = screen.getByDisplayValue("Some Input Value")

        expect(displayValue).toBeInTheDocument()
    })

    it("ByAltText", async () => {
        render(<QueryCriterias/>)

        const altText = screen.getByAltText("some-react-image")

        expect(altText).toBeInTheDocument()
    })

    it("ByTitle", async () => {
        render(<QueryCriterias/>)

        const title = screen.getByTitle("the-greatest-title-ever")

        expect(title).toBeInTheDocument()
    })

    it("ByTestId", async () => {
        render(<QueryCriterias/>)

        const testId = screen.getByTestId("some-id-for-test-dont-use")

        expect(testId).toBeInTheDocument()
    })

})