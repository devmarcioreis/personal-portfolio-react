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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, quam incidunt quisquam perspiciatis delectus at quibusdam eos maxime deleniti commodi aliquam rem illum molestias nesciunt, libero, cum consectetur fugit esse.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur id, nam debitis voluptatem cum itaque illo dignissimos labore quam omnis quidem doloremque vitae cumque architecto repellat adipisci sit distinctio. Fuga!</p>
          <a href="#contact" className='btn btn-primary'>Contate-me</a>
        </div>
      </div>
    </section>

  )
}

export default About