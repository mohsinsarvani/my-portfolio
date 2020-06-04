import React from 'react'
import Helmet from 'react-helmet'
import LayoutWrapper from '../components/LayoutWrapper/LayoutWrapper'

const NotFoundPage = () => (
  <LayoutWrapper>
    <div id="main">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </LayoutWrapper>
)

export default NotFoundPage
