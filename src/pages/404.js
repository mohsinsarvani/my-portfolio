import React from "react"

import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <LayoutWrapper>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just higggt a route that doesn&#39;t exist... the sadness.</p>
  </LayoutWrapper>
)

export default NotFoundPage
