import React from "react"

const QueryCriterias = () => {
    return (
        <div>
            <button>Press</button>
            <label htmlFor="input">Field</label>
            <input id="input" placeholder="Place"/>
            <div>Some Text</div>
            <input value="Some Input Value"/>
            <img src="https://pt.wikipedia.org/wiki/Ficheiro:React-icon.svg" alt="some-react-image" />
            <div title="the-greatest-title-ever">B</div>
            <div data-testid="some-id-for-test-dont-use">C</div>
        </div>
    )
}

export default QueryCriterias

/*  
Query Criterias
    
ByRole: Finds elements based on thier implicit or explicit ARIA role (Most Usable) 
ByLabelText: Finds form elements based upon the text paired labels contain 
ByPlaceholderText: Finds form elements based upon the their placeholder text 
ByText: Finds elements based upon the text they contain 
ByDisplayValue: Finds elements based upon thir current value 
ByAltText: Find elements based upon their alt attribute 
ByTitle: Find elements based upon their title attribute 
ByTestId: Find elements based upon their data-testid attribute (Avoidable) 

*/