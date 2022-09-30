import React from 'react'
import './portfolio.css'
import { BsGithub } from 'react-icons/bs'
import { BsEyeFill } from 'react-icons/bs'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.jpg'

function Portfolio() {
  return (
    
    <section id='portfolio'>
      <h5>Últimos trabalhos</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfólio imagem" />
          </div>
          <h3>Nome do projeto</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn'><BsGithub /> Github</a>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn btn-primary'><BsEyeFill /> Ver projeto</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG8} alt="Portfólio imagem" />
          </div>
          <h3>Nome do projeto</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn'><BsGithub /> Github</a>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn btn-primary'><BsEyeFill /> Ver projeto</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Portfólio imagem" />
          </div>
          <h3>Nome do projeto</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn'><BsGithub /> Github</a>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn btn-primary'><BsEyeFill /> Ver projeto</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG7} alt="Portfólio imagem" />
          </div>
          <h3>Nome do projeto</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn'><BsGithub /> Github</a>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn btn-primary'><BsEyeFill /> Ver projeto</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Portfólio imagem" />
          </div>
          <h3>Nome do projeto</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn'><BsGithub /> Github</a>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn btn-primary'><BsEyeFill /> Ver projeto</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="Portfólio imagem" />
          </div>
          <h3>Nome do projeto</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn'><BsGithub /> Github</a>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn btn-primary'><BsEyeFill /> Ver projeto</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Portfólio imagem" />
          </div>
          <h3>Nome do projeto</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn'><BsGithub /> Github</a>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn btn-primary'><BsEyeFill /> Ver projeto</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Portfólio imagem" />
          </div>
          <h3>Nome do projeto</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn'><BsGithub /> Github</a>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn btn-primary'><BsEyeFill /> Ver projeto</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG9} alt="Portfólio imagem" />
          </div>
          <h3>Nome do projeto</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn'><BsGithub /> Github</a>
            <a href="https://github.com/devmarcioreis" target="_blank" className='btn btn-primary'><BsEyeFill /> Ver projeto</a>
          </div>
        </article>
      </div>
    </section>

  )
}

export default Portfolio