import React from "react"
import { Router } from "@reach/router"
import Login from "containers/Login"
import NotFound from "components/common/NotFound"

export default () => (
  <Router>
    <Login path="/app/" component={Login} />
    <NotFound default component={NotFound} />
  </Router>
)
