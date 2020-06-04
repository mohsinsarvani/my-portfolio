import React from 'react'

import avatar from '../../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Hi,I'm Ricki</strong>
      </h1>
    </div>
  </header>
)

export default Header
