import React from 'react'
import './Header.css'
import avatar from '../../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div>
      <a href="#">
      <img src={avatar} alt=""  className="avatar"/>
      </a>
      <h3>Hey There,I'm Ricki :)</h3>
    </div>
  </header>
)

export default Header
