import React from "react";
import { Helmet } from "react-helmet";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import Me from "../components/Me/Me";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Header from '../components/Header/Header'
import Code from '../components/Code/Code'


const index = props => {
  return (

    <div>
      <LayoutWrapper >

        <Code></Code>
        <Me></Me>

      </LayoutWrapper>
    </div>
  )
}

export default index
