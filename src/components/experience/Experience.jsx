import React from 'react'
import './experience.css'
import { FaCheckCircle } from 'react-icons/fa'

const Experience = () => {
  return (
    
    <section id='experience'>
      <h5>Minhas habilidades</h5>
      <h2>Experiências</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desenvolvimento Front-end</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intemediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icons'/>
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icons'/>
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Desenvolvimento Back-end</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intemediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icons'/>
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icons'/>
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Experience