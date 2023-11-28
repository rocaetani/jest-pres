import { render, screen, within } from "@testing-library/react"
import React from "react"
import CustomMatcher from "./custom-matcher"

//expect(container).toContainRole(role, qauntity)
const toContainRole = (container, role, quantity = 1) => {
    const elements = within(container).queryAllByRole(role)
    if(elements.length === quantity){
        return{
            pass: true
        }
    }

    return {
        pass: false,
        message: () => `Expected to find ${quantity} ${role} elements. Found ${elements.length} instead.`
    }
    
}
expect.extend({ toContainRole })

describe("Custom Matcher", () => {

    it("custom", async () => {
        render(<CustomMatcher/>)

        const form = screen.getByRole("form")

        expect(form).toContainRole("button", 3)
    })
})