import { render, screen } from "@testing-library/react"
import React from "react"
import MockComponentFiles from "./mock-component-files"

jest.mock("./other-component", () => {
    return () => (
        <div>
            <button>FakeButton1</button>
            <button>FakeButton2</button>
        </div>
    )
})

describe("Mock Files", () => {

    it("other component", async () => {

        render(<MockComponentFiles/>)
        const fakeButton1 = screen.getByRole("button", { name: "FakeButton1" })
        expect(fakeButton1).toBeInTheDocument()
        const fakeButton2 = screen.getByRole("button", { name: "FakeButton2" })
        expect(fakeButton2).toBeInTheDocument()
    })
})