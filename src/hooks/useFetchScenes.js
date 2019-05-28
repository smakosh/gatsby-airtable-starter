import { useEffect, useState } from "react"
import axios from "axios"

export default () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [errors, setErrors] = useState(null)

  const fetchViews = async () => {
    try {
      const { data } = await axios.get(
        `https://api.airtable.com/v0/appCxaFkAnDYD1Wy4/Scenes?api_key=${
          process.env.AIRTABLE_API_KEY
        }`
      )
      setData(data.records)
      setLoading(false)
    } catch (err) {
      setErrors(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchViews()
  }, [])

  return [loading, data, errors]
}
