import React from "react";
import { Helmet } from "react-helmet";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import Me from "../components/Me/Me";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Header from '../components/Header/Header'


const index = props => {
  return (

    <div>
      <LayoutWrapper >
        <div style={{ color: "green" }} >MEEEEEEEEEE</div>
        <div style={{ color: "red" }}>PROYECTTTTTT</div>
        <div style={{ color: "blue" }}>ONTACTTTTTTTTTTTTTTTT</div>
      </LayoutWrapper>
    </div>
  )
}

export default index
