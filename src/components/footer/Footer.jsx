import React from 'react'
import './footer.css'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    
    <footer>
      <a href="https://devmarcioreis.github.io/Portfolio/" target="_blank" className='footer__logo'>M<span>:)</span>REISS</a>
      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiências</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#testimonials">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <div className="footer__socials">
        <a href="#"><AiOutlineLinkedin /> Linkedin</a>
        <a href="#"><FiGithub /> Github</a>
        <a href="#"><FiTwitter /> Twitter</a>
        <a href="#"><BsInstagram /> Instagram</a>
      </div>
      <div className="footer__copy">
        <small>&copy; 2022 - <a href="https://devmarcioreis.github.io/Portfolio/" target="_blank">M:)REISS</a> | Todos os direitos reservados.</small>
      </div>
    </footer>

  )
}

export default Footer