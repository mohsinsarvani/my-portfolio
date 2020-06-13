import React from "react"
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper"
import Me from "../components/Me/Me"
import Work from "../components/Work/Work"
import './index.css'

const index = props => {
  return (

    <div id index="index">
      <LayoutWrapper >
        <Me></Me>
        <Work></Work>

      </LayoutWrapper>
    </div>
  )
}

export default index
