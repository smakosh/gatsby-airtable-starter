import React, { useState } from "react"
import { navigate } from "gatsby"
import axios from "axios"
import useFetchSceneById from "hooks/useFetchSceneById"
import SEO from "components/common/SEO"
import Container from "components/common/Container"
import Card from "components/common/Card"
import CardSkeleton from "components/common/Loaders/CardSkeleton"
import { Wrapper, CardScene } from "./styles"

export default ({ id }) => {
  const [loading, data, errors] = useFetchSceneById(id)
  const [edit, setEdit] = useState(false)

  if (errors) {
    console.log(errors)
    return <p>Something went wrong</p>
  }

  const deleteScene = async () => {
    try {
      await axios.delete(
        `https://api.airtable.com/v0/appCxaFkAnDYD1Wy4/Scenes/${id}`
      )
      navigate("/app/")
    } catch (err) {
      alert("Something went wrong")
    }
  }

  return (
    <Wrapper as={Container}>
      <SEO title={loading ? "Loading..." : data.fields.Name} />
      {loading ? (
        <>
          <CardScene>
            <CardSkeleton />
          </CardScene>
        </>
      ) : (
        <>
          <h2>{data.fields.Name}</h2>
          <CardScene>
            <Card
              title={data.fields.Name}
              description={data.fields.Location}
              setEdit={setEdit}
              edit={edit}
              SceneId={id}
              image={
                data.fields.Attachments[0].thumbnails
                  ? data.fields.Attachments[0].thumbnails.large.url
                  : "https://via.placeholder.com/500x500"
              }
              deleteScene={deleteScene}
            />
          </CardScene>
        </>
      )}
    </Wrapper>
  )
}
