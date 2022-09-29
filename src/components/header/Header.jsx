import React from 'react'
import './header.css'
import CTA from './CTA'
import Profile from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Oi, eu sou</h3>
        <h1>Márcio Reis</h1>
        <h2>Desenvolvedor Front-end</h2>
        <CTA />
        <HeaderSocials />
        <div className="profile">
          <img src={Profile} alt="Profile" />
        </div>
      </div>
    </header>
  )
}

export default Header