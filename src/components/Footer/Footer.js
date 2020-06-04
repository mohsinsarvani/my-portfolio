import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/ricki_me" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="www.linkedin.com/in/ricardo-josé-vargas-leslie-235747143" className="fa fa-linkedin">
            <span className="label">Linkedin</span>
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/4814583/ricki" className="fa-stack-overflow">
            <span className="label">Stack Overflow</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/RicardoVargasLeslie" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>

        <li>
          <a href="#" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Ricardo Vargas</li>
      </ul>
    </div>
  </div>
)

export default Footer
