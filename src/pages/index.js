import React from "react";
import { Helmet } from "react-helmet";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import Me from "../components/Me/Me";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const index = props => {
  return (

    <div>
      <LayoutWrapper >
        <Helmet>
          <title>Titulo</title>
          <meta name="description" />
        </Helmet>
        <section>
          <Me />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
      </LayoutWrapper>
    </div>
  )
}

export default index
