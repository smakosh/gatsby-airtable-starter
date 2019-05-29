import React from "react"
import { Router } from "@reach/router"
import Scenes from "containers/Scenes"
import AddScene from "containers/AddScene"
import NotFound from "components/common/NotFound"
import Scene from "containers/Scene"

export default () => (
  <Router>
    <Scenes path="/app/" component={Scenes} />
    <AddScene path="/app/add" component={AddScene} />
    <Scene path="/app/scene/:id" component={Scene} />
    <NotFound default component={NotFound} />
  </Router>
)
