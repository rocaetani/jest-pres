import React from "react"
import { functionX, functionY } from "./functions-file"

const MockFiles = () => {
    const value1 = functionX(2)
    const value3 = functionY(2)
    
    return (
        <div>
            <h1>{value1}</h1>
            <h1>{value3}</h1>
        </div>
    )
}

export default MockFiles