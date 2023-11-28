import { render, screen } from "@testing-library/react"
import React from "react"
import AcessibleNames from "./acessible-names"

describe("Acessible Names", () => {

    it("buttons ", async () => {

        render(<AcessibleNames/>)

        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()

        /*
        const buttonPress = screen.getByRole("button", { name: "Press" })
        const buttonCancel = screen.getByRole("button", { name: /cancel/i })


        expect(buttonPress).toBeInTheDocument()
        expect(buttonCancel).toBeInTheDocument()
        */

    })

    it("inputs ", async () => {

        render(<AcessibleNames/>)

        const field1 = screen.getByRole("textbox", { name: /field1/i })
        const field2 = screen.getByRole("textbox", { name: /field2/i })


        expect(field1).toBeInTheDocument()
        expect(field2).toBeInTheDocument()


    })
})