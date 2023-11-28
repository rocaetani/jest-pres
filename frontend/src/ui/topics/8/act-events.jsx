import React, { useState } from "react"

const fetchDataWithDelay = async () => {
    await new Promise(resolve => setTimeout(resolve, 100))

    return("SomeData")
}

const ActEvents = () => {
    const [value, setValue] = useState("")

    const fetchData = () => { 
        fetchDataWithDelay().then(
            (result) => setValue(result)
        )
    }

    const onEnterPress = (event) => {
        const pressedKey = event.key

        if (pressedKey === "Enter") {
            setValue("ValueAfterEnter")
        } 
    }

    return (
        <div>
            <button onClick={fetchData}>Press</button>
            <h1>{value}</h1>
            <input onKeyDown={onEnterPress}/>
        </div>
    )
}

export default ActEvents