import React from 'react'
import './Header.css'
import avatar from '../../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
      <img src={avatar} alt="" />
      </a>
      <strong>I am Strata</strong>, a super simple
        <br />
        responsive site template freebie
        <br />
        crafted by <a href="http://html5up.net">HTML5 UP</a>.
    </div>
  </header>
)

export default Header
