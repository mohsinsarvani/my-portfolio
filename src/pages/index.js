import React from 'react'
import Helmet from 'react-helmet'
import LayoutWrapper from '../components/LayoutWrapper/LayoutWrapper'

const HomeIndex = () => {
  const siteTitle = 'My Portfolio- Ricki'
  const siteDescription = 'Site description'

  return (
    <div>
      <LayoutWrapper >
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        <div id="main">
          <section id="one">
            <header className="major">
              <h2>

              </h2>
            </header>
            <p>
              <strong>
                Just in case you don't understand, don't worry
                I will explain, I build software basically I give a series of instructions
                to a machine to perform a task such as you may be seeing this message on the screen
                cool don't you think soo? :)
          </strong>
            </p>
            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Learn More
              </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
              </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
              magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
              vulputate lorem neque lorem ipsum dolor.
          </p>
          </section>
        </div>
      </LayoutWrapper  >
    </div>
  )
}

export default HomeIndex
