import { useState, useEffect } from "react"
import setAuthToken from "helpers/setAuthToken"

export default (user, dispatch) => {
  const [loading, setLoading] = useState(true)

  const fetchUser = async () => {
    try {
      const token = window.localStorage.getItem("token")
      if (token) {
        // TODO: verify the token
        // const { data } = await axios({
        //   method: 'GET',
        //   url: `${process.env.API}/user/verify`,
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'x-auth': token,
        //   },
        // })

        setAuthToken(`Bearer ${process.env.GATSBY_AIRTABLE_API_KEY}`)

        // TODO: Save the logged in user details
        await dispatch({ type: "SAVE_USER", payload: { username: "Smakosh" } })

        // TODO: Set the new generated token to localStorage
        // window.localStorage.setItem('token', token)
        setLoading(false)
      } else {
        setLoading(false)
      }
    } catch (err) {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!user.isLoggedIn) {
      fetchUser()
    }
  }, []) // eslint-disable-line

  return {
    loading,
    isLoggedIn: user.isLoggedIn,
  }
}
