import React from "react"
import SceneForm from "components/common/SceneForm"
import { StyledCard, Title, Description, Thumbnail } from "./styles"

export default ({
  title,
  description,
  image,
  edit,
  setEdit,
  SceneId,
  deleteScene,
}) => (
  <StyledCard>
    {edit ? (
      <SceneForm
        setEdit={setEdit}
        title={title}
        description={description}
        image={image}
        SceneId={SceneId}
      />
    ) : (
      <>
        <Title>
          <h3>{title}</h3>
        </Title>
        <Description>
          <p>{description}</p>
        </Description>
        <Thumbnail>
          <img alt={title} src={image} />
        </Thumbnail>
        {setEdit && (
          <Title>
            <button
              className="btn btn-primary gradient-orange"
              type="button"
              onClick={() => setEdit(!edit)}
            >
              Edit
            </button>
            <button
              className="btn btn-primary gradient-black"
              type="button"
              onClick={deleteScene}
            >
              Delete
            </button>
          </Title>
        )}
      </>
    )}
  </StyledCard>
)
