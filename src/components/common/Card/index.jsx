import React from "react";
import { StyledCard, Title, Description, Thumbnail } from "./styles";

export default ({ title, description, image }) => (
  <StyledCard>
    <Title>
      <h3>{title}</h3>
    </Title>
    <Description>
      <p>{description}</p>
    </Description>
    <Thumbnail>
      <img alt={title} src={image} />
    </Thumbnail>
  </StyledCard>
);
