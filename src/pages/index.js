import React from "react"
import LayoutWrapper from "../components/Containers/LayoutWrapper/LayoutWrapper"
import Me from "../components/Me/Me"
import Work from "../components/Work/Work"
import Contact from "../components/Contact/Contact"
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
