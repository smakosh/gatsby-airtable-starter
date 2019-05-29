import React, { useState } from "react"
import axios from "axios"
import { navigate } from "gatsby"
import "unnamed"
import { Form } from "./styles"

export default ({ setEdit, title, description, image, SceneId }) => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [details, setDetails] = useState({
    Name: title || "",
    Location: description || "",
    url: image || "",
  })
  const [errors, setErrors] = useState({
    Name: "",
    Location: "",
    url: "",
  })

  const handleChange = e =>
    setDetails({ ...details, [e.target.name]: e.target.value })

  const handleBlur = e => {
    if (!e.target.value) {
      setErrors({ ...errors, [e.target.name]: "Required field" })
    } else {
      setErrors({ ...errors, [e.target.name]: "" })
    }
  }

  const handleSubmit = async e => {
    try {
      e.preventDefault()
      setSubmitting(true)
      const { Name, Location, url } = details

      if (!Name || !Location || !url) {
        alert("All fields are required")
        setSubmitting(false)
      } else {
        if (SceneId) {
          await axios.put(
            `https://api.airtable.com/v0/appCxaFkAnDYD1Wy4/Scenes/${SceneId}`,
            {
              fields: {
                Name,
                Location,
                Attachments: [{ url }],
              },
            }
          )
          setEdit(false)
        } else {
          await axios.post(
            `https://api.airtable.com/v0/appCxaFkAnDYD1Wy4/Scenes`,
            {
              fields: {
                Name,
                Location,
                Attachments: [{ url }],
              },
            }
          )
        }

        navigate("/app/")
        setSubmitting(false)
      }
    } catch (err) {
      console.log(err)
      setSubmitting(false)
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <div className="input-field black-input">
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          value={details.Name}
          placeholder="Scene name"
          name="Name"
        />
        {errors.Name && <span style={{ color: "red" }}>{errors.Name}</span>}
      </div>
      <div className="input-field black-input">
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          value={details.Location}
          placeholder="Scene location"
          name="Location"
        />
        {errors.Location && (
          <span style={{ color: "red" }}>{errors.Location}</span>
        )}
      </div>
      <div className="input-field black-input">
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          type="url"
          value={details.url}
          placeholder="Scene thumbnail url"
          name="url"
        />
        {errors.url && <span style={{ color: "red" }}>{errors.url}</span>}
      </div>
      <div className="center-text">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-rounded gradient-green"
        >
          Submit
        </button>
      </div>
    </Form>
  )
}
