import React from 'react'
import './Header.css'
import avatar from '../../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#">
      <img src={avatar} alt="" />
      </a>
      <strong>I am Strata</strong>, a super simple
    </div>
  </header>
)

export default Header
