import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={253.5}
    height={301}
    viewBox="0 0 253.5 301"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="109" y="97" rx="0" ry="0" width="0" height="1" /> 
    <rect x="0" y="0" rx="12" ry="12" width="250" height="250" /> 
    <rect x="0" y="254" rx="12" ry="12" width="250" height="48" />
  </ContentLoader>
)

export default Skeleton