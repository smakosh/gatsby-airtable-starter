import React, { useContext, useState } from "react"
import { navigate } from "gatsby"
import setAuthToken from "helpers/setAuthToken"
import Context from "components/common/Context"
import Container from "components/common/Container"
import SEO from "components/common/SEO"
import "unnamed"
import { Form } from "./styles"

export default () => {
  const { dispatch } = useContext(Context)
  const [isSubmitting, setSubmitting] = useState(false)
  const [details, setDetails] = useState({
    username: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  })

  const handleChange = e =>
    setDetails({ ...details, [e.target.name]: e.target.value })

  const handleBlur = e => {
    if (!e.target.value) {
      setErrors({ ...errors, [e.target.name]: "Required field" })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitting(true)
    const { username, password } = details

    if (!username || !password) {
      alert("Wrong credentials")
      setSubmitting(false)
    } else {
      // TODO: Send the data to the login endpoint
      // const { data } = await axios.post(
      //   `${process.env.API}/user/register`,
      //   {
      //     username,
      //     password
      //   }
      // );

      setAuthToken(`Bearer ${process.env.GATSBY_AIRTABLE_API_KEY}`)

      dispatch({ type: "SAVE_USER", payload: { username } })
      window.localStorage.setItem("token", "our dummy token")
      navigate("/app/")
      setSubmitting(false)
    }
  }

  return (
    <Container full>
      <SEO title="Login" />
      <Form onSubmit={handleSubmit}>
        <div className="input-field black-input">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Enter your username"
            name="username"
          />
          {errors.username && (
            <span style={{ color: "red" }}>{errors.username}</span>
          )}
        </div>
        <div className="input-field black-input">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>
        <div className="center-text">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-rounded gradient-green"
          >
            Login
          </button>
        </div>
      </Form>
    </Container>
  )
}
