import PropTypes from "prop-types"
import React from "react"

const MockFunctions = ({ someFunc }) => {
    someFunc()
    someFunc()
    someFunc("ABC")
    return (
        <div>
            <button>Press</button>
        </div>
    )
}

MockFunctions.propTypes = {
    someFunc: PropTypes.func
}

export default MockFunctions