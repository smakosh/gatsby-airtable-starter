import React from "react"
import "./layout.css"
import Theme from "./global-style"

export default ({ children }) => (
  <>
    <Theme />
    {children}
  </>
)
