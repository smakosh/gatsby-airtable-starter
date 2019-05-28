import React from "react"
import { Router } from "@reach/router"
import Scenes from "containers/Scenes"
import NotFound from "components/common/NotFound"

export default () => (
  <Router>
    <Scenes path="/app/" component={Scenes} />
    <NotFound default component={NotFound} />
  </Router>
)
