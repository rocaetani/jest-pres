import { render, screen } from "@testing-library/react"
import React from "react"
import QueryFunctions from "./query-functions"

describe("Query Functions", () => {

    it("getBy", async () => {
        render(<QueryFunctions/>)

        const button = screen.getByRole("button")

        expect(button).toBeInTheDocument()
    })

    it("queryBy", async () => {
        render(<QueryFunctions/>)

        const nullResult = screen.queryByRole("textbox")


        expect(nullResult).not.toBeInTheDocument()
    })

    it("findBy", async () => {
        render(<QueryFunctions/>)

        const heading = screen.getByRole("heading", { name: /somedata/i })
        //const heading = await screen.findByRole("heading", { name: /somedata/i })

        expect(heading).toBeInTheDocument()

    })
})