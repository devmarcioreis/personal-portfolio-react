import React from 'react'
import './about.css'
import ProfileImage from '../../assets/profile-image.png'
import { BsFillAwardFill } from 'react-icons/bs'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { VscNewFolder } from 'react-icons/vsc'

const About = () => {
  return (
    
    <section id='about'>
      <h5>Saiba mais</h5>
      <h2>Sobre mim</h2>
      <div className="container about__container">
        <div className="about__profile">
          <div className="about__profile-image">
            <img src={ProfileImage} alt="Profile Imagem" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsFillAwardFill className='about__icon' />
              <h5>Experiência</h5>
              <small>+2 Anos em desenvolvimento</small>
            </article>
            <article className='about__card'>
              <AiOutlineUsergroupAdd className='about__icon' />
              <h5>Clientes</h5>
              <small>+50 Clientes</small>
            </article>
            <article className='about__card'>
              <VscNewFolder className='about__icon' />
              <h5>Projetos</h5>
              <small>+70 Projetos</small>
            </article>
          </div>
          <p>Tenho paixão por tecnologia, e ela me faz ter vontade de trabalhar e estudar cada vez mais para solucionar os mais variados tipos de problemas na área de desenvolvimento.</p>
          <p>Seguir este caminho tem sido desafiador e me faz querer sempre o melhor para meus clientes. Dar uma solução inovadora para seus problemas e suas necessidades é o que me motiva, além de aprender, claro!</p>
          <p>Estou sempre estudando e aprendendo, e no momento estudo e trabalho com: HTML, CSS, JavaScript, React e Angular.</p>
          <a href="#contact" className='btn btn-primary'>Contate-me</a>
        </div>
      </div>
    </section>

  )
}

export default About