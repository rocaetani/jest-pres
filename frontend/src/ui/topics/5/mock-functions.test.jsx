import { render } from "@testing-library/react"
import React from "react"
import MockFunctions from "./mock-functions"


describe("Mock Functions", () => {

    it("custom", async () => {
        const mockFn = jest.fn()

        render(<MockFunctions someFunc={mockFn}/>)


        expect(mockFn).toHaveBeenCalled()
        expect(mockFn).toHaveBeenCalledTimes(3)
        expect(mockFn).toHaveBeenCalledWith("ABC")
        //expect(mockFn).toHaveBeenNthCalledWith(3,"ABC")
        //expect(mockFn).toHaveBeenCalledWith("DEF")

    })
})