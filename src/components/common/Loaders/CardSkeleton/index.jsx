import React from "react";
import ContentLoader from "react-content-loader";

export default () => (
  <ContentLoader
    height={475}
    width={400}
    speed={1}
    primaryColor="#dedddf"
    secondaryColor="#ecebeb"
  >
    <rect x="5" y="15" rx="4" ry="4" width="100" height="13" />
    <rect x="7" y="39" rx="4" ry="4" width="50" height="8" />
    <rect x="6" y="58" rx="5" ry="5" width="400" height="400" />
  </ContentLoader>
);
