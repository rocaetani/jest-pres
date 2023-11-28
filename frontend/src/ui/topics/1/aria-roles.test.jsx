import { render, screen } from "@testing-library/react"

import React from "react"
import AriaRoles from "./aria-roles"

describe("ARIA Roles", () => {

    it("render all roles ", async () => {

        //Render the component
        render(<AriaRoles/>)

        //Manipulate the component or find an element in it
        const heading = screen.getByRole("heading")
        const list = screen.getByRole("list")
        const button = screen.getByRole("button")
        const link = screen.getByRole("link")
        const textbox = screen.getByRole("textbox")

        //screen.debug()

        //screen.logTestingPlaygroundURL()

        //Assertion
        expect(heading).toBeInTheDocument()
        expect(list).toBeInTheDocument()
        expect(button).toBeInTheDocument()
        expect(link).toBeInTheDocument()
        expect(textbox).toBeInTheDocument()
    })
})