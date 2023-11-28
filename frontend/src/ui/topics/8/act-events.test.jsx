import { render, screen, waitFor } from "@testing-library/react"
import user from "@testing-library/user-event"
import React from "react"
import ActEvents from "./act-events"

describe("Act Events", () => {

    it("click and fetch", async () => {
        render(<ActEvents/>)
        const button = screen.getByRole("button", { name: /press/i })
        user.click(button) // have act
        waitFor(() => { // have act
            const heading = screen.getByText("SomeData")
            expect(heading).toBeInTheDocument()
        })
    })

    it("click and fetch with find", async () => {
        render(<ActEvents/>)
        const button = screen.getByRole("button", { name: /press/i })
        user.click(button) // have act
        const heading = await screen.findByText("SomeData")
        expect(heading).toBeInTheDocument()
    })

    it("input", async () => {

        render(<ActEvents/>)
        const input = screen.getByRole("textbox")
        user.type(input, "SomeValueInput")
        expect(input).toHaveValue("SomeValueInput")
        user.keyboard("{Enter}")
        waitFor(() => {
            expect(input).toHaveValue("ValueAfterEnter")
        })
    })
})