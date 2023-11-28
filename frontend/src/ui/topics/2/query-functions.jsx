import React, { useEffect, useState } from "react"

const fetchDataWithDelay = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))

    return("")
}

const QueryFunctions = () => {
    const [value, setValue] = useState("")

    useEffect(() => {
        fetchDataWithDelay().then((result) => {setValue(result)})
    }, [])

    return (
        <div>
            <button>Press</button>
            <h1>{value}</h1>
        </div>
    )
}

export default QueryFunctions