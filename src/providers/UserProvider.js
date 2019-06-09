import React, { useReducer } from "react"
import { navigate } from "gatsby"
import Context from "components/common/Context"
import UserReducer from "reducers/UserReducer"
import setAuthToken from "helpers/setAuthToken"

export default ({ children }) => {
  const [user, dispatch] = useReducer(UserReducer, [])

  const logout = async () => {
    try {
      // TODO: Send a request to logout the current user
      // await axios.delete(`${process.env.API}/user/logout`)

      await dispatch({ type: "LOGOUT" })
      window.localStorage.removeItem("token")
      setAuthToken(false)
      navigate("/app/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Context.Provider
      value={{
        user,
        dispatch,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  )
}
