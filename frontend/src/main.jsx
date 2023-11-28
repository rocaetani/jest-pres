import React from "react"
import ReactDOM from "react-dom"
import ApplicationWrapper from "ui/application-wrapper"

const container = document.getElementById("jest-pres")
if (container) ReactDOM.render(<ApplicationWrapper />, container)
//environments